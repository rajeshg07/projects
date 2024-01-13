document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const pdfViewer = document.getElementById("pdf-viewer");

    projectList.addEventListener("click", function (event) {
        event.preventDefault();

        const target = event.target;
        if (target.tagName === "A") {
            const pdfFile = target.getAttribute("data-pdf");
            loadPDF(pdfFile);
        }
    });

    function loadPDF(pdfFile) {
        pdfViewer.src = pdfFile;
    }
});
