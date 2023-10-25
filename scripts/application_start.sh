#!/bin/bash

#give permission for everything in the mealaweadmin directory
sudo chmod -R 777 /home/ec2-user/mealaweadmin

#navigate into our working directory where we have all our github files
cd /home/ec2-user/mealaweadmin

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)
. ~/.nvm/nvm.sh
nvm install 14.15.5
nvm use --delete-prefix v14.15.5

#install node modules
npm install

#start our node app in the background
npm run startaws > app.out.log 2> app.err.log < /dev/null & 