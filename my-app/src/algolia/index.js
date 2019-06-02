//import algoliasearch from 'algoliasearch'

const client = algoliasearch('52PGOYI45D', '0d68dce20892ae8334244798cc63a2e6');
const index = client.initIndex('contacts');

// only query string
index.search({
  query: 'pasta',
  attributesToRetrieve: ['name'],
    hitsPerPage: 50,
  },
  
  (err, { hits } = {}) => {
    if (err) throw err;

    console.log(hits);
  }
);