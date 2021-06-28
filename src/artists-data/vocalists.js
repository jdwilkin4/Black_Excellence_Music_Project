const vocalists = [
    {
        name: 'Addison, Adele (b.1925)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Adele_Addison',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Adele_Addison.jpg/220px-Adele_Addison.jpg',
        alt: 'Adele Addison',
        category: 'classical'
    },
    {
        name: 'Albert, Donnie Ray (b.1950)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Donnie_Ray_Albert',
        image: 'http://www.donnierayalbert.com/donniemain.jpg',
        alt: 'Donnie Ray Albert',
        category: 'classical'
    },
    {
        name: 'Alexander, Roberta (b.1949)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Roberta_Alexander',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roberta_Alexander_%281976%29.jpg/220px-Roberta_Alexander_%281976%29.jpg',
        alt: 'Roberta Alexander',
        category: 'classical'
    },
    {
        name: 'Allen, Betty (1927 – 2009)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Betty_Allen',
        image: 'https://media.wnyc.org/i/raw/photologue/photos/Allen,%20betty%20square.jpg',
        alt: 'Betty Allen',
        category: 'classical'
    },
    {
        name: 'Anderson, Anthony D.(b. 1998)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Anthony_Anderson_(baritone)',
        image: 'https://images1.dallasobserver.com/imager/u/original/10564399/screen_shot_2018-04-09_at_1.22.56_pm.png',
        alt: 'Anthony D. Anderson',
        category: 'classical'
    },
    {
        name: 'Anderson, Marian (1897 – 1993)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Marian_Anderson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Marian_Anderson.jpg/220px-Marian_Anderson.jpg',
        alt: 'Marian Anderson',
        category: 'classical'
    },
    {
        name: 'Arroyo, Martina (b.1937)',
        tag: 'Opera Singer',
        bio: 'https://en.wikipedia.org/wiki/Martina_Arroyo',
        image: 'https://www.martinaarroyo.com/images/Martina%20Black%20&%20White%20Dress%20web.jpg',
        alt: 'Martina Arroyo',
        category: 'classical'
    },
    {
        name: 'Burleigh, Henry "Harry" T. (1866-1949) ',
        tag: 'Composer, Arranger & Baritone ',
        bio: 'http://chevalierdesaintgeorges.homestead.com/Burleigh.html',
        image: 'data:image/jpeg;base64,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',
        alt: 'Harry Burleigh',
        category: 'classical'
    },
    {
        name: 'Calloway, Blanche (1902 – 1978)',
        tag: 'Jazz singer, composer, and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Blanche_Calloway',
        image: 'https://a3-images.myspacecdn.com/images03/2/59113dd2e09f4ef6b6c02bf248448afb/300x300.jpg',
        alt: 'Blanche Calloway',
        category: 'jazz'
    },
    {
        name: 'Calloway III, Cabell "Cab" (1907 – 1994)',
        tag: 'Jazz singer, dancer, and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Cab_Calloway',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cab_Calloway_Gottlieb.jpg/220px-Cab_Calloway_Gottlieb.jpg',
        alt: 'Cabell "Cab" Calloway III',
        category: 'jazz'
    },
    {
        name: 'Carter, Betty (1929 – 1998)',
        tag: 'Singer and songwriter',
        bio: 'https://en.wikipedia.org/wiki/Betty_Carter',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Betty_Carter_in_Pori_July_1978.jpg/220px-Betty_Carter_in_Pori_July_1978.jpg',
        alt: 'Betty Carter',
        category: 'jazz'
    },
    {
        name: 'Charles, Ray (1930 – 2004)',
        tag: 'American singer, songwriter, pianist, composer',
        bio: 'https://en.wikipedia.org/wiki/Ray_Charles',
        image: 'https://images.pulsewebcontent.com/photos/2018/06_Jun/800/RayCharles_6_15.jpg',
        alt: 'Ray Charles',
        category: 'jazz'
    },
    {
        name: 'Cole, Nat King (1919 – 1965)',
        tag: 'Jazz Singer',
        bio: 'https://en.wikipedia.org/wiki/Nat_King_Cole',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Nat_King_Cole_%28Gottlieb_01511%29.jpg/220px-Nat_King_Cole_%28Gottlieb_01511%29.jpg',
        alt: 'Nat King Cole',
        category: 'jazz'
    },
    {
        name: 'Eckstine, William Clarence (1914 – 1993)',
        tag: 'Jazz singer and bandleader',
        bio: 'https://en.wikipedia.org/wiki/Billy_Eckstine',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Portrait_of_Billy_Eckstine%2C_New_York%2C_N.Y.%2C_between_1946_and_1948_%28LOC%29.jpg/220px-Portrait_of_Billy_Eckstine%2C_New_York%2C_N.Y.%2C_between_1946_and_1948_%28LOC%29.jpg',
        alt: 'William Clarence Eckstine ',
        category: 'jazz'
    },
    {
        name: 'Fitzgerald, Ella Jane (1917 – 1996)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Ella_Fitzgerald',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ella_Fitzgerald_%28Gottlieb_02871%29.jpg/220px-Ella_Fitzgerald_%28Gottlieb_02871%29.jpg',
        alt: 'Ella Jane Fitzgerald',
        category: 'jazz'
    },
    {
        name: 'Hall Jr., Ellis (b.1951)',
        tag: 'Singer, songwriter, composer',
        bio: 'https://en.wikipedia.org/wiki/Ellis_Hall_(musician)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ellis_Hall_singing_during_symphony_performance.jpg/220px-Ellis_Hall_singing_during_symphony_performance.jpg',
        alt: 'Ellis Hall Jr.',
        category: 'jazz'
    },
    {
        name: 'Hendricks, John Carl (1921 – 2017)',
        tag: 'Jazz lyricist and singer',
        bio: 'https://en.wikipedia.org/wiki/Jon_Hendricks',
        image: 'https://i.guim.co.uk/img/media/233c38b49614721d89e8bd5591ef8f063fbe7dc9/0_841_4560_2736/master/4560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a062e5ba23423d9cca82c4ce3de52c9f',
        alt: 'John Carl Hendricks ',
        category: 'jazz'
    },
    {
        name: 'Holiday, Billie(1915 – 1959)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Billie_Holiday',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Billie_Holiday_1947_%28cropped%29.jpg/220px-Billie_Holiday_1947_%28cropped%29.jpg',
        alt: 'Billie Holiday',
        category: 'jazz'
    },
    {
        name: 'Horn, Shirley Valerie (1934 – 2005)',
        tag: 'American jazz singer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Shirley_Horn',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Shirley_Horn_ppmsca.08325.jpg/220px-Shirley_Horn_ppmsca.08325.jpg',
        alt: 'Shirley Valerie Horn',
        category: 'jazz'
    },
    {
        name: 'Lincoln, Abbey (1930 – 2010)',
        tag: 'Vocalist, songwriter, and actress',
        bio: 'https://en.wikipedia.org/wiki/Abbey_Lincoln',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Abbey_Lincoln_in_1966.jpg/220px-Abbey_Lincoln_in_1966.jpg',
        alt: 'Abbey Lincoln',
        category: 'jazz'
    },
    {
        name: 'Matthews, Jr., Onzy Durrett (1930 – 1997)',
        tag: 'Pianist, singer, arranger and composer',
        bio: 'https://en.wikipedia.org/wiki/Onzy_Matthews',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Onzy_Matthews_photo_1976.jpg/220px-Onzy_Matthews_photo_1976.jpg',
        alt: 'Onzy Durett Matthews',
        category: 'jazz'
    },
    {
        name: 'McRae, Carmen Mercedes (1920 – 1994)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Carmen_McRae',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Carmen_McRae.jpg/220px-Carmen_McRae.jpg',
        alt: 'Carmen Mercedes McRae',
        category: 'jazz'
    },
    {
        name: 'Porter, Gregory (b.1971)',
        tag: 'Singer, songwriter, and actor',
        bio: 'https://en.wikipedia.org/wiki/Gregory_Porter',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Gregory_Porter_Kongsberg_Jazzfestival_2018_%28191917%29.jpg/220px-Gregory_Porter_Kongsberg_Jazzfestival_2018_%28191917%29.jpg',
        alt: 'Gregory Porter',
        category: 'jazz'
    },
    {
        name: 'Reeves, Dianne Elizabeth (b.1956)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Dianne_Reeves',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_I_y1LrnydVe7D3ZoZepMClT2VZCPa1T0cxBus1eyolw1eM13',
        alt: 'Dianne Elizabeth Reeves',
        category: 'jazz'
    },
    {
        name: 'Smith, Bessie (1894 – 1937)',
        tag: 'Blues singer',
        bio: 'https://en.wikipedia.org/wiki/Bessie_Smith',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg/220px-Bessie_Smith_%281936%29_by_Carl_Van_Vechten.jpg',
        alt: 'Bessie Smith',
        category: 'jazz'
    },
    {
        name: 'Simone, Nina (1933 – 2003)',
        tag: 'Singer, songwriter, musician, and arranger',
        bio: 'https://en.wikipedia.org/wiki/Nina_Simone',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Nina_Simone_1965_-_restoration1.jpg/220px-Nina_Simone_1965_-_restoration1.jpg',
        alt: 'Eunice Kathleen Waymon',
        category: 'jazz'
    },
    {
        name: 'Vaughan, Sarah Lois (1924 – 1990)',
        tag: 'Jazz singer',
        bio: 'https://en.wikipedia.org/wiki/Sarah_Vaughan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Sarah_Vaughan_-_William_P._Gottlieb_-_No._1.jpg/220px-Sarah_Vaughan_-_William_P._Gottlieb_-_No._1.jpg',
        alt: 'Sarah Lois Vaughan',
        category: 'jazz'
    },
    {
        name: 'Washington, Dinah (1924 – 1963)',
        tag: 'Singer and pianist',
        bio: 'https://en.wikipedia.org/wiki/Dinah_Washington',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Dinah_Washington_1962.jpg/220px-Dinah_Washington_1962.jpg',
        alt: 'Dinah Washington',
        category: 'jazz'
    },
    {
        name: 'Williams, Joe (1918 – 1999)',
        tag: 'Jazz Singer',
        bio: 'https://en.wikipedia.org/wiki/Joe_Williams_(jazz_singer)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Joe_Williams_1997.jpg/220px-Joe_Williams_1997.jpg',
        alt: 'Joe Williams',
        category: 'jazz'
    },
    {
        name: 'Wilson, Cassandra (b.1955)',
        tag: 'Singer, songwriter, and producer',
        bio: 'https://en.wikipedia.org/wiki/Cassandra_Wilson',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cassandra_Wilson.jpg/220px-Cassandra_Wilson.jpg',
        alt: 'Cassandra Wilson',
        category: 'jazz'
    }

]
export default vocalists;