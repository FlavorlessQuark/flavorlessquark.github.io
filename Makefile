wasm: 
	emcc test.c -s WASM=1 -s USE_SDL=2 -s MODULARIZE=1 -o custom-loading.js