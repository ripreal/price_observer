"""
high level support for doing this and that.
"""
from amazon.api import AmazonAPI

AMAZON_ACCESS_KEY = 'AKIAJSIIUF44Y56ALTQQ'
AMAZON_SECRET_KEY = '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'
AMAZON_ASSOC_TAG = 'ripreal-20'

def test():
    amazon = AmazonAPI(AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_ASSOC_TAG)
    products = amazon.search(Keywords='gacharic spin', SearchIndex='All')

    for i, product in enumerate(products):
        print(i + product)

