import { contexts, resolvedContexts } from '../__fixtures__';

const cborld = require('@digitalbazaar/cborld');

it('can use cborld documentLoader', async () => {
  const result = await cborld.documentLoader(contexts.activitystreams);
  expect(result.toString()).toEqual(resolvedContexts.activitystreams.document);
});
