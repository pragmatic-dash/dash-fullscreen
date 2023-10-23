import dash_fullscreen
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_fullscreen.DashFullscreen(
            html.Div(
                "sss",
                style={"height": "100%", "width": "100%"},
                id="fullscreen-content",
            ),
            style={"height": "200px", "width": "200px", "backgroundColor": "blue"},
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
