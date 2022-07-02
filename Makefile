wasm: 
	emcc test.c 
	-s USE_SDL=2 \
	-s WASM=1 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s BINARYEN_ASYNC_COMPILATION=0 \
	-s SINGLE_FILE=1 \
	-s MODULARIZE=1 \
	-o $(NAME).html