setup-libs:
	@cd client; npm i; cd ..;
	@cd server; npm i; cd ..;

hello:
	@echo "Welcome to Rteach"

serve-client:
	cd client; npm run start;