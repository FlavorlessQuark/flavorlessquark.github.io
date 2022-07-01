wasm: 
	emcc test.c \
	-s ENVIRONMENT=web \
	-I SDL2 \
	-s USE_SDL=2 \
	-s WASM=0 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
	-s MODULARIZE=1 \
	-o src/test.js