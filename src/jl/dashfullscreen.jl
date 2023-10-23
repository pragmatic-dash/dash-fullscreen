# AUTO GENERATED FILE - DO NOT EDIT

export dashfullscreen

"""
    dashfullscreen(;kwargs...)
    dashfullscreen(children::Any;kwargs...)
    dashfullscreen(children_maker::Function;kwargs...)


A DashFullscreen component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number | Array; optional)
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `style` (Dict; optional)
"""
function dashfullscreen(; kwargs...)
        available_props = Symbol[:children, :id, :style]
        wild_props = Symbol[]
        return Component("dashfullscreen", "DashFullscreen", "dash_fullscreen", available_props, wild_props; kwargs...)
end

dashfullscreen(children::Any; kwargs...) = dashfullscreen(;kwargs..., children = children)
dashfullscreen(children_maker::Function; kwargs...) = dashfullscreen(children_maker(); kwargs...)

