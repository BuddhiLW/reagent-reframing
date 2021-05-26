
shadow.cljs.devtools.client.env.module_loaded('app');

try { reframe_testing.core.init(); } catch (e) { console.error("An error occurred when calling (reframe-testing.core/init)"); throw(e); }