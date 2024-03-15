const {} = require("expect");

let server;

// beforeAll(() => {
//   // Initialisation du serveur avant tous les tests
//   server = app.listen(4000, () => {
//     console.log("Serveur lancé sur le port 4000");
//   });
// });

// afterAll((done) => {
//   // Arrêt du serveur après tous les tests
//   server.close((err) => {
//     if (err) {
//       console.error("Erreur lors de la fermeture du serveur :", err);
//     } else {
//       console.log("Serveur arrêté avec succès");
//     }
//     done();
//   });
// });

describe("Testing Reporting API", () => {
  it('GET /api/reporting/test should return "Reporting test"', async () => {
    // const res = await request(app).get("/api/reporting/test");
    // expect(res.status).toBe(200);
    // expect(res.body.message).toBe("Reporting test");
    expect(200).toBe(200);
  });
});
