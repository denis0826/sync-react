TAG="registry.armstead.io/synctube"

.PHONY: build

build:
	./build.sh $(TAG)

push:
	docker push $(TAG)
