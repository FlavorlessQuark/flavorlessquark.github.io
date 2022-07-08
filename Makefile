wasm: 
	emcc test.c \
	-s USE_SDL=2 \
	-s WASM=0 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s MODULARIZE=1 \
	-s ENVIRONMENT=web \
	-s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
	-o custom-loading.js