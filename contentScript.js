
var sidebar = document.getElementsByClassName( 'sidebar' )[0];

var previewContainer = document.createElement( 'div' );
previewContainer.setAttribute( 'class', 'mardown-body' );
previewContainer.setAttribute( 'id', 'livemardown-extension-preview' );

sidebar.insertBefore( previewContainer, sidebar.firstChild );

LiveMarkDown.bind({
    srcElementID: 'issue_body',
    targetElementID: 'livemardown-extension-preview'
});