(function(window, document) {
    var TYPE_LABELS = {
        article: 'Articulos',
        inproceedings: 'Conferencias',
        conference: 'Conferencias',
        book: 'Libros',
        inbook: 'Capitulos',
        techreport: 'Reportes tecnicos',
        misc: 'Otros',
        manual: 'Manuales',
        mastersthesis: 'Tesis',
        phdthesis: 'Tesis doctorales',
        proceedings: 'Actas',
        incollection: 'Colecciones',
        unpublished: 'Sin publicar'
    };

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function normalizeText(value) {
        return String(value || '')
            .replace(/\\url\{([^}]*)\}/g, '$1')
            .replace(/\{\\aa\}/g, 'a')
            .replace(/\\aa\{\}/g, 'a')
            .replace(/\\"\{a\}/g, 'a')
            .replace(/\\"\{o\}/g, 'o')
            .replace(/\\"a/g, 'a')
            .replace(/\\"o/g, 'o')
            .replace(/\\"u/g, 'u')
            .replace(/\\'\{e\}/g, 'e')
            .replace(/\\'e/g, 'e')
            .replace(/\\'a/g, 'a')
            .replace(/\\'A/g, 'A')
            .replace(/\\&/g, '&')
            .replace(/\\_/g, '_')
            .replace(/\\ss\{\}/g, 'ss')
            .replace(/\{/g, '')
            .replace(/\}/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getTypeLabel(entryType) {
        if (TYPE_LABELS[entryType]) {
            return TYPE_LABELS[entryType];
        }

        return entryType || 'Otros';
    }

    function getEntries() {
        if (!window.REFERENCES_DATA || !window.REFERENCES_DATA.length) {
            return [];
        }

        return window.REFERENCES_DATA.slice().sort(function(entryA, entryB) {
            var yearA = parseInt(entryA.year, 10);
            var yearB = parseInt(entryB.year, 10);
            var titleA = normalizeText(entryA.title || '');
            var titleB = normalizeText(entryB.title || '');

            if (!isNaN(yearA) && !isNaN(yearB) && yearA !== yearB) {
                return yearB - yearA;
            }

            return titleA.localeCompare(titleB);
        });
    }

    function formatAuthors(people) {
        if (!people || !people.length) {
            return '';
        }

        return people.map(function(person) {
            var parts = [];

            if (person.last) {
                parts.push(person.last);
            }
            if (person.first) {
                parts.push(person.first);
            }

            return normalizeText(parts.join(', '));
        }).join('; ');
    }

    function formatSource(entry) {
        var parts = [];
        var source = entry.journal || entry.booktitle || entry.publisher || entry.institution || entry.school || '';
        var volume = normalizeText(entry.volume || '');
        var number = normalizeText(entry.number || '');
        var pages = normalizeText(entry.pages || '');

        if (source) {
            parts.push(normalizeText(source));
        }
        if (volume) {
            parts.push(number ? 'Vol. ' + volume + ' (' + number + ')' : 'Vol. ' + volume);
        } else if (number) {
            parts.push('No. ' + number);
        }
        if (pages) {
            parts.push('pp. ' + pages);
        }

        return parts.join('. ');
    }

    function buildSearchText(entry) {
        return [
            entry.year,
            getTypeLabel((entry.entryType || 'misc').toLowerCase()),
            normalizeText(entry.title || ''),
            formatAuthors(entry.author || entry.editor),
            formatSource(entry),
            normalizeText(entry.note || ''),
            normalizeText(entry.doi || ''),
            normalizeText(entry.url || '')
        ].join(' ').toLowerCase();
    }

    function buildReferenceDetails(entry) {
        var html = '';
        var authors = formatAuthors(entry.author || entry.editor);
        var title = normalizeText(entry.title || 'Sin titulo');
        var source = formatSource(entry);
        var note = normalizeText(entry.note || '');
        var doi = normalizeText(entry.doi || '');
        var url = normalizeText(entry.url || '');
        var links = [];

        if (authors) {
            html += '<div class="references-item-authors">' + escapeHtml(authors) + '</div>';
        }

        html += '<div class="references-item-title">' + escapeHtml(title) + '</div>';

        if (source) {
            html += '<div class="references-item-source">' + escapeHtml(source) + '</div>';
        }

        if (note) {
            html += '<div class="references-item-note">' + escapeHtml(note) + '</div>';
        }

        if (doi) {
            if (doi.indexOf('http') === 0) {
                links.push('<a target="_blank" rel="noopener noreferrer" href="' + escapeHtml(doi) + '">DOI</a>');
            } else {
                links.push('<span>DOI: ' + escapeHtml(doi) + '</span>');
            }
        }

        if (url) {
            links.push('<a target="_blank" rel="noopener noreferrer" href="' + escapeHtml(url) + '">Enlace</a>');
        }

        if (links.length) {
            html += '<div class="references-item-links">' + links.join(' <span class="references-link-separator">|</span> ') + '</div>';
        }

        return html;
    }

    function buildReferenceList(entries) {
        var items = '';
        var i;
        var entry;
        var type;
        var year;

        for (i = 0; i < entries.length; i++) {
            entry = entries[i];
            type = (entry.entryType || 'misc').toLowerCase();
            year = normalizeText(entry.year || 's/f');

            items += '<li class="references-card" data-reference-row data-search="' + escapeHtml(buildSearchText(entry)) + '">' +
                '<div class="references-card-meta">' +
                    '<div class="references-card-year">' + escapeHtml(year) + '</div>' +
                    '<div class="references-card-type"><span class="references-type-chip"><span class="references-type-dot pub ' + type + '"></span>' + escapeHtml(getTypeLabel(type)) + '</span></div>' +
                '</div>' +
                '<div class="references-card-body">' +
                    buildReferenceDetails(entry) +
                '</div>' +
            '</li>';
        }

        return '<ol class="references-list">' + items + '</ol>';
    }

    function buildSummary(entries) {
        var counts = {};
        var types = [];
        var html = '<div class="references-pill references-pill-total"><span class="references-pill-label">Total</span><strong class="references-pill-count">' + entries.length + '</strong></div>';
        var i;
        var type;

        for (i = 0; i < entries.length; i++) {
            type = (entries[i].entryType || 'misc').toLowerCase();
            if (!counts[type]) {
                counts[type] = 0;
                types.push(type);
            }
            counts[type] += 1;
        }

        types.sort(function(typeA, typeB) {
            if (counts[typeA] !== counts[typeB]) {
                return counts[typeB] - counts[typeA];
            }

            return getTypeLabel(typeA).localeCompare(getTypeLabel(typeB));
        });

        for (i = 0; i < types.length; i++) {
            type = types[i];
            html += '<div class="references-pill">' +
                '<span class="references-type-dot pub ' + type + '"></span>' +
                '<span class="references-pill-label">' + escapeHtml(getTypeLabel(type)) + '</span>' +
                '<strong class="references-pill-count">' + counts[type] + '</strong>' +
                '</div>';
        }

        return html;
    }

    function buildTable(entries) {
        return '<div class="references-page">' +
            '<div class="references-summary" id="references-summary">' + buildSummary(entries) + '</div>' +
            '<div class="references-controls">' +
                '<label class="references-search-label" for="references-search">Buscar</label>' +
                '<input id="references-search" class="references-search-input" type="search" placeholder="Titulo, autor, tipo, DOI...">' +
                '<div id="references-status" class="references-status">Mostrando ' + entries.length + ' referencias</div>' +
            '</div>' +
            '<div class="references-list-wrap">' + buildReferenceList(entries) + '</div>' +
            '<div id="references-empty" class="references-empty" style="display:none;">No se encontraron referencias para esa busqueda.</div>' +
        '</div>';
    }

    function attachSearch(root, total) {
        var input = root.querySelector('#references-search');
        var status = root.querySelector('#references-status');
        var empty = root.querySelector('#references-empty');
        var rows = root.querySelectorAll('[data-reference-row]');

        if (!input) {
            return;
        }

        input.addEventListener('input', function() {
            var query = input.value.toLowerCase().trim();
            var visible = 0;
            var i;
            var row;
            var matches;

            for (i = 0; i < rows.length; i++) {
                row = rows[i];
                matches = row.getAttribute('data-search').indexOf(query) !== -1;
                row.style.display = matches ? '' : 'none';

                if (matches) {
                    visible += 1;
                }
            }

            status.textContent = query ? 'Mostrando ' + visible + ' de ' + total + ' referencias' : 'Mostrando ' + total + ' referencias';
            empty.style.display = visible ? 'none' : 'block';
        });
    }

    function renderReferencesPage() {
        var root = document.getElementById('references-root');
        var entries;

        try {
            if (!root) {
                return false;
            }

            root.innerHTML = '<div class="references-loading">Inicializando referencias...</div>';
            entries = getEntries();

            if (!entries.length) {
                root.innerHTML = '<div class="references-empty">No se encontraron referencias cargadas.</div>';
                return true;
            }

            root.innerHTML = buildTable(entries);
            attachSearch(root, entries.length);
            return true;
        } catch (error) {
            if (root) {
                root.innerHTML = '<div class="references-empty"><strong>Error al renderizar referencias:</strong> ' +
                    escapeHtml(error && error.message ? error.message : String(error)) + '</div>';
            }

            if (window.console && window.console.error) {
                window.console.error('Error al renderizar referencias', error);
            }

            return true;
        }
    }

    window.renderReferencesPage = renderReferencesPage;
})(window, document);
