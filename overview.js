// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all beavers

/* ------------------- INDEX -------------------*/
// GET  "/reset"                     => resets db

/* ------------------- CREATE -------------------*/
// GET  "/add"                => Create new beaver
// POST "/add"                => Create new beaver
//                                 Redirect to "/beaver/:id"

/* ------------------- READ -------------------*/
// GET  "/:id"             => View Beaver Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => update Beaver with id...
// POST "/:id/update"     => update Beaver with id...
//                                 Redirect to "/beaver/:id"

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => delete Beaver with id...
// POST "/:id/delete"     => delete Beaver with id...
//                                 Redirect to "/"

/* reinitialize  - most APIs don't expose this operation */
// POST "/reset"