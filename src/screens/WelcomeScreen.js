import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { colors, styles } from '../styles';

const featuredMovies = [
  {
    title: 'Dune: Part Two',
    genre: 'Sci-Fi / Drama',
    rating: '8.9',
    colors: ['#1F2937', '#8B5CF6'],
  },
  {
    title: 'Oppenheimer',
    genre: 'Histórico / Drama',
    rating: '9.1',
    colors: ['#4C1D95', '#EC4899'],
  },
  {
    title: 'The Batman',
    genre: 'Acción / Crimen',
    rating: '8.7',
    colors: ['#111827', '#F59E0B'],
  },
];

const topPicks = [
  'Interstellar',
  'Arrival',
  'Mad Max: Fury Road',
  'La La Land',
  'Parasite',
  'Blade Runner 2049',
];

const sections = ['Inicio', 'Buscar', 'Guardados', 'Perfil'];

export default function WelcomeScreen({ name, onLogout }) {
  const [selectedSection, setSelectedSection] = useState('Inicio');
  const [savedMovies, setSavedMovies] = useState([]);
  const [query, setQuery] = useState('');
  const allMovies = useMemo(
    () => [...featuredMovies.map((movie) => movie.title), ...topPicks],
    [],
  );
  const filteredMovies = allMovies.filter((movie) =>
    movie.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function toggleSaved(movie) {
    setSavedMovies((current) =>
      current.includes(movie)
        ? current.filter((saved) => saved !== movie)
        : [...current, movie],
    );
  }

  return (
    <View style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.catalogContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.catalogHeader}>
          <View>
            <Text style={styles.catalogBrand}>PELITODO</Text>
            <Text style={styles.catalogGreeting}>Hola, {name}</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Abrir perfil"
            onPress={() => setSelectedSection('Perfil')}
            style={styles.avatarButton}
          >
            <Text style={styles.avatarText}>{name.slice(0, 1).toUpperCase()}</Text>
          </Pressable>
        </View>

        {selectedSection === 'Inicio' ? (
          <>
            <View style={styles.featuredBanner}>
              <Text style={styles.featuredEyebrow}>ESTRENO DESTACADO</Text>
              <Text style={styles.featuredTitle}>The Night Watch</Text>
              <Text style={styles.featuredMeta}>
                Suspenso {'\u2022'} Ciencia ficción {'\u2022'} 2h 18m
              </Text>
              <View style={styles.featuredActions}>
                <Pressable style={styles.trailerButton}>
                  <Text style={styles.trailerButtonText}>▶  Ver trailer</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{
                    selected: savedMovies.includes('The Night Watch'),
                  }}
                  onPress={() => toggleSaved('The Night Watch')}
                  style={styles.saveFeaturedButton}
                >
                  <Text style={styles.saveFeaturedText}>
                    {savedMovies.includes('The Night Watch')
                      ? '♥ Guardado'
                      : '♡ Guardar'}
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.catalogSection}>
              <Text style={styles.sectionTitle}>Más populares</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.movieRow}
              >
                {featuredMovies.map((movie) => {
                  const saved = savedMovies.includes(movie.title);
                  return (
                    <View key={movie.title} style={styles.movieCard}>
                      <View
                        style={[
                          styles.moviePoster,
                          { backgroundColor: movie.colors[1] },
                        ]}
                      >
                        <Text style={styles.posterIcon}>▣</Text>
                        <Pressable
                          accessibilityRole="button"
                          accessibilityLabel={
                            saved
                              ? `Quitar ${movie.title} de guardados`
                              : `Guardar ${movie.title}`
                          }
                          accessibilityState={{ selected: saved }}
                          onPress={() => toggleSaved(movie.title)}
                          style={styles.posterSave}
                        >
                          <Text style={styles.posterSaveText}>
                            {saved ? '♥' : '♡'}
                          </Text>
                        </Pressable>
                      </View>
                      <Text numberOfLines={1} style={styles.movieTitle}>
                        {movie.title}
                      </Text>
                      <Text style={styles.movieRating}>★ {movie.rating}</Text>
                      <Text numberOfLines={1} style={styles.movieGenre}>
                        {movie.genre}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.catalogSection}>
              <View style={styles.sectionHeading}>
                <Text style={styles.sectionTitle}>Mi lista</Text>
                <Pressable onPress={() => setSelectedSection('Guardados')}>
                  <Text style={styles.sectionAction}>Ver todo</Text>
                </Pressable>
              </View>
              <MovieList movies={topPicks} />
            </View>
          </>
        ) : null}

        {selectedSection === 'Buscar' ? (
          <View style={styles.catalogSection}>
            <Text style={styles.sectionTitle}>Buscar películas</Text>
            <TextInput
              accessibilityLabel="Buscar películas"
              onChangeText={setQuery}
              placeholder="Escribe el título de una película"
              placeholderTextColor="#73798C"
              style={styles.catalogSearch}
              value={query}
            />
            {filteredMovies.length > 0 ? (
              <MovieList movies={filteredMovies} />
            ) : (
              <Text style={styles.emptyState}>
                No encontramos películas con ese título.
              </Text>
            )}
          </View>
        ) : null}

        {selectedSection === 'Guardados' ? (
          <View style={styles.catalogSection}>
            <Text style={styles.sectionTitle}>Guardados</Text>
            {savedMovies.length > 0 ? (
              <MovieList movies={savedMovies} />
            ) : (
              <Text style={styles.emptyState}>
                Aún no tienes películas guardadas. Marca el corazón de una
                película para agregarla.
              </Text>
            )}
          </View>
        ) : null}

        {selectedSection === 'Perfil' ? (
          <View style={styles.profileCard}>
            <View style={styles.profileAvatar}>
              <Text style={styles.avatarText}>
                {name.slice(0, 1).toUpperCase()}
              </Text>
            </View>
            <Text style={styles.eyebrow}>TU CUENTA</Text>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.intro}>
              Explora películas y mantén tus favoritas en un solo lugar.
            </Text>
            <PrimaryButton title="Cerrar sesión" onPress={onLogout} />
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.catalogNav}>
        {sections.map((section) => (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: selectedSection === section }}
            key={section}
            onPress={() => setSelectedSection(section)}
            style={[
              styles.navItem,
              selectedSection === section ? styles.navItemSelected : null,
            ]}
          >
            <Text style={styles.navIcon}>
              {section === 'Inicio'
                ? '⌂'
                : section === 'Buscar'
                  ? '⌕'
                  : section === 'Guardados'
                    ? '♡'
                    : '●'}
            </Text>
            <Text
              style={[
                styles.navLabel,
                selectedSection === section ? styles.navLabelSelected : null,
              ]}
            >
              {section}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function MovieList({ movies }) {
  return (
    <View style={styles.movieList}>
      {movies.map((movie) => (
        <View key={movie} style={styles.movieListItem}>
          <View style={styles.listPlay}>
            <Text style={styles.listPlayText}>▶</Text>
          </View>
          <Text numberOfLines={1} style={styles.listMovieTitle}>
            {movie}
          </Text>
          <Text style={styles.listChevron}>›</Text>
        </View>
      ))}
    </View>
  );
}
