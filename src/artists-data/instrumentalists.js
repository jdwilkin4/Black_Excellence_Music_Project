const instrumentalists = [
    {
        name: 'Abbitt, Taylor',
        tag: 'Double Bassist',
        bio: 'http://www.instrumentalcasting.com/viewmusiciang.php?serial=881',
        image: 'https://maotw-live.s3.amazonaws.com/uploads/2020/04/13093325/Taylor-Abbitt-double-bass-web_1024x1024_acf_cropped-320x320.jpg',
        alt: 'Taylor Abbitt',
        category: 'strings'
    },
    {
        name: 'Adam, Miriam',
        tag: 'Clarinetist',
        bio: 'https://centerstage.conn-selmer.com/artists/mariam-adam',
        image: 'https://centerstage.conn-selmer.com/application/files/8114/7144/9443/mariamweb.jpg',
        alt: 'Miriam Adam',
        category: 'woodwinds'
    },
    {
        name: 'Adedamola, Sydney',
        tag: 'Violinist',
        bio: 'https://www.laphil.com/musicdb/artists/7764/sydney-adedamola',
        image: 'https://music.usc.edu/files/2019/05/Sydney-Adedamola.jpg',
        alt: 'Sydney Adedamola',
        category: 'strings'
    },
    {
        name: 'Alexander II, Glenn',
        tag: 'Pianist and conductor',
        bio: 'https://www.chicagosinfonietta.org/glenn-alexander-ii/',
        image: 'https://www.chicagosinfonietta.org/wp-content/uploads/2016/01/Glenn-Alexander-II.png',
        alt: 'Glenn Alexander II',
        category: 'piano'
    },
    {
        name: 'Ali-Landing, Ifetayo',
        tag: 'Cellist',
        bio: 'https://www.sphinxmusic.org/bio-ifetayo-ali/',
        image: 'https://fromthetop.org/wp-content/uploads/ifetayoali-landing_349_cello.jpg',
        alt: 'Ifetayo Ali-Landing',
        category: 'strings'
    },
    {
        name: 'Allen-Batieste, DeMarus',
        tag: 'Clarinetist',
        bio: 'https://www.linkedin.com/in/demarus-allen-batieste-125bb424',
        image: 'https://cdn.groupmuse.com/1b8c3212-382d-40dc-945d-14800483c8fe/-/scale_crop/400x400/center/-/max_icc_size/10/-/format/auto/-/quality/lighter/-/progressive/yes/',
        alt: 'DeMarus Allen-Batieste',
        category: 'woodwinds'
    },
    {
        name: 'Bailey, Sandra ',
        tag: 'Bassoonist',
        bio: 'https://www.arkansassymphony.org/sandra-bailey',
        image: 'https://mediad.publicbroadcasting.net/p/wxxifm/files/styles/x_large/public/202001/bailey__sandra_0.jpg',
        alt: 'Sandra Bailey',
        category: 'woodwinds'
    },
    {
        name: 'Booker, Cremaine ',
        tag: 'Cellist',
        bio: 'https://www.thatcelloguy.com/bio',
        image: 'https://images.foxtv.com/static.fox5dc.com/www.fox5dc.com/content/uploads/2019/10/320/250/cremaine_1468073040930_1577956_ver1.0_1280_720.jpg?ve=1&tl=1',
        alt: 'Cremaine Booker',
        category: 'strings'
    },
    {
        name: 'Coleman, Valerie',
        tag: 'Flutist and Composer',
        bio: 'https://www.vcolemanmusic.com/about.html',
        image: 'https://www.flutenewmusicconsortium.com/uploads/1/4/9/7/14977178/published/coleman_1.jpg?1530059842',
        alt: 'Valerie Coleman',
        category: 'woodwinds'
    },
    {
        name: 'Cooper, Eric ',
        tag: 'Cellist',
        bio: 'https://www.classical915.org/post/eric-cooper-cello',
        image: 'https://images.squarespace-cdn.com/content/v1/57b348b403596e58a6b3bead/1563577090363-IW6Q05E4XMI9LBF3ZVG9/ke17ZwdGBToddI8pDm48kEc6DKFOx3cpvkyhZQwPkJYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc53GO0vWykWK-lIOAtsaJ7vbB1JiXq7byw-6Ogo-kuNnXzR_WIuWSVqqqoqhN8EA5/20180619Strings-08.jpg?format=1500w',
        alt: 'Eric Cooper',
        category: 'strings'
    },

    {
        name: 'Curtis, Lamar Carey',
        tag: 'Bassoonist',
        bio: 'https://www.classical915.org/post/lamar-carey-curtis-bassoon',
        image: 'https://mediad.publicbroadcasting.net/p/wxxifm/files/styles/large/public/202001/curtis__lamar_good_version.jpg',
        alt: 'Lamar Carey Curtis',
        category: 'woodwinds'
    },

    {
        name: 'Ellis, Monica',
        tag: 'Bassoonist',
        bio: 'https://www.msmnyc.edu/faculty/monica-ellis/',
        image: 'https://www.msmnyc.edu/wp-content/uploads/2020/09/Monica-Ellis.jpg',
        alt: 'Monica Ellis',
        category: 'woodwinds'
    },
    {
        name: 'Farquharson, Wilfred',
        tag: 'Violist',
        bio: 'https://www.laco.org/people/wilfred-farquharson/',
        image: 'https://media.laco.org/app/uploads/2020/10/05130425/Capture-2020-06-03-02_00_50.png',
        alt: 'Wilfred Farquharson',
        category: 'strings'
    },
    {
        name: 'Fuller, Michael',
        tag: 'Double Bassist',
        bio: 'https://www.laphil.com/musicdb/artists/6307/michael-fuller',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wmISJVXA4n1CElr0Wp3HZWZPT6bALCz-Wg&usqp=CAU',
        alt: 'Michael Fuller',
        category: 'strings'
    },
    {
        name: 'George, Brandon Patrick',
        tag: 'Flutist',
        bio: 'https://www.brandonpatrickgeorge.com/about',
        image: 'https://www.hofstra.edu/images/profiles/7978.jpg',
        alt: 'Brandon Patrick George',
        category: 'woodwinds'
    },
    {
        name: 'Gordon Grubbs ',
        tag: 'Cellist',
        bio: 'https://www.classical915.org/post/gordon-grubbs-cello',
        image: 'https://www.classical915.org/sites/wxxifm/files/201810/grubbs__gordon.jpg',
        alt: 'Gordon Grubbs',
        category: 'strings'
    },
    {
        name: 'Hood, Joshua',
        tag: 'Bassoonist',
        bio: 'https://coaa.uncc.edu/people/joshua-hood',
        image: 'https://coaa.uncc.edu/sites/coaa.uncc.edu/files/styles/directory-list/public/fields/directory/field_directory_image/Josh_Hood.jpg?itok=EC1pQ7eh',
        alt: 'Joshua Hood',
        category: 'woodwinds'
    },
    {
        name: 'Hopson, Sidney ',
        tag: 'Percussionist',
        bio: 'https://www.linkedin.com/in/sidney-j-hopson-9990027',
        image: 'https://i1.sndcdn.com/avatars-000406717110-uwpmw0-t500x500.jpg',
        alt: 'Sidney Hopson',
        category: 'percussion'
    },
    {
        name: 'Jones, Shawn',
        tag: 'Bassoonist',
        bio: 'https://www.sanfranciscoballetorchestra.org/shawn-jones/',
        image: 'https://www.sanfranciscoballetorchestra.org/wp-content/uploads/2014/11/Shawn-Jones.jpg',
        alt: 'Shawn Jones',
        category: 'woodwinds'
    },
    {
        name: 'McGill, Anthony',
        tag: 'Clarinet',
        bio: 'https://www.anthonymcgill.com/about/biography/',
        image: 'https://www.cedillerecords.org/wp-content/uploads/2014/07/20210228_mcgill_ER_033creditEricRuddPhotography-scaled-e1622827795610.jpg',
        alt: 'Anthony McGill',
        category: 'woodwinds'
    },
    {
        name: 'McQueen, Garrett',
        tag: 'Bassoonist',
        bio: 'http://www.garrettmcqueen.com/biography.html',
        image: 'https://www.classical915.org/sites/wxxifm/files/styles/medium/public/202001/garrett_mcqueen_1.jpg',
        alt: 'Garrett McQueen',
        category: 'woodwinds'
    },
    {
        name: 'Parnther, Anthony',
        tag: 'Bassoonist and conductor',
        bio: 'https://www.anthonyparnther.com/bassoonist',
        image: 'https://static.wixstatic.com/media/96ee4c_0f8b419bf11f4128a7dc04e458557991~mv2.jpg/v1/fill/w_400,h_374,al_c,q_80,usm_0.66_1.00_0.01/96ee4c_0f8b419bf11f4128a7dc04e458557991~mv2.webp',
        alt: 'Anthony Parnther',
        category: 'woodwinds'
    },
    {
        name: 'Parrimore, Bradley',
        tag: 'Violist',
        bio: 'https://www.laco.org/people/bradley-parrimore/',
        image: 'https://media.laco.org/app/uploads/2018/10/20111017/CHE3288_800x867_acf_cropped.jpg',
        alt: 'Bradley Parrimore',
        category: 'strings'
    },

    {
        name: 'Rocke, Kai',
        tag: 'Bassoonist',
        bio: 'https://minnesotaorchestra.org/about/who-we-are/orchestra-musicians/330-bassoon/2157-kai-rocke',
        image: 'https://minnesotaorchestra.org/images/roster/Kai-Rocke_roster.jpg',
        alt: 'Kai Rocke',
        category: 'woodwinds'
    },
    {
        name: 'Scott, Jeff',
        tag: 'French horn and composer',
        bio: 'https://www.newschool.edu/mannes/faculty/jeffrey-scott/',
        image: 'https://newschool-vcard.imgix.net/image/614345',
        alt: 'Jeff Scott',
        category: 'brass'
    },
    {
        name: 'Smith, Brice',
        tag: 'Flutist',
        bio: 'https://www.bricesmithflute.com/biography',
        image: 'https://static.wixstatic.com/media/1e691b_130ba3939b194462aa2f06bdcf15093a.jpg/v1/fill/w_560,h_522,al_c,q_80,usm_0.66_1.00_0.01/1e691b_130ba3939b194462aa2f06bdcf15093a.webp',
        alt: 'Brice Smith',
        category: 'woodwinds'
    },
    {
        name: 'Spellman-Diaz, Toyin',
        tag: 'Oboist',
        bio: 'https://steinhardt.nyu.edu/people/toyin-spellman-diaz',
        image: 'https://steinhardt.nyu.edu/sites/default/files/styles/nyu_profile_image/public/2020-12/music_woodwinds_faculty_toyin.jpg?h=026e2a9b&itok=F0lknxrl',
        alt: 'Toyin Spellman-Diaz',
        category: 'woodwinds'
    },
    {
        name: 'Stone, Maya',
        tag: 'Bassoonist',
        bio: 'https://www.interharmony.com/artist-teachers-online/Maya-Stone-bassoon',
        image: 'https://www.nashvillemusicians.org/sites/default/files/1399563029Maya_Stone-_MQVC_2014_Pic_0_7.jpg',
        alt: 'Maya Stone',
        category: 'woodwinds'
    },
    {
        name: 'Taylor, Malik ',
        tag: 'French horn',
        bio: 'https://www.laco.org/people/malik-taylor/',
        image: 'https://music.usc.edu/files/2020/10/maliktaylor.jpg',
        alt: 'Malik Taylor',
        category: 'brass'
    },
    {
        name: 'Yeazell, Myles',
        tag: 'Cellist',
        bio: 'https://www.laco.org/people/myles-yeazell/',
        image: 'https://media.laco.org/app/uploads/2020/10/05130446/myles.png',
        alt: 'Myles Yeazell',
        category: 'strings'
    }

]
export default instrumentalists