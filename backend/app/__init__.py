import os
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(
        __name__,
        static_folder="../frontend/build",  # path to React build
        static_url_path="/"
    )
    app.config.from_object("app.config.Config")

    CORS(app)
    db.init_app(app)

    # Register API routes
    from app.routes import main
    app.register_blueprint(main, url_prefix="/api")  # prefix your API routes

    # Serve React app for all other routes
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_react(path):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, "index.html")

    return app
