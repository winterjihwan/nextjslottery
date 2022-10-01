(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663,992,558],{54877:function(e,r,t){"use strict";t.r(r),t.d(r,{PhantomInjectedProvider:function(){return j},SlopeInjectedProxyProvider:function(){return A},SolanaPrivateKeyProvider:function(){return D},SolanaWallet:function(){return Z},SolflareInjectedProvider:function(){return I},SolletInjectedProvider:function(){return K},TorusInjectedProvider:function(){return M}});var a=t(4942),n=t(22782),s=t(95844),i=t(16843),o=t(68531),c=t(77191),d=t.n(c),l=t(79826),u=t(59917),h=t(50108),p=t.n(h),g=t(48764).Buffer;function m(e){var r,t;let{chainId:a}=e;return(0,s.UZ)([(e,r,t,n)=>"solana_chainId"===e.method?(r.result=a,n()):t(),(r,t,a,n)=>"solana_provider_config"===r.method?(t.result=e,n()):a()])}function v(e,r){return(0,s.Pk)(async(t,a,n)=>{let{method:s}=t;if(s!==e)return n();if(!r)throw Error(`WalletMiddleware - ${e} not provided`);let i=await r(t);a.result=i})}function y(e){let{getAccounts:r,requestAccounts:t,signTransaction:a,signAndSendTransaction:n,signAllTransactions:i,signMessage:o,getPrivateKey:c,getSecretKey:d}=e;return(0,s.UZ)([function(e){let{requestAccounts:r}=e;return(0,s.Pk)(async(e,t,a)=>{let{method:n}=e;if("requestAccounts"!==n)return a();if(!r)throw Error("WalletMiddleware - opts.requestAccounts not provided");let s=await r(e);t.result=s})}({requestAccounts:t}),function(e){let{getAccounts:r}=e;return(0,s.Pk)(async(e,t,a)=>{let{method:n}=e;if("getAccounts"!==n)return a();if(!r)throw Error("WalletMiddleware - opts.getAccounts not provided");let s=await r(e);t.result=s})}({getAccounts:r}),v("signTransaction",a),v("signAndSendTransaction",n),v("signAllTransactions",i),v("signMessage",o),v("solanaPrivateKey",c),v("solanaSecretKey",d)])}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach(function(r){(0,a.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}class P extends o.Zk{constructor(e){let{config:r,state:t}=e;super({config:{chainConfig:f(f({},r.chainConfig),{},{chainNamespace:i.EN.SOLANA})},state:t})}async switchChain(e){return Promise.resolve()}async setupProvider(e){let r=new s.eI,t=this.getProviderHandlers(e),a=y(t);r.push(a);let i=m(this.config.chainConfig);r.push(i);let o=this.getInjectedProviderProxy(e);o&&r.push(o);let c=(0,n.Xj)(r);this.updateProviderEngineProxy(c),await this.lookupNetwork()}async lookupNetwork(){let{chainConfig:e}=this.config;return this.update({chainId:e.chainId}),e.chainId||""}getInjectedProviderProxy(e){}}let b=e=>({requestAccounts:async()=>e.publicKey?[d().encode(e.publicKey.toBytes())]:[],getAccounts:async()=>e.publicKey?[d().encode(e.publicKey.toBytes())]:[],async getPrivateKey(){throw l.ethErrors.rpc.methodNotSupported()},async getSecretKey(){throw l.ethErrors.rpc.methodNotSupported()},async signTransaction(r){let t=await e.signTransaction(r.params.message);return t},async signMessage(r){let t=await e.signMessage(r.params.message,r.params.display);return t.signature},async signAllTransactions(r){var t,a;if(!(null!==(t=r.params)&&void 0!==t&&t.message)||!(null!==(a=r.params)&&void 0!==a&&a.message.length))throw l.ethErrors.rpc.invalidParams("message");let n=await e.signAllTransactions(r.params.message);return n},async signAndSendTransaction(r){let t=await e.signAndSendTransaction(r.params.message);return{signature:t.signature}}});function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function O(e){return(0,s.Pk)(async(r,t,n)=>{let s=await e.request(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach(function(r){(0,a.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},r));t.result=s})}class j extends P{getProviderHandlers(e){return b(e)}getInjectedProviderProxy(e){return O(e)}}let S=(e,r)=>({async requestAccounts(){let{data:r}=await e.connect();return[r.publicKey]},async getAccounts(){let{data:r}=await e.connect();return[r.publicKey]},async getPrivateKey(){throw l.ethErrors.rpc.methodNotSupported()},async getSecretKey(){throw l.ethErrors.rpc.methodNotSupported()},async signTransaction(r){let t=r.params.message;if(!t)throw l.ethErrors.rpc.invalidRequest({message:"Invalid transaction message"});let{data:a}=await e.signTransaction(d().encode(t.serializeMessage()));if(!a.publicKey||!a.signature)throw Error("Invalid signature from slope wallet");let n=new u.nh(a.publicKey),s=d().decode(a.signature);return t.addSignature(n,s),t},async signMessage(r){let t=await e.signMessage(r.params.message);return d().decode(t.data.signature)},async signAndSendTransaction(t){let a=r();if(!a)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let n=t.params.message;if(!n)throw l.ethErrors.rpc.invalidRequest({message:"Invalid transaction message"});let{data:s}=await e.signTransaction(d().encode(n.serializeMessage()));if(!s.publicKey||!s.signature)throw Error("Invalid signature from slope wallet");let i=new u.nh(s.publicKey),o=d().decode(s.signature);n.addSignature(i,o);let c=await a.request({method:"solana_provider_config",params:[]}),h=new u.ew(c.rpcTarget),p=await h.sendRawTransaction(n.serialize());return{signature:p}},async signAllTransactions(r){var t,a,n;if(!(null!==(t=r.params)&&void 0!==t&&t.message)||!(null!==(a=r.params)&&void 0!==a&&a.message.length))throw l.ethErrors.rpc.invalidParams("message");let s=r.params.message,{length:i}=s,o=[];for(let c=0;c<i;c++)o.push(d().encode(r.params.message[c].serializeMessage()));let{msg:h,data:p}=await e.signAllTransactions(o);if(!p.publicKey||(null===(n=p.signatures)||void 0===n?void 0:n.length)!==i)throw Error(h);let g=new u.nh(p.publicKey);for(let m=0;m<i;m++){let v=d().decode(p.signatures[m]);s[m].addSignature(g,v)}return s}});class A extends P{getProviderHandlers(e){return S(e,this.getProviderEngineProxy.bind(this))}}let T=(e,r)=>{let t=b(e);return t.signAndSendTransaction=async t=>{let a=r();if(!a)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let n=await e.signTransaction(t.params.message),s=await a.request({method:"solana_provider_config",params:[]}),i=new u.ew(s.rpcTarget),o=await i.sendRawTransaction(n.serialize());return{signature:o}},t};class I extends P{getProviderHandlers(e){return T(e,this.getProviderEngineProxy.bind(this))}}let C=(e,r)=>{let t=b(e);return t.signMessage=async r=>{let{signature:t}=await e.sign(r.params.message,"utf8");return t},t.signAndSendTransaction=async t=>{let a=r();if(!a)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let n=await e.signTransaction(t.params.message),s=await a.request({method:"solana_provider_config",params:[]}),i=new u.ew(s.rpcTarget),o=await i.sendRawTransaction(n.serialize());return{signature:o}},t};class K extends P{getProviderHandlers(e){return C(e,this.getProviderEngineProxy.bind(this))}}let k=e=>({async requestAccounts(){let r=await e.request({method:"solana_requestAccounts",params:{}});return r},async getAccounts(){let r=await e.request({method:"solana_requestAccounts",params:{}});return r},async getPrivateKey(){throw l.ethErrors.rpc.methodNotSupported()},async getSecretKey(){throw l.ethErrors.rpc.methodNotSupported()},async signMessage(r){var t;if(!(null!==(t=r.params)&&void 0!==t&&t.message))throw l.ethErrors.rpc.invalidParams("message");let a=await e.signMessage(r.params.message);return a},async signTransaction(r){var t;if(!(null!==(t=r.params)&&void 0!==t&&t.message))throw l.ethErrors.rpc.invalidParams("message");let a=r.params.message,n=await e.signTransaction(a);return n},async signAndSendTransaction(r){var t;if(!(null!==(t=r.params)&&void 0!==t&&t.message))throw l.ethErrors.rpc.invalidParams("message");let a=r.params.message,n=await e.sendTransaction(a);return{signature:n}},async signAllTransactions(r){var t,a;if(!(null!==(t=r.params)&&void 0!==t&&t.message)||!(null!==(a=r.params)&&void 0!==a&&a.message.length))throw l.ethErrors.rpc.invalidParams("message");let n=r.params.message,s=await e.signAllTransactions(n);return s}});function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach(function(r){(0,a.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}class M extends o.Zk{constructor(e){let{config:r,state:t}=e;super({config:{chainConfig:x(x({},r.chainConfig),{},{chainNamespace:i.EN.SOLANA})},state:t})}async switchChain(e){return Promise.resolve()}async setupProvider(e){this.handleInjectedProviderUpdate(e),await this.setupEngine(e)}async lookupNetwork(){if(!this.provider)throw l.ethErrors.provider.custom({message:"Torus solana provider is not initialized",code:4902});let{chainId:e}=this.config.chainConfig,r=await this.provider.request({method:"solana_chainId"}),t=(0,i.H2)(r.toString())?r:`0x${parseInt(r,10).toString(16)}`;if(e!==t)throw i.Ty.rpcConnectionError(`Invalid network, net_version is: ${t}, expected: ${e}`);return this.update({chainId:t}),this.provider.emit("connect",{chainId:this.state.chainId}),this.provider.emit("chainChanged",this.state.chainId),this.state.chainId}async setupEngine(e){let r=k(e),t=y(r),a=O(e),i=new s.eI;i.push(t),i.push(a);let o=(0,n.Xj)(i);this.updateProviderEngineProxy(o),await this.lookupNetwork()}async handleInjectedProviderUpdate(e){e.on("accountsChanged",async e=>{this.provider.emit("accountsChanged",e)}),e.on("chainChanged",async r=>{let t=(0,i.H2)(r)?r:`0x${parseInt(r,10).toString(16)}`;this.configure({chainConfig:x(x({},this.config.chainConfig),{},{chainId:t})}),await this.setupProvider(e)})}}async function N(e){let{privKey:r,getProviderEngineProxy:t}=e;if("string"!=typeof r)throw i.Ty.invalidParams("privKey must be a string");let a=u.RG.fromSecretKey(g.from(r,"hex"));return{requestAccounts:async()=>[a.publicKey.toBase58()],getAccounts:async()=>[a.publicKey.toBase58()],getPrivateKey:async()=>r,getSecretKey:async()=>d().encode(a.secretKey),async signTransaction(e){var r;if(!(null!==(r=e.params)&&void 0!==r&&r.message))throw l.ethErrors.rpc.invalidParams("message");let t=e.params.message;return t.partialSign(a),t},async signMessage(e){var r;if(!(null!==(r=e.params)&&void 0!==r&&r.message))throw l.ethErrors.rpc.invalidParams("message");let t=p().sign.detached(e.params.message,a.secretKey);return t},async signAndSendTransaction(e){var r;if(!(null!==(r=e.params)&&void 0!==r&&r.message))throw l.ethErrors.rpc.invalidParams("message");let n=t();if(!n)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let s=e.params.message;s.sign(a);let i=await n.request({method:"sendTransaction",params:[d().encode(s.serialize())]});return{signature:i}},async signAllTransactions(e){var r,t,n;if(!(null!==(r=e.params)&&void 0!==r&&r.message)||!(null!==(t=e.params)&&void 0!==t&&t.message.length))throw l.ethErrors.rpc.invalidParams("message");let s=null===(n=e.params)||void 0===n?void 0:n.message;for(let i of s||[]){let o=i;o.partialSign(a)}return s}}}function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach(function(r){(0,a.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}class D extends o.Zk{constructor(e){let{config:r,state:t}=e;super({config:{chainConfig:z(z({},r.chainConfig),{},{chainNamespace:i.EN.SOLANA})},state:t})}async enable(){if(!this.state.privateKey)throw l.ethErrors.provider.custom({message:"Private key is not found in state, plz pass it in constructor state param",code:4902});return await this.setupProvider(this.state.privateKey),this._providerEngineProxy.request({method:"eth_accounts"})}async setupProvider(e){let r=await N({privKey:e,getProviderEngineProxy:this.getProviderEngineProxy.bind(this)}),t=y(r),a=new s.eI,{networkMiddleware:i}=function(e){let{rpcTarget:r}=e,t=(0,n.v$)({rpcTarget:r}),a=(0,s.UZ)([m(e),t]);return{networkMiddleware:a,fetchMiddleware:t}}(this.config.chainConfig);a.push(this.getChainSwitchMiddleware()),a.push(this.getAccountMiddleware()),a.push(t),a.push(i);let o=(0,n.Xj)(a);this.updateProviderEngineProxy(o),await this.lookupNetwork()}async updateAccount(e){if(!this._providerEngineProxy)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let r=await this._providerEngineProxy.request({method:"solanaPrivateKey"});r!==e.privateKey&&(await this.setupProvider(e.privateKey),this._providerEngineProxy.emit("accountsChanged",{accounts:await this._providerEngineProxy.request({method:"requestAccounts"})}))}async switchChain(e){if(!this._providerEngineProxy)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let r=this.getChainConfig(e.chainId);this.update({chainId:"loading"}),this.configure({chainConfig:r});let t=await this._providerEngineProxy.request({method:"solanaPrivateKey"});await this.setupProvider(t)}async lookupNetwork(){if(!this._providerEngineProxy)throw l.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});let e=await this._providerEngineProxy.request({method:"getHealth",params:[]}),{chainConfig:r}=this.config;if("ok"!==e)throw i.Ty.rpcConnectionError(`Failed to lookup network for following rpc target: ${r.rpcTarget}`);return this.update({chainId:r.chainId}),this.state.chainId!==r.chainId&&(this.provider.emit("chainChanged",this.state.chainId),this.provider.emit("connect",{chainId:this.state.chainId})),this.state.chainId}getChainSwitchMiddleware(){let e=function(e){let{addNewChainConfig:r,switchSolanaChain:t}=e;return(0,s.UZ)([v("addSolanaChain",r),v("switchSolanaChain",t)])}({addNewChainConfig:async e=>{if(!e.params)throw l.ethErrors.rpc.invalidParams("Missing request params");let{chainId:r,chainName:t,rpcUrls:a,blockExplorerUrls:n,nativeCurrency:s}=e.params;if(!r)throw l.ethErrors.rpc.invalidParams("Missing chainId in chainParams");if(!a||0===a.length)throw l.ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");if(!s)throw l.ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");this.addChain({chainNamespace:i.EN.SOLANA,chainId:r,ticker:(null==s?void 0:s.symbol)||"SOL",tickerName:(null==s?void 0:s.name)||"Solana",displayName:t,rpcTarget:a[0],blockExplorer:(null==n?void 0:n[0])||""})},switchSolanaChain:async e=>{if(!e.params)throw l.ethErrors.rpc.invalidParams("Missing request params");if(!e.params.chainId)throw l.ethErrors.rpc.invalidParams("Missing chainId");await this.switchChain(e.params)}});return e}getAccountMiddleware(){return function(e){let{updatePrivatekey:r}=e;return(0,s.UZ)([v("updateAccount",r)])}({updatePrivatekey:async e=>{if(!e.params)throw l.ethErrors.rpc.invalidParams("Missing request params");if(!e.params.privateKey)throw l.ethErrors.rpc.invalidParams("Missing privateKey");let{privateKey:r}=e.params;await this.updateAccount({privateKey:r})}})}}(0,a.Z)(D,"getProviderInstance",async e=>{let r=new D({config:{chainConfig:e.chainConfig}});return await r.setupProvider(e.privKey),r});class Z{constructor(e){(0,a.Z)(this,"provider",void 0),this.provider=e}async requestAccounts(){let e=await this.provider.request({method:"requestAccounts",params:{}});return e}async signAndSendTransaction(e){let{signature:r}=await this.provider.request({method:"signAndSendTransaction",params:{message:e}});return{signature:r}}async signTransaction(e){let r=await this.provider.request({method:"signTransaction",params:{message:e}});return r}async signAllTransactions(e){let r=await this.provider.request({method:"signAllTransactions",params:{message:e}});return r}async signMessage(e){let r=await this.provider.request({method:"signMessage",params:{message:e}});return r}async request(e){let r=await this.provider.request(e);return r}}},7420:function(){},95856:function(){},78848:function(){}}]);