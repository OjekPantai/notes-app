import React from "react";
import ActiveNote from "./ActiveNote";
import Archive from "./Archive";

function BodySection({
  onDelete,
  onActive,
  onArchive,
  activeDatas,
  archiveDatas,
}) {
  return (
    <React.Fragment>
      <main className="bg-gray-900">
        <section className="container mx-auto">
          <div className="px-5 sm:px-14 py-7 md:py-14">
            <h2 className="text-white text-center text-2xl font-bold mb-8 pb-10">
              Catatan
            </h2>
            {activeDatas.length !== 0 ? (
              <ActiveNote
                onDelete={onDelete}
                notes={activeDatas}
                onActive={onActive}
              />
            ) : (
              <p className="text-gray-300 text-center">Catatan kosong</p>
            )}
          </div>
        </section>

        <section className="container mx-auto">
          <div className="px-5 sm:px-14 py-7 md:py-14">
            <h2 className="text-white text-center text-2xl font-bold mb-8 pb-10">
              Archive
            </h2>
            {archiveDatas.length !== 0 ? (
              <Archive
                onDelete={onDelete}
                notes={archiveDatas}
                onArchive={onArchive}
              />
            ) : (
              <p className="text-gray-300 text-center">Arsip catatan kosong</p>
            )}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default BodySection;
