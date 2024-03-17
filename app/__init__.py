from flask import Flask
from app.blueprints.main.routes import main_bp

def create_app():

	# App creation	
	app = Flask(__name__)

	# Register Blueprints if needed
	app.register_blueprint(main_bp)
	
	# Return app
	return app