
describe('Автототесты на форму логина', function () {
   it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); //Нажали на кнопку
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка видимости крестика
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');//Проверка на активность крестика

    })
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#forgotEmailButton').click(); //Нажали на кнопку
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Проверка отображения окна
        cy.get('#mailForgot').type('gen@dolnikov.ru'); //Ввели емейл
        cy.get('#restoreEmailButton').click(); //Клик по кнопке
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверка надписи
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка видимости крестика
    })
    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLovetudio1'); // Ввели неправильный пароль
        cy.get('#loginButton').click(); //Нажали на кнопку
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка видимости крестика
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');//Проверка на активность крестика

    })
    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('gean@dolnikov.ru'); // Ввели неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); //Нажали на кнопку
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка видимости крестика
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');//Проверка на активность крестика

    })
    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); //Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); //Нажали на кнопку
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка видимости крестика
        cy.get('#exitMessageButton > .exitIcon').click(); 
        cy.get('#form > .header').should('be.visible');
        cy.get('#form > .header').contains('Форма логина');//Проверка на активность крестика

    })
})
