import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 45,
    paddingBottom: 65,
    paddingHorizontal: 20,
    fontFamily: "Times-Roman",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Oswald",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
  },
  box: {
    width: "100%",
    height: 50,
    padding: 10,
    border: 1,
    borderColor: "#b4b4b4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  boxSpan: {
    width: "33%",
    height: "100%",
  },
  tableHeader: {
    fontSize: 12,
    backgroundColor: "#b4b4b4",
    display: "flex",
    textAlign: "center",
    marginTop: 10,
    padding: 5,
  },
  tableBody: {
    width: "100%",
    height: 70,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: "center",
    color: "grey",
  },
  subHeader: {
    fontSize: 6,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontStyle: "italic",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default function DocPdf() {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          PLUGSOM
        </Text>
        <Text style={styles.subHeader} fixed>
          CRIANDO EMOÇÕES & MOMENTOS
        </Text>

        <Text style={styles.title}>Orçamento</Text>

        <View style={styles.box}>
          <View style={styles.boxSpan}>
            <Text style={styles.text}>De: Nome do vendedor</Text>
            <Text style={styles.text}>A/C: Nome do responsável</Text>
          </View>
          <View style={styles.boxSpan}>
            <Text style={styles.text}>Telefone: (51) 9 9988-7755</Text>
          </View>
          <View style={styles.boxSpan}>
            <Text style={styles.text}>E-mail: email@email.com.br </Text>
          </View>
        </View>

        <View>
          <Text style={styles.tableHeader}>Dados do serviços</Text>

          <View style={styles.tableBody}>
            <View style={styles.boxSpan}>
              <Text style={styles.text}>Cliente: Nome fantasia</Text>
              <Text style={styles.text}>Evento: Nome do projeto</Text>
              <Text style={styles.text}>Nome Local: Nome do local</Text>
            </View>

            <View style={styles.boxSpan}>
              <Text style={styles.text}>E-mail: email@email.com.br</Text>
              <Text style={styles.text}>Tipo: Tipo Evento</Text>
              <Text style={styles.text}>End.: Endereço Evento</Text>
            </View>

            <View style={styles.boxSpan}>
              <Text style={styles.text}>Telefone: (51) 9 9988-7766</Text>
              <Text style={styles.text}>Grupo: Tipo Grupo</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title} break>
          Capítulo II: Que trata de la primera salida que de su tierra hizo el
          ingenioso Don Quijote
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
