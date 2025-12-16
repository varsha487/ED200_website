import sys
import os

# Ensure backend folder is in sys.path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "backend"))

from app import create_app

app = create_app()