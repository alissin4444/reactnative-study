import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [state, setState] = useState({
    text: 'Let me show what are you missing?',
    image: [
      'https://upload.wikimedia.org/wikipedia/pt/thumb/5/52/Eleven_%28Stranger_Things%29.jpg/220px-Eleven_%28Stranger_Things%29.jpg',
      'https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f1/Eleven_S03_portrait.png/revision/latest?cb=20190722075442',
      'https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/07/cropped-stranger-things-3-eleven-hopper-phone-5.jpg',
      'https://img.huffingtonpost.com/asset/5c33c5ad2400005000614e9a.jpeg?ops=scalefit_630_noupscale',
      'https://vignette.wikia.nocookie.net/strangerthings8338/images/6/62/Eleven_S2_revised.png/revision/latest?cb=20171124231338',
      'https://www.rbsdirect.com.br/imagesrc/24147539.jpg?w=700',
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-02/1/12/asset/buzzfeed-prod-web-06/sub-buzz-2889-1549041346-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*',
      'https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/e/eleven-stranger-things-0719-1400x800.jpg',
      'https://s2.r29static.com//bin/entry/b0c/x,80/2205824/how-old-are-the-emstranger-2205824.jpg',
      'https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/e/eleven-stranger-things-1017-1400x800.jpg',
      'https://noticiasdatv.uol.com.br/media/uploads/stranger_things-eleven-empoderada.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/eleven-in-stranger-things-1563805530.jpg?crop=0.580xw:1.00xh;0.140xw,0&resize=480:*',
      'https://assets.papelpop.com/wp-content/uploads/2016/07/Millie-Bobby-Brown-Stranger-Things-1.jpg',
      'https://assets.teenvogue.com/photos/5d23b6ac86bc970008ec7747/1:1/w_3520,h_3520,c_limit/ST3-Production-Still-2.jpg',
      'https://s2.glbimg.com/kMP8mQ5aSCUsHbHpqRn89mu9BoA=/0x0:1700x1021/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/q/z/DTaB1UTDuBN0sGTsA7Hw/millie-bobby-brown-eleven-stranger-things.jpg',
      'http://sm.ign.com/ign_br/screenshot/default/stranger-things-eleven-dies-pic_mg2q.jpg',
      'https://images.popbuzz.com/images/60568?crop=16_9&width=660&relax=1&signature=s2LmT5OfS5WYbje1Pc9i2n9Y26Y=',
      'https://www.gazetadopovo.com.br/viver-bem/wp-content/uploads/2018/01/elev2-600x431.jpg',
      'https://conteudo.imguol.com.br/c/entretenimento/ec/2019/06/30/mike-e-eleven-em-cena-da-terceira-temporada-de-stranger-things-1561928048213_v2_600x337.jpg',
      'https://static1.purebreak.com.br/articles/9/86/65/9/@/325708--stranger-things-eleven-estara-mais-ev-diapo-2.jpg',
      'https://vignette.wikia.nocookie.net/strangerthings/images/1/10/Eleven_S2.png/revision/latest?cb=20171030015602&path-prefix=pt-br',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEYGiDojNe3YTVTMU6W_vFhUrU6cQLhXFD3hXO6HjzLxSkQ_U',
      'https://img.ibxk.com.br/2019/07/11/11163413172049.jpg?w=1120&h=420&mode=crop&scale=both',
      'https://i.ytimg.com/vi/Lw8T9TOot-M/maxresdefault.jpg',
      'https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/07/ST3-Production-Still-8-920x460.jpg',
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/15/08/stranger-things-eleven-shirt.jpg',
      'https://metropolitanafm.com.br/wp-content/uploads/2019/08/Stranger-Things-Eleven-Powers-Main-Image-690x410.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2558,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1509436487/Screen_Shot_2017-10-31_at_1.30.22_AM_eocjxe',
      'https://static.quizur.com/i/b/5aa02b2b7265d1.591480855aa02b2b61e743.92728174.jpg',
      'https://media.altpress.com/uploads/2018/06/175f5d63-eleven-stranger-things-696x385.jpg',
      'https://abrilcapricho.files.wordpress.com/2019/03/stranger-things-02.jpg?quality=85&strip=info&w=1024',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiLztERVZDOlGUJzWEyMg-YhcwvvbWCOY6IqFiRE_VG46jsgKkA',
      'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/11/Millie-Bobby-Brown-GettyImages-546307056-920x584.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmL67CQfeHDtz-rqQlqHyYkyoXjvtMpdB53jBJUsFefhO3fUHf',
      'https://images.summitmedia-digital.com/preview/images/2019/06/24/milliebobbybrownhairnm.jpg',
      'https://timedotcom.files.wordpress.com/2018/04/time-100-millie-bobby-brown.jpg?quality=85&crop=942px%2C19px%2C1463px%2C1463px&resize=600%2C600&strip&zoom=2',
      'https://www.gotceleb.com/wp-content/uploads/photos/millie-bobby/brown-2017-screen-actors-guild-awards-in-los-angeles/Millie-Bobby-Brown:-2017-Screen-Actors-Guild-Awards--37-662x975.jpg',
      'https://i0.wp.com/temalguemassistindo.com.br/wp-content/uploads/2019/01/terceira-temporada-stranger-things-teoria-e1546370655595.jpg?fit=574%2C347&ssl=1',
      'https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/2016_StrangerThingsEleven_Screenshot_260716-920x610.gif',
      'https://static1.purebreak.com.br/articles/0/88/27/0/@/334210--stranger-things-eleven-millie-bobby-950x0-1.jpg',
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/14/09/millie-bobby-brown-stranger-things-eleven.jpg',
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-07/11/18/campaign_images/22aaddfceded/qual-eleven-de-stranger-things-voce-e-2-1740-1562868290-0_dblbig.jpg',
      'https://static.insider.com/image/59f73b8383bef04a008b46da-750.jpg',
      'https://imgix.bustle.com/elite-daily/2017/05/08022026/eleven-stranger-things-season2.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format&q=70',
      'https://www.mundopositivo.com.br/wp-content/uploads/2019/07/10-vezes-que-as-garotas-de-stranger-things-3-roubaram-a-cena-1-440x310.png',
      'https://i2.wp.com/valkirias.com.br/wp-content/uploads/2017/12/valkirias-eleven.png?fit=1080%2C530',
      'https://i.ytimg.com/vi/x8TaeKqXDcA/maxresdefault.jpg',
      'https://fsmedia.imgix.net/7d/fc/51/98/98f6/4344/a65d/4eb79f6d896d/eleven-aka-jane-hopper-in-stranger-things-3.jpeg?rect=71%2C159%2C674%2C337&auto=format%2Ccompress&dpr=2&w=650',
      'https://media.giphy.com/media/3ohzgN8AQh5S8BjZq8/giphy.gif',
      'https://imirante.com/oestadoma/imagens/2017/09/03/1504456194-469670993-747x429.jpg',
      'https://midiastm.gazetaonline.com.br/_midias/jpg/2019/08/21/605x330/1_00000-6278517.jpg',
      'https://nypdecider.files.wordpress.com/2019/07/eleven-is-a-real-girl-.jpg?quality=90&strip=all&w=646&h=431&crop=1',
      'https://static1.purebreak.com.br/articles/7/67/92/7/@/260779-apos-criticas-millie-bobby-brown-a-ele-diapo-2.jpg',
      'https://www.rbsdirect.com.br/imagesrc/23830826.jpg?w=700',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiqz0nKSNsjqZeDzM_961wqzTZIlkze13Fampa5KVZ_kjlphH',
      'https://www.unilad.co.uk/wp-content/uploads/2016/11/11347UNILAD-imageoptim-Eleven-Stranger-Things.jpg',
      'https://i.pinimg.com/originals/cb/69/c1/cb69c113e1b88f997dc8dd39019b51be.png',
      'https://www.cengnews.com/wp-content/uploads/2019/07/Millie-Bobby-Brown-as-Eleven-in-Stranger-Things-Season-3-e1563221890510-660x310.jpg',
    ],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [imageAtual, setImageAtual] = useState('');
  const randomParadise = () => {
    let num = Math.floor(Math.random() * state.image.length);
    let newImageAtual = state.image[num];
    setImageAtual(newImageAtual);
    setModalOpen(true);
  };
  return (
    <>
      <Modal animationType="fade" visible={modalOpen}>
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.modalMainTitle}>Paradise</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setModalOpen(false)}>
            <View>
              <Image
                style={styles.modalImage}
                source={{
                  uri: `${imageAtual}`,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.statusBar}>
        <StatusBar barStyle="light-content" />
      </View>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{state.text}</Text>
        <View>
          <Button
            title="Yes, I want see it"
            color="#8c14fc"
            style={styles.mainButton}
            onPress={() => randomParadise()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#a537fd',
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1e7fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  mainButton: {
    width: '100%',
    padding: '40px',
  },
  modalContainer: {
    backgroundColor: '#f1e7fe',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMainTitle: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  modalImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
