const map = L.map('library-map').setView([51.505, -0.09], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const libraries = [
        {
            name: "Library of Congress",
            location: [38.8899, -77.0045],
            description: "The largest library in the world, located in Washington D.C., USA.",
            image: "images/libraries/1.jpg"
        },
        {
            name: "The British Library",
            location: [51.5295, -0.1278],
            description: "The national library of the United Kingdom, located in London.",
            image: "images/libraries/2.jpg"
        },
        {
            name: "The Bibliotheque Nationale de France",
            location: [48.8336, 2.3741],
            description: "One of the largest libraries in the world, located in Paris, France.",
            image: "images/libraries/3.jpg"
        },
        {
            name: "The New York Public Library",
            location: [40.7128, -74.0060],
            description: "A famous public library located in New York City, USA.",
            image: "images/libraries/4.jpg"
        },
        {
            name: "The Vatican Library",
            location: [41.9029, 12.4534],
            description: "The Vatican Library holds one of the most important collections of ancient texts and manuscripts in the world.",
            image: "images/libraries/5.jpg"
        },
        {
            name: "The Library of Alexandria",
            location: [31.2156, 29.9552],
            description: "A modern library built to honor the ancient Library of Alexandria, Egypt.",
            image: "images/libraries/6.jpg"
        },
        {
            name: "The National Library of China",
            location: [39.9289, 116.3975],
            description: "The largest library in Asia, located in Beijing, China.",
            image: "images/libraries/7.jpg"
        },
        {
            name: "The Royal Danish Library",
            location: [55.6803, 12.5770],
            description: "Located in Copenhagen, Denmark, it is the largest library in Denmark.",
            image: "images/libraries/8.jpg"
        },
        {
            name: "The National Diet Library",
            location: [35.6850, 139.7528],
            description: "The national library of Japan, located in Tokyo.",
            image: "images/libraries/9.jpg"
        },
        {
            name: "The State Library of New South Wales",
            location: [33.8675, 151.2094],
            description: "Located in Sydney, Australia, it is one of the oldest libraries in the country.",
            image: "images/libraries/10.jpg"
        },
        {
            name: "The Prussian Cultural Heritage Foundation",
            location: [52.5200, 13.4050],
            description: "Located in Berlin, Germany, it is one of the largest cultural institutions in Europe.",
            image: "images/libraries/11.jpg"
        },
        {
            name: "The Russian State Library",
            location: [55.7558, 37.6173],
            description: "Also known as the Lenin Library, it is the largest library in Russia, located in Moscow.",
            image: "images/libraries/12.jpg"
        },
        {
            name: "The Toronto Reference Library",
            location: [43.6532, -79.3832],
            description: "A landmark library in Toronto, Canada.",
            image: "images/libraries/13.jpg"
        },
        {
            name: "The Biblioteca Nacional de España",
            location: [40.4184, -3.7164],
            description: "The national library of Spain, located in Madrid.",
            image: "images/libraries/14.jpg"
        },
        {
            name: "The Library and Archives Canada",
            location: [45.4215, -75.6992],
            description: "A central library of Canada, located in Ottawa.",
            image: "images/libraries/15.jpg"
        },
        {
            name: "The Library of the University of Oxford",
            location: [51.7547, -1.2541],
            description: "A library at the University of Oxford, one of the oldest in the world.",
            image: "images/libraries/16.jpg"
        },
        {
            name: "The National Library of Russia",
            location: [59.9386, 30.3141],
            description: "The largest library in Russia located in St. Petersburg.",
            image: "images/libraries/17.jpg"
        },
        {
            name: "The University of Chicago Library",
            location: [41.7897, -87.5987],
            description: "A major academic library located in Chicago, USA.",
            image: "images/libraries/18.jpg"
        },
        {
            name: "The Library of the University of Sydney",
            location: [33.8846, 151.1910],
            description: "A large academic library in Sydney, Australia.",
            image: "images/libraries/19.jpg"
        },
        {
            name: "The Bodleian Library",
            location: [51.7548, -1.2544],
            description: "The main research library at the University of Oxford, England.",
            image: "images/libraries/20.jpg"
        }
    ];    

    libraries.forEach(library => {
        const marker = L.marker(library.location).addTo(map);
        marker.bindPopup(`
            <b>${library.name}</b><br>
            ${library.description}<br><br>
            <img src="${library.image}" alt="${library.name}" class="library-image">
        `);
    });