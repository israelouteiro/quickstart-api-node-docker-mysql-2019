#  API @2019

## Docker + Node + MySQL + Pug + Mocha + ApiDoc + Sequelize ORM 😃 

- Enviroment provisioned
- Automatizated tests
- Migrations and seeds
- Routes documentation 
- Useful Api to quick start something Amazing 🚀
- No deprecated dependencies, 0 vulnerabilities, 100% updated 🥳
  
#### To up and run follow step below:

- Make sure you have `Docker` and `docker-compose` installed on your environmet, if you dont have [download](https://hub.docker.com/editions/community/docker-ce-desktop-mac) and install , so 

```sh
    $ docker-compose up api
```

if you dont change `PORT` enviroment on docker-compose your application your run at: [http://localhost:3000](http://localhost:3000)

#### To generate docs:

- Make sure you have `ApiDoc` installed on your environmet, if you dont have `sudo npm i -g apidoc`, so 

```sh
    $ apidoc -i <input_folder> -o <output_folder> -t <template_folder>
```

- Example: 

```sh
    $ apidoc -i ./src -o ./apidoc -t ../../apidoc_template
```

**change template location to `../../apidoc_template` to location on your environment, if you dont have an template find it on google 🙂**

#### To run Test:

- Make sure you have `Mocha` installed on your environmet, if you dont have `sudo npm i -g mocha`, so 

```sh
    $ npm run test
```


#### To use sequelize ( Database ORM )

- Access application docker

```sh
    $ docker ps
    $ docker exec -it <container_id> bash
```

- create migrate, on example we can see a migration to `Users` table

```sh
    $ npx sequelize migration:create --name=create-users
```

- create a seeder, on example we can see a migration to `Users` table

```sh
    $ npx sequelize seed:generate --name users
```

- migrate db

```sh
    $ npx sequelize db:migrate
```

- seed db

```sh
    $ npx sequelize db:seed:all
```

***Notes***

use `src/found` as example to create others controllers 

[http://israelouteiro.com](israelouteiro@2019)

