﻿var localized_strings,
localization_promise = (function (){
    var deferred = new $.Deferred();
    localized_strings_default = {
      		empty_wishlist: "Empty Wishlist",
    		purchase_date: "(Purchased __date__)",
        	options: "Options",
        	website: "Website",
        	contribute: "Contribute (GitHub)",
		store: "Store",
		community: "Community",
		news: "News",
		about: "About",
		donate: "Donate",
		language: "Language",
		highlight: "Highlight",
		options_owned: "Items You Own",
		options_wishlist: "Items On Your Wishlist",
		options_coupon: "Items With Coupons",
		options_gift: "Items Stored As Gift",
		options_guest: "Items You Have A Guest Pass For",
		options_friends_wishlist: "Items Your Friends Have Wishlisted",
		options_hide_install: "Hide \"Install Steam\" button in header",
		options_drm: "Show 3rd Party DRM Warnings",
		options_lowestprice: "Show Price History Information",
		options_metacritic: "Show Metacritic User Scores",
		options_steamdb: "Show SteamDB Links",
		options_wsgf: "Show WSGF (Widescreen) Info",
		options_carousel_description: "Show App Descriptions On Storefront Carousel",
		options_profile_links: "Show profile links to",
		options_total_spent: "Show \"Total Spent\" on Account Page",
		options_group_events: "Show Events on Group Overview",
		options_greenlight_banner: "Replace Steam Greenlight Banner",
		options_es_bg: "Set Custom Background on Edit Profile Screen",
		options_library: "Show Library button in header (BETA)",
		options_hide_about: "Hide About link in header",
		options_about_text: "About <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam is an Extension for Google Chrome that adds many new features to the Steam website.<p>Features include:<ul><li>Highlighting games you already own</li><li>Highlighting games on your wishlist</li><li>Correctly calculating bundle discounts based on games you already own</li><li>Showing you how much money you've spent on Steam for the lifetime of your account</li><li>Highlighting DLC you own on a game page</li><li>Fixing \"No Image Available\" game icons on your wishlist for any game or DLC</li><li>Pointing out titles with 3rd party DRM</li></ul><p>If you find this Extension useful, please consider donating.",
		tag: "Tag",
		theworddefault: "Default",
		save: "Save",
		saved: "Saved",
		view_in: "View in",
  		clear_cache: "Clear cached data",
        	forums: "Forums",
        	coupon_available: "You have a coupon available!",
        	coupon_application_note: "A coupon in your inventory will be applied automatically at checkout.",
        	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Learn more</a> about Steam Coupons",
        	add_to_cart: "Add to Cart",
        	drm_third_party: "Warning: This title uses 3rd party DRM",
        	empty_cart: "Empty Cart",
        	events_view_all: "VIEW ALL",
        	events: "Events",
        	dlc_data_header: "Downloadable Content Details",
        	tag_owned: "Owned",
        	tag_wishlist: "Wishlist",
        	tag_coupon: "Coupon",
        	tag_inv_gift: "Gift",
        	tag_inv_guestpass: "Guestpass",
        	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ wish for</a>",
		inventory_market_text: "Show Market Price on Inventory Page (Experimental!)",
		credits: "Credits",
		stores: "Stores",
		region: "Region",
		all: "All",
		programming: "Programming",
		translation: "Translation",
		custom_background: "Custom Background",
		custom_background_help: "All users of Enhanced Steam will see this background on your profile.  Non-Enhanced Steam users will see your regular profile background.",
		total_size: "Total Size",
		hide: "Hide"
    		};

    localized_strings = {
        "en": 	localized_strings_default,
        "ar":   {},
        "cs":   {
        	empty_wishlist: "Vyprázdnit Seznam přání",
        	purchase_date: "(Zakoupeno __date__)",
        	options: "Nastavení",
        	website: "Webová stránka",
        	contribute: "Pomoct (GitHub)",
		store: "Obchod",
		community: "Komunita",
		news: "Novinky",
		about: "O rozšíření",
		donate: "Přispět",
		language: "Jazyk",
		highlight: "Zvýraznění",
		options_owned: "Položky, které vlastníte",
		options_wishlist: "Položky na vašem Seznamu přání",
		options_coupon: "Položky s kupóny",
		options_gift: "Položky vlastněné jako dárek",
		options_guest: "Položky, na které máte Guest Pass",
		options_friends_wishlist: "Položky, které mají vaši přátelé na svém Seznamu přání",
		options_hide_install: "Schhovat tlačítko \"Nainstalovat Steam\" v hlavičce",
		options_drm: "Ukázat upozornění na DRM třetí strany",
		options_lowestprice: "Ukázat informace o historii ceny",
		options_metacritic: "Ukázat uživatelská hodnocení Metacritic",
		options_steamdb: "Ukázat odkazy na SteamDB",
		options_wsgf: "Ukázat WSGF (širokoúhlé) informace",
		options_carousel_description: "Ukázat popis aplikace na Storefront Carousel",
		options_profile_links: "Ukázat odkazy na profil na:",
		options_total_spent: "Ukázat \"Celkem utraceno\" na stránce Účet",
		options_group_events: "Ukázat události na Přehledu skupiny",
		options_greenlight_banner: "Nahradit Steam Greenlight banner",
		options_es_bg: "Možnost nastavit Vlastní pozadí na stránce Upravit profil",
		options_library: "Ukázat tlačítko Knihovna v hlavičce (BETA)",
		options_hide_about: "Schovat odkaz O Steamu v hlavičce",
		options_about_text: "O <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam je rozšíření pro Google Chrome, které přidává mnoho nových funkcí na webovou stránku Steamu.<p>Mezi funkce patří:<ul><li>Zvýraznění již vlastněných her</li><li>Zvýraznění her na Vašem Seznamu přání</li><li>Přesné spočítaní slev u balíčků založené na hrách, které již vlastníte</li><li>Ukázání, kolik jste na Steamu utratili od založení Vašeho účtu</li><li>Zvýraznění DLC, které již vlastníte, na stránce hry</li><li>Spravení \"No Image Available\" ikon her na vašem Seznamu přání pro každou hru i DLC</li><li>Upozornění na hry s DRM třetí strany</li></ul><p>Pokud vám toto rozšíření přijde užitečné, prosím popřemýšlejte o příspěvku.",
		tag: "Popisek",
		theworddefault: "Výchozí",
		save: "Uložit",
		saved: "Uloženo",
		view_in: "Ukázat v",
    		clear_cache: "Vyčistit data uložená v mezipaměti",
        	forums: "Fóra",
        	coupon_available: "Máte dostupný kupón!",
        	coupon_application_note: "Kupón ve vašem inventáři bude automaticky aplikován při nákupu.",
     	  	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Zjistěte více</a> o Steam kupónech",
        	add_to_cart: "Přidat do košíku",
        	drm_third_party: "Upozornění: Tento titul používá DRM třetí strany",
        	empty_cart: "Vyprázdnit košík",
        	events_view_all: "ZOBRAZIT VŠE",
        	events: "Události",
        	dlc_data_header: "Detaily Stahovatelného obsahu",
        	tag_owned: "Vlastněné",
        	tag_wishlist: "Na Seznamu přání",
        	tag_coupon: "S kupónem",
        	tag_inv_gift: "Vlastněný dárek",
        	tag_inv_guestpass: "Vlastněný Guest Pass",
        	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ si toto přejí</a>",
		inventory_market_text: "Ukázat cenu v Tržišti na stránce Inventář (Experimentální!)",
		credits: "Autoři",
		stores: "Obchody",
		region: "Region",
		all: "Vše",
		programming: "Programování",
		translation: "Překlad",
		custom_background: "Vlastní pozadí",
		custom_background_help: "Všichni uživatelé Enhanced Steam uvidí toto pozadí na vašem profilu.  Uživatelé bez Enhanced Steam uvidí vaše normální pozadí profilu.",
		total_size: "Celková velikost",
		hide: "Schovat"
     		},
        "da":   {},
        "de":   {
		empty_wishlist: "Wunschliste leeren",
		purchase_date: "(Auf __date__ gekauft)",
		options: "Optionen",
		website: "Website",
		contribute: "Unterstützen (GitHub)",
		store: "Shop",
		community: "Community",
		news: "News",
		about: "Über",
		donate: "Spenden",
		language: "Sprache",
		highlight: "Hervorheben",
		options_owned: "Titel in meinem Besitz",
		options_wishlist: "Titel auf meiner Wunschliste",
		options_coupon: "Titel, für welche ich einen Gutschein habe",
		options_gift: "Titel, die als Geschenk in meinem Inventar liegen",
		options_guest: "Titel, die als Besucherpass in meinem Inventar liegen",
		options_friends_wishlist: "Titel, welche sich Freunde wünschen",
		options_hide_install: "Verstecke \"Steam installieren\" Button im Seitenkopf",
		options_drm: "Zeige Warnung über DRMs von Dritten",
		options_lowestprice: "Zeige Informationen über Preishistorie",
		options_metacritic: "Zeige Metacritic Benutzerbewertungen",
		options_steamdb: "Zeige SteamDB Links",
		options_wsgf: "Zeige WSGF (Widescreen) Info",
		options_carousel_description: "Zeige Titelbeschreibungen im Karusell auf der Shop-Startseite",
		options_profile_links: "Zeige Profillinks zu",
		options_total_spent: "Zeige \"Ausgaben Gesamt\" in Accountdetails",
		options_group_events: "Zeige Events in Gruppenübersicht",
		options_greenlight_banner: "Überschreibe Greenlight Banner",
		tag: "Markieren",
		theworddefault: "Standard",
		save: "Speichern",
		saved: "Gespeichert",
		view_in: "In ansehen",
		clear_cache: "Gecachte Daten löschen",
		forums: "Foren",
		coupon_available: "<font size=5>Sie haben einen Gutschein zur Verfügung!</font>",
		coupon_application_note: "Ein Gutschein aus Ihrem Inventar wird automatisch im Warenkorb angewendet.",
		coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Mehr über Steam Gutscheine lernen</a>",
		add_to_cart: "In den Warenkorb",
		drm_third_party: "Achtung: Dieser Titel nutzt ein DRM von Dritten",
		empty_cart: "Warenkorb leeren",
		events_view_all: "ALLE ANZEIGEN",
		events: "Events",
		dlc_data_header: "Details über Inhalte zum Herunterladen",
		tag_owned: "Bereits im Besitz",
		tag_wishlist: "Wunschliste",
		tag_coupon: "Gutschein",
		tag_inv_gift: "Geschenk",
		tag_inv_guestpass: "Besucherpass",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ mal gewünscht</a>"
		},
        "el":   {},
        "es":   {
		empty_wishlist: "Lista de Deseos vacía",
		purchase_date: "(Compro __date__)",
		website: "Sitio web",
		contribute: "Contribuir (GitHub)",
		options: "Opciones",
		store: "Tienda",
		community: "Comunidad",
		news: "Noticias",
		about: "Sobre",
		donate: "Donar",
		language: "Idioma",
		highlight: "Destacar",
		options_owned: "Artículos usted el propietario",
		options_wishlist: "Artículos en su lista de deseos",
		options_coupon: "Artículos con Cupones",
		options_gift: "Artículos almacenados como un regalo",
		options_guest: "Artículos que tienen pases de invitado",
		options_friends_wishlist: "Artículos por su amigos lista de deseos",
		options_hide_install: "Ocultar Boton de \"Install Steam\" en el encabezado",
		options_drm: "Mostrar 3rd Party DRM Advertencias",
		options_lowestprice: "Mostrar Precio Historia Informacion",
		options_metacritic: "Mostrar Metacritic puntuaciones de los usuarios",
		options_wsgf: "Mostrar WSGF Informacion con pantalla grande",
		options_steamdb: "Mostrar enlaces SteamDB",
		options_carousel_description: "Mostrar la informacion en la aplicacion del carrusel Escaparate",
		options_profile_links: "Mostrar enlaces a la pagina de perfil",
		options_total_spent: "Mostrar total en la cuenta de la pagina",
		options_group_events: "Mostrar eventos de Revision de grupo",
		options_greenlight_banner: "Reemplace Bandera de Steam Greenlight",
		options_es_bg: "Establecer fondo de encargo en la pantalla de edición de perfil",
		tag: "Etiqueta",
		theworddefault: "Defecto",
		save: "Guardar",
		saved: "Guardado",
		view_in: "Ver en",
		clear_cache: "Datos claros en caché",
		forums: "Foros",
		coupon_available: "Usted tiene un cupon disponible!",
		coupon_application_note: "Un cupon en su inventario se aplicara automaticamente momento de pagar.",
		coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Mas informacion</a> sobre cupones de Steam",
		add_to_cart: "Anadir al carro",
		drm_third_party: "Advertencia: Este titulo utiliza 3rd party DRM",
		empty_cart: "Vaciar Carro",
		events_view_all: "VER TODOS",
		events: "Eventos",
		dlc_data_header: "Contenido Descargable Detalles",
		tag_owned: "Poseido",
		tag_wishlist: "Lista de deseos",
		tag_coupon: "Cupon",
		tag_inv_gift: "Regalo",
		tag_inv_guestpass: "Pase Invitado",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ amigos deseen</a>",
		inventory_market_text: "Show Market Price on Inventory Page (Experimental!)",
		credits: "Créditos",
		stores: "Tiendas",
		region: "Región",
		all: "Todo",
		programming: "Programación",
		translation: "Traducción"
		},
        "fi":   {},
        "fr":   {
		empty_wishlist: "Vider la liste de souhaits",
		purchase_date: "(Acheté le __date__)",
		options: "Options",
		website: "Site web",
		contribute: "Contribuer (GitHub)",
		store: "Magasin",
		community: "Communauté",
		news: "Actualités",
		about: "À propos",
		donate: "Faire un don",
		language: "Langue",
		highlight: "Surlignage",
		options_owned: "Articles que vous possédez",
		options_wishlist: "Articles dans votre liste de souhaits",
		options_coupon: "Articles pour lesquels vous avez des coupons",
		options_gift: "Articles stockés en tant que cadeaux",
		options_guest: "Articles pour lesquels vous avez des invitations",
		options_friends_wishlist: "Articles que vos amis ont dans leurs listes de souhaits",
		options_hide_install: "Cacher le bouton \"Installer Steam\" dans l'en-tête",
		options_drm: "Afficher les avertissements sur les DRMs de tiers",
		options_lowestprice: "Afficher l'historique des prix",
		options_metacritic: "Afficher les scores des utilisateurs de Metacritic",
		options_steamdb: "Afficher les liens SteamDB",
		options_wsgf: "Afficher les informations WSGF (écran large)",
		options_carousel_description: "Afficher les descriptions des apps dans le carrousel du magasin",
		options_profile_links: "Afficher les liens de profil de ",
		options_total_spent: "Afficher \"Total dépensé\" dans la page du compte",
		options_group_events: "Afficher les événements dans l'aperçu des groupes",
		options_greenlight_banner: "Remplacer la bannière Steam Greenlight",
		options_es_bg: "Définir un arrière-plan personnalisé sur la page de modification du profil",
		tag: "Tag",
		theworddefault: "Défaut",
		save: "Enregistrer",
		saved: "Enregistré",
		view_in: "Voir sur",
		clear_cache: "Vider le cache de données",
		forums: "Forums",
		coupon_available: "Vous avez un coupon disponible !",
		coupon_application_note: "Un coupon de votre inventaire sera utilisé automatiquement dans le panier.",
		coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">En savoir plus</a> sur les Coupons Steam",
		add_to_cart: "Ajouter au panier",
		drm_third_party: "Attention : ce titre utilise le DRM d'un tiers",
		empty_cart: "Vider le panier",
		events_view_all: "TOUT AFFICHER",
		events: "Événements",
		dlc_data_header: "Détails sur le contenu téléchargeable",
		tag_owned: "Possédé",
		tag_wishlist: "Liste de souhaits",
		tag_coupon: "Coupon",
		tag_inv_gift: "Cadeau",
		tag_inv_guestpass: "Invitation",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ souhait(s)</a>",
		inventory_market_text: "Afficher le prix du marché sur la page d'inventaire (expérimental !)",
		credits: "Crédits",
		stores: "Magasins",
		region: "Région",
		all: "Tous",
		programming: "Programmation",
		translation: "Traduction"
      		},
        "hu":   {},
        "it":   {},
        "ja":   {
		empty_wishlist: "ウィッシュリストを空にする",
		purchase_date: "(購入日 __date__)",
		options: "オプション",
		website: "ウェブサイト",
		contribute: "貢献する (GitHub)",
		store: "ストア",
		community: "コミュニティ",
		news: "ニュース",
		about: "これについて",
		donate: "寄付",
		language: "言語",
		highlight: "強調表示",
		options_owned: "所有しているもの",
		options_wishlist: "ウィッシュリストにあるもの",
		options_coupon: "クーポンがあるもの",
		options_gift: "ギフトで保管しているもの",
		options_guest: "ギフトパスがあるもの",
		options_friends_wishlist: "フレンドがウィッシュリストに入れているもの",
		options_hide_install: "ヘッダーの\"Steamをインストール\"ボタンを隠す",
		options_drm: "サードパーティーのDRMの警告を表示",
		options_lowestprice: "価格履歴情報を表示",
		options_metacritic: "Metacriticのユーザースコアを表示",
		options_steamdb: "SteamDBへのリンクを表示",
		options_wsgf: "WSGF (ワイドスクリーン) 情報を表示",
		options_carousel_description: "ストアトップのカルーセルのアプリ説明を表示",
		options_profile_links: "プロフィールに以下へのリンクを表示",
		options_total_spent: "アカウントページに\"合計消費額\"を表示",
		options_group_events: "グループオーバービューでイベントを表示",
		options_greenlight_banner: "Steam Greenlightのバナーを置き換える",
		tag: "タグ",
		theworddefault: "デフォルト",
		save: "保存",
		saved: "保存完了",
		view_in: "次で表示",
		clear_cache: "キャッシュされたデータをクリア",
		forums: "Forums",
		coupon_available: "クーポンが利用できます!",
		coupon_application_note: "インベントリにあるクーポンは支払い時に自動的に適用されます。",
		coupon_learn_more: "クーポンについて<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">詳細を学ぶ</a>",
		add_to_cart: "Add to Cart",
		drm_third_party: "警告: このタイトルはサードパーティーのDRMを使用します",
		empty_cart: "カートを空にする",
		events_view_all: "すべて表示",
		events: "イベント",
		dlc_data_header: "ダウンロードコンテンツの詳細",
		tag_owned: "所持",
		tag_wishlist: "ウィッシュリスト",
		tag_coupon: "クーポン",
		tag_inv_gift: "ギフト",
		tag_inv_guestpass: "ゲストパス",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ 人が欲しがっています</a>",
		inventory_market_text: "インベントリ上でマーケットの価格を表示 (実験的!)",
		credits: "クレジット",
		stores: "ストア",
		region: "地域",
		all: "全て",
		programming: "プログラミング",
		translation: "翻訳"
		},
        "ko":   {},
        "nl":   {
           	empty_wishlist: "Verlanglijst leegmaken",
            	purchase_date: "(Gekocht op __date__)",
            	options: "Opties",
            	website: "Website",
            	contribute: "Bijdragen (GitHub)",
            	clear_cache: "Gecachete data verwijderen",
            	forums: "Forums",
            	coupon_available: "Je hebt een waardebon beschikbaar!",
            	coupon_application_note: "Een coupon in je inventaris wordt automatisch toegepast bij het afrekenen.",
            	coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Kom meer te weten</a> over Steam-coupons",
            	add_to_cart: "Aan winkelwagen toevoegen",
            	drm_third_party: "Waarschuwing: Dit programma maakt gebruik van DRM van derden",
            	empty_cart: "Winkelwagen leegmaken",
            	events_view_all: "ALLES BEKIJKEN",
            	events: "Evenementen",
            	dlc_data_header: "Details over downloadbare inhoud",
            	tag_owned: "In je bezit",
            	tag_wishlist: "Verlanglijst",
            	tag_coupon: "Waardebon",
            	tag_inv_gift: "Geschenk",
            	tag_inv_guestpass: "Gastenpas",
            	tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ willen dit</a>"
        	},
        "no":   {},
        "pl":   {},
        "pt":   {},
        "pt-br":{},
        "ro":   {},
        "ru":   {
		empty_wishlist: "Очистить список желаемого",
		purchase_date: "(Куплено __date__)",
		options: "Опции",
		website: "Веб-сайт",
		contribute: "Внести вклад (GitHub)",
		store: "Магазин",
		community: "Сообщество",
		news: "Новости",
		about: "О расширении",
		donate: "Пожертвовать",
		language: "Язык",
		highlight: "Подсвечивать",
		options_owned: "Продукты, которые уже у вас есть",
		options_wishlist: "Продукты, которые находятся в вашем списке желаемого",
		options_coupon: "Продукты, которые могут быть использованы с имеющимися купонами",
		options_gift: "Продукты, которые находятся в вашем инвентаре",
		options_guest: "Продукты, для которых у вас есть гостевой пропуск",
		options_friends_wishlist: "Продукты, которые находятся в списке желаемого ваших друзей",
		options_hide_install: "Спрятать кнопку «Установить Steam» в шапке",
		options_drm: "Отображать предупреждения о DRM-технологиях сторонних разработчиков (GFWL, Uplay и т.д.)",
		options_lowestprice: "Отображать информацию о ценовой истории",
		options_metacritic: "Отображать рейтинг Metacritic от пользователей",
		options_steamdb: "Отображать ссылки SteamDB",
		options_wsgf: "Отображать информацию о поддержке широкоэкранных мониторов (WSGF)",
		options_carousel_description: "Отображать описания на главной странице магазина Steam",
		options_profile_links: "Отображать ссылки в профиле на:",
		options_total_spent: "Отображать «Всего потрачено» на странице аккаунта",
		options_group_events: "Отображать события в просмотре групп",
		options_greenlight_banner: "Заменить баннер Steam Greenlight",
		options_es_bg: "Выбрать фон профиля или редактировать экран профиля",
		options_library: "Отображать кнопку «Библиотека» в шапке (БЕТА)",
		options_hide_about: "Спрятать кнопку «О Steam» в шапке",
		options_about_text: "О расширении «<a href=http://www.EnhancedSteam.com style='color:#8bc53f;'>Enhanced Steam</a>»:<p>«Enhanced Steam» — это расширение для Google Chrome и дополнение для Mozilla Firefox, которое добавляет полезные особенности на сайт Steam.<p>Особенности включают:<ul><li>Подсвечивание игр, которые уже у вас есть<li>Подсвечивание игр, которые имеются в вашем списке желаемого<li>Правильный подсчет скидок наборов, основанных на играх, которые у вас есть<li>Отображение суммы денег, которое вы потратили за время существования вашего аккаунта<li>Подсвечивание дополнений, которые у вас есть, на странице игр<li>Исправление картинки «No Image Available», которая иногда отображается для игр и дополнений<li>Предупреждение об использовании игр дополнительных клиентов и защиты (GFWL, Uplay и т.д.)</ul><p>Если вы считаете, что плагин очень хорош, то пожертвуйте любую сумму.",
		tag: "Отмечать",
		theworddefault: "По умолчанию",
		save: "Сохранить",
		saved: "Сохранено",
		view_in: "Просмотреть в",
		clear_cache: "Очистить кэшированную информацию",
		forums: "Форумы",
		coupon_available: "У вас есть купон!",
		coupon_application_note: "При покупке купон будет использован автоматически.",
		coupon_learn_more: "<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Узнать больше о</a> купонах Steam",
		add_to_cart: "Добавить в корзину",
		drm_third_party: "Внимание: эта игра использует DRM-технологию сторонних поставщиков",
		empty_cart: "Очистить корзину",
		events_view_all: "ПОКАЗАТЬ ВСЕ",
		events: "События",
		dlc_data_header: "Детали дополнений",
		tag_owned: "Приобретено",
		tag_wishlist: "Список желаемого",
		tag_coupon: "Купон",
		tag_inv_gift: "Подарок",
		tag_inv_guestpass: "Гостевой пропуск",
		tag_friends_want: "<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">Ваши друзья (__friendcount__) хотят это</a>",
		inventory_market_text: "Отображать цену Торговой площадки на странице инвентаря (Экспериментальное!)",
		credits: "Авторы",
		stores: "Магазины",
		region: "Регион",
		all: "Все",
		programming: "Программирование",
		translation: "Перевод",
		custom_background: "Пользовательский фон профиля",
		custom_background_help: "Все пользователи Enhanced Steam будут видеть выбранный фон в вашем профиле. Пользователи, у которых не установлен Enhanced Steam, будут видеть выбранный вами фон выше."
		},
        "sv":   {},
        "th":   {},
        "tr":   {},
      "zh-hans":{},
      "zh-hant":{}
    };

    // Set english defaults.
    $.each(localized_strings, function(lang, strings){
        $.each(localized_strings_default, function(key, val){
            if (!strings[key]) strings[key] = val;
        });
    });
    setTimeout(deferred.resolve, 250); // Delay ever so slightly to make sure all loc is loaded.
    return deferred.promise();
})();
