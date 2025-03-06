import os
import subprocess
import time
import webbrowser

# Define the starting port
START_PORT = 3000

# Full path to npm.cmd (adjust if necessary)
NPM_PATH = r"C:\Program Files\nodejs\npm.cmd"  # Change this if needed

def read_projects(file_path):
    """Read project paths from a text file."""
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' not found.")
        return []
    
    with open(file_path, 'r') as f:
        return [line.strip() for line in f.readlines() if line.strip()]

def start_react_project(path, port):
    """Start a React project on a specific port and open it in the browser."""
    if not os.path.isdir(path):
        print(f"Skipping: {path} (Not a valid directory)")
        return

    env = os.environ.copy()
    env["PORT"] = str(port)  # Set the PORT environment variable
    env["BROWSER"] = "none"  # Prevent auto-opening by npm

    print(f"Starting React project at {path} on port {port}...")

    try:
        subprocess.Popen([NPM_PATH, "start"], cwd=path, env=env, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        # Wait a few seconds before opening the browser
        time.sleep(5)  
        
        # Open the React app in the default web browser
        webbrowser.open(f"http://localhost:{port}")
    except FileNotFoundError as e:
        print(f"Error: {e}")
        print("Ensure that Node.js and npm are installed, and that the NPM_PATH is correct.")

if __name__ == "__main__":
    project_file = "projects.txt"  # Text file containing project paths
    projects = read_projects(project_file)

    if not projects:
        print("No projects found. Exiting...")
    else:
        for i, project in enumerate(projects):
            port = START_PORT + i  # Assign incremental ports
            start_react_project(project, port)
        
        print("All projects are starting...")
