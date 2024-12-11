import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Styles } from "../../styles/Styles"

export const AboutApplication = () => {


  return <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }} showsVerticalScrollIndicator={false}>
    <Text style={[Styles.balihaiMedium13, styles.line, { marginBottom: 10 }]}>
      Взрывная энергия в фото и видео формате!
    </Text>

    <View style={{ gap: 15, marginBottom: 10, }}>
      <Text style={Styles.balihaiMedium13}>Chamba – это приложение для любителей снимать крутые фото и короткие видео событий,
        <View>
          <Text style={styles.line}>
            происходящих не с тобой, а вокруг тебя!
          </Text>
        </View>
      </Text>
      <Text style={Styles.balihaiMedium13}>
        Представляем приложение, которое перевернет твою  ленту и позволит тебе увидеть мир по-новому!
      </Text>
      <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row', marginTop: 0, marginBottom: 0 }}>
        <Text style={[[{ fontSize: 16, textAlign: 'center', width: 'auto' }, styles.line]]}>
          Вот что мы приготовили для тебя!
        </Text>
      </View>
      <Text style={Styles.balihaiMedium13} >
        <Text style={styles.line}>
          Персональная лента:
          {"\n"}
        </Text>
        После быстрой регистрации, ты выбираешь любимые рубрики, а их более 35, и получаешь контент, подходящий именно тебе!
      </Text>
    </View>
    <View style={{ gap: 15, marginBottom: 20 }}>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Попутный контент: {"\n"}
        </Text>
        <Text style={{ textDecorationLine: "underline" }}>
          Любите путешествовать?
        </Text>
        Выбрав эту рубрику, к красочному контенту будут предложены такие рубрики как фрукты, овощи, еда и напитки, города и страны, активный отдых, экстрим, развлечения, природа, времена года, охота и рыбалка, и релакс.{"\n"}
        <Text style={{ textDecorationLine: "underline" }}>
          Интересуешься недвижимостью?
        </Text>
        Мы предложим тебе не только крутой контент о новостройках, но и попутно идеи для строительства и даже информацию о строительных инструментах!
      </Text>
      {/* <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Автоматическая категоризация:
          {"\n"}
        </Text>
        <Text style={{ textDecorationLine: 'underline' }}>
          Обожаешь свою любимую собачку?
        </Text>
        Мы сразу предложим загрузить ее в рубрику “Животные” и твой контент направится точно тем людям, которые выбрали эту рубрику!{"\n"}
        <Text style={{ textDecorationLine: 'underline' }}>
          Вы балдеете от своей спортивной машины?
        </Text>
        Загрузив ее в рубрику “Транспорт”, Ваш контент направится точно тем людям, которые выбрали эту рубрику.
      </Text> */}

      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Локальный контент:{"\n"}
        </Text>
        Получай контент в первую очередь со своего города! Интересные места, природные явления и многое другое - все это в твоей ленте!
      </Text>

      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Информация о коллегах по сфере/отрасли:{"\n"}
        </Text>
        Ты риэлтор, строитель, блогер, бармен, шеф-повар или предоставляешь товары и услуги? Мы аккуратно предложим тебе контент от твоих коллег по отрасли, как работают другие специалисты, и будь в курсе последних трендов!
      </Text>

      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Скоростная работа:{"\n"}
        </Text>
        Смотри контент и выкладывай свои фото в мгновение ока!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Уникальный контент:{"\n"}
        </Text>
        Мы покажем тебе все самое свежее и интересное, никаких групп, сообществ, фотофильтров и повторяющегося контента!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Разнообразие контента:{"\n"}
        </Text>
        От спокойных пейзажей до захватывающих событий, у нас найдется что-то для каждого!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        <Text style={[styles.line, { borderBottomWidth: 0 }]}>
          Активность просмотров:{"\n"}
        </Text>
        Каждый пользователь может посмотреть подробную статистику по загруженной публикации.{"\n"}
        Не трать время на скучную ленту! Скачай приложение и окунись в мир интересных открытий!
      </Text>
      <Text style={Styles.balihaiMedium13}>
        Красота не только в тебе, но и вокруг тебя!
      </Text>

    </View>
    <View style={{ marginBottom: 55 }}>
      <Text style={[Styles.balihaiMedium13, styles.line, { borderBottomWidth: 0 }]}>Рекомендации</Text>
      <Text style={Styles.balihaiMedium13}>Автор канала не выкладывает:</Text>
      <Text style={[Styles.balihaiMedium13,]}>- Контент с собой.</Text>
      <Text style={[Styles.balihaiMedium13,]}>- Чужой и запрещённый контент.</Text>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  line: {
    color: "#000",
    fontWeight: "700",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  }
})