import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Posts = () => {
	let navigate = useNavigate();
	let params = useParams();

	let [posts, setPosts] = useState({
		isLoading: false,
		data: [],
		isError: false,
	});
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/?userId=' + params.id)
			.then((data) => setPosts(data))
			.catch((err) => console.log(err));
	}, [params.id]);
	console.log(posts);
	return (
		<div>
			<button
				className='btn btn-danger m-2'
				onClick={() => {
					navigate(-1);
				}}>
				&laquo; Back
			</button>
			<h1 className='text-center mt-3'>Posts</h1>

			<ul className='list-group w-50 mx-auto'>
				{posts.data.map((el) => (
					<li className='list-group-item list-group-item-action'>
						<em>{el.title}</em>
					</li>
				))}
			</ul>
			<div className='w-75 mx-auto'>
				O'zbekiston Respublikasi Konstitutsiyasining XXI bobi nima deb
				nomlangan? <mark>==== #</mark> “Mahalliy davlat hokimiyati asoslari”
				==== “Vazirlar Mahkamasi” ==== ”Inson huquqlari va erkinliklarining
				kafolatlari” ==== “Fuqarolarning burchlari” <br />
				<br />
				<hr /> O'zbekiston Respublikasi Konstitutsiyasining qaysi bobida
				mahalliy davlat hokimiyati organlarining tizimi, vazifalari, tuzilish
				tartibi mustahkamlandi <mark>==== #</mark> XXI bobi ==== XX bobi ====
				XXIII bobi ==== XXII bobi <br />
				<br />
				<hr /> O'zbekiston Respublikasi Konstitutsiyasiga muvofiq, mahalliy
				davlat hokimiyati, hokimiyat organlari qaysi organlarga bo'lindi? <br />
				<br />
				<mark>==== #</mark>
				vakillik va ijroiya hokimiyatiga ==== viloyat va qonun chiqaruvchi
				hokimiyatga ==== ma'muriy va iqtisodiy hokimiyatiga ==== mahalliy va sud
				hokimiyatiga
				<br />
				<br />
				<hr /> Xalq deputatlari Kengashlari qaysi organga kiradi? <br />
				<br />
				<mark>==== #</mark>
				Mahalliy vakillik organlariga ==== Sud hokimiyati organlari ==== Ichki
				ishlar organlari ==== Ijroiya hokimiyat <br />
				<br />
				<hr /> Xalq deputatlari Kengashlari ishining asosiy tashkiliy - huquqiy
				shakli bu…… <mark>==== #</mark> sessiya ==== majlis ==== qurultoy ====
				Chaqiriq <br />
				<br />
				<hr /> O'zbekiston Respublikasi Konstitutsiyasining nechanchi -moddasiga
				ko'ra hokimlarning vakolat muddati - besh yil <mark>==== #</mark> 101
				==== 102 ==== 100 ==== 105 <br />
				<br />
				<hr />
				Viloyat va Toshkent shahar hokimi kim tomonidan qonunga muvofiq
				tayinlanadi hamda lavozimidan ozod etiladi <mark>==== #</mark> <br />
				<br />
				O'zbekiston Respublikasi prezidenti ==== Vazirlar Mahkamasi ==== Oliy
				Majlis ==== Xalq tomonidan <br />
				<br />
				<hr /> Tuman va shaharlarning hokimlari kim tomonidan tayinlanadi va
				lavozimidan ozod qilinadi <mark>==== #</mark> Tegishli viloyat hokimlari
				==== O'zbekiston Respublikasi Prezidenti ==== Xalq tomonidan ==== Xalq
				deputatlari <br />
				<br />
				<hr /> Tuman va shaharlarning hokimlari qaysi organ tomonidan
				tasdiqlanadi? <mark>==== #</mark> Xalq deputatlari Kengashi ====
				Tegishli viloyat hokimlari ==== Xalq qurultoylari ==== O'zbekiston
				Respublikasi Prezidenti <br />
				<br />
				<hr /> Shaharlardagi tumanlarning hokimlari kim tomonidan tayinlanadi va
				lavozimidan ozod qilinadi <mark>==== #</mark> Tegishli shahar hokimi
				==== Tegishli viloyat hokimi ==== Tegishli shaharcha yoki shahar hokimi
				==== Xalq saylovi tomonidan <br />
				<br />
				<hr />
				Tumanlarga bo'ysunadigan shaharlarning hokimlari kim tomonidan
				tayinlanadi va lavozimidan ozod qilinadi? <mark>==== #</mark> Tuman
				hokimlari ==== Xalq saylovi ==== Viloyat hokimi ==== O'zbekiston
				Respublikasi Prezidenti <br />
				<br />
				<hr /> Hozirda deyarli jahonning barcha mamlakatlarida mahalliy o'zini
				o'zi boshqarish deb ataladigan institut, O'zbekistonda nima deb ataladi
				==== # Fuqarolarni o'zini o'zi boshqarish ==== Fuqarolar yig'ini ====
				Fuqarolar maslahati ==== Xalq deputatlari kengashi <br />
				<br />
				<hr /> O`zbekiston Respublikasi prezidentining nechanchi yildagi farmoni
				asosida fuqarolar yig'inlarining uyushmasi sifatida fuqarolarning o'zini
				o'zi boshqarish organlari faoliyatini muvofiqlashtirish bo'yicha
				respublika kengashi tashkil etildi <mark>==== #</mark> 2017-yildagi ====
				2004-yildagi ==== 2010-yildagi ==== 1999-yildagi <br />
				<br />
				<hr /> 1991-yil 18-noyabrda qabul qilingan qonunlar to'g'ri berilgan
				javobni belgilang? <mark>==== #</mark> «O'zbekiston Respublikasining
				referendumi to'g'risida» va «O'zbekiston Respublikasi Prezidenti saylovi
				to'g'risida» ==== «Fuqarolarning o'zini o'zi boshqarish organlari
				to'g'risida» va «O'zbekiston Respublikasi Oliy Majlisiga saylovlar
				to'g'risida» ==== “O'zbekiston Respublikasining davlat bayrog'i
				to'g'risida“ va „Fuqarolarning o'zini o'zi boshqarish to'g'risida” ====
				“Fuqarolar saylov huquqlarining kafolatlari to'g'risida“ va
				„Fuqarolarning murojaatlari to'g'risida” <br />
				<br />
				<hr /> Markaziy saylov komissiyasi nechanchi yildan e'tiboran mustaqil
				muvaqqat organ sifatida faoliyat boshlagan? <mark>==== #</mark> <br />
				<br />
				1998-yildan ==== 1993-yildan ==== 1991-yildan ==== 1996-yil <br />
				<br />
				<hr /> O'zbekiston Respublikasi Konstitutsiyasi va qonunlarda necha
				yoshga to'lgan fuqarolarning saylash huquqiga ega ekanligi belgilab
				qo'yilgan? <mark>==== #</mark> 18 ==== 21 ==== 19 ==== 25 <br />
				<br />
				<hr />
				Markaziy saylov komissiyasi qachondan doimiy organ sifatida tashkil
				etildi? <mark>==== #</mark> 2014-yildan ==== 1991-yildan ====
				2016-yildan ==== 1998-yildan <br />
				<br />
				<hr /> Har bir fuqaro - saylovchi bir ovozga ega. ….. yoshdan kam
				bo'lmagan fuqaro O'zbekiston Respublikasi Prezidenti, …… yoshga
				to'lganlar Oliy Majlisga, ….. yoshga to'lganlar viloyat, tuman va shahar
				Kengashlariga deputat etib saylanish huquqiga ega <mark>
					==== #
				</mark>{' '}
				<br />
				<br />
				35. 25,21 ==== 25. 24. 21 ==== 35. 30. 20 ==== 35.25.20 <br />
				<br />
				<hr />
				Ko'ppartiyaviylik tizimi nima? <br /> <mark>==== #</mark> jamiyat
				hayotida ikki yoki undan ortiq partiyaning faoliyat yuritishi ====
				jamiyat hayotida bir partiyaning faoliyat yuritishi ==== deputatlari
				doimiylik asosida ishlaydigan, asosiy vazifasi qonun yaratishdan iborat
				bo'lgan partiyalar tizimi ==== davlat hokimiyatini boshqarish huquqini
				saylov yo 'li bilan qo 'Iga kiritish uchun kurashuvchi u yoki bu sinf va
				qatlamning ilg'or, ongli, uyushgan qismini birlashtirgan tashkilot.{' '}
				<br />
				<br />
				<hr /> Mustaqillik davrida tashkil topgan ilk siyosiy partiya bu…… ====
				# O'zbekiston Xalq demokratik partiyasi ==== Vatan taraqqiyoti partiyasi
				==== Erk demokratik partiyasi ==== Fidokorlar milliy-demokratik
				partiyasi <br />
				<br />
				<hr />
				1991-yilning noyabrida asos solingan partiya qaysi? <mark>==== #</mark>
				<br />
				<br />
				O'zbekiston Xalq demokratik partiyasi ==== Vatan taraqqiyoti partiyasi
				==== Fidokorlar milliy-demokratik partiyasi ==== Erk demokratik
				partiyasi <br />
				<br />
				<hr /> O'zbekiston «Vatan taraqqiyoti» partiyasi qachon tashkil topgan?
				==== # 1992-yil ==== 1995-yil ==== 1995-yil ==== 1991-yil <br />
				{'<br /><hr /> '}
				2000-yil aprelda qaysi ikki partiyalarning qo'shma qurultoyi bo'lib,
				unda har ikki partiya harakati, faoliyat dasturi yakdilligi muhokama
				qilindi, ularning birlashib ishlashlari maqsadga muvofiq, degan xulosa
				asosida ikkita partiya birlashdi? <mark>==== #</mark> Vatan
				taraqqiyoti»partiyasi va «Fidokorlar» milliy-demokratik partiyasi ====
				O'zbekiston «Adolat» sotsialdemokratik partiyasi va «Vatan
				taraqqiyoti»partiyasi ==== O'zbekiston Xalq demokratik partiyasi va
				O'zbekiston Milliy tiklanish demokratik partiyasi ==== O'zbekiston
				Milliy tiklanish demokratik partiyasi va «Fidokorlar» milliy-demokratik
				partiyasi <br />
				{'<br /><hr /> '}
				O`zbekistonda so`m valyutasi qachondan muomalaga kiritildi? <br />
				<br />
				<mark>==== #</mark> 1994 yil 1-iyul ==== 1995-yil iyunda ==== 1995-yil
				noyabrda ==== 1995-yil martda <br />
				<br />
				<hr />
				Sotsial-demokratik partiyalarning asosiy maqsadi nimaga qartilgan? ====
				# jamiyatdagi ijtimoiy muammolarni hal etishga ==== milliy mustaqillikni
				mustahkamlash ==== millatning ma'naviy birligi; Vatan—yagona oila ====
				Vatan, taraqqiyot, ijtimoiy adolat yo'lida jonini <br />
				<br />
				<hr /> 1995-yili iyunda tuzilgan partiya qaysi? <mark>==== #</mark>{' '}
				<br />
				<br />
				O'zbekiston Milliy tiklanish demokratik partiyasi ==== «Vatan
				taraqqiyoti» ==== O'zbekiston «Fidokorlar» milliy demokratik partiyasi
				==== O'zbekiston Xalq demokratik partiyasi <br />
				<br />
				<hr />
				Qaysi partiyaning maqsadi ijtimoiy himoyaga muhtoj aholi qatlami
				manfaatlarini himoya qilishga qaratilgan.? <mark>==== #</mark> <br />
				<br />
				O'zbekiston Xalq demokratik partiyasi ==== O'zbekiston «Fidokorlar»
				milliy demokratik partiyasi ==== O'zbekiston Milliy tiklanish demokratik
				partiyasi ==== «Vatan taraqqiyoti» <br />
				<br />
				<hr /> Qachon O'zbekiston «Fidokorlar» milliy demokratik partiyasi va
				O'zbekiston «Milliy tiklanish» demokratik partiyasining birlashuv
				qurultoyi bo'lib, unda asosiy masala O'zbekiston «Milliy tiklanish»
				demokratik partiyasi va «Fidokorlar» milliy demokratik partiyasini
				birlashtirish to'g'risidagi masala ko'rildi <mark>==== #</mark> 2008-yil
				iyunda ==== 2010-yil martda ==== 2000- yil aprelda ==== 1998-yil
				fevralda <br />
				<br />
				<hr /> O'zbekiston siyosiy tizimida o'ziga xos o'ringa ega bo'lib
				ulgurgan O'zbekiston Liberal-Demokratik partiyasi (O'zLiDeP)qachon
				tashkil topgan <mark>==== #</mark> 2003-yil noyabrda ==== 1995-yil
				fevralda ==== 2000-yil aprelda ==== 1995-yil iyunda <br />
				<br />
				<hr /> Qaysi partiya o'rta sinf va ehtiyojmand aholi tabaqasiga
				tayanadi, ularning siyosiy va ijtimoiy irodalarini ifodalashga intiladi
				==== # O'zbekiston «Adolat» sotsial-demokratik partiyasi ====
				O'zbekiston Liberal-Demokratik partiyasi (O'zLiDeP) ==== «Vatan
				taraqqiyoti»partiyasi ==== O'zbekiston Xalq demokratik partiyasi <br />
				<br />
				<hr /> Qaysi partiya umum-milliy siyosiy tashkilot sifatida mulkdorlar
				qatlami, kichik biznes, fermerlik va dehqon xo'jaliklari vakillari,
				ishlab chiqarishning yuqori malakali mutaxassislari va boshqaruv
				xodimlari, ishbilarmonlar manfaatlarini ifodalaydi va himoya qiladi?
				==== # O'zbekiston Liberal-Demokratik partiyasi (O'zLiDeP) ====
				O'zbekiston Xalq demokratik partiyasi ==== O'zbekiston «Adolat»
				sotsialdemokratik partiyasi ==== Vatan taraqqiyoti»partiyasi <br />
				<br />
				<hr /> Qachon O'zbekiston Respublikasining «Saylov to'g'risidagi qonun
				hujjatlari takomillashtirilishi munosabati bilan O'zbekiston
				Respublikasining ayrim qonunlariga o'zgartish va qo'shimchalar kiritish
				haqida»gi Qonuni qabul qilindi <mark>==== #</mark> 2008-yil ====
				1991-yil ==== 2017-yil ==== 2000-yil <br />
				<br />
				<hr /> Qaysi partiyaning asosiy maqsad vazifasi milliy an'analarni va
				qadriyatlarni saqlashdan iborat.? <mark>==== #</mark> O'zbekiston Milliy
				tiklanish demokratik partiyasidi ==== O'zbekiston Liberal-Demokratik
				partiyasi (O'zLiDeP) ==== O'zbekiston «Adolat» sotsialdemokratik
				partiyasi ==== Vatan taraqqiyoti»partiyasi
				<br />
				<br />
				<hr /> Qaysi partiya besh yillik faoliyati o'z vazifalari doirasida
				faoliyat yurita olmadi, deb topildi? <mark>==== #</mark> «Vatan
				taraqqiyoti» ==== O'zbekiston Milliy tiklanish demokratik partiyasi ====
				O'zbekiston «Fidokorlar» milliy demokratik partiyasi ==== Erk demokratik
				partiyasi
				<br />
				<br />
				<hr /> Qaysi partiya tashkil etilganidan hozirgi kunga qadar besh
				marotaba Prezident saylovlarida hamda parlament saylovlarida ishtirok
				etib, parlamentda o'z fraksiyasini tashkil etishga erishdi? <br />
				<br />
				<mark>==== #</mark>
				O'zbekiston Xalq demokratik partiyasi ==== O'zbekiston Milliy tiklanish
				demokratik partiyasi ==== O'zbekiston Liberal-Demokratik partiyasi
				(O'zLiDeP) ==== O'zbekiston «Fidokorlar» milliy demokratik partiyasi{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> «Saylov to'g'risidagi qonun hujjatlari takomillashtirilishi
				munosabati bilan O'zbekiston Respublikasining ayrim qonunlariga
				o'zgartish va qo'shimchalar kiritish haqida»gi Qonun asosida Oliy
				Majlisning Qonunchilik palatasidagi deputatlarining soni qancha
				deputatdan iborat bo'ldi <mark>==== #</mark> 150 ==== 120 ==== 130 ====
				160 <br />
				{'<br /><hr /> '}
				O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning Oliy Majlisga
				ilk bor Murojaatnomasi qachon e'lon qilindi. <mark>==== #</mark> <br />
				<br />
				2017-yil 22-dekabrda ==== 2017-yil 2-fevralda ==== 2016-yil 14-dekabrda
				==== 2016-yil 5-martda
				<br />
				<br />
				<hr /> 1993-yil 9-aprelda … ==== Qaraqalpog'iston Konstitutsiyasi qabul
				qilindi ==== Mo'ynoq shahrida biologik stansiya ishga tushdi . ====
				Qaralpog'iston bayrog'i qabul qilindi ==== “orol qizlari “jurnali nashri
				boshlandi . <br />
				<br />
				<hr /> Toshkentda “Amir Temur va uning jahon tarixida tutgan o'rni “
				mavzusida xalqaro ilmiy konferensiya qachon bo'lib o'tadi ? <br />
				<br />
				<mark>==== #</mark>
				1996-yil 24-oktabr ==== 1996-yil 30-sentabr ==== 1998-yil 20- oktabir
				==== 1996-yil 16-oktabir <br />
				<br />
				<hr /> 1998 -yilda qaysi ulug' allomaning yubileyi bo'lib o'tdi? <br />
				<br />
				<mark>==== #</mark>
				Ahmad Farg'oniy ==== Al-Farobiy ==== Mahmud Qoshg'ariy ==== Al-Xorazmiy{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Ro'za hayitini qachondan dam olish kuni deb e'lon qilindi? <br />
				<br />
				<mark>==== #</mark>
				1992-yil 27-martda ==== 1991-yil 2-martda ==== 1990-yil 27-martda ====
				1990-yil 5 avgust <br />
				{'<br /><hr /> '}
				Mustaqillik yillarida Xoja Ahror Valiyning necha yilligi nishonlandi?
				==== # 600 yilligi ==== 920 yilligi ==== 850 yilligi ==== 1225 yilligi{' '}
				<br />
				<br />
				<br />
				<br />
				<hr />
				1991-2007-yillarda Haj va Umra amallarini ado etgan yurtdoshlarimiz?
				==== # 50 ming ==== 100 ming ==== 10 ming ==== 5 ming <br />
				<br />
				<hr /> Ta'lim, fan va madaniyat masalalari bo'yicha Xalqaro islom
				tashkiloti - <mark>==== #</mark> ISESCO ==== OIK ==== YUNESCO ====
				YUNISEF <br />
				<br />
				<hr /> Toshkentga nechanchi yilda Islom madaniyati poytaxti maqomining
				berildi <mark>==== #</mark> 2007 ==== 1991 ==== 2020 ==== 2010 <br />
				<br />
				<hr /> Toshkentda MDHga a'zo davlatlar rahbarlari bilan bo'lgan
				uchrashuvda Ozbekiston tashabbusi - <mark>==== #</mark> kollektiv
				xavfsizlik tizimini barpo etish ==== Terrozizmga qarshi kurash markazini
				tuzish ==== Tojikistonda tinchlikni amalga oshirish ==== Islom markazini
				tuzish <br />
				<br />
				<hr /> “O'zbekiston Respublikasining Davlat Mustaqilligi asoslari
				to'g'risida»gi qonuni necha moddadan iborat? <mark>==== #</mark> 17
				modda ==== 12 modda ==== 21 modda ==== 126 modda <br />
				<br />
				<hr /> O'zbekiston Respublikasining Davlat gerbida quyidagi qaysi rang
				mavjud emas? <mark>==== #</mark> Qirmizi ==== Qora ==== Yashil ====
				Kumush <br />
				<br />
				<hr /> “O'zbekiston - bozor munosabatlariga o'tishning o'ziga xos yo'li”
				asari qachon nashr qilindi? <mark>==== #</mark> 1993 ==== 1991 ==== 1995
				==== 1999 <br />
				<br />
				<hr /> O`zbekiston Respublikasi Konstitutsiya loyihasining dastlabki
				variant qachon tayyor bo'ldi? <mark>==== #</mark> 1991-yil oktabr-noyabr
				==== 1991-yil noyabr ==== 1991-yil mart ==== 1992-yil oktyabr <br />
				<br />
				<hr /> Konstitutsiya bo'yicha umumxalq muhokamasida jami qancha fikr
				bildirildi? <mark>==== #</mark> 6 ming ==== 10 ming ==== 2 ming ==== 10
				mingdan ortiq <br />
				<br />
				<hr /> “Xalq birligi” harakati qachon tuzilgan? <mark>==== #</mark>{' '}
				<br />
				<br />
				1995-yil iyundan ==== 1991-yil iyundan ==== 1991-yil noyabrdan ====
				1992-yil oktabrdan <br />
				<br />
				<hr /> Qachonga kelib O'zSSR ning Mustaqillik Deklaratsiyasi qabul
				qilindi? <mark>==== #</mark> 1990-yil 20-iyun ==== 1991-yil 10-iyul ====
				1990-yil 24-mart ==== 1991-yil 29-dekabr <br />
				<br />
				<hr /> Qachonga kelib Respublika hududida joylashgan SSSR Ichki ishlar
				vazirligining ichki qo'shinlari bevosita O'zbekiston SSR Prezidentiga
				bo'ysuntirildi? <mark>==== #</mark> 1991-yil 25-avgust ==== 1991-yil
				21-avgust ==== 1991-yil 16-avgust ==== 1991-yil 26-avgust <br />
				<br />
				<hr /> O'zbekiston Respublikasining davlat mustaqilligi asoslari
				to'g'ristidagi qonun necha moddadan iborat? <mark>==== #</mark> 17 ====
				12 ==== 21 ==== 26 <br />
				<br />
				<hr /> 64 kishidan iborat, 2,5 yil ishlangan Konstitutsiya loyihasining
				dastlabki varianti necha moddadan iborat edi? <mark>==== #</mark> 158
				==== 149 ==== 128 ==== 150 <br />
				<br />
				<hr /> Qachonga kelib O'zbekiston Oliy Kengashi “O'zbekistonning davlat
				ramzlari to'g'risida” maxsus qaror qabul qilindi? <mark>
					==== #
				</mark>{' '}
				<br />
				<br />
				1991-yil 15-fevral ==== 1991-yil 25-fevral ==== 1991-yil 10-noyabr ====
				1991-yil 18-yanvar <br />
				<br />
				<hr /> Bugungi kunda BMTga a'zo qancha davlatdan qanchasida prezident
				lavozimi ta'sis etilgan? <mark>==== #</mark> 193, 143 ==== 200, 150 ====
				193, 153 ==== 193, 140 <br />
				<br />
				<hr />
				O'zbekistonda ilk marotaba saylovlarda qaysi partiyalardan nomzodlar
				ko'rsatilgan edi? <mark>==== #</mark> Xalq va Erk ==== Xalq va Milliy
				tiklanish ==== Xalq va Adolat ==== Xalq va Fidokorlar <br />
				<br />
				<hr /> 2016-yil 4-dekabrda bo'lib o'tgans aylovlarda Sh.Mirziyoyev
				qancha ovoz to'pladilar? <mark>==== #</mark> 88,61 ==== 86 ==== 88,1
				==== 88, 39 <br />
				<br />
				<hr /> O'zbekiston Respublikasi Oliy Majlisi Senati va Qonunchilik
				palatasi to'g'risidagi” Konstitutsiyaviy qonunlar qachon e'lon qilindi?
				==== # 2002-yil 27-yanvar ==== 2001-yil 4-yanvar ==== 2002-yil 2-iyun
				==== 2004-yil 24-mart <br />
				<br />
				<hr /> Qaysi davrlarda kelib O'zbekistonda vitse-prezident lavozimi
				faoliyat yuritgan? <mark>==== #</mark> 1990-yil 15-noyabr, 1992-yil
				4-yanvar ==== 1990-yil 15-noyabr, 1992-yil 2-mart ==== 1990-yil
				2-dekabr, 1992-yil 5-aprel ==== 1990-yil 21-noyabr, 1992-yil 4-yanvar{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Qachonga kelib O`zbekiston Respublikasi Prezidenti Shavkat
				Mirziyoyev tashabbusi bilan “O'zbekiston Respublikasi Mudofaa doktrinasi
				to'g'risida”gi qonun qabul qilindi? <mark>==== #</mark> 2018-yil
				9-yanvar ==== 2017-yil 4-yanvar ==== 2018-yil 14-yanvar ==== 2018-yil
				18-fevral <br />
				<br />
				<hr /> O'zbekiston Respubliksi mahalliy hokimiyat idoralarini qayta
				tashkil etish to'g'risida” gi qonun qachon imzolangan? <br />
				<br />
				<mark>==== #</mark> 1992-yil 4-yanvar ==== 2004-yil 29-mart ====
				1999-yil 10-dekabr ==== 2017-yil <br />
				<br />
				<hr /> Xalq deputatlari viloyat va Toshkent shahar Kengashlariga
				nechitadan ko'p bo'lmagan, tuman va shahar Kengashlariga esa nechitadan
				ko'p bo'lmagan deputatalar 5-yil muddatga saylanadi? <mark>
					==== #
				</mark>{' '}
				<br />
				<br />
				60, 30 ==== 135+15, 100 ==== 150, 100 ==== 84+16, 150 <br />
				<br />
				<hr /> Nechinchi yilda O'zbekiston Prezidenti “Mahalla institutini
				yanada takomillashtirish chora <mark>==== #</mark> 2017 ==== 2004 ====
				1992 ==== 1999 <br />
				<br />
				<hr />
				“Adolat” partiyasi qachon tuzilgan? <mark>==== #</mark> 1995-yil fevral
				==== 1995-yil iyul ==== 1991-yil noyabr ==== 2000-yil aprel <br />
				<br />
				<hr /> O'zbekiston liberal demokratik partiyasi qachon tashkil topgan?
				==== # 2003-yil noyabr ==== 2008-yil iyun ==== 2004-yil mart ====
				2003-yil fevral <br />
				<br />
				<hr /> Shavkat Mirziyoyevning “Jismoniy va yuridik shaxslarning
				murojaatlari bilan ishlash tizimini tubdan takomillashtirishga doir
				chora <mark>==== #</mark> 2016 ==== 2017 ==== 2018 ==== 2016
				<br />
				<br />
				<hr /> Harakatlar strategiyasini amalga oshirish bo'yicha Prezident
				rahbarligida necha kishilik Milliy komissiya tuzildi? <br />
				<br />
				<mark>==== #</mark> 14 ==== 12 ==== 18 ==== 72 <br />
				<br />
				<hr /> 1993-yil 1-noyabrda O'zbekistonda qanday pul muomalaga kiritildi?
				==== # so'm-kupon ==== so'm ==== Rubl ==== Manat
				<br />
				<br />
				<hr /> 1994-yil 1-iyulda so'm muomalaga kiritilganda necha xil pul
				muomalaga chiqariladi? <mark>==== #</mark> 7 ==== 6 ==== 5 ==== 9 <br />
				<br />
				<hr />
				1994-2001-yillarga mo'ljalnagan Navoiy-Uchquduq-Nukus temir yo'lining
				uzunligini belgilang? <mark>==== #</mark> 700 km ==== 100 km ==== 220 km
				==== 340 km
				<br />
				<br />
				<hr /> O'zbekiston dengizga chiqa olmaydigan nechta davlatdan bittasi
				hisoblanadi? <mark>==== #</mark> 34 ==== 40 ==== 38 ==== 25 <br />
				<br />
				<hr /> Yurtimiz 1990-yillar g'allaning necha foizi, go'shtning necha
				foizi va sutning qanchasini chetdan keltirgan? <mark>==== #</mark> 82%,
				50%, 60% ==== 50%, 82%, 60% ==== 60%, 82%, 50% ==== 45%, 60%, 50% <br />
				<br />
				<hr /> O'zbekiston qishloq xo'jaligida yerlarning suv ta'minoti va
				meliorativ holatini yaxshilash bo'yicha 2003-2009-yillar 801,5 ming AQSh
				dollari qiymatidagi nechta loyiha amalga oshirildi? <mark>==== #</mark>
				<br />
				21 ==== 18 ==== 20 ==== 28 <br />
				<br />
				<hr />
				2010-yilda qaysi ikki davlatdan olib intensive texnologiya asosida
				pakana va yarim pakana olma, nok, gilos, shaftoli, ko'chatlari ekildi?
				==== # Ukraina va Polsha ==== Germaniya va Fransiya ==== Polsha va
				Olmoniya ==== Albaniya va Ukraina <br />
				<br />
				<hr /> Sug'urta faoliyati to'g'risida qanun qachon qabul qilingan? ====
				# 2002-yil ==== 2001-yil ==== 2000-yil ==== 2004-yil <br />
				<br />
				<hr />
				Bugungi kunga kelib yurtimizda qancha hududda nechita erkin iqtisodiy
				zona faoliyat yuritmoqda? <mark>==== #</mark> 10 tada 14 ta ==== 10 tada
				19 ta ==== 9 tada 13 ta ==== 20 tada 14 ta <br />
				<br />
				<hr /> Diversifikatsiya bu? <mark>==== #</mark> lot. O'zgarish ==== lot.
				O'zgartirish ==== lot. Mansublik ==== yun. Hisoblash
				<br />
				<br />
				<hr /> 1990-yillarda o'rtacha umr yoshi 67 yoshni tashkil etgan bo'lsa,
				2015-yilda bu nechchini ko'rsatdi? <mark>==== #</mark> 74 ==== 66 ====
				80 ==== 76
				<br />
				<br />
				<hr /> Milliy valyutaning amaldagi kurs bo'yicha boshqa xorijiy
				valyutalarga erkin va cheklanmagan miqtorda almashtirilishi bu ? <br />
				<br />
				<mark>==== #</mark>
				Konvertatsiya ==== Diversifikatsiya ==== Aeronavigatsiya ==== Logistika
				<br />
				<br />
				<hr /> O'zbekistonda “Fermer xo'jaliklari to'g'risida” qonun qachon
				qabul qilindi? <mark>==== #</mark> 1998-yil ==== 1994-yil ==== 1994-yil
				==== 1999-yil <br />
				<br />
				<hr />
				Bugun O'zbekistonda qancha milliy madaniy markazlar millatlararo
				totuvlik g'oyasini hayotga tadbiq etmoqda? <mark>==== #</mark> 138 ====
				130 ==== 150 ==== 121 <br />
				<br />
				<hr /> YUNESKO tomonidan qaysi kun “Xalqaro bag'rikenglik kuni” deb
				e'lon qilingan? <mark>==== #</mark> 16-noyabr ==== 21-fevral ==== 9-may
				==== 21-dekabr <br />
				<br />
				<hr /> SSSR davrida O'zbekistonda qancha masjid, madrasa bo'lgan? <br />
				<br />
				<mark>==== #</mark>
				89, 2 ==== 90, 4 ==== 78, 5 ==== 67, 8 <br />
				<br />
				<hr />
				O'zbekiston aholisining necha foizi islom diniga e'tiqod qiladi? <br />
				<br />
				<mark>==== #</mark>
				88% ==== 82% ==== 92% ==== 96% <br />
				<br />
				<hr /> Ushbu ko'rsatilganlarning qaysi biri 1991-yilda amalga
				oshirilgan? <mark>==== #</mark> “Vijdon erkinligi va diniy tashkilotlar
				to'g'risidagi” qonun ==== din ishlari bo'yicha qo'mita ==== “Islom
				madaniyat poytaxti” deb e'lon qilindi ==== Barcha javoblar to'g'ri{' '}
				<br />
				<br />
				<br />
				<br />
				<hr />
				Bugungi kunda yurtimizda nechta diniy konfesssiya va qancha diniy
				tashkilot faoliyat yuritmoqda? <mark>==== #</mark> 17, 2238 ==== 18,
				2278 ==== 16, 2238 ==== 21, 3389 <br />
				<br />
				<hr /> Konfessiya bu…? <mark>==== #</mark> lot. Tan olish ==== lot.
				Sabr-toqat ==== yun. Hurmat qilish ==== lot. Xulq-atvor <br />
				<br />
				<hr />
				“Ta'lim to'g'risida” qonun qachon qabul qilindi? <mark>==== #</mark>
				<br />
				<br />
				1992-yil 2-iyul ==== 1990-yil 16-noyabr ==== 1997-yil 29-avgust ====
				1995-yil 5-mart <br />
				<br />
				<hr />
				Kadrlar tayyorlash milliy dasturining 1-bosqichida qancha mablag'
				sarflandi? <mark>==== #</mark> 65 mlrd ==== 60 mlrd ==== 25 mlrd ==== 10
				mlrd <br />
				<br />
				<hr />
				Kadrlar tayyorlash milliy dasturining 1-bosqichida nechiga yaqin yangi
				turdagi ta'lim muassasalari ochildi? <mark>==== #</mark> 300 ==== 200
				==== 100 ==== 400 <br />
				<br />
				<hr /> 1993-yilda 46 ta ta'lim muassasasidan qanchasida test olindi?
				==== # 19 ==== 6 ==== 21 ==== 18 <br />
				<br />
				<hr /> 2014-yilda qaysi institut tashkil etildi? <mark>
					==== #
				</mark>{' '}
				<br />
				<br />
				Toshkent stomatologiya ==== Navoiy tog' kon ==== Buxoro muhandislik
				texnologiyalar ==== barchasi <br />
				<br />
				<hr /> Magistr so'zi qaysi so'zdan olingan bo'lib “ustoz”, “boshliq”
				ma'nolarini beradi? <mark>==== #</mark> lotincha ==== yunoncha ====
				fransuscha ==== inglizcha <br />
				<br />
				<hr /> Nechinchi yildan boshlab yurtimizda to'liq 12 yillik majburiy
				ta'lim joriy etildi? <mark>==== #</mark> 2009-yil ==== 2010-yil ====
				2017-yil ==== 2019-yil <br />
				<br />
				<hr />
				O'zbekistonda qachondan boshlab faol demokratik yangilanish va
				moderniztsiyalash jarayoni kuzatildi? <mark>==== #</mark> 2000 yildan
				==== 2010 yildan ==== 2017 yildan ==== 2002 yildan <br />
				<br />
				<hr /> “SSSR GKCHP ning O'zbekiston SSR Konstitutsiyasi va qonuniga zid
				hujjatlari O'zbekiston hududida amal qilmaydi” degan qarori qachon qabul
				qilingan? ==== 1991yil 21avgust ==== 1991 yil 22avgust ==== 1991yil
				25avgust ==== 1991yil 28avgust <br />
				<br />
				<hr /> ”O'zbekiston Respublikasining Davlat madhiyasi to'g'risidagi'
				Qonun Oliy Majlisning nechanchi sessiyasida qabul qilingan? <br />
				<br />
				<mark>==== #</mark> 11 ==== 5 ==== 6 ==== 8 <br />
				<br />
				<hr /> O`zbekiston Respublikasi Konstitutsiyasi loyihasini tayyorlash
				bo'yich komissiya nechta kishidan iborat bo'lgan? <mark>==== #</mark> 64
				==== 54 ==== 65 ==== 74 <br />
				<br />
				<hr /> “O'zbekiston Respublikasi Mudofaa ishlari vazirligini tuzish
				to'g'risida” gi qonun qaysi sanada qabul qilingan? <mark>==== #</mark> 6
				sentyabr ==== 5 sentyabr ==== 7 sentyabr ==== 8 sentyabr <br />
				<br />
				<hr /> “O'zbekistonning davlat ramzlari to'g'risida ” maxsus qaror
				qachon qabul qilingan? <mark>==== #</mark> 1991 yil 15 fevral ==== 1990
				yil 20-iyun ==== 1992yil 15-iyun ==== 1990 yil 15 fevral <br />
				<br />
				<hr /> Shavkat Mirziyoyev Birlashgan Millatlar Tashkiloti Bosh
				Assambleyasining …-sessiyasida, xalq hokimiyatini nomiga emas, balki
				amalda joriy qilish mexanizmlarini mustahkamlashni global maqsad
				sifatida belgilab, mamlakatimiz barcha hududida Prezidentning virtual va
				Xalq qabulxonalari tashkil etilganini hamda hozirgi kungacha bir
				milliondan ortiq fuqarolarimiz bu qabulxonalar orqali o'zlarining
				dolzarb muammolarini hal qilganini ta'kidlab o'tdi? <mark>==== #</mark>
				<br />
				<br />
				72 ==== 74 ==== 68 ==== 75 <br />
				<br />
				<hr /> Quyidagi qaysi qatorda harakatlar strategiyasida davlat va
				jamiyat qurilishi tizimini takomillashtirishning uchinchi ustuvor
				yo'nalishi keltirilgan. <mark>==== #</mark> Iqtisodiyotni rivojlantirish
				va liberallashtirish ==== Xavfsizlik, diniy bag'rikenglik va
				millatlararo totuvlik, o'zaro manfaatli va amaliy tashqi siyosat ====
				Davlat va jamiyat qurilish tizimini takomillashtirish ==== Qonun
				ustuvorligini ta'minlash va sud-huquq tizimini yanada isloh qilish{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Quyidagi qaysi rang qonun ustuvorligi va or-nomuslilik ramzi?
				==== # Siyohrang ==== Tillarang ==== Moviy havorang ==== Oq rang <br />
				<br />
				<hr /> Uzoqqa boruvchi ta'sir vositalari va uslublari; maqsadni
				istiqbolli dinamik aniqlab olish bu—…? <mark>==== #</mark> Strategiya
				==== Sanksiya ==== Konsepsiya ==== Konversiya <br />
				<br />
				<hr />
				Huquqshunoslikda huquqbuzarga nisbatan qo'llaniladigan va uning uchun
				muayyan oqibatlar keltiruvchi chora bu—….? <mark>==== #</mark> Sanksiya
				==== Strategiya ==== Konsepsiya ==== Konversiya <br />
				<br />
				<hr /> Bozor munosabatlariga o'tish davrining birinchi bosqichida Oliy
				Kengash iqtisodiyotga oid qancha qonunlar qabul qilindi ? <br />
				<br />
				<mark>==== #</mark> 100 dan ortiq ==== 200 dan ortiq ==== 300 dan ortiq
				==== 400 dan ortiq <br />
				<br />
				<hr /> Davlat mulkini boshqarish va xususiylashtirish Davlat qo'mitasi
				qachon ta'sis etildi? <mark>==== #</mark> 1992-yil fevral ==== 1994-yil
				mart ==== 1999-yil aprel ==== 2000-yil iyul <br />
				<br />
				<hr />
				Rubl zonasi nechanchi yillar oralig'i....? <mark>==== #</mark> 1991-1993
				==== 1990-1994 ==== 1989-1994 ==== 1991-1994 <br />
				<br />
				<hr /> O'zbekistonni dengiz yo'liga olib chiqadigan eng yaqin yo'l qaysi
				davlat orqali o'tgan ? <mark>==== #</mark> Afg'oniston ==== Turkmaniston
				==== Ozarbayjon ==== Rossiya <br />
				<br />
				<hr />
				Toshkent-Samarqandni bog'lovchi tezyurar poyezd ? <mark>==== #</mark>
				<br />
				<br />
				Afrosiyob ==== Nasaf ==== Marokand ==== Lokomotiv <br />
				<br />
				<hr /> Tezyurar poyezdning 2015 yilda qaysi yo'nalishi ishga tushirildi
				? <mark>==== #</mark> Qarshi ==== Xiva ==== Buxoro ==== to'g'ri javob
				yo'q <br />
				<br />
				<hr /> Dunyoda necha davlat dengizga to'g'rida-to'g'ri chiqish imkoniga
				ega emas ? <mark>==== #</mark> 34 davlat ==== 32 davlat ==== 33 davlat
				==== 35 davlat <br />
				<br />
				<hr /> O'zbekiston havo yo'llari nechta mamlakatga parvozlarni amalga
				oshiradi ? <mark>==== #</mark> 25 ta ==== 26 ta ==== 27 ta ==== 28 ta
				<br />
				<br />
				<hr /> Toshkent xalqaro aeroportiga qachon O`zbekiston Respublikasi
				birinchi prezidenti I.Karimov nomi berildi ? <mark>==== #</mark> 2017
				==== 2015 ==== 2016 ==== 2018 <br />
				<br />
				<hr /> O'zbekiston Respublikasining “Tadbirkorlik faoliyati
				erkinligining kafolatlari to'g'risida”gi qonun qachon qabul qilingan ?
				==== # 2001 yil ==== 2002 yil ==== 2003 yil ==== 2004 yil <br />
				<br />
				<hr /> O'zbekiston “Fidokorlar” milliy demokratik partiyasi va
				O'zbekiston “Milliy tiklanish” demokratik partiyasining birlashuv
				qurultoyi qachon bo'lib o'tdi? <mark>==== #</mark> 2008-yil iyunda ====
				1995-yil iyulda ==== 2006-yil avgustda ==== 2004-yil iyulda
				<br />
				<br />
				<hr /> Jamiyatda ikki yoki undan ortiq partiyaning faoliyat yuritish
				nima deyiladi? <mark>==== #</mark> ko'ppartiyaviylik ==== mahalliy
				o'z-o'zini boshqarish ==== huquqiy-demokratik tamoyil ==== kuchli
				fuqarolik jamiyati <br />
				<br />
				<hr />
				O'zbekistonda saylovlarda ishtirok etish yoshi nech yoshdan boshlanadi?
				==== # 18 yosh ==== 16 yosh ==== 21 yosh ==== 25 yosh <br />
				<br />
				<hr /> 2017-yil O'zbekiston Respublikasi Prezidenti tomonidan qanday
				nomlandi? <mark>==== #</mark> Xalq bilan muloqot va inson manfaatlari
				==== Yoshlarni qo'llab quvvatlash ==== Kichik biznes va tadbirkorlik
				==== Keksalarni e'zozlash yili <br />
				<br />
				<hr /> Qachon Harakatlar Strategiyasi tasdiqlandi? <mark>
					==== #
				</mark>{' '}
				<br />
				<br />
				2017-yil 7-fevral ==== 2016-yil 7-fevral ==== 2016-yil 8-fevral ====
				2017-yil 6-dekabr <br />
				<br />
				<hr /> Mahalliy davlat hokimiyatining mustaqil organi bo'lgan Mahalliy
				vakillik organlariga qaysi tuzilma kiradi? <mark>==== #</mark> xalq
				deputatlari Kengashlari ==== tuman hokimliklari ==== viloyat
				hokimliklari ==== o'zini o'zi boshqarish organlari <br />
				<br />
				<hr /> Mahalliy hokimiyatning vakillik organlariga necha yoshga kirgan
				fuqarolar saylanadi? <mark>==== #</mark> 21 ==== 25 ==== 30 ==== 35{' '}
				<br />
				<br />
				<hr /> O'zbekiston aholisi 1991 yilda qanchani tashkil etgan? <br />
				<br />
				<mark>==== #</mark>
				20.7 mln ==== 21 mln ==== 21.6 mln ==== 19.8 mln <br />
				<br />
				<hr /> Qachondan boshlab barcha bolali oilalar uchun yagona nafaqa joriy
				etildi? <mark>==== #</mark> 1994-yil sentabr ==== 1993-yil mart ====
				1993-yil sentabr ==== 1995-yil may <br />
				<br />
				<hr /> O'zbekiston bugungi kunda qaysi qo'shni davlatlar o'rtasida
				bog'lovchi halqa vazifasini o'tab kelmoqda. <mark>==== #</mark> <br />
				<br />
				Qozog'iston, Qirg'iziston, Tojikiston, Turkmaniston va Afg'oniston ====
				Hindiston,Pokiston,Tojikiston, Turkmaniston va Afg'oniston ====
				Qozog'iston, Qirg'iziston,Xitoy,Tojikiston va Afg'oniston ==== Rossiya,
				Qirg'iziston, Tojikiston, Turkmaniston va Afg'oniston <br />
				<br />
				<hr /> O'zbekiston bugungi kunga qadar nechta davlat bilan rasmiy
				diplomatik munosabatlar o'rnatgan? <mark>==== #</mark> 133 ta ==== 123
				ta ==== 145 ta ==== 150 ta <br />
				<br />
				<hr /> Vazirlar Mahkamasining «O'zbekiston Respublikasi Tashqi ishlar
				vazirligi faoliyatini tashkil etish masalalari to'g'risida»gi qarori
				qachon qabul qilindi. <mark>==== #</mark> 1992-yil may ==== 1993-yil
				aprel ==== 1992-yil dekabr ==== 1993- yil may <br />
				<br />
				<hr />
				O'zbekiston Respublikasining «Tashqi siyosiy faoliyati konsepsiyasi»
				qachon qabul qilingan. <mark>==== #</mark> 2012-yil sentabrda ====
				1993-yil aprelda ==== 1992-yil dekabrda ==== 1993- yil mayda <br />
				<br />
				<hr /> 1993-yil yanvar oyida Toshkentda tashkil etilgan uchrashuvda
				qaysi tashkilot tuzildi? <mark>==== #</mark> Markaziy Osiyo Hamdo'stligi
				==== Mustaqil davlatlar hamdo'stligi ==== Kollektiv xavfsizlik kengashi
				==== Mintaqaviy xavfsizlik tashkiloti <br />
				<br />
				<hr /> Qachondan boshlab O'zbekistonning qo'shni davlatlar bilan
				munosabatida yangi davr boshlandi? <mark>==== #</mark> 2017-yildan ====
				2015-yildan ==== 2016-yildan ==== 2018-yildan <br />
				<br />
				<hr /> 2017-yil qaysi shaharda “Markaziy Osiyo: yagona tarix va umumiy
				kelajak, barqaror rivojlanish va tarqqiyot yo'lidagi hamkorlik? <br />
				<br />
				<mark>==== #</mark>
				Samarqandda ==== Toshkentda ==== Buxoroda ==== Xorazmda <br />
				<br />
				<hr /> 2017-yil o'tkazilgan “Markaziy Osiyo: yagona tarix va umumiy
				kelajak, barqaror rivojlanish va tarqqiyot yo'lidagi hamkorlik?
				Mavzusidagi anjuman qaysi tashkilot homiyligida o'tkazildi? <br />
				<br />
				<mark>==== #</mark> BMT ==== YUNESKO ==== YUNESIF ==== MDH <br />
				<br />
				<hr /> Qachon O'zbekiston va Qozog'iston o'rtasida abadiy do'stlik
				shartnomasi imzolangan? <mark>==== #</mark> 1998-yil oktabrda ====
				1995-yil martda ==== 1996-yil sentabrda ==== 1997-yil avgustda <br />
				<br />
				<hr /> O'zbekiston va Turkmaniston o'rtasidagi keng ko'lamli hamkorlikka
				oid dolzarb yo'nalishlarni qamrab olgan davlatlararo, hukumatlararo va
				idoralararo darajada imzolangan xalqaro shartnomalar ikki mamlakat
				munosabatlarining mustahkam huquqiy asosi bo'lib xizmat qilmoqda.? ====
				# 150 dan ortiq ==== 100 dan ortiq ==== 200 dan ortiq ==== 250 dan ortiq{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Shavkat Mirziyoyevning Prezident sifatida xorijiy mamlakatlarga
				ilk rasmiy tashrifi qachon, qaysi davlatga amalga oshirildi.? <br />
				<br />
				<mark>==== #</mark>
				2017-yil 6-7-mart kunlari Turmanistonga ==== 2017-yil 16-17-may kunlari
				Tojikistonga ==== 2017-yil 1-2-yanvar kunlari AQSHga ==== 2017-yil
				19-20-Oktabr kunlari Hindistonga
				<br />
				<br />
				<hr /> “Milliy xavfsizlik tog'risida”gi qonun nechanchi yilda muhokama
				uchun taqdim etilgan? <mark>==== #</mark> 1996yil 24 aprel ==== 1997 yil
				avgust ==== 1998yil sentyabr ==== 1996 yil avgust <br />
				<br />
				<hr /> O'zbekistonda Bosh vazir lavozimi qachon tasis etilgan? <br />
				<br />
				<mark>==== #</mark>
				1992yil 4yanvar ==== 1995yil 15noyabr ==== 1992yil 5yanvar ==== 1995yil
				29dekabr <br />
				<br />
				<hr /> Nechanchi yildan boshlab parlament Oliy Majlis nomi bilan
				ataladigan bo'ldi? <mark>==== #</mark> 1995 yil ==== 2005 yil ==== 2004
				yil ==== 2003 yil <br />
				<br />
				<hr /> Sovet Ittifoqida davlat to'ntarishi sodir bo'lgan sanalarni
				ko'rsating? <mark>==== #</mark> 19-21 avgust ==== 19-20 sentyabr ====
				18-21 oktyabr ==== 19-21 sentyabr
				<br />
				<br />
				<hr /> O'zbekiston SSRning Mustaqillik Deklaratsiyasi nechanchi
				sessiyada qabul qilingan? <mark>==== #</mark> O'zbekiston SSR Oliy
				Kengashining II sessiyasida ==== O'zbekiston SSR Oliy Kengashining IV
				sessiyasida ==== O'zbekiston SSR Oliy Kengashining III sessiyasida ====
				O'zbekiston SSR Oliy Kengashining I sessiyasida <br />
				<br />
				<hr /> Vakolatli davlat organiga saylangan kishi, vakil nima deyiladi?
				==== # Deputat ==== Vazir ==== Delegat ==== Elchi <br />
				<br />
				<hr /> Qachongacha Vazirlar Mahkamasiga Prezident raislik qilgan? <br />
				<br />
				<mark>==== #</mark>
				2003-yilda ==== 2008-yilda ==== 2001-yilda ==== 2004-yilda <br />
				<br />
				<hr />
				O'zbekiston konstitutsiyasining qaysi moddalari Vazirlar Mahkamasining
				faoliyatiga bag'ishlandi? <mark>==== #</mark> 98-moddasi ==== 88-moddasi
				==== 89-moddasi ==== 76-moddasi <br />
				<br />
				<hr /> O'zbekistonda favqulodda sudlar tuzishga ……. <mark>
					==== #
				</mark>{' '}
				<br />
				<br />
				yo'l qo'yilmaydi ==== majbur qilinadi ==== zarurat sababchi bo'lishi
				mumkin ==== faqat poytaxtda ruxsat bor <br />
				<br />
				<hr /> Bugungi kunda O'zbekistonda fuqarolarni qamoqqa olishga sanksiya
				berish huquqi …… o'tkazildi? <mark>==== #</mark> Sudga ==== Proukrorga
				==== Prezidentga ==== Hokimga
				<br />
				<br />
				<hr /> O'zbekiston Respublikasida 14-yanvar qachondan boshlab «Vatan
				himoyachilari kuni» deb e'lon qilindi? ==== 1993-yildan ==== 1994-yildan
				==== 1992-yildan ==== 1991-yildan <br />
				<br />
				<hr /> Lotincha - sud qilish, sud jarayoni degan ma'noni anglatadigan
				atamani toping. <mark>==== #</mark> Yurisdiksiya ==== Doktrina ====
				Referendum ==== amnitsiya <br />
				<br />
				<hr /> Mahalliy vakillik organlariga nima kiradi <mark>==== #</mark>
				<br />
				<br />
				xalq deputatlari Kengashlari ==== o'zini o'zi boshqarish organlari ====
				nodavlat organlar ==== ijroiya organlari
				<br />
				<br />
				<hr /> Ijroiya hokimiyatiga nimalar kiradi? <mark>==== #</mark> hokim va
				uning ijroiya apparati kiradi ==== mahalliy va o'zizini o'zi boshqarish
				organlari ==== nodavlat va notijorat organlar ==== vakilliy va notijorat
				organlar <br />
				<br />
				<hr />
				”Adolat” sotsial-demokratik partiyasi qachon tashkil topgan? <br />
				<br />
				<mark>==== #</mark> 1995 y ==== 1999 y ==== 1992 y ==== 1998 y <br />
				<br />
				<hr /> O'zbekiston ekologik harakati qachon tashkil topgan? <br />
				<br />
				<mark>==== #</mark> 2008 y ==== 2009 y ==== 2000 y ==== 1998 y
				<br />
				<br />
				<hr /> «Xalq bilan muloqot va inson manfaatlari yili» <br />
				<br />
				<mark>==== #</mark> 2017 y ==== 2018 y ==== 2019 y ==== 2016 y <br />
				<br />
				<hr /> Birlashgan Millatlar Tashkiloti Bosh Assambleyasining qaysi
				sessiyasida, xalq hokimiyatini nomiga emas, balki amalda joriy qilish
				mexanizmlarini mustahkamlashni global maqsad sifatida belgilab,
				mamlakatimiz barcha hududida Prezidentning virtual va Xalq qabulxonalari
				tashkil etilganini hamda hozirgi kungacha bir milliondan ortiq
				fuqarolarimiz bu qabulxonalar orqali o'zlarining dolzarb muammolarini
				hal qilganini ta'kidlab o'tdi? <mark>==== #</mark> 72-sessiyasida ====
				75-sessiyasida ==== 70-sessiyasida ==== 79-sessiyasida <br />
				<br />
				<hr /> O'zbekiston Respublikasini rivojlantirishning beshta ustuvor
				yo'nalishi bo'yicha tasdiqlangan Harakatlar strategiyasi qaysi yillarga
				mo'ljallagan? <mark>==== #</mark> 2017-2021-yillarga ====
				2019-2023-yillarga ==== 2016-2021-yillarga ==== 2017-2022-yillarga{' '}
				<br />
				<br />
				<hr /> Ma'lumki, Harakatlar strategiyasida davlat va jamiyat qurilishi
				tizimini takomillashtirishning 5 ta ustuvor yo'nalishi keltirilgan.
				Shundan iqtisodiyotni rivojlantirish va liberallashtirish nechanchi
				yo'nalishga kiradi? <mark>==== #</mark> III ==== II ==== I ==== IV{' '}
				<br />
				<br />
				<hr /> Ma'lumki, Harakatlar strategiyasida davlat va jamiyat qurilishi
				tizimini takomillashtirishning 5 ta ustuvor yo'nalishi keltirilgan.
				Shundan Qonun ustuvorligini ta'minlash va sud-huquq tizimini yanada
				isloh qilish nechanchi yo'nalishga kiradi? <mark>==== #</mark> II ==== I
				==== III ==== IV <br />
				<br />
				<hr />
				…. idan boshlab respublika hududida yagona, cheklanmagan va qonuniy
				to'lov vositasi sifatida milliy valyuta - so'm muomalaga chiqarilgan.
				==== # 1994-yil 1-iyul ==== 1995-yil 10-iyul ==== 1994-yil 1-iyun ====
				1993-yil 9-iyul <br />
				<br />
				<hr /> Paxtachilikda Isroil texnologiyalari asosida tomchilatib
				sug'orish usuli qachondan boshlab joriy etildi? <mark>==== #</mark> 1998
				y ==== 1996 y ==== 2000 y ==== 2001 y <br />
				<br />
				<hr /> Qachondan boshlab Prezident farmoni asosida sug'urta
				tashkilotlari 3 yil muddatga daromad solig'idan ozod qilindi? <br />
				<br />
				<mark>==== #</mark>
				2002-yil fevraldan ==== 2001-yil fevraldan ==== 2000-yil fevraldan ====
				2003-yil fevraldan <br />
				<br />
				<hr /> O'zbekiston Respublikasining «Erkin iqtisodiy zonalar
				to'g'risida»gi qonuni qachon qabul qilindi? <mark>==== #</mark> 1996 y
				==== 1998 y ==== 1997 y ==== 2000 y <br />
				<br />
				<hr />
				Keksalarni e'zozlash yili» deb e'lon qilingan yilni aniqlang? <br />
				<br />
				<mark>==== #</mark>
				2015-yil ==== 2016-yil ==== 2011-yil ==== 2010-yil <br />
				<br />
				<hr /> O'zbekistonda ta'lim nechta tilda olib boriladi? <br />
				<br />
				<mark>==== #</mark> 7 ta ==== 9 ta ==== 12 ta ==== 18 ta <br />
				<br />
				<hr />
				2017-yilga qadar O'zbekistonda nechta diniy konfessiyalar faoliyat
				yuritib keldi? <mark>==== #</mark> 16 ta ==== 10 ta ==== 29 ta ==== 19
				ta <br />
				<br />
				<hr />
				O'zbekiston aholisining .. foizi islom diniga, .. foizidan ziyodi boshqa
				dinlarga e'tiqod qiladi, .. foizi hech qaysi dinga e'tiqod qilmaydi ====
				# 88, 10, 1,8 % ==== 88, 12, 1,8 % ==== 80, 10, 1,8 % ==== 88, 10, 1 %
				<br />
				<br />
				<hr /> Qachon Islom Hamkorligi tashkilotining ta'lim, fan va madaniyat
				masalalar bo'yicha tuzilmasi - AYSESKO tomonidan «Toshkent - Islom
				madaniyati poytaxti» deb e'lon qilindi? <mark>==== #</mark> 2007-yilda
				==== 2009-yilda ==== 2004-yilda ==== 2000-yilda <br />
				<br />
				<hr /> Qachon O'zbekiston Respublikasi Prezidentining farmoniga binoan
				Vazirlar Mahkamasi huzurida Din ishlari bo'yicha qo'mita tashkil etildi?
				==== # 1992-yilda ==== 1990-yilda ==== 1993-yilda ==== 1998-yilda <br />
				<br />
				<hr /> Toshkent islom instituti kimning nomiga qo'yilgan? <br />
				<br />
				<mark>==== #</mark> Imom Buxoriy ==== Mahmud Zamaxshariy ==== Iso
				Termiziy ==== Al Moturidiy <br />
				<br />
				<hr /> Quyidagi qaysi atama lotinchadan - tan olish, e'tirof etish degan
				ma'nolarni anglatadi? <mark>==== #</mark> Konfessiya ==== Tolerantlik
				==== Seminariya ==== suverenitet <br />
				<br />
				<hr />
				«Ta'lim to'g'risida»gi yangi tahrirdagi qonun hamda Kadrlar tayyorlash
				milliy dasturi qachon qabul qilingan? <mark>==== #</mark> 1997-yil
				29-avgustda ==== 1991-yil 29-avgustda ==== 1994-yil 29-avgustda ====
				1998-yil 29-avgustda
				<br />
				<br />
				<hr /> O'zbekistonda Kadrlar tayyorlash milliy dasturi necha bosqichdagi
				islohotlar asosida amalga oshirildi? <mark>==== #</mark> 3 ta ==== 4 ta
				==== 2 ta ==== 7 ta <br />
				<br />
				<hr /> O'zbekistonda Kadrlar tayyorlash milliy dasturining I bosqich
				qaysi yillarni o'z ichiga oladi? <mark>==== #</mark> 1997-2001-yillarni
				==== 1997-2010-yillarni ==== 1992-2001-yillarni ==== 1997-2005-yillarni
				<br />
				<br />
				<hr />
				Qachondan boshlab har yili 1-oktabr «O'qituvchilar va murabbiylar kuni»
				sifatida nishonlanib kelinmoqda? <mark>==== #</mark> 1997 y ==== 1994 y
				==== 1992 y ==== 1999 y <br />
				<br />
				<hr /> O'zbekiston Prezidenti Shavkat Mirziyoyev «Maktabgacha ta'lim
				tizimini boshqarishni takomillashtirish to'g'risida»gi farmonni qachon
				imzoladi? <mark>==== #</mark> 2017-yil 30-sentabrda ==== 2018-yil
				30-sentabrda ==== 2019-yil 30-sentabrda ==== 2017-yil 10-sentabrda{' '}
				<br />
				<br />
				<hr />
				Viloyatlardagi pedagogika institutlari negizida Andijon Davlat
				universiteti, Buxoro Davlat universiteti, Termiz Davlat universiteti,
				Urganch Davlat universiteti, Qarshi Davlat universiteti qachon tashkil
				qilindi? <mark>==== #</mark> 1992 y ==== 1997 y ==== 1999 y ==== 2000 y{' '}
				<br />
				<br />
				<br />
				<br />
				<hr />
				Prezidentning 1992-yil fevraldagi farmoni bilan nechta viloyat
				pedagogika institutlariga universitet maqomi berildi? <br />
				<br />
				<mark>==== #</mark> 8 ta ==== 5 ta ==== 9 ta ==== 10 ta <br />
				<br />
				<hr /> Qachon Davlat test markazi tashkil etildi? <mark>==== #</mark>
				<br />
				<br />
				1994-yil ==== 1997-yil ==== 1991-yil ==== 1999-yil <br />
				<br />
				<hr />
				Qachondan boshlab oliy ta'lim muassasalariga test orqali qabul joriy
				etildi? <mark>==== #</mark> 1992-yil ==== 1997-yil ==== 1991-yil ====
				1999-yil <br />
				<br />
				<hr />
				Qaysi yildan ta'lim olishda kontrakt-shartnoma to'lovi joriy etildi?
				==== # 1996-yil ==== 1997-yil ==== 1991-yil ==== 1999-yil <br />
				<br />
				<hr />
				2012-yilga qadar aspirantura … va doktarantura .. dan iborat bo'ldi.
				==== # 3 yil, 3 yil ==== 3 yil, 5 yil ==== 2 yil, 3 yil ==== 4 yil, 3
				yil <br />
				<br />
				<hr /> Qaysi yillar davomida bir bosqichli doktarantura faoliyat olib
				bordi? <mark>==== #</mark> 2013-2017-yillarda ==== 2012-2018-yillarda
				==== 2015-2017-yillarda ==== 2011-2017-yillarda <br />
				<br />
				<hr /> Qachon Xorazm Ma'mun akademiyasi qayta tiklandi? <br />
				<br />
				<mark>==== #</mark> 1997-yil ==== 1998-yil ==== 1991-yil ==== 1999-yil
				<br />
				<br />
				<hr />
				”Innovatsion rivojlanish vazirligini tashkil etish to'g'risida» qaror
				qachon e'lon qilindi? <mark>==== #</mark> 2017-yil ==== 2011-yil ====
				2019-yil ==== 2016-yil <br />
				<br />
				<hr /> Milliy kurash bo'yicha ilk xalqaro musobaqa qaysi shaharlarda
				o'tkazildi? <mark>==== #</mark> Termiz va Shahrisabz ==== Toshkent va
				Buxoro ==== Samarqand va Termiz ==== Shaxrisabz va Qarshi <br />
				<br />
				<hr /> Milliy kurash bo'yicha ilk xalqaro musobaqa qachon o'tkazildi?
				==== # 1992-yil ==== 1993-yil ==== 1998-yil ==== 1991-yil <br />
				<br />
				<hr /> O'zbekistonda kurash federatsiyasi qachon tuzildi? <br />
				<br />
				<mark>==== #</mark>
				1992-yil ==== 1993-yil ==== 1998-yil ==== 1991-yil <br />
				<br />
				<hr /> Xalqaro kurash Assotsiatsiyasi qaysi shaharda tuzildi? <br />
				<br />
				<mark>==== #</mark>
				Toshkent ==== Termiz ==== Buxoro ==== Shahrisabz <br />
				<br />
				<hr /> O'zbek hakami Ravshan Ermatov qachon FIFA hakami statusini oldi?
				==== # 2003 y ==== 2006 y ==== 2004 y ==== 2009 y <br />
				<br />
				<hr />
				O'zbekiston Respublikasi mustaqillikka erishgandan keyin mamlakat
				yoshlarini birlashtirish uchun qanday tashkilot tuzildi? <br />
				<br />
				<mark>==== #</mark> ”Yoshlar ittifoqi” ==== ”Yosh Kadrlar” ====
				”Kamolot” ==== ”Kamalak” <br />
				<br />
				<hr />
				O'zini o'zi boshqaradigan nodavlat, notijorat tashkilot - O'zbekiston
				Respublikasi “Kamolot” yoshlar ijtimoiy harakati qachon tuzildi? <br />
				<br />
				<mark>==== #</mark>
				2001-yil ==== 1991-yil ==== 1994-yil ==== 1997-yil <br />
				<br />
				<hr /> ”O'zbekiston yoshlar ittifoqi” raisi bir paytning o'zida… <br />
				<br />
				<mark>==== #</mark>
				Prezidentning Davlat maslahatchisi ==== Senat a'zosi ==== Viloyat hokimi
				==== Prezident devoni xodimi <br />
				<br />
				<hr /> O'zbekiston Respublikasi Prezidentining iqtidorli yoshlarning
				chet ellarga o'qishini qo'llab-quvvatlash bo'yicha tashkil etilgan
				jamg'arma qaysi? <mark>==== #</mark> Umid ==== Ulug`bek ==== Fitrat ====
				Kamolot <br />
				<br />
				<hr /> ”Bizning asosiy vazifamiz - yoshlarning o'z salohiyatini namoyon
				qilishi uchun zarur sharoitlar yaratish, zo'ravonlik g'oyasi “virusi”
				tarqalishining oldini olishdir… “. Ushbu fikrlar muallifini aniqlang?
				==== # O'zbekiston Respublikasi hozirgi Prezidenti Shavkat Mirziyoyev
				==== O'zbekiston Respublikasi birinchi Prezidenti Islom Karimov ====
				O'zbekiston yoshlar ittifoqi” raisi Qahramon Quronboyev ==== BMT Bosh
				kotibi Antoniu Guterrish <br />
				<br />
				<hr /> Qachon mamlakatimizdagi barcha harbiy akademik litseylarga
				“Temurbeklar maktabi” nomi berildi? <mark>==== #</mark> 2017-yil iyul
				==== 2018-yil iyul ==== 2017-yil iyun ==== 2016-yil iyul <br />
				<br />
				<hr /> Qachon Alisher Navoiy tavalludining 550-yilligi keng nishonlandi?
				==== # 1991-yil ==== 1999-yil ==== 1994-yil ==== 1996-yil
				<br />
				<br />
				<hr /> Qachon hukumat qarori bilan Ulug'bek yili deb e'lon qilindi? ====
				# 1994-yil ==== 1999-yil ==== 1991-yil ==== 1996-yil <br />
				<br />
				<hr /> 1999-yil 175 yilligi nishonlangan allomani aniqlang? <br />
				<br />
				<mark>==== #</mark>
				Ajiniyoz Qosiboy o'g'li ==== Ahmad al-Farg'oniy ==== Muhammad Rizo
				Erniyozbek o'g'li Ogahiy ==== Amir Temur <br />
				<br />
				<hr /> Tavalludining 100 yilligi nishonlangan yurtimiz taraqqiyoti
				yo'lida fidokorona xizmat qilgan, milliy adabiyotimiz va madaniyatimiz
				rivojiga ulkan hissa qo'shgan atoqli davlat arbobi, taniqli yozuvchi
				kim? <mark>==== #</mark> Sharof Rashidov ==== Zulfiya ==== Is'hoqxon
				Ibrat ==== Hamid Olimjon <br />
				<br />
				<hr /> Qur'oni Karimning shayx Abdulaziz Mansur tarjimasida izohli
				nashri qayerda tayyorlandi? <mark>==== #</mark> Toshkent Islom
				universitetida ==== O'zbekiston musulmonlari idorasi ==== Mir Arab
				madrasasi ==== Buxoro Davlat Universiteti <br />
				<br />
				<hr /> Hijriy sana bo'yicha 910 yilligini nishonlangan allomani
				aniqlang? <mark>==== #</mark> Abduxoliq G'ijduvoniy ==== Abu Mansur
				al-Moturidiy ==== Burhoniddin al-Marg'inoniy ==== Navoiy
				<br />
				<br />
				<hr /> 70 yilligi nishonlanib, “Do'stlik” ordeni bilan mukofotlangan
				shahar qaysi? <mark>==== #</mark> Nukus ==== Samarqand ==== Buxoro ====
				Karmana <br />
				<br />
				<hr />
				Qarshi shahrining 2700 yilligi nishonlangan yilni aniqlang? <br />
				<br />
				<mark>==== #</mark> 2002 y ==== 2000 y ==== 1998 y ==== 2010 y <br />
				<br />
				<hr /> Qur'oni Karim qachon ilk bor o'zbek tiliga tarjima qilindi? ====
				# 1992 y ==== 1991 y ==== 1990 y ==== 1994 y <br />
				<br />
				<hr /> Qachon Ma'rifat markazi majmuasi ochildi? <mark>==== #</mark>
				<br />
				<br />
				2011 y ==== 2000 y ==== 2010 y ==== 2016 y <br />
				<br />
				<hr /> 1996-yili Toshkentda tashkil etilgan muzeylarni aniqlang? <br />
				<br />
				<mark>==== #</mark>
				Temuriylar tarixi, Olimpiya shon-shuhrati muzeylari ==== Qatag'on
				qurbonlari xotirasi, Olimpiya shon-shuhrati muzeylari ==== Qatag'on
				qurbonlari xotirasi,Temuriylar tarixi muzeylari ==== Temuriylar tarixi,
				Arxeologiya muzeyi <br />
				<br />
				<hr />
				O'zbekistonda qachondan boshlab faol demokratik yangilanish va
				moderniztsiyalash jarayoni kuzatildi? <mark>==== #</mark> 2010 yildan
				==== 2017yildan ==== 2017yildan ==== 2017yildan <br />
				<br />
				<hr /> O'zbekiston Respublikasi I Prezidenti I A Karimov qachon ilk
				rasmiy safarni amalga oshirdi? <mark>==== #</mark> 1991 yil 17-19-
				avgust ==== 1990 yil 17-19- avgust ==== 1991 yil 13-19- avgust ==== 1991
				yil 17-18- avgust <br />
				<br />
				<hr /> O'zbekistonning yangi konstitutsiyasini tayyorlash g'oyasi
				dastlab qachon ilgari surilgan? <mark>==== #</mark> 1990 yil mart ====
				1990 yil 20 iyun ==== 1991yil oktyabr ==== 1990 yil iyun <br />
				<br />
				<hr /> O'zbekiston Respublikasi Pezidentligiga muqobillik asosida saylov
				qachon bo'lgan? <mark>==== #</mark> 1991yil 29-dekabr ==== 1991yil
				8-dekabr ==== 1991yil 19-dekabr ==== 1991yil 20-dekabr <br />
				<br />
				<hr /> Nechanchi yilda o'tkazilgan referendumda Prezidentlik lavozimi
				vakolati 5yildan 7yilga uzaytirildi? <mark>==== #</mark> 2002y 27-yanvar
				==== 2002y 2-yanvar ==== 2002y 7-yanvar ==== 2002y 17-yanvar <br />
				<br />
				<hr /> Prezident mamlakat Qurolli kuchlarining oily bosh qo'mondoni
				hisoblanishi konstitutsiyamizning nechanchi moddasida aytib o'tilgan?
				==== # 93-modda ==== 92-modda ==== 91-modda ==== 94-modda <br />
				<br />
				<hr /> Qachon uzunligi 220 km bo'lgan G'uzor-Boysun-Qumqo'rg'on
				yo'nalishi qurildi ? <mark>==== #</mark> 2007 yil ==== 2006 yil ====
				2001 yil ==== 2002 yil <br />
				<br />
				<hr /> Qachondan tezyurar poyezddan tijorat maqsadida foydalanildi ?
				==== # 2011 yil oktabr ==== 2012 yil oktabr ==== 2009 yil oktabr ====
				2010 yil oktabr <br />
				<br />
				<hr /> 2017-yilga kelib mamlakatimizda nechta dan ortiq oliy o'quv yurti
				bo'lgan ? <mark>==== #</mark> 80 ==== 69 ==== 90 ==== 120 <br />
				<br />
				<hr /> BMTning Bosh kotibi kim? <mark>==== #</mark> Antoniu Guterrich
				==== Si Szinpin ==== Kristin Lagard ==== Rumen Pudev <br />
				<br />
				<hr />
				O'zbekiston Prezidenti Sh. Mirziyoyevning Tojikistonga oliy darajadagi
				uchrashuvi qachon amalga oshirildi? <mark>==== #</mark> 2018-yil mart
				oyida ==== 2018-yil iyun oyida ==== 2017-yil mart oyida ==== 2018-yil
				may oyida
				<br />
				<br />
				<hr /> O'zbekiston Respublikasining «Tashqi siyosiy faoliyati
				konsepsiyasi» qachon qabul qilingan <mark>==== #</mark> 2012-yil
				sentabrda ==== 1993-yil aprelda ==== 1992-yil dekabrda ==== 1993- yil
				mayda <br />
				<br />
				<hr />
				Qachon o'zbek palovi YuNESKOning nomoddiy madaniy meros ro'yxatiga
				kiritildi? <mark>==== #</mark> 2016-yili ==== 2018-yili ==== 2017-yili
				==== 2019-yili <br />
				<br />
				<hr />
				Zulfiya nomidagi davlat mukofoti qachon qabul qilingan? <br />
				<br />
				<mark>==== #</mark> 1999 y ==== 1995 y ==== 1997 y ==== 1998 y <br />
				<br />
				<hr /> Toshkentda nechta xorijiy davlatning elchixonalari faoliyat olib
				bormoqda? <mark>==== #</mark> 45 ta ==== 50 ta ==== 14 ta ==== 90 ta{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Toshkentda nechta xorijiy davlatning faxriy konsulxonalari
				faoliyat olib bormoqda? <mark>==== #</mark> 9 ta ==== 10 ta ==== 17 ta
				==== 40 ta <br />
				<br />
				<hr /> Markaziy Osiyo Hamdo'stligiga qachon asos solindi? <br />
				<br />
				<mark>==== #</mark>
				1993-yil yanvar ==== 1999-yil yanvar ====- 1992-yil yanvar ==== 1995-yil
				yanvar <br />
				<br />
				<hr /> Turkmaniston Prezidentining saroyida Orolni qutqarish Xalqaro
				jamg'armasining majlisi qachon bo'lib o'tdi? <mark>==== #</mark> <br />
				<br />
				1999-yil ==== 1999-yil ==== 1998-yil ==== 1996-yil <br />
				<br />
				<hr /> Qaysi yilda O'zbekiston Prezidenti Sh. Mirziyoyevning
				Qozog'iston, Turkmaniston va Qirg'iziston davlatlariga rasmiy
				tashriflari amalga oshirildi? <mark>==== #</mark> 2017-yil ==== 2018-yil
				==== 2016-yil ==== 2019-yil <br />
				<br />
				<hr /> 2018-yil mart oyida O'zbekiston Prezidenti Sh. Mirziyoyev qaysi
				davlatda oliy darajadagi uchrashuvni amalga oshirdi? <mark>==== #</mark>
				<br />
				<br />
				Tojikiston ==== Turkmaniston ==== Afg`oniston ==== Rossiya <br />
				<br />
				<hr /> BMT homiyligida “Markaziy Osiyo: yagona tarix va umumiy kelajak,
				barqaror rivojlanish va taraqqiyot yo'lidagi hamkorlik” mavzusida
				anjumanida qancha xorijiy ishtirokchilar qatnashdi? <mark>==== #</mark>
				<br />
				<br />
				500 ==== 290 ==== 1000 ==== 278 <br />
				<br />
				<hr />
				O'zbekistonning Qozog'iston bilan ikki tomonlama munosabatlari qachon
				o'rnatildi? <mark>==== #</mark> 1992-y ==== 1994-y ==== 1993-y ====
				1991-y <br />
				<br />
				<hr />
				O'zbekiston Respublikasi bilan Qozog'iston Respublikasi o'rtasida
				Strategik sheriklik to'g'risidagi shartnoma qachon imzolangan edi? ====
				# 2013 y ==== 2009 y ==== 2003 y ==== 2004 y <br />
				<br />
				<hr /> Qachon Qirg'iziston Prezidenti Almazbek Atambayev taklifiga
				binoan Prezident Shavkat Mirziyoyev Bishkekda bo'ldi? <br />
				<br />
				<mark>==== #</mark> 2017-yil ==== 2018-yil ==== 2016-yil ==== 2019-yil{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Qachon O'zbekiston va Qirg'iziston o'rtasida yopib qo'yilgan
				chegara postlari ochildi? <mark>==== #</mark> 2017-yil ==== 2018-yil
				==== 2016-yil ==== 2019-yil <br />
				<br />
				<hr /> O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning
				taklifiga binoan mamlakatimizga kelgan Qirg'iziston Respublikasining
				prezidenti kim edi? <mark>==== #</mark> Sooronbek Jenbekov ==== Almazbek
				Atambayev ==== Askar Akayev ==== N.Nazarbayev <br />
				<br />
				<hr /> Qachon O'zbekiston Prezidenti Shavkat Mirziyoyev Tojikiston
				Prezidenti Imomali Rahmon bilan ilk bor uchrashdi? <mark>==== #</mark>
				<br />
				2017-yil ==== 2018-yil ==== 2016-yil ==== 2019-yil <br />
				<br />
				<hr /> O'zbekiston Prezidenti Shavkat Mirziyoyev Tojikiston Prezidenti
				Imomali Rahmon bilan ilk bor qaysi shaharda uchrashdi? <br />
				<br />
				<mark>==== #</mark> Ar-Riyod ==== Toshkent ==== Buxoro ==== Dushanbe{' '}
				<br />
				<br />
				<hr />
				1991-yildan 2016-yilga qadar O`zbekiston va Turkmaniston rahbarlarining
				necha marta oliy darajadagi tashriflari amalga oshirildi? <br />
				<br />
				<mark>==== #</mark> 11 ==== 14 ==== 21 ==== 24 <br />
				<br />
				<hr /> Yurtimizda qachon Respublika turkman madaniyat markazi faoliyat
				boshladi? <mark>==== #</mark> 2001-y ==== 2000-y ==== 2003-y ==== 2007-y{' '}
				<br />
				<br />
				<hr /> Bugungi kunda O'zbekistonning turli viloyatlarida turkman
				millatiga mansub qancha aholi yashab kelmoqda? <mark>==== #</mark> 170
				ming ==== 128 ming ==== 10 ming ==== 17 ming <br />
				<br />
				<hr /> Bugungi kunda O'zbekistonning nechta maktabda turkman tili
				o'qitilmoqda? <mark>==== #</mark> 70 ==== 58 ==== 49 ==== 30
				<br />
				<br />
				<hr /> O'zbekiston Respublikasi va Rossiya Federatsiyasi o'rtasidagi
				1998-2007-yillar uchun iqtisodiy hamkorlikni chuqurlashtirish
				to'g'risidagi shartnoma qachon imzolangan? <mark>==== #</mark> 1998 y
				==== 1994 y ==== 1995 y ==== 1999 y <br />
				<br />
				<hr /> O'zbekiston Respublikasi va Rossiya Federatsiyasi o'rtasidagi
				Strategik sheriklik to'g'risidagi shartnoma qachon imzolandi? <br />
				<br />
				<mark>==== #</mark>
				2004-y ==== 2002-y ==== 2006-y ==== 2009-y <br />
				<br />
				<hr />
				O'zbekiston Respublikasi va Rossiya Federatsiyasi o'rtasidagi
				Ittifoqchilik munosabatlari to'g'risidagi shartnoma qachon imzolangan?
				==== # 2005-y ==== 2002-y ==== 2006-y ==== 2009-y <br />
				<br />
				<hr /> O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning
				Rossiya Federatsiyasiga davlat tashrifi yakunlari bo'yicha siyosiy,
				savdo-iqtisodiy, sarmoyaviy, harbiy-texnikaviy, migratsiya sohalari,
				shuningdek, mintaqalararo hamkorlik, turizm va sog'liqni saqlashga oid
				umumiy qiymati 16 milliard dollar bo'lgan … hujjat imzolandi? <br />
				<br />
				<mark>==== #</mark> 55 ta ==== 38 ta ==== 50 ta ==== 51 ta <br />
				<br />
				<hr /> 1991-yil 27-dekabrda O'zbekiston Respublikasini tan olgan
				davlatni ko'rsating? <mark>==== #</mark> Xitoy ==== Hindiston ==== AQSH
				==== Koreya <br />
				<br />
				<hr /> Qachon Shavkat Mirziyoyev va Si Szinpin O'zbekiston Respublikasi
				bilan Xitoy Xalq Respublikasi o'rtasidagi Qo'shma bayonotni imzoladilar?
				==== # 2017-yil 11-13-may ==== 2018-yil 11-13-may ==== 2017-yil 1-may
				==== 2017-yil 11-13-mart <br />
				<br />
				<hr /> O'zbekiston Respublikasi va Xitoy Xalq Respublikasi o'rtasida
				qachon “Strategik sheriklik munosabatlari o'rnatish to'g'risidagi
				qo'shma bayonot” imzolandi? <mark>==== #</mark> 2012-y ==== 2018-y ====
				2010-y ==== 2011-y <br />
				<br />
				<hr /> AQSH va O'zbekiston o'rtasida diplomatik aloqalar qachon
				o'rnatildi? <mark>==== #</mark> 1992-y fevral ==== 1992-y may ====
				1992-y mart ==== 1991-y fevral <br />
				<br />
				<hr /> Toshkentda birinchi bo'lib qaysi davlatning elchixonasi ochildi?
				==== # AQSH ==== Fransiya ==== Turkiya ==== Rossiya <br />
				<br />
				<hr /> O'zbekistondagi birinchi chet el elchixonasi qachon ochildi? ====
				# 1992-y ==== 1995-y iyul ==== 1994-y iyul ==== 1999-y iyun <br />
				<br />
				<hr /> AQSH ma'muriyati Markaziy Osiyo mamlakatlarining mustaqilligi,
				barqarorligi va ravnaqidan manfaatdor ekanini, O'zbekiston bilan qalin
				munosabatlar o'rnatishni istayotganini, O'zbekistonning tezroq dunyo
				hamjamiyatig integratsiyalashuvi yo'lida yordam berajagini ta'kidlagan
				AQSH prezidentini aniqlang? <mark>==== #</mark> Klinton ==== Obama ====
				Tramp ==== Bayden <br />
				<br />
				<hr /> Qachon O'zbekistonning AQSHdagi elchixonasi ochildi? <br />
				<br />
				<mark>==== #</mark>
				1996-y iyun ==== 1998-y iyul ==== 1996-y iyul ==== 1999-y iyun <br />
				<br />
				<hr /> Qaysi yilda Islom Karimov Amerika jamoatchiligi tomonidan
				“Xalqaro miqyosdagi lider” mukofoti bilan taqdirlandi? <br />
				<br />
				<mark>==== #</mark> 2002 y ==== 2000 y ==== 2008 y ==== 2001 y <br />
				<br />
				<hr />
				Qachon O'zbekiston Prezidenti Shavkat Mirziyoyev BMTning 72-sessiyayasi
				munosabati bilan Amerika Qo'shma Shtatlarida bo'ldi va u yerda istiqomat
				qilayotgan bir guruh o'zbekistonliklar bilan uchrashdi? <br />
				<br />
				<mark>==== #</mark> 2017-y sentabr ==== 2018-y sentabr ==== 2017-y
				oktabr ==== 2019-y sentabr <br />
				<br />
				<hr />
				Qachon O'zbekiston Yaponiya bilan diplomatik munosabatlarni o'rnatdi?
				==== # 1992 y ==== 1994 y ==== 1996 y ==== 1999 y <br />
				<br />
				<hr /> 2015-yil oktabrda O'zbekistonga tashrif buyurgan Yaponiya Bosh
				vazirini aniqlang? <mark>==== #</mark> Sindzo Abe ==== Jun'itiro
				Koidzumi ==== Xasimoto ==== Obui <br />
				<br />
				<hr />
				2016-yilga qadar O'zbekiston Prezidenti I.Karimov Hindistonga necha
				marotaba tashrif buyurgan? <mark>==== #</mark> 5 marta ==== 3 marta ====
				7 marta ===== 9 marta <br />
				<br />
				<hr /> O'zbekistonda Koreya investitsiyasi ishtiroki bilan nechta
				korxona faoliyat olib bormoqda? <mark>==== #</mark> 400 dan ortiq ====
				700 dan ortiq ==== 100 dan ortiq ==== 40 dan ortiq <br />
				<br />
				<hr /> Qachondan boshlab Toshkentda Koreya ta'lim markazi faoliyat olib
				bormoqda? <mark>==== #</mark> 1992-y ==== 1993-y ==== 1997-y ==== 1995-y{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> O'zbekiston Respublikasi qachon BMTga qabul qilindi? <br />
				<br />
				<mark>==== #</mark>
				1992-y mart ==== 1991-y mart ==== 1992-y may ==== 1999-y mart <br />
				<br />
				<hr /> BMT ning 50 yilligi qachon nishonlandi? <mark>==== #</mark>{' '}
				<br />
				<br />
				1995-y ==== 1999-y ==== 1992-y ==== 1997-y <br />
				<br />
				<hr />
				BMT ning qaysi Bosh kotibi O'zbekistonga tashrifi davomida Islom Karimov
				qabrini ziyorat qilib keyin Orolbo'yi hududidagi vaziyat bilan tanishdi?
				==== # A.Guterrish ==== B.G'oli ==== Pan Gi Mun ==== Kofe Anan <br />
				<br />
				<hr />
				O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev qachon Birlashgan
				Millatlar Tashkiloti Bosh Assambleyasining 72-sessiyasida nutq so'zladi?
				==== # 2017-yil 19-sentabr ==== 2018-yil 19-sentabr ==== 2012-yil
				19-sentabr ==== 2019-yil 19-sentabr <br />
				<br />
				<hr /> BMT homiyligidagi ta'lim, fan va madaniyat bilan shug'ullanuvchi
				xalqaro tashkilot -bu… <mark>==== #</mark> YUNESKO ==== UNISEF ==== JST
				==== MOQ <br />
				<br />
				<hr /> Qachon O'zbekistonni YUNESKOga a'zolikka qabul qilish marosimi
				bo'ldi? <mark>==== #</mark> 1993-y ==== 1998-y ==== 1992-y ==== 1991-y{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> YUNESKOning jahon madaniy qadriyatlar ro'yxatiga nechta ob'yekt
				kiritilgan? <mark>==== #</mark> 411 ==== 2357 ==== 2110 ==== 347 <br />
				<br />
				<hr /> YUNESKO qaroriga binoan qaysi shaharda Markaziy Osiyo
				tadqiqotlari xalqaro instituti tashkil etildi? <mark>==== #</mark>{' '}
				<br />
				<br />
				Samarqand ==== Buxoro ==== Xiva ==== Toshkent <br />
				<br />
				<hr /> Amir Temurga bag'ishlangan bir haftalik xalqaro anjumanlar
				sababli O'zbekistondagi qaysi shahar YUNESKOning jahon madaniy
				qadriyatlar ro'yxatiga kiritildi? <mark>==== #</mark> Shahrisabz ====
				Buxoro ==== Xiva ==== Toshkent <br />
				<br />
				<hr /> Qachon Buxoro va Xiva shaharlarining 2500 yillik muborak sanalari
				Parijda keng nishonlandi? <mark>==== #</mark> 1997-y ==== 1991-y ====
				1993-y ==== 1999-y <br />
				<br />
				<hr />
				Qachon O'zbekistonda BMT shafeligida “6+2” muloqot guruhining
				Afg'oniston muammosi yechimiga bag'ishlangan xalqaro anjumanini
				o'tkazishga erishildi? <mark>==== #</mark> 1999-y ==== 1994-y ====
				1993-y ==== 1998-y <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 1-yo`nalishi qaysi? <mark>==== #</mark> inson qadrini
				yuksaltirish va erkin fuqarolik jamiyatini yanada rivojlantirish orqali
				xalqparvar davlat barpo etish ==== Mamlakatimizda adolat va qonun
				ustuvorligi tamoyillarini tarqqiyotning eng asosiy va zarur shartiga
				aylantirish ==== Milliy iqtisodiyotni jadal rivojlantirish va yuqori
				o`sish suratlarini ta'minlash ==== Adolatli ijtimoiy siyosat yuritish,
				inson kapitalini rivojlantirish <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 2-yo`nalishi qaysi? <mark>==== #</mark> Mamlakatimizda
				adolat va qonun ustuvorligi tamoyillarini tarqqiyotning eng asosiy va
				zarur shartiga aylantirish ==== Adolatli ijtimoiy siyosat yuritish,
				inson kapitalini rivojlantirish ==== Milliy iqtisodiyotni jadal
				rivojlantirish va yuqori o`sish suratlarini ta'minlash ==== inson
				qadrini yuksaltirish va erkin fuqarolik jamiyatini yanada rivojlantirish
				orqali xalqparvar davlat barpo etish <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 3-yo`nalishi qaysi? <mark>==== #</mark> Milliy
				iqtisodiyotni jadal rivojlantirish va yuqori o`sish suratlarini
				ta'minlash ==== Milliy manfaatlardan kelib chiqqan holda umumbashariy
				muammolarga yondashish ==== Adolatli ijtimoiy siyosat yuritish, inson
				kapitalini rivojlantirish ==== Mamlakatimiz xavfsizligi va mudofaa
				salohiyatini kuchaytirish <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 4-yo`nalishi qaysi? <mark>==== #</mark> Adolatli
				ijtimoiy siyosat yuritish, inson kapitalini rivojlantirish ====
				Mamlakatimiz xavfsizligi va mudofaa salohiyatini kuchaytirish ====
				Milliy manfaatlardan kelib chiqqan holda umumbashariy muammolarga
				yondashish ==== Mamlakatimizda adolat va qonun ustuvorligi tamoyillarini
				tarqqiyotning eng asosiy va zarur shartiga aylantirish <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 5-yo`nalishi qaysi? <mark>==== #</mark> ma'naviy
				taraqqiyotni ta'minlash va sohani yangi bosqichga olib chiqish ====
				Mamlakatimiz xavfsizligi va mudofaa salohiyatini kuchaytirish ====
				Milliy manfaatlardan kelib chiqqan holda umumbashariy muammolarga
				yondashish ==== Mamlakatimizda adolat va qonun ustuvorligi tamoyillarini
				tarqqiyotning eng asosiy va zarur shartiga aylantirish <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 6-yo`nalishi qaysi? <mark>==== #</mark> Milliy
				manfaatlardan kelib chiqqan holda umumbashariy muammolarga yondashish
				==== Mamlakatimizda adolat va qonun ustuvorligi tamoyillarini
				tarqqiyotning eng asosiy va zarur shartiga aylantirish ==== ma'naviy
				taraqqiyotni ta'minlash va sohani yangi bosqichga olib chiqish ====
				Mamlakatimiz xavfsizligi va mudofaa salohiyatini kuchaytirish <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 7-yo`nalishi qaysi? <mark>==== #</mark> Mamlakatimiz
				xavfsizligi va mudofaa salohiyatini kuchaytirish ==== Mamlakatimizda
				adolat va qonun ustuvorligi tamoyillarini tarqqiyotning eng asosiy va
				zarur shartiga aylantirish ==== ma'naviy taraqqiyotni ta'minlash va
				sohani yangi bosqichga olib chiqish ==== Milliy manfaatlardan kelib
				chiqqan holda umumbashariy muammolarga yondashish <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 1-yo`nalishi nechta maqsadni amalga oshirishga
				mo`ljallangan? <mark>==== #</mark> 12 ==== 11 ==== 10 ==== 8 <br />
				<br />
				<hr />
				Quyidagilardan qaysi biri mahaliy davlat hokimyati organlari faoliyatini
				takomillashtirish maqsadiga kiradi? <mark>==== #</mark> mahaliy
				boshqaruv faoliyatini raqamlashtirish ==== Doimiy faoliyat olib
				boradigan deputatlar korpusini shakllantirish ==== Hokim yordamchisi
				institutining samarali faoliyatini tashkil etish ==== Kadrlar va moddiy
				resurslardan oqilona doydalanish
				<br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra electron davlat xizmatlari ulushi qanchani tashkil
				etishi lozim? <mark>==== #</mark> 100% ==== 90% ==== 70% ==== 80% <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra davlat xizmatlarining qancha qismi xususiy sektorga
				o`tkazilishi mo`ljallangan? <mark>==== #</mark> 20% ==== 15% ==== 40%
				==== 35% <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 1-yo`nalishining xalq bilan muloqotning samarali
				mexanizmlarini takomillashtirish maqsadi necha banddan iborat? <br />
				<br />
				<mark>==== #</mark> 5 ==== 7 ==== 8 ==== 6 <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 2-yo`nalishi nechta maqsadni amalga oshirishga
				mo`ljallangan? <mark>==== #</mark> 8 ==== 10 ==== 5 ==== 15 <br />
				<br />
				<hr />
				Yangi O`zbekistonning taraqqiyot strategiyasi qaysi yillarga
				mo`ljallangan? <mark>==== #</mark> 2022-2026 ==== 2022-2027 ====
				2021-2026 ==== 2017-2021 <br />
				<br />
				<hr /> Yangi O`zbekistonning taraqqiyot strategiyasiga ko`ra huquqiy
				hujjatlarni yurist ishtirokisiz tayyorlash imkonini beruvchi qanday
				platform yaratilishi ko`zda tutilgan? <mark>==== #</mark> Legal Tech
				==== Moodle ==== Yurist Info ==== Advocat Info <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasining 3-yo`nalishi nechta maqsadni amalga oshirishga
				mo`ljallangan? <mark>==== #</mark> 8 ==== 10 ==== 5 ==== 15 <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra kelgusi besh yilda aholi jon boshiga YaIM qanchaga
				oshishi belgilangan? <mark>==== #</mark> 1,6 barobar ==== 1 barobar ====
				2,1 barobar ==== 4 barobar <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra kelgusi 2030-yilda aholi jon boshiga YaIM qanchani
				tashkil etishi belgilangan? <mark>==== #</mark> 4000 $ ==== 3000 $ ====
				5000 $ ==== 3800 $ <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra xususiy sektorning YaIM dagi ulushini qanchaga
				yetkazish belgilangan? <mark>==== #</mark> 80% ==== 50% ==== 40% ====
				60% <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra sanoat mahsulotlari ishlab chiqarish hajmi qanchaga
				oshirilishi belgilangan? <mark>==== #</mark> 1,4 barobar ==== 1,1
				barobar ==== 2,1 barobar ==== 4,7 barobar <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra eksport hajmi qanchaga oshishi belgilangan? <br />
				<br />
				<mark>==== #</mark>
				3 barobar ==== 2 barobar ==== 2,1 barobar ==== 4 barobar <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra qayta tiklanuvchi energiya manbalari ulushi
				qanchaga yetkazilishi belgilangan? <mark>==== #</mark> 25 % ==== 15 %
				==== 60 % ==== 40 % <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra mamlakatda investitsiya muhitini yaxshilash
				maqsadida qaysi viloyatda “Investorlarga ko`mak markazi” ochilishi
				belgilangan? <mark>==== #</mark> Surxondaryo ==== Buxoro ==== Samarqand
				==== Toshkent <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra maktabgacha ta'lim qamrovi qanchani tashkil etishi
				belgilangan? <mark>==== #</mark> 80% ==== 90 % ==== 70% ==== 60% <br />
				<br />
				<hr /> 2026-yilga kelib nodavlat OTM lar soni kamida nechta bo`lishi
				kerakligi belgilangan? <mark>==== #</mark> 50 ==== 60 ==== 37 ==== 70{' '}
				<br />
				<br />
				<br />
				<br />
				<hr /> Strategiyaga muvofiq qachonga kelib Global inovatsion indeksda
				top-50 mamlakatlari orasiga kirish belgilangan? <mark>==== #</mark> 2030
				==== 2028 ==== 2035 ==== 2026 <br />
				<br />
				<hr /> Qanday prinsp asosida ijtimoiy-ma'naviy muhitni optimallashtirish
				xaritasi shakllantirilishi belgilangan? <mark>==== #</mark>
				mahalla-tuman-viloyat-respublika ==== Respublika-mahalla ====
				Mahalla-oila ==== Oila-mahalla-davlat <br />
				<br />
				<hr />
				2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra qaysi fanni 2030-yilgacha rivojlantirish
				konsepsiyasi amalga oshirilishi belgilangan? <mark>==== #</mark> tarix
				==== Ona tili ==== matematika ==== informatika <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra Toshkent shahrining ko`kalamzorlashtirish ishini
				nqanchaga yetkazish belgilangan? <mark>==== #</mark> 30 % ==== 40% ====
				15 % ==== 50% <br />
				<br />
				<hr /> 2022-2026-yillarga mo`ljallangan yangi O`zbekistonning taraqqiyot
				strategiyasiga ko`ra BMT ning qaysi tashabbusi ilgari surilishi
				belgilangan? <mark>==== #</mark> inson huquqlari yo`lida harakatga
				dav'at ==== Bag`rikenglik rezolutsiyasi ==== Terorizmga qarshi kurash
				==== Oziq-ovqat muammosini bartaraf qilish
			</div>
		</div>
	);
};

export default Posts;
