(function(window, document) {
    function getMainContainer() {
        return document.querySelector(".main-container");
    }

    function getChapterNumber(pageKey) {
        var chapterMap = {
            estado_del_arte: "4",
            analisis_datos: "5",
            modelos: "6",
            experimentacion: "7",
            anexos: "8"
        };

        return chapterMap[pageKey] || "";
    }

    function normalizeCaption(figcaption, tableNumber) {
        var baseCaption = figcaption.getAttribute("data-base-caption");

        if (!baseCaption) {
            baseCaption = figcaption.textContent.trim();
            figcaption.setAttribute("data-base-caption", baseCaption);
        }

        figcaption.textContent = "Tabla " + tableNumber + ": " + baseCaption;
    }

    function normalizeFigureCaption(captionNode, figureNumber) {
        var baseCaption = captionNode.getAttribute("data-base-caption");
        var emphasizedNode = captionNode.querySelector("em");

        if (!baseCaption) {
            baseCaption = captionNode.textContent.trim().replace(/^Figura:\s*/i, "");
            captionNode.setAttribute("data-base-caption", baseCaption);
        }

        captionNode.classList.add("figure-caption");

        if (emphasizedNode) {
            emphasizedNode.textContent = "Figura " + figureNumber + ": " + baseCaption;
        } else {
            captionNode.textContent = "Figura " + figureNumber + ": " + baseCaption;
        }
    }

    function normalizeHeading(heading, headingNumber) {
        var baseHtml = heading.getAttribute("data-base-html");

        if (!baseHtml) {
            baseHtml = heading.innerHTML.trim();
            heading.setAttribute("data-base-html", baseHtml);
        }

        heading.setAttribute("data-section-number", headingNumber);
        heading.innerHTML = '<span class="heading-number">' + headingNumber + '</span> ' + baseHtml;
    }

    function numberHeadings(container) {
        var pageKey = container.getAttribute("data-page-key") || "";
        var chapterNumber = getChapterNumber(pageKey);
        var headings = container.querySelectorAll("h2, h3, h4");
        var counters = {
            h2: 0,
            h3: 0,
            h4: 0
        };

        Array.prototype.forEach.call(headings, function(heading) {
            var tagName = heading.tagName.toLowerCase();
            var headingNumber = "";

            if (tagName === "h2") {
                counters.h2 += 1;
                counters.h3 = 0;
                counters.h4 = 0;
                headingNumber = chapterNumber ? (chapterNumber + "." + counters.h2) : String(counters.h2);
            } else if (tagName === "h3") {
                counters.h3 += 1;
                counters.h4 = 0;
                headingNumber = chapterNumber
                    ? (chapterNumber + "." + counters.h2 + "." + counters.h3)
                    : (counters.h2 + "." + counters.h3);
            } else if (tagName === "h4") {
                counters.h4 += 1;
                headingNumber = chapterNumber
                    ? (chapterNumber + "." + counters.h2 + "." + counters.h3 + "." + counters.h4)
                    : (counters.h2 + "." + counters.h3 + "." + counters.h4);
            }

            if (headingNumber) {
                normalizeHeading(heading, headingNumber);
            }
        });
    }

    function numberTables(container) {
        var pageKey = container.getAttribute("data-page-key") || "";
        var chapterNumber = getChapterNumber(pageKey);
        var walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_ELEMENT,
            null
        );
        var currentNode = walker.currentNode;
        var currentSectionNumber = chapterNumber || "";
        var sectionTableCounters = {};
        var fallbackCounter = 0;

        while (currentNode) {
            var tagName = currentNode.tagName ? currentNode.tagName.toLowerCase() : "";

            if (tagName === "h2" || tagName === "h3" || tagName === "h4") {
                currentSectionNumber = currentNode.getAttribute("data-section-number") || currentSectionNumber;
            }

            if (tagName === "figure" && currentNode.classList.contains("thesis-table")) {
                var figcaption = currentNode.querySelector("figcaption");
                var tablePrefix = currentSectionNumber || chapterNumber || "";
                var tableNumber = "";

                if (tablePrefix) {
                    sectionTableCounters[tablePrefix] = (sectionTableCounters[tablePrefix] || 0) + 1;
                    tableNumber = tablePrefix + "." + sectionTableCounters[tablePrefix];
                } else {
                    fallbackCounter += 1;
                    tableNumber = String(fallbackCounter);
                }

                currentNode.setAttribute("data-table-number", tableNumber);

                if (figcaption) {
                    normalizeCaption(figcaption, tableNumber);
                }
            }

            currentNode = walker.nextNode();
        }
    }

    function numberFigureCaptions(container) {
        var pageKey = container.getAttribute("data-page-key") || "";
        var chapterNumber = getChapterNumber(pageKey);
        var walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_ELEMENT,
            null
        );
        var currentNode = walker.currentNode;
        var currentSectionNumber = chapterNumber || "";
        var sectionFigureCounters = {};
        var fallbackCounter = 0;

        while (currentNode) {
            var tagName = currentNode.tagName ? currentNode.tagName.toLowerCase() : "";

            if (tagName === "h2" || tagName === "h3" || tagName === "h4") {
                currentSectionNumber = currentNode.getAttribute("data-section-number") || currentSectionNumber;
            }

            if (tagName === "p") {
                var captionText = currentNode.textContent ? currentNode.textContent.trim() : "";

                if (/^Figura:\s*/i.test(captionText)) {
                    var figurePrefix = currentSectionNumber || chapterNumber || "";
                    var figureNumber = "";

                    if (figurePrefix) {
                        sectionFigureCounters[figurePrefix] = (sectionFigureCounters[figurePrefix] || 0) + 1;
                        figureNumber = figurePrefix + "." + sectionFigureCounters[figurePrefix];
                    } else {
                        fallbackCounter += 1;
                        figureNumber = String(fallbackCounter);
                    }

                    currentNode.setAttribute("data-figure-number", figureNumber);
                    normalizeFigureCaption(currentNode, figureNumber);
                }
            }

            currentNode = walker.nextNode();
        }
    }

    function linkTableReferences(container) {
        var references = container.querySelectorAll("[data-table-ref]");

        Array.prototype.forEach.call(references, function(referenceNode) {
            var targetId = referenceNode.getAttribute("data-table-ref");
            var target = targetId ? document.getElementById(targetId) : null;
            var tableNumber = target ? target.getAttribute("data-table-number") : "";
            var label = tableNumber ? ("Tabla " + tableNumber) : "Tabla";

            if (referenceNode.tagName === "A") {
                referenceNode.textContent = label;

                if (targetId) {
                    referenceNode.setAttribute("href", "#" + targetId);
                }

                return;
            }

            if (targetId) {
                referenceNode.innerHTML = '<a href="#' + targetId + '">' + label + "</a>";
            } else {
                referenceNode.textContent = label;
            }
        });
    }

    window.enhanceStructuredContent = function() {
        var container = getMainContainer();

        if (!container) {
            return;
        }

        numberHeadings(container);
        numberFigureCaptions(container);
        numberTables(container);
        linkTableReferences(container);
    };
})(window, document);
