sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'it/app/myapp/test/integration/FirstJourney',
		'it/app/myapp/test/integration/pages/CategoriesList',
		'it/app/myapp/test/integration/pages/CategoriesObjectPage',
		'it/app/myapp/test/integration/pages/CoursesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoriesList, CategoriesObjectPage, CoursesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('it/app/myapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoriesList: CategoriesList,
					onTheCategoriesObjectPage: CategoriesObjectPage,
					onTheCoursesObjectPage: CoursesObjectPage
                }
            },
            opaJourney.run
        );
    }
);