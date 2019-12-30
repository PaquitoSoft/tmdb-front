describe('Home view behavior', () => {

	it('Successfully loads page', () => {
		cy.visit('/');
	});

	it('Loads popular tvshows by default', () => {
		cy.visit('/');
		cy.get('.home-view__selector-link--selected').should('have.text', 'Popular');
		cy.get('.tvshow-card__title').first().should('have.text', 'The Mandalorian');
	});

	it('Allows to change from popular to top rated tvshows back and forth', () => {
		cy.visit('/');
		cy.get('.home-view__selector-link').eq(1).click();
		cy.get('.home-view__selector-link--selected').should('have.text', 'Top Rated');
		cy.get('.tvshow-card__title').first().should('have.text', 'I Am Not an Animal');

		cy.get('.home-view__selector-link').first().click();
		cy.get('.home-view__selector-link--selected').should('have.text', 'Popular');
		cy.get('.tvshow-card__title').first().should('have.text', 'The Mandalorian');
	});

	it('Navigates to tvshow detail when clicking one of the tvshow cards', () => {
		cy.visit('/');
		cy.get('.tvshow-card')
			.first()
			.invoke('attr', 'href')
			.then(url => {
				cy.get('.tvshow-card').first().click();
				cy.url().should('include', url);
				cy.get('.tvshow-detail__name').should('include.text', 'The Mandalorian');
		});
	});

});
