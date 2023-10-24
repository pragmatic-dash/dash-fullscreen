import dash_fullscreen
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div(
    [
        dash_fullscreen.DashFullscreen(
            html.Div(
                "Hello World",
                style={
                    "height": "100%",
                    "width": "100%",
                    "backgroundColor": "red",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "color": "white",
                },
                id="fullscreen-content",
            ),
            style={"height": "200px", "width": "200px", "backgroundColor": "blue"},
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
