// Probe: connect @pezkuwi/api to the dev node and report why it does not become ready.
import { ApiPromise, WsProvider } from '@pezkuwi/api';

const provider = new WsProvider('ws://127.0.0.1:30333');
const timer = setTimeout(() => { console.log('PROBE: not ready after 60s'); process.exit(2); }, 60_000);

for (const ext of [undefined, { AuthorizeCall: { extrinsic: {}, payload: {} } }]) {
  console.log(`PROBE: create with signedExtensions=${ext ? 'AuthorizeCall' : 'none'}`);
  try {
    const api = await ApiPromise.create({ provider, signedExtensions: ext, throwOnConnect: true, throwOnUnknown: true });
    console.log('PROBE: ready', api.runtimeVersion.specName.toString(), api.runtimeVersion.specVersion.toString());
    console.log('PROBE: extensions', api.registry.signedExtensions.join(','));
    console.log('PROBE: has bounties', !!api.tx.bounties, 'metadata v', api.runtimeMetadata.version);
  } catch (e) {
    console.log('PROBE: error', e?.stack || e);
  }
}
clearTimeout(timer);
process.exit(0);
