install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

add-to-cli:
	make publish
	sudo npm link
	echo "$'\033[41m\nAlso check if command is added in package.json 'bin' section.$'\033[0m\n"

lint:
	npx eslint . --fix

pretty:
	node_modules/.bin/prettier . --write
