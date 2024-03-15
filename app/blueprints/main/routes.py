from flask import Blueprint, render_template

main_bp = Blueprint(__name__, 'main_bp', template_folder='templates')


@main_bp.route('/')
def index():
  return render_template('main/index.html')
