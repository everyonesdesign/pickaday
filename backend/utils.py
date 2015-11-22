from flask import Response
import json

def respond_with_json(object):
	return Response(json.dumps(object),  mimetype='application/json')