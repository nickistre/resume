resume-angularJS-bootstrap
==========================

This project was to try out AngularJS and Bootstrap to create a printable resume webpage from data stored in the data.json file.

Designed and printing tested in Kubuntu 14.04 using Firefox 30 and Chromium 34. Generally, I use Firefox to export the page to PDF.

Issues:

* Chromium does not honor the table-header-group and table-row-group display options, so the section headers do not repeat on pagination on print.
* Header does not repeat on each page on print. Seems to be a conflict with the pagination going on in each section. 
* Likely, if data for a section is not available (I.E., Awards), the title will still show without anything in it.

TODO:

* General cleanup of the code and CSS styles.
* Add different styles and create a way to change between them.
* Setup code and data to allow customizations of the resume based on industry/company being sent to.
* Learn how to organize the code in a more AngularJS "way", I.E., see about separating views and controllers and have them dynamically load in based on the json data.
