from flask import Flask, render_template, request, url_for, redirect, jsonify
app = Flask(__name__)

def get_sellers(of_type):
    import urllib.request, json 
    with urllib.request.urlopen("https://openx.com/sellers.json") as url:
        data = json.loads(url.read().decode())
        sellers = [x for x in data['sellers'] if x['seller_type']==of_type]
        stacked_sellers = []
        amount = len(sellers)
        sellers = sorted(sellers, key=lambda d: d['name']) 
        last = {'seller_ids': 0, 'name': "", 'domain': "", 'seller_type': "", 'is_passthrough': 0}
        for seller in sellers:
            if last['name'] == seller['name'] and last['domain'] == seller['domain'] and last['is_passthrough'] == seller['is_passthrough']:
                for i in stacked_sellers:
                    if i['name'] == seller['name']:
                        i['seller_ids'].append(seller['seller_id'])
            else:
                seller_ids = []
                seller_ids.append(seller['seller_id'])
                item = {'seller_ids': seller_ids, 'name': seller['name'], 'domain': seller['domain'], 'seller_type': seller['seller_type'], 'is_passthrough': seller['is_passthrough']}
                stacked_sellers.append(item)
            last = seller

    return jsonify(amount=amount, sellers=stacked_sellers)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/direct_sellers")
def direct_sellers():
    return render_template("direct.html")

@app.route("/indirect_sellers")
def indirect_sellers():
    return render_template("indirect.html")

@app.route("/both_sellers")
def both_sellers():
    return render_template("both.html")

@app.route("/get_publishers", methods=["GET"])
def get_publishers():
    return get_sellers("PUBLISHER")

@app.route("/get_intermediaries", methods=["GET"])
def get_intermediaries():
    return get_sellers("INTERMEDIARY")

@app.route("/get_both", methods=["GET"])
def get_both():
    return get_sellers("BOTH")