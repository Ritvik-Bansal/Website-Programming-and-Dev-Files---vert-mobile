document.addEventListener('DOMContentLoaded', function () {
    var headerContent = `
        <!-- header.html content goes here -->
        <header class="small-header">
            <div class="header-content">

            </div>
            <a href="apply.html" class="apply-button">Apply</a>
            <nav>
                <a href="job-openings.html">Home</a>
                <a href="index.html">Jobs</a>
                <a href="sections.html" class="cta-button">-</a>
               
            </nav>
            
        </header>
    `;

    // Insert the header content into the header-container div
    document.getElementById('header-container').innerHTML = headerContent;
});
