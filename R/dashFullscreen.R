# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashFullscreen <- function(children=NULL, id=NULL, style=NULL) {
    
    props <- list(children=children, id=id, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashFullscreen',
        namespace = 'dash_fullscreen',
        propNames = c('children', 'id', 'style'),
        package = 'dashFullscreen'
        )

    structure(component, class = c('dash_component', 'list'))
}
