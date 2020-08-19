import pypascalpartutils as utils

import os, json
from json import JSONEncoder
import numpy

class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, numpy.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

for f in os.listdir('./annotations'): 
    ann = utils.load_annotations(os.path.join('./annotations', f))
    with open(f'./json_anno/{f}', 'w') as o: 
        o.write(json.dumps(ann, cls=NumpyArrayEncoder))
