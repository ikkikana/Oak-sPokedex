export default function App() {
    return (
        <div className="p-8 text-center">
            {/* Test des couleurs et typographie */}
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Tailwind fonctionne ! 🎉
            </h1>

            {/* Test des styles interactifs */}
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Cliquez-moi
            </button>

            {/* Test des utilitaires Tailwind */}
            <div className="mt-8 p-4 border-2 border-red-300 shadow-md">
                <p className="text-gray-700">Ce cadre prouve que Tailwind est actif.</p>
            </div>
        </div>
    );
}