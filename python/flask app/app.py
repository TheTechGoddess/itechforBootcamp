from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/about')
@app.route('/contact')
def index():
	return '<h1>This is my medical blog</h1>'



if __name__ == '__main__':
	app.run()