import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Styles } from '../../styles/Styles';
import { t } from '../../components/lang';
import { useSelector } from 'react-redux';
import { BackArrowWhite } from '../../assets/svg/Svgs';


const { width, height } = Dimensions.get('window');

export const TextSlider = ({ navigation }) => {
  const mainData = useSelector(st => st.mainData);

  return (
    <View style={{ backgroundColor: 'rgb(12,59,78)' }}>
      <View style={{ position: 'absolute', top: 55, width: '100%', height: 30, zIndex: 9999 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }} onPress={() => navigation.goBack()}>
          <BackArrowWhite />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ gap: 10, marginTop: 100 }} showsVerticalScrollIndicator>
        <View style={{ gap: 10, paddingHorizontal: 15 }}>
          <Text style={Styles.whiteRegular12}>Красота не только в тебе, но и вокруг тебя!</Text>
          <Text style={Styles.whiteRegular12}>Chamba - это приложение для любителей снимать крутые фото событий, происходящих не с тобой, а вокруг тебя!</Text>
          <Text style={Styles.whiteRegular12}>Chamba - это приложение для любителей снимать крутые фото событий, происходящих не с тобой, а вокруг тебя!</Text>
          <Text style={Styles.whiteRegular12}>Представляем приложение, которое перевернет твою ленту и позволит тебе увидеть мир по-новому! Вот то, что мы приготовили для тебя:</Text>
          <Text style={Styles.whiteRegular12}>Открытая платформа для абсолютно разных, творческих, креативных людей и бизнеса.</Text>
          <Text style={Styles.whiteRegular12}>Персональная лента для тебя! После быстрой регистрации, ты выбираешь любимые рубрики, а их более 40, и получаешь контент, подходящий именно тебе!</Text>
          <Text style={Styles.whiteRegular12}>Попутный контент - это контент, который косвенно или напрямую имеет отношение к выбранными тобою рубриками. Любишь путешествовать? Выбрав эту рубрику, к красочному контенту будут предложены такие рубрики как фрукты и овощи, города и страны, активный отдых, экстрим, развлечения, природа, времена года, охота и рыбалка и релакс.</Text>
          <Text style={Styles.whiteRegular12}>Уникальный контент: Все самое свежее и интересное, никаких групп, сообществ, фотофильтров и повторяющегося контента!</Text>
          <Text style={Styles.whiteRegular12}>Разнообразие контента: От спокойных пейзажей до захватывающих событий, у нас найдется что-то для каждого!</Text>
          <Text style={Styles.whiteRegular12}>Локальный контент: Получай контент в первую очередь со своего города! Интересные места, природные явления и многое другое - все это в твоей ленте!</Text>
          <Text style={Styles.whiteRegular12}>Информация о коллегах по сфере/отрасли: Ты риэлтор, строитель, блогер, бармен, шеф-повар или предоставляешь товары или услуги? Мы аккуратно предложим тебе контент от твоих коллег по отрасли, как работают другие специалисты, и будь в курсе последних трендов!</Text>
          <Text style={Styles.whiteRegular12}>Иногда мы затрудняемся в вопросе, в какую рубрику выложить контент, так как на одной публикации может быть запечатлен красивый автомобиль, милая собачка, красивые пальмы и нежное море! Куда выложить? Мы предлагаем такой контент выложить в несколько рубрик (не более 4-х), где твое искусство увидят любители разного.</Text>
          <Text style={Styles.whiteRegular12}>Автоматическая категоризация:
            Сделал(а) фото → выложил(а) согласно рубрики → улетело точно тем людям, кто не обязательно подписан на тебя, но выбрал эту рубрику! Прокачивать свой аккаунт нет необходимости, алгоритмы сами направят твои публикации тем, кто в них заинтересован!</Text>
          <Text style={Styles.whiteRegular12}>Активность просмотров Каждый пользователь может посмотреть подробную статистику по загруженной публикации.</Text>
          <Text style={Styles.whiteRegular12}>Вырази свой аккаунт индивидуальным шрифтом и цветом.</Text>
          <Text style={Styles.whiteRegular12}>Выбери уникальный шрифт и цвет для описания о себе.</Text>
          <Text style={Styles.whiteRegular12}>Подчеркни описание к публикации особенным шрифтом и цветом.</Text>
          <Text style={Styles.whiteRegular12}>Оставь запись на стене.</Text>
          <Text style={Styles.whiteRegular12}>Готовые изображения на фон для твоего аккаунта.</Text>
          <Text style={Styles.whiteRegular12}>Звуковой комментарий к публикации.</Text>
          <Text style={Styles.whiteRegular12}>Маленькое правило Не выкладывать фото с собой, в только то, что происходит вокруг тебя!</Text>
          <Text style={[Styles.whiteRegular12, { marginBottom: 50 }]}>Не трать время на скучную ленту! Скачай приложение и окунись в мир интересных открытий!</Text>
        </View>
      </ScrollView>
    </View>
  );
};


