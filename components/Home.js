import React from 'react';
import { Text } from 'react-native';
import Map from './Map'

const Home = () => {

  const crime_data = [
   
    {
        latitude: 29.780618,  
        longitude: -95.351395, 
        weight: 1, 
    },
    {
        latitude: 29.674633,  
        longitude: -95.577883, 
        weight: 1, 
    },
    {
        latitude: 29.85654,  
        longitude: -95.522967, 
        weight: 1, 
    },
    {
        latitude: 29.939922,  
        longitude: -95.41086, 
        weight: 1, 
    },
    {
        latitude: 29.939922,  
        longitude: -95.41086, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.835171,  
        longitude: -95.384366, 
        weight: 1, 
    },
    {
        latitude: 29.74042,  
        longitude: -95.466538, 
        weight: 1, 
    },
    {
        latitude: 29.74042,  
        longitude: -95.466538, 
        weight: 1, 
    },
    {
        latitude: 29.68872,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.774073,  
        longitude: -95.398657, 
        weight: 1, 
    },
    {
        latitude: 29.654243,  
        longitude: -95.355377, 
        weight: 1, 
    },
    {
        latitude: 29.67181,  
        longitude: -95.377904, 
        weight: 1, 
    },
    {
        latitude: 29.742305,  
        longitude: -95.41888, 
        weight: 1, 
    },
    {
        latitude: 29.709287,  
        longitude: -95.401043, 
        weight: 1, 
    },
    {
        latitude: 29.822878,  
        longitude: -95.547172, 
        weight: 1, 
    },
    {
        latitude: 29.702721,  
        longitude: -95.493034, 
        weight: 1, 
    },
    {
        latitude: 29.84562,  
        longitude: -95.375155, 
        weight: 1, 
    },
    {
        latitude: 29.84562,  
        longitude: -95.375155, 
        weight: 1, 
    },
    {
        latitude: 29.538931,  
        longitude: -95.145184, 
        weight: 1, 
    },
    {
        latitude: 29.812489,  
        longitude: -95.445364, 
        weight: 1, 
    },
    {
        latitude: 29.728703,  
        longitude: -95.568036, 
        weight: 1, 
    },
    {
        latitude: 29.728703,  
        longitude: -95.568036, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.960338,  
        longitude: -95.558232, 
        weight: 1, 
    },
    {
        latitude: 29.80814,  
        longitude: -95.45464, 
        weight: 1, 
    },
    {
        latitude: 29.821329,  
        longitude: -95.342531, 
        weight: 1, 
    },
    {
        latitude: 29.578053,  
        longitude: -95.106403, 
        weight: 1, 
    },
    {
        latitude: 29.641675,  
        longitude: -95.242321, 
        weight: 1, 
    },
    {
        latitude: 29.754476,  
        longitude: -95.616804, 
        weight: 1, 
    },
    {
        latitude: 29.723535,  
        longitude: -95.459804, 
        weight: 1, 
    },
    {
        latitude: 29.723535,  
        longitude: -95.459804, 
        weight: 1, 
    },
    {
        latitude: 29.93441,  
        longitude: -95.41558, 
        weight: 1, 
    },
    {
        latitude: 29.68257,  
        longitude: -95.36651, 
        weight: 1, 
    },
    {
        latitude: 29.556487,  
        longitude: -95.149049, 
        weight: 1, 
    },
    {
        latitude: 29.822632,  
        longitude: -95.537782, 
        weight: 1, 
    },
    {
        latitude: 29.611386,  
        longitude: -95.228361, 
        weight: 1, 
    },
    {
        latitude: 29.665585,  
        longitude: -95.46367, 
        weight: 1, 
    },
    {
        latitude: 29.739916,  
        longitude: -95.368119, 
        weight: 1, 
    },
    {
        latitude: 29.739916,  
        longitude: -95.368119, 
        weight: 1, 
    },
    {
        latitude: 29.655612,  
        longitude: -95.522371, 
        weight: 1, 
    },
    {
        latitude: 29.738033,  
        longitude: -95.46506, 
        weight: 1, 
    },
    {
        latitude: 29.738033,  
        longitude: -95.46506, 
        weight: 1, 
    },
    {
        latitude: 29.703696,  
        longitude: -95.40281, 
        weight: 1, 
    },
    {
        latitude: 29.710876,  
        longitude: -95.39997, 
        weight: 1, 
    },
    {
        latitude: 29.731335,  
        longitude: -95.562171, 
        weight: 1, 
    },
    {
        latitude: 29.758291,  
        longitude: -95.359762, 
        weight: 1, 
    },
    {
        latitude: 29.737357,  
        longitude: -95.522828, 
        weight: 1, 
    },
    {
        latitude: 29.778331,  
        longitude: -95.352747, 
        weight: 1, 
    },
    {
        latitude: 29.538956,  
        longitude: -95.145079, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506148, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.738579,  
        longitude: -95.408243, 
        weight: 1, 
    },
    {
        latitude: 29.925202,  
        longitude: -95.402203, 
        weight: 1, 
    },
    {
        latitude: 29.798685,  
        longitude: -95.327089, 
        weight: 1, 
    },
    {
        latitude: 29.783966,  
        longitude: -95.337498, 
        weight: 1, 
    },
    {
        latitude: 29.786678,  
        longitude: -95.314333, 
        weight: 1, 
    },
    {
        latitude: 29.786678,  
        longitude: -95.314333, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.724933,  
        longitude: -95.372536, 
        weight: 1, 
    },
    {
        latitude: 29.806707,  
        longitude: -95.484917, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.691068,  
        longitude: -95.504651, 
        weight: 1, 
    },
    {
        latitude: 29.74042,  
        longitude: -95.466538, 
        weight: 1, 
    },
    {
        latitude: 29.869905,  
        longitude: -95.397309, 
        weight: 1, 
    },
    {
        latitude: 29.701236,  
        longitude: -95.313179, 
        weight: 1, 
    },
    {
        latitude: 30.065186,  
        longitude: -95.245532, 
        weight: 1, 
    },
    {
        latitude: 29.835415,  
        longitude: -95.305207, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.853495,  
        longitude: -95.509446, 
        weight: 1, 
    },
    {
        latitude: 29.853495,  
        longitude: -95.509446, 
        weight: 1, 
    },
    {
        latitude: 29.785048,  
        longitude: -95.521278, 
        weight: 1, 
    },
    {
        latitude: 29.644194,  
        longitude: -95.508294, 
        weight: 1, 
    },
    {
        latitude: 29.749885,  
        longitude: -95.485547, 
        weight: 1, 
    },
    {
        latitude: 29.675092,  
        longitude: -95.553761, 
        weight: 1, 
    },
    {
        latitude: 29.86217,  
        longitude: -95.391116, 
        weight: 1, 
    },
    {
        latitude: 29.86217,  
        longitude: -95.391116, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.785787,  
        longitude: -95.55927, 
        weight: 1, 
    },
    {
        latitude: 29.668442,  
        longitude: -95.261444, 
        weight: 1, 
    },
    {
        latitude: 29.813546,  
        longitude: -95.316789, 
        weight: 1, 
    },
    {
        latitude: 29.782317,  
        longitude: -95.609421, 
        weight: 1, 
    },
    {
        latitude: 29.843924,  
        longitude: -95.319043, 
        weight: 1, 
    },
    {
        latitude: 29.785082,  
        longitude: -95.558072, 
        weight: 1, 
    },
    {
        latitude: 29.782568,  
        longitude: -95.643332, 
        weight: 1, 
    },
    {
        latitude: 29.800459,  
        longitude: -95.435071, 
        weight: 1, 
    },
    {
        latitude: 29.811618,  
        longitude: -95.370862, 
        weight: 1, 
    },
    {
        latitude: 29.728384,  
        longitude: -95.544187, 
        weight: 1, 
    },
    {
        latitude: 29.752937,  
        longitude: -95.358386, 
        weight: 1, 
    },
    {
        latitude: 29.671294,  
        longitude: -95.256792, 
        weight: 1, 
    },
    {
        latitude: 29.788145,  
        longitude: -95.354971, 
        weight: 1, 
    },
    {
        latitude: 29.654725,  
        longitude: -95.370535, 
        weight: 1, 
    },
    {
        latitude: 29.837999,  
        longitude: -95.276992, 
        weight: 1, 
    },
    {
        latitude: 29.837999,  
        longitude: -95.276992, 
        weight: 1, 
    },
    {
        latitude: 29.819298,  
        longitude: -95.456543, 
        weight: 1, 
    },
    {
        latitude: 29.775041,  
        longitude: -95.372412, 
        weight: 1, 
    },
    {
        latitude: 29.802133,  
        longitude: -95.424919, 
        weight: 1, 
    },
    {
        latitude: 29.834994,  
        longitude: -95.308229, 
        weight: 1, 
    },
    {
        latitude: 29.786521,  
        longitude: -95.218697, 
        weight: 1, 
    },
    {
        latitude: 29.733552,  
        longitude: -95.605797, 
        weight: 1, 
    },
    {
        latitude: 29.755881,  
        longitude: -95.63946, 
        weight: 1, 
    },
    {
        latitude: 29.659996,  
        longitude: -95.316393, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.622134,  
        longitude: -95.217027, 
        weight: 1, 
    },
    {
        latitude: 29.772364,  
        longitude: -95.28555, 
        weight: 1, 
    },
    {
        latitude: 29.744358,  
        longitude: -95.36309, 
        weight: 1, 
    },
    {
        latitude: 29.678652,  
        longitude: -95.60262, 
        weight: 1, 
    },
    {
        latitude: 29.821558,  
        longitude: -95.390355, 
        weight: 1, 
    },
    {
        latitude: 29.644615,  
        longitude: -95.241185, 
        weight: 1, 
    },
    {
        latitude: 29.841148,  
        longitude: -95.410904, 
        weight: 1, 
    },
    {
        latitude: 29.762552,  
        longitude: -95.297685, 
        weight: 1, 
    },
    {
        latitude: 29.821396,  
        longitude: -95.285666, 
        weight: 1, 
    },
    {
        latitude: 29.547579,  
        longitude: -95.101179, 
        weight: 1, 
    },
    {
        latitude: 29.547579,  
        longitude: -95.101179, 
        weight: 1, 
    },
    {
        latitude: 29.547579,  
        longitude: -95.101179, 
        weight: 1, 
    },
    {
        latitude: 29.732184,  
        longitude: -95.55823, 
        weight: 1, 
    },
    {
        latitude: 29.931731,  
        longitude: -95.406322, 
        weight: 1, 
    },
    {
        latitude: 29.706212,  
        longitude: -95.412733, 
        weight: 1, 
    },
    {
        latitude: 29.747606,  
        longitude: -95.569379, 
        weight: 1, 
    },
    {
        latitude: 29.543493,  
        longitude: -95.145502, 
        weight: 1, 
    },
    {
        latitude: 29.778623,  
        longitude: -95.560579, 
        weight: 1, 
    },
    {
        latitude: 29.661267,  
        longitude: -95.357846, 
        weight: 1, 
    },
    {
        latitude: 29.785819,  
        longitude: -95.544025, 
        weight: 1, 
    },
    {
        latitude: 29.751802,  
        longitude: -95.350902, 
        weight: 1, 
    },
    {
        latitude: 29.750386,  
        longitude: -95.35587, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.558114, 
        weight: 1, 
    },
    {
        latitude: 29.776502,  
        longitude: -95.224276, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.4515, 
        weight: 1, 
    },
    {
        latitude: 29.850283,  
        longitude: -95.478776, 
        weight: 1, 
    },
    {
        latitude: 29.734192,  
        longitude: -95.415195, 
        weight: 1, 
    },
    {
        latitude: 29.838387,  
        longitude: -95.546172, 
        weight: 1, 
    },
    {
        latitude: 29.858616,  
        longitude: -95.50498, 
        weight: 1, 
    },
    {
        latitude: 29.715404,  
        longitude: -95.614743, 
        weight: 1, 
    },
    {
        latitude: 29.68895,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.865753,  
        longitude: -95.485577, 
        weight: 1, 
    },
    {
        latitude: 29.865753,  
        longitude: -95.485577, 
        weight: 1, 
    },
    {
        latitude: 29.65801,  
        longitude: -95.376311, 
        weight: 1, 
    },
    {
        latitude: 29.779763,  
        longitude: -95.338519, 
        weight: 1, 
    },
    {
        latitude: 29.622976,  
        longitude: -95.475997, 
        weight: 1, 
    },
    {
        latitude: 29.622976,  
        longitude: -95.475997, 
        weight: 1, 
    },
    {
        latitude: 29.827312,  
        longitude: -95.261957, 
        weight: 1, 
    },
    {
        latitude: 29.736067,  
        longitude: -95.35453, 
        weight: 1, 
    },
    {
        latitude: 29.736067,  
        longitude: -95.35453, 
        weight: 1, 
    },
    {
        latitude: 29.736067,  
        longitude: -95.35453, 
        weight: 1, 
    },
    {
        latitude: 29.809889,  
        longitude: -95.526172, 
        weight: 1, 
    },
    {
        latitude: 29.809889,  
        longitude: -95.526172, 
        weight: 1, 
    },
    {
        latitude: 29.708698,  
        longitude: -95.510471, 
        weight: 1, 
    },
    {
        latitude: 29.708698,  
        longitude: -95.510471, 
        weight: 1, 
    },
    {
        latitude: 29.84554,  
        longitude: -95.392209, 
        weight: 1, 
    },
    {
        latitude: 29.64528,  
        longitude: -95.264854, 
        weight: 1, 
    },
    {
        latitude: 29.640067,  
        longitude: -95.364395, 
        weight: 1, 
    },
    {
        latitude: 29.812902,  
        longitude: -95.57192, 
        weight: 1, 
    },
    {
        latitude: 29.712378,  
        longitude: -95.518058, 
        weight: 1, 
    },
    {
        latitude: 29.650975,  
        longitude: -95.355884, 
        weight: 1, 
    },
    {
        latitude: 29.698313,  
        longitude: -95.280282, 
        weight: 1, 
    },
    {
        latitude: 29.740082,  
        longitude: -95.419387, 
        weight: 1, 
    },
    {
        latitude: 29.740082,  
        longitude: -95.419387, 
        weight: 1, 
    },
    {
        latitude: 29.740082,  
        longitude: -95.419387, 
        weight: 1, 
    },
    {
        latitude: 29.762584,  
        longitude: -95.359447, 
        weight: 1, 
    },
    {
        latitude: 29.829347,  
        longitude: -95.334626, 
        weight: 1, 
    },
    {
        latitude: 29.748154,  
        longitude: -95.366798, 
        weight: 1, 
    },
    {
        latitude: 29.784252,  
        longitude: -95.645052, 
        weight: 1, 
    },
    {
        latitude: 29.784252,  
        longitude: -95.645052, 
        weight: 1, 
    },
    {
        latitude: 29.682391,  
        longitude: -95.258881, 
        weight: 1, 
    },
    {
        latitude: 29.742305,  
        longitude: -95.41888, 
        weight: 1, 
    },
    {
        latitude: 29.712806,  
        longitude: -95.545953, 
        weight: 1, 
    },
    {
        latitude: 29.629485,  
        longitude: -95.231258, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.659477,  
        longitude: -95.476311, 
        weight: 1, 
    },
    {
        latitude: 29.737099,  
        longitude: -95.544887, 
        weight: 1, 
    },
    {
        latitude: 29.822067,  
        longitude: -95.337428, 
        weight: 1, 
    },
    {
        latitude: 29.755234,  
        longitude: -95.350952, 
        weight: 1, 
    },
    {
        latitude: 29.75938,  
        longitude: -95.354118, 
        weight: 1, 
    },
    {
        latitude: 29.848813,  
        longitude: -95.394713, 
        weight: 1, 
    },
    {
        latitude: 29.73619,  
        longitude: -95.604671, 
        weight: 1, 
    },
    {
        latitude: 29.865575,  
        longitude: -95.511555, 
        weight: 1, 
    },
    {
        latitude: 29.746207,  
        longitude: -95.358086, 
        weight: 1, 
    },
    {
        latitude: 29.957441,  
        longitude: -95.551432, 
        weight: 1, 
    },
    {
        latitude: 29.859755,  
        longitude: -95.428337, 
        weight: 1, 
    },
    {
        latitude: 29.613248,  
        longitude: -95.452525, 
        weight: 1, 
    },
    {
        latitude: 29.873809,  
        longitude: -95.409133, 
        weight: 1, 
    },
    {
        latitude: 29.688052,  
        longitude: -95.57478, 
        weight: 1, 
    },
    {
        latitude: 29.688052,  
        longitude: -95.57478, 
        weight: 1, 
    },
    {
        latitude: 29.655732,  
        longitude: -95.526088, 
        weight: 1, 
    },
    {
        latitude: 29.65195,  
        longitude: -95.232269, 
        weight: 1, 
    },
    {
        latitude: 29.753908,  
        longitude: -95.379539, 
        weight: 1, 
    },
    {
        latitude: 29.796621,  
        longitude: -95.484894, 
        weight: 1, 
    },
    {
        latitude: 29.676985,  
        longitude: -95.432335, 
        weight: 1, 
    },
    {
        latitude: 29.631254,  
        longitude: -95.339345, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.61485,  
        longitude: -95.424202, 
        weight: 1, 
    },
    {
        latitude: 29.84993,  
        longitude: -95.473319, 
        weight: 1, 
    },
    {
        latitude: 29.778034,  
        longitude: -95.295877, 
        weight: 1, 
    },
    {
        latitude: 29.728115,  
        longitude: -95.518119, 
        weight: 1, 
    },
    {
        latitude: 29.726758,  
        longitude: -95.325171, 
        weight: 1, 
    },
    {
        latitude: 29.777443,  
        longitude: -95.59878, 
        weight: 1, 
    },
    {
        latitude: 29.828254,  
        longitude: -95.337717, 
        weight: 1, 
    },
    {
        latitude: 29.727698,  
        longitude: -95.573877, 
        weight: 1, 
    },
    {
        latitude: 29.93911,  
        longitude: -95.285855, 
        weight: 1, 
    },
    {
        latitude: 29.934063,  
        longitude: -95.416733, 
        weight: 1, 
    },
    {
        latitude: 29.731526,  
        longitude: -95.471849, 
        weight: 1, 
    },
    {
        latitude: 29.68893,  
        longitude: -95.604554, 
        weight: 1, 
    },
    {
        latitude: 29.63867,  
        longitude: -95.495392, 
        weight: 1, 
    },
    {
        latitude: 29.699364,  
        longitude: -95.590684, 
        weight: 1, 
    },
    {
        latitude: 29.91693,  
        longitude: -95.405678, 
        weight: 1, 
    },
    {
        latitude: 29.803296,  
        longitude: -95.371331, 
        weight: 1, 
    },
    {
        latitude: 29.803296,  
        longitude: -95.371331, 
        weight: 1, 
    },
    {
        latitude: 29.717185,  
        longitude: -95.380681, 
        weight: 1, 
    },
    {
        latitude: 29.731398,  
        longitude: -95.47644, 
        weight: 1, 
    },
    {
        latitude: 29.68331,  
        longitude: -95.439956, 
        weight: 1, 
    },
    {
        latitude: 29.616304,  
        longitude: -95.47151, 
        weight: 1, 
    },
    {
        latitude: 29.829774,  
        longitude: -95.499251, 
        weight: 1, 
    },
    {
        latitude: 29.829774,  
        longitude: -95.499251, 
        weight: 1, 
    },
    {
        latitude: 29.829774,  
        longitude: -95.499251, 
        weight: 1, 
    },
    {
        latitude: 29.77355,  
        longitude: -95.39059, 
        weight: 1, 
    },
    {
        latitude: 29.828831,  
        longitude: -95.509251, 
        weight: 1, 
    },
    {
        latitude: 29.822599,  
        longitude: -95.342555, 
        weight: 1, 
    },
    {
        latitude: 29.822599,  
        longitude: -95.342555, 
        weight: 1, 
    },
    {
        latitude: 29.74641,  
        longitude: -95.613161, 
        weight: 1, 
    },
    {
        latitude: 29.738882,  
        longitude: -95.382023, 
        weight: 1, 
    },
    {
        latitude: 29.682123,  
        longitude: -95.415615, 
        weight: 1, 
    },
    {
        latitude: 29.843796,  
        longitude: -95.320245, 
        weight: 1, 
    },
    {
        latitude: 29.705644,  
        longitude: -95.384597, 
        weight: 1, 
    },
    {
        latitude: 29.831346,  
        longitude: -95.392887, 
        weight: 1, 
    },
    {
        latitude: 29.775263,  
        longitude: -95.64397, 
        weight: 1, 
    },
    {
        latitude: 29.775263,  
        longitude: -95.64397, 
        weight: 1, 
    },
    {
        latitude: 29.750221,  
        longitude: -95.465823, 
        weight: 1, 
    },
    {
        latitude: 29.953524,  
        longitude: -95.331403, 
        weight: 1, 
    },
    {
        latitude: 29.71969,  
        longitude: -95.496345, 
        weight: 1, 
    },
    {
        latitude: 29.942042,  
        longitude: -95.330553, 
        weight: 1, 
    },
    {
        latitude: 29.621602,  
        longitude: -95.39307, 
        weight: 1, 
    },
    {
        latitude: 29.749879,  
        longitude: -95.375637, 
        weight: 1, 
    },
    {
        latitude: 29.749879,  
        longitude: -95.375637, 
        weight: 1, 
    },
    {
        latitude: 29.757508,  
        longitude: -95.39092, 
        weight: 1, 
    },
    {
        latitude: 29.691034,  
        longitude: -95.347002, 
        weight: 1, 
    },
    {
        latitude: 29.691034,  
        longitude: -95.347002, 
        weight: 1, 
    },
    {
        latitude: 29.744535,  
        longitude: -95.355729, 
        weight: 1, 
    },
    {
        latitude: 29.744535,  
        longitude: -95.355729, 
        weight: 1, 
    },
    {
        latitude: 29.717801,  
        longitude: -95.533909, 
        weight: 1, 
    },
    {
        latitude: 29.966214,  
        longitude: -95.422959, 
        weight: 1, 
    },
    {
        latitude: 29.870167,  
        longitude: -95.414848, 
        weight: 1, 
    },
    {
        latitude: 29.870167,  
        longitude: -95.414848, 
        weight: 1, 
    },
    {
        latitude: 29.862768,  
        longitude: -95.506086, 
        weight: 1, 
    },
    {
        latitude: 29.732982,  
        longitude: -95.295736, 
        weight: 1, 
    },
    {
        latitude: 29.792624,  
        longitude: -95.397729, 
        weight: 1, 
    },
    {
        latitude: 29.664348,  
        longitude: -95.580902, 
        weight: 1, 
    },
    {
        latitude: 29.707956,  
        longitude: -95.338723, 
        weight: 1, 
    },
    {
        latitude: 29.828074,  
        longitude: -95.404708, 
        weight: 1, 
    },
    {
        latitude: 29.784902,  
        longitude: -95.332561, 
        weight: 1, 
    },
    {
        latitude: 29.784902,  
        longitude: -95.332561, 
        weight: 1, 
    },
    {
        latitude: 29.687472,  
        longitude: -95.507422, 
        weight: 1, 
    },
    {
        latitude: 29.742777,  
        longitude: -95.538378, 
        weight: 1, 
    },
    {
        latitude: 29.764101,  
        longitude: -95.430159, 
        weight: 1, 
    },
    {
        latitude: 29.966826,  
        longitude: -95.536638, 
        weight: 1, 
    },
    {
        latitude: 29.755755,  
        longitude: -95.35924, 
        weight: 1, 
    },
    {
        latitude: 29.683783,  
        longitude: -95.361165, 
        weight: 1, 
    },
    {
        latitude: 29.683783,  
        longitude: -95.361165, 
        weight: 1, 
    },
    {
        latitude: 29.785009,  
        longitude: -95.334245, 
        weight: 1, 
    },
    {
        latitude: 29.942202,  
        longitude: -95.437953, 
        weight: 1, 
    },
    {
        latitude: 29.938662,  
        longitude: -95.359029, 
        weight: 1, 
    },
    {
        latitude: 29.831003,  
        longitude: -95.318743, 
        weight: 1, 
    },
    {
        latitude: 29.819562,  
        longitude: -95.462664, 
        weight: 1, 
    },
    {
        latitude: 29.948347,  
        longitude: -95.331358, 
        weight: 1, 
    },
    {
        latitude: 29.746223,  
        longitude: -95.500998, 
        weight: 1, 
    },
    {
        latitude: 29.743904,  
        longitude: -95.356272, 
        weight: 1, 
    },
    {
        latitude: 29.660064,  
        longitude: -95.272368, 
        weight: 1, 
    },
    {
        latitude: 29.823086,  
        longitude: -95.435844, 
        weight: 1, 
    },
    {
        latitude: 29.927625,  
        longitude: -95.405226, 
        weight: 1, 
    },
    {
        latitude: 29.659067,  
        longitude: -95.508453, 
        weight: 1, 
    },
    {
        latitude: 29.817817,  
        longitude: -95.349826, 
        weight: 1, 
    },
    {
        latitude: 29.7747,  
        longitude: -95.584852, 
        weight: 1, 
    },
    {
        latitude: 29.851451,  
        longitude: -95.448348, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.724696,  
        longitude: -95.36882, 
        weight: 1, 
    },
    {
        latitude: 29.667629,  
        longitude: -95.532385, 
        weight: 1, 
    },
    {
        latitude: 29.737153,  
        longitude: -95.514184, 
        weight: 1, 
    },
    {
        latitude: 29.731029,  
        longitude: -95.416181, 
        weight: 1, 
    },
    {
        latitude: 29.827339,  
        longitude: -95.410606, 
        weight: 1, 
    },
    {
        latitude: 29.752606,  
        longitude: -95.501104, 
        weight: 1, 
    },
    {
        latitude: 29.8476,  
        longitude: -95.467499, 
        weight: 1, 
    },
    {
        latitude: 29.8476,  
        longitude: -95.467499, 
        weight: 1, 
    },
    {
        latitude: 29.683706,  
        longitude: -95.514794, 
        weight: 1, 
    },
    {
        latitude: 29.59324,  
        longitude: -95.220276, 
        weight: 1, 
    },
    {
        latitude: 29.880634,  
        longitude: -95.494469, 
        weight: 1, 
    },
    {
        latitude: 29.67779,  
        longitude: -95.252974, 
        weight: 1, 
    },
    {
        latitude: 29.88986,  
        longitude: -95.429816, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.743764,  
        longitude: -95.257512, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.887715,  
        longitude: -95.492528, 
        weight: 1, 
    },
    {
        latitude: 29.887715,  
        longitude: -95.492528, 
        weight: 1, 
    },
    {
        latitude: 29.684518,  
        longitude: -95.52177, 
        weight: 1, 
    },
    {
        latitude: 29.684518,  
        longitude: -95.52177, 
        weight: 1, 
    },
    {
        latitude: 29.61191,  
        longitude: -95.196936, 
        weight: 1, 
    },
    {
        latitude: 29.694506,  
        longitude: -95.55669, 
        weight: 1, 
    },
    {
        latitude: 29.694758,  
        longitude: -95.264318, 
        weight: 1, 
    },
    {
        latitude: 29.735508,  
        longitude: -95.588625, 
        weight: 1, 
    },
    {
        latitude: 29.681434,  
        longitude: -95.228181, 
        weight: 1, 
    },
    {
        latitude: 29.68099,  
        longitude: -95.264078, 
        weight: 1, 
    },
    {
        latitude: 29.746154,  
        longitude: -95.614502, 
        weight: 1, 
    },
    {
        latitude: 29.622058,  
        longitude: -95.366504, 
        weight: 1, 
    },
    {
        latitude: 29.615617,  
        longitude: -95.411665, 
        weight: 1, 
    },
    {
        latitude: 29.669593,  
        longitude: -95.528171, 
        weight: 1, 
    },
    {
        latitude: 29.957828,  
        longitude: -95.541804, 
        weight: 1, 
    },
    {
        latitude: 29.740739,  
        longitude: -95.462834, 
        weight: 1, 
    },
    {
        latitude: 29.706617,  
        longitude: -95.27803, 
        weight: 1, 
    },
    {
        latitude: 29.703528,  
        longitude: -95.61551, 
        weight: 1, 
    },
    {
        latitude: 29.757772,  
        longitude: -95.358907, 
        weight: 1, 
    },
    {
        latitude: 29.776733,  
        longitude: -95.434521, 
        weight: 1, 
    },
    {
        latitude: 29.708904,  
        longitude: -95.510763, 
        weight: 1, 
    },
    {
        latitude: 29.828418,  
        longitude: -95.397232, 
        weight: 1, 
    },
    {
        latitude: 29.765595,  
        longitude: -95.379405, 
        weight: 1, 
    },
    {
        latitude: 29.870865,  
        longitude: -95.357776, 
        weight: 1, 
    },
    {
        latitude: 29.784941,  
        longitude: -95.590487, 
        weight: 1, 
    },
    {
        latitude: 29.738925,  
        longitude: -95.379303, 
        weight: 1, 
    },
    {
        latitude: 29.738925,  
        longitude: -95.379303, 
        weight: 1, 
    },
    {
        latitude: 29.688475,  
        longitude: -95.569762, 
        weight: 1, 
    },
    {
        latitude: 29.642887,  
        longitude: -95.469788, 
        weight: 1, 
    },
    {
        latitude: 30.053616,  
        longitude: -95.185747, 
        weight: 1, 
    },
    {
        latitude: 29.851719,  
        longitude: -95.396778, 
        weight: 1, 
    },
    {
        latitude: 29.742582,  
        longitude: -95.410728, 
        weight: 1, 
    },
    {
        latitude: 29.717425,  
        longitude: -95.314272, 
        weight: 1, 
    },
    {
        latitude: 29.704854,  
        longitude: -95.550831, 
        weight: 1, 
    },
    {
        latitude: 29.726124,  
        longitude: -95.491759, 
        weight: 1, 
    },
    {
        latitude: 29.703852,  
        longitude: -95.575568, 
        weight: 1, 
    },
    {
        latitude: 29.701983,  
        longitude: -95.349226, 
        weight: 1, 
    },
    {
        latitude: 29.753212,  
        longitude: -95.399588, 
        weight: 1, 
    },
    {
        latitude: 29.560494,  
        longitude: -95.130379, 
        weight: 1, 
    },
    {
        latitude: 29.677888,  
        longitude: -95.424502, 
        weight: 1, 
    },
    {
        latitude: 29.655598,  
        longitude: -95.521609, 
        weight: 1, 
    },
    {
        latitude: 29.715745,  
        longitude: -95.325323, 
        weight: 1, 
    },
    {
        latitude: 29.658042,  
        longitude: -95.270513, 
        weight: 1, 
    },
    {
        latitude: 29.675583,  
        longitude: -95.341069, 
        weight: 1, 
    },
    {
        latitude: 29.703891,  
        longitude: -95.349182, 
        weight: 1, 
    },
    {
        latitude: 29.806282,  
        longitude: -95.434868, 
        weight: 1, 
    },
    {
        latitude: 29.736062,  
        longitude: -95.611251, 
        weight: 1, 
    },
    {
        latitude: 29.684599,  
        longitude: -95.259389, 
        weight: 1, 
    },
    {
        latitude: 29.681635,  
        longitude: -95.503643, 
        weight: 1, 
    },
    {
        latitude: 29.837391,  
        longitude: -95.403632, 
        weight: 1, 
    },
    {
        latitude: 29.705538,  
        longitude: -95.48473, 
        weight: 1, 
    },
    {
        latitude: 29.82458,  
        longitude: -95.49854, 
        weight: 1, 
    },
    {
        latitude: 29.689867,  
        longitude: -95.417675, 
        weight: 1, 
    },
    {
        latitude: 29.715817,  
        longitude: -95.510056, 
        weight: 1, 
    },
    {
        latitude: 29.815441,  
        longitude: -95.28448, 
        weight: 1, 
    },
    {
        latitude: 29.717732,  
        longitude: -95.536054, 
        weight: 1, 
    },
    {
        latitude: 29.723103,  
        longitude: -95.378666, 
        weight: 1, 
    },
    {
        latitude: 29.657673,  
        longitude: -95.389473, 
        weight: 1, 
    },
    {
        latitude: 29.623545,  
        longitude: -95.476098, 
        weight: 1, 
    },
    {
        latitude: 29.743354,  
        longitude: -95.485431, 
        weight: 1, 
    },
    {
        latitude: 29.950559,  
        longitude: -95.402911, 
        weight: 1, 
    },
    {
        latitude: 29.88239,  
        longitude: -95.421991, 
        weight: 1, 
    },
    {
        latitude: 29.691034,  
        longitude: -95.347002, 
        weight: 1, 
    },
    {
        latitude: 29.869856,  
        longitude: -95.404008, 
        weight: 1, 
    },
    {
        latitude: 29.863462,  
        longitude: -95.457856, 
        weight: 1, 
    },
    {
        latitude: 29.699424,  
        longitude: -95.494928, 
        weight: 1, 
    },
    {
        latitude: 29.740182,  
        longitude: -95.359043, 
        weight: 1, 
    },
    {
        latitude: 29.740182,  
        longitude: -95.359043, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.75325,  
        longitude: -95.455063, 
        weight: 1, 
    },
    {
        latitude: 29.740891,  
        longitude: -95.37774, 
        weight: 1, 
    },
    {
        latitude: 29.737453,  
        longitude: -95.507777, 
        weight: 1, 
    },
    {
        latitude: 29.732476,  
        longitude: -95.342337, 
        weight: 1, 
    },
    {
        latitude: 29.960952,  
        longitude: -95.429608, 
        weight: 1, 
    },
    {
        latitude: 29.841534,  
        longitude: -95.473188, 
        weight: 1, 
    },
    {
        latitude: 29.795303,  
        longitude: -95.379079, 
        weight: 1, 
    },
    {
        latitude: 29.770116,  
        longitude: -95.430417, 
        weight: 1, 
    },
    {
        latitude: 29.599826,  
        longitude: -95.26811, 
        weight: 1, 
    },
    {
        latitude: 29.95341,  
        longitude: -95.538947, 
        weight: 1, 
    },
    {
        latitude: 29.759781,  
        longitude: -95.379342, 
        weight: 1, 
    },
    {
        latitude: 29.685285,  
        longitude: -95.399636, 
        weight: 1, 
    },
    {
        latitude: 29.688229,  
        longitude: -95.577892, 
        weight: 1, 
    },
    {
        latitude: 29.760781,  
        longitude: -95.363871, 
        weight: 1, 
    },
    {
        latitude: 29.808736,  
        longitude: -95.475227, 
        weight: 1, 
    },
    {
        latitude: 29.758137,  
        longitude: -95.365057, 
        weight: 1, 
    },
    {
        latitude: 29.754447,  
        longitude: -95.618541, 
        weight: 1, 
    },
    {
        latitude: 29.738486,  
        longitude: -95.35394, 
        weight: 1, 
    },
    {
        latitude: 29.828625,  
        longitude: -95.384262, 
        weight: 1, 
    },
    {
        latitude: 29.828625,  
        longitude: -95.384262, 
        weight: 1, 
    },
    {
        latitude: 30.071351,  
        longitude: -95.172395, 
        weight: 1, 
    },
    {
        latitude: 29.811032,  
        longitude: -95.50648, 
        weight: 1, 
    },
    {
        latitude: 29.82427,  
        longitude: -95.395558, 
        weight: 1, 
    },
    {
        latitude: 29.543345,  
        longitude: -95.145725, 
        weight: 1, 
    },
    {
        latitude: 29.826169,  
        longitude: -95.329789, 
        weight: 1, 
    },
    {
        latitude: 29.742063,  
        longitude: -95.336723, 
        weight: 1, 
    },
    {
        latitude: 29.742063,  
        longitude: -95.336723, 
        weight: 1, 
    },
    {
        latitude: 29.608345,  
        longitude: -95.257021, 
        weight: 1, 
    },
    {
        latitude: 29.848234,  
        longitude: -95.342866, 
        weight: 1, 
    },
    {
        latitude: 29.623398,  
        longitude: -95.226453, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.785447,  
        longitude: -95.637351, 
        weight: 1, 
    },
    {
        latitude: 29.7851,  
        longitude: -95.532515, 
        weight: 1, 
    },
    {
        latitude: 29.716383,  
        longitude: -95.489464, 
        weight: 1, 
    },
    {
        latitude: 29.938976,  
        longitude: -95.392024, 
        weight: 1, 
    },
    {
        latitude: 29.826541,  
        longitude: -95.284428, 
        weight: 1, 
    },
    {
        latitude: 29.740716,  
        longitude: -95.463294, 
        weight: 1, 
    },
    {
        latitude: 29.957828,  
        longitude: -95.541804, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.744992,  
        longitude: -95.375679, 
        weight: 1, 
    },
    {
        latitude: 29.740706,  
        longitude: -95.463677, 
        weight: 1, 
    },
    {
        latitude: 29.888238,  
        longitude: -95.429128, 
        weight: 1, 
    },
    {
        latitude: 29.61336,  
        longitude: -95.307454, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.704895,  
        longitude: -95.514885, 
        weight: 1, 
    },
    {
        latitude: 29.889047,  
        longitude: -95.49901, 
        weight: 1, 
    },
    {
        latitude: 29.714369,  
        longitude: -95.538923, 
        weight: 1, 
    },
    {
        latitude: 29.742745,  
        longitude: -95.497628, 
        weight: 1, 
    },
    {
        latitude: 29.896745,  
        longitude: -95.410503, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.695615,  
        longitude: -95.484523, 
        weight: 1, 
    },
    {
        latitude: 29.797178,  
        longitude: -95.365647, 
        weight: 1, 
    },
    {
        latitude: 29.674945,  
        longitude: -95.582512, 
        weight: 1, 
    },
    {
        latitude: 29.750336,  
        longitude: -95.572141, 
        weight: 1, 
    },
    {
        latitude: 29.858206,  
        longitude: -95.300513, 
        weight: 1, 
    },
    {
        latitude: 29.858206,  
        longitude: -95.300513, 
        weight: 1, 
    },
    {
        latitude: 29.746618,  
        longitude: -95.452081, 
        weight: 1, 
    },
    {
        latitude: 29.746618,  
        longitude: -95.452081, 
        weight: 1, 
    },
    {
        latitude: 29.72492,  
        longitude: -95.46818, 
        weight: 1, 
    },
    {
        latitude: 29.846715,  
        longitude: -95.281906, 
        weight: 1, 
    },
    {
        latitude: 29.627271,  
        longitude: -95.46529, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.784954,  
        longitude: -95.521834, 
        weight: 1, 
    },
    {
        latitude: 29.641051,  
        longitude: -95.449654, 
        weight: 1, 
    },
    {
        latitude: 29.688404,  
        longitude: -95.359306, 
        weight: 1, 
    },
    {
        latitude: 29.678566,  
        longitude: -95.338121, 
        weight: 1, 
    },
    {
        latitude: 29.73652,  
        longitude: -95.587584, 
        weight: 1, 
    },
    {
        latitude: 29.73652,  
        longitude: -95.587584, 
        weight: 1, 
    },
    {
        latitude: 29.885117,  
        longitude: -95.305786, 
        weight: 1, 
    },
    {
        latitude: 29.555217,  
        longitude: -95.156283, 
        weight: 1, 
    },
    {
        latitude: 29.740425,  
        longitude: -95.466518, 
        weight: 1, 
    },
    {
        latitude: 29.600801,  
        longitude: -95.45289, 
        weight: 1, 
    },
    {
        latitude: 29.928312,  
        longitude: -95.411523, 
        weight: 1, 
    },
    {
        latitude: 29.752398,  
        longitude: -95.587227, 
        weight: 1, 
    },
    {
        latitude: 29.740706,  
        longitude: -95.463677, 
        weight: 1, 
    },
    {
        latitude: 29.931911,  
        longitude: -95.395353, 
        weight: 1, 
    },
    {
        latitude: 29.863295,  
        longitude: -95.332678, 
        weight: 1, 
    },
    {
        latitude: 29.938711,  
        longitude: -95.353792, 
        weight: 1, 
    },
    {
        latitude: 29.840532,  
        longitude: -95.342815, 
        weight: 1, 
    },
    {
        latitude: 29.714012,  
        longitude: -95.541824, 
        weight: 1, 
    },
    {
        latitude: 29.726726,  
        longitude: -95.647854, 
        weight: 1, 
    },
    {
        latitude: 29.673341,  
        longitude: -95.399935, 
        weight: 1, 
    },
    {
        latitude: 29.756108,  
        longitude: -95.365508, 
        weight: 1, 
    },
    {
        latitude: 29.612146,  
        longitude: -95.341977, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.851509,  
        longitude: -95.333024, 
        weight: 1, 
    },
    {
        latitude: 29.851509,  
        longitude: -95.333024, 
        weight: 1, 
    },
    {
        latitude: 29.611227,  
        longitude: -95.236902, 
        weight: 1, 
    },
    {
        latitude: 29.611227,  
        longitude: -95.236902, 
        weight: 1, 
    },
    {
        latitude: 29.681798,  
        longitude: -95.392741, 
        weight: 1, 
    },
    {
        latitude: 29.93441,  
        longitude: -95.41558, 
        weight: 1, 
    },
    {
        latitude: 29.729051,  
        longitude: -95.520797, 
        weight: 1, 
    },
    {
        latitude: 29.744052,  
        longitude: -95.363745, 
        weight: 1, 
    },
    {
        latitude: 29.756049,  
        longitude: -95.49665, 
        weight: 1, 
    },
    {
        latitude: 29.864984,  
        longitude: -95.335013, 
        weight: 1, 
    },
    {
        latitude: 29.75211,  
        longitude: -95.625217, 
        weight: 1, 
    },
    {
        latitude: 29.75211,  
        longitude: -95.625217, 
        weight: 1, 
    },
    {
        latitude: 29.850595,  
        longitude: -95.491013, 
        weight: 1, 
    },
    {
        latitude: 29.938984,  
        longitude: -95.393191, 
        weight: 1, 
    },
    {
        latitude: 29.711378,  
        longitude: -95.504694, 
        weight: 1, 
    },
    {
        latitude: 29.676613,  
        longitude: -95.597607, 
        weight: 1, 
    },
    {
        latitude: 29.676613,  
        longitude: -95.597607, 
        weight: 1, 
    },
    {
        latitude: 29.733698,  
        longitude: -95.607612, 
        weight: 1, 
    },
    {
        latitude: 29.733698,  
        longitude: -95.607612, 
        weight: 1, 
    },
    {
        latitude: 29.790475,  
        longitude: -95.544593, 
        weight: 1, 
    },
    {
        latitude: 29.855799,  
        longitude: -95.540222, 
        weight: 1, 
    },
    {
        latitude: 29.747518,  
        longitude: -95.569026, 
        weight: 1, 
    },
    {
        latitude: 29.759638,  
        longitude: -95.360084, 
        weight: 1, 
    },
    {
        latitude: 29.727837,  
        longitude: -95.4279, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.855797,  
        longitude: -95.516947, 
        weight: 1, 
    },
    {
        latitude: 29.704895,  
        longitude: -95.514885, 
        weight: 1, 
    },
    {
        latitude: 29.767211,  
        longitude: -95.371797, 
        weight: 1, 
    },
    {
        latitude: 29.719546,  
        longitude: -95.610525, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.721974,  
        longitude: -95.412984, 
        weight: 1, 
    },
    {
        latitude: 29.675426,  
        longitude: -95.548801, 
        weight: 1, 
    },
    {
        latitude: 29.612207,  
        longitude: -95.222923, 
        weight: 1, 
    },
    {
        latitude: 29.726311,  
        longitude: -95.473282, 
        weight: 1, 
    },
    {
        latitude: 29.848343,  
        longitude: -95.241056, 
        weight: 1, 
    },
    {
        latitude: 29.848343,  
        longitude: -95.241056, 
        weight: 1, 
    },
    {
        latitude: 29.788967,  
        longitude: -95.648459, 
        weight: 1, 
    },
    {
        latitude: 29.751412,  
        longitude: -95.359604, 
        weight: 1, 
    },
    {
        latitude: 29.777443,  
        longitude: -95.59878, 
        weight: 1, 
    },
    {
        latitude: 29.925146,  
        longitude: -95.407062, 
        weight: 1, 
    },
    {
        latitude: 29.770992,  
        longitude: -95.213699, 
        weight: 1, 
    },
    {
        latitude: 29.741533,  
        longitude: -95.365768, 
        weight: 1, 
    },
    {
        latitude: 29.741533,  
        longitude: -95.365768, 
        weight: 1, 
    },
    {
        latitude: 29.768333,  
        longitude: -95.183038, 
        weight: 1, 
    },
    {
        latitude: 29.68217,  
        longitude: -95.417477, 
        weight: 1, 
    },
    {
        latitude: 29.803514,  
        longitude: -95.516396, 
        weight: 1, 
    },
    {
        latitude: 29.803514,  
        longitude: -95.516396, 
        weight: 1, 
    },
    {
        latitude: 29.768333,  
        longitude: -95.183038, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.845337,  
        longitude: -95.497494, 
        weight: 1, 
    },
    {
        latitude: 29.753267,  
        longitude: -95.381286, 
        weight: 1, 
    },
    {
        latitude: 29.715388,  
        longitude: -95.605601, 
        weight: 1, 
    },
    {
        latitude: 29.715388,  
        longitude: -95.605601, 
        weight: 1, 
    },
    {
        latitude: 29.661567,  
        longitude: -95.612887, 
        weight: 1, 
    },
    {
        latitude: 29.707178,  
        longitude: -95.310974, 
        weight: 1, 
    },
    {
        latitude: 29.795775,  
        longitude: -95.360964, 
        weight: 1, 
    },
    {
        latitude: 29.736293,  
        longitude: -95.596334, 
        weight: 1, 
    },
    {
        latitude: 29.795775,  
        longitude: -95.360964, 
        weight: 1, 
    },
    {
        latitude: 29.856776,  
        longitude: -95.395326, 
        weight: 1, 
    },
    {
        latitude: 29.813276,  
        longitude: -95.342376, 
        weight: 1, 
    },
    {
        latitude: 29.73652,  
        longitude: -95.587584, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.709053,  
        longitude: -95.527068, 
        weight: 1, 
    },
    {
        latitude: 29.603283,  
        longitude: -95.286132, 
        weight: 1, 
    },
    {
        latitude: 29.603283,  
        longitude: -95.286132, 
        weight: 1, 
    },
    {
        latitude: 29.603283,  
        longitude: -95.286132, 
        weight: 1, 
    },
    {
        latitude: 29.603283,  
        longitude: -95.286132, 
        weight: 1, 
    },
    {
        latitude: 29.625543,  
        longitude: -95.320581, 
        weight: 1, 
    },
    {
        latitude: 29.861662,  
        longitude: -95.326508, 
        weight: 1, 
    },
    {
        latitude: 29.603852,  
        longitude: -95.493092, 
        weight: 1, 
    },
    {
        latitude: 29.798642,  
        longitude: -95.328183, 
        weight: 1, 
    },
    {
        latitude: 30.050848,  
        longitude: -95.181663, 
        weight: 1, 
    },
    {
        latitude: 30.050848,  
        longitude: -95.181663, 
        weight: 1, 
    },
    {
        latitude: 29.584362,  
        longitude: -95.453735, 
        weight: 1, 
    },
    {
        latitude: 29.748938,  
        longitude: -95.371179, 
        weight: 1, 
    },
    {
        latitude: 29.676425,  
        longitude: -95.266564, 
        weight: 1, 
    },
    {
        latitude: 29.850925,  
        longitude: -95.515388, 
        weight: 1, 
    },
    {
        latitude: 29.647194,  
        longitude: -95.483254, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.797182,  
        longitude: -95.329468, 
        weight: 1, 
    },
    {
        latitude: 29.71295,  
        longitude: -95.509824, 
        weight: 1, 
    },
    {
        latitude: 29.734251,  
        longitude: -95.388835, 
        weight: 1, 
    },
    {
        latitude: 29.955639,  
        longitude: -95.540427, 
        weight: 1, 
    },
    {
        latitude: 29.748939,  
        longitude: -95.448748, 
        weight: 1, 
    },
    {
        latitude: 29.883105,  
        longitude: -95.465401, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.940031,  
        longitude: -95.331277, 
        weight: 1, 
    },
    {
        latitude: 29.725119,  
        longitude: -95.632282, 
        weight: 1, 
    },
    {
        latitude: 29.725119,  
        longitude: -95.632282, 
        weight: 1, 
    },
    {
        latitude: 29.725119,  
        longitude: -95.632282, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.704888,  
        longitude: -95.548583, 
        weight: 1, 
    },
    {
        latitude: 29.733849,  
        longitude: -95.466697, 
        weight: 1, 
    },
    {
        latitude: 29.870763,  
        longitude: -95.331381, 
        weight: 1, 
    },
    {
        latitude: 29.711871,  
        longitude: -95.487484, 
        weight: 1, 
    },
    {
        latitude: 29.73799,  
        longitude: -95.465077, 
        weight: 1, 
    },
    {
        latitude: 29.720422,  
        longitude: -95.38483, 
        weight: 1, 
    },
    {
        latitude: 29.689821,  
        longitude: -95.288202, 
        weight: 1, 
    },
    {
        latitude: 29.828801,  
        longitude: -95.316623, 
        weight: 1, 
    },
    {
        latitude: 29.644456,  
        longitude: -95.357, 
        weight: 1, 
    },
    {
        latitude: 29.869897,  
        longitude: -95.398124, 
        weight: 1, 
    },
    {
        latitude: 29.680442,  
        longitude: -95.479238, 
        weight: 1, 
    },
    {
        latitude: 30.030998,  
        longitude: -95.107812, 
        weight: 1, 
    },
    {
        latitude: 30.030998,  
        longitude: -95.107812, 
        weight: 1, 
    },
    {
        latitude: 29.737359,  
        longitude: -95.515725, 
        weight: 1, 
    },
    {
        latitude: 29.628815,  
        longitude: -95.344107, 
        weight: 1, 
    },
    {
        latitude: 29.88624,  
        longitude: -95.416362, 
        weight: 1, 
    },
    {
        latitude: 29.63856,  
        longitude: -95.505734, 
        weight: 1, 
    },
    {
        latitude: 29.804515,  
        longitude: -95.545587, 
        weight: 1, 
    },
    {
        latitude: 29.728966,  
        longitude: -95.46035, 
        weight: 1, 
    },
    {
        latitude: 29.847467,  
        longitude: -95.28403, 
        weight: 1, 
    },
    {
        latitude: 29.805411,  
        longitude: -95.216989, 
        weight: 1, 
    },
    {
        latitude: 29.607656,  
        longitude: -95.243324, 
        weight: 1, 
    },
    {
        latitude: 29.834633,  
        longitude: -95.322706, 
        weight: 1, 
    },
    {
        latitude: 29.707191,  
        longitude: -95.545615, 
        weight: 1, 
    },
    {
        latitude: 29.68648,  
        longitude: -95.565049, 
        weight: 1, 
    },
    {
        latitude: 29.614861,  
        longitude: -95.215199, 
        weight: 1, 
    },
    {
        latitude: 29.779901,  
        longitude: -95.624614, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.574633,  
        longitude: -95.519653, 
        weight: 1, 
    },
    {
        latitude: 29.875533,  
        longitude: -95.292501, 
        weight: 1, 
    },
    {
        latitude: 29.821029,  
        longitude: -95.446026, 
        weight: 1, 
    },
    {
        latitude: 29.673188,  
        longitude: -95.271128, 
        weight: 1, 
    },
    {
        latitude: 29.948705,  
        longitude: -95.331367, 
        weight: 1, 
    },
    {
        latitude: 29.955546,  
        longitude: -95.54032, 
        weight: 1, 
    },
    {
        latitude: 29.938598,  
        longitude: -95.36598, 
        weight: 1, 
    },
    {
        latitude: 29.747924,  
        longitude: -95.355472, 
        weight: 1, 
    },
    {
        latitude: 29.731335,  
        longitude: -95.562171, 
        weight: 1, 
    },
    {
        latitude: 29.680557,  
        longitude: -95.257968, 
        weight: 1, 
    },
    {
        latitude: 29.606016,  
        longitude: -95.228358, 
        weight: 1, 
    },
    {
        latitude: 29.942694,  
        longitude: -95.330708, 
        weight: 1, 
    },
    {
        latitude: 29.821218,  
        longitude: -95.530849, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.673021,  
        longitude: -95.55995, 
        weight: 1, 
    },
    {
        latitude: 29.716484,  
        longitude: -95.53893, 
        weight: 1, 
    },
    {
        latitude: 29.678122,  
        longitude: -95.510823, 
        weight: 1, 
    },
    {
        latitude: 29.678122,  
        longitude: -95.510823, 
        weight: 1, 
    },
    {
        latitude: 29.6919,  
        longitude: -95.551818, 
        weight: 1, 
    },
    {
        latitude: 29.863445,  
        longitude: -95.409555, 
        weight: 1, 
    },
    {
        latitude: 29.596125,  
        longitude: -95.198428, 
        weight: 1, 
    },
    {
        latitude: 29.795775,  
        longitude: -95.360964, 
        weight: 1, 
    },
    {
        latitude: 29.606143,  
        longitude: -95.268661, 
        weight: 1, 
    },
    {
        latitude: 29.697176,  
        longitude: -95.362272, 
        weight: 1, 
    },
    {
        latitude: 29.58307,  
        longitude: -95.47214, 
        weight: 1, 
    },
    {
        latitude: 29.741667,  
        longitude: -95.457545, 
        weight: 1, 
    },
    {
        latitude: 29.741667,  
        longitude: -95.457545, 
        weight: 1, 
    },
    {
        latitude: 29.851089,  
        longitude: -95.378843, 
        weight: 1, 
    },
    {
        latitude: 29.6919,  
        longitude: -95.551818, 
        weight: 1, 
    },
    {
        latitude: 29.640141,  
        longitude: -95.401556, 
        weight: 1, 
    },
    {
        latitude: 29.640141,  
        longitude: -95.401556, 
        weight: 1, 
    },
    {
        latitude: 29.739274,  
        longitude: -95.332261, 
        weight: 1, 
    },
    {
        latitude: 29.690516,  
        longitude: -95.549614, 
        weight: 1, 
    },
    {
        latitude: 29.690516,  
        longitude: -95.549614, 
        weight: 1, 
    },
    {
        latitude: 29.822672,  
        longitude: -95.539012, 
        weight: 1, 
    },
    {
        latitude: 29.850633,  
        longitude: -95.254261, 
        weight: 1, 
    },
    {
        latitude: 29.772621,  
        longitude: -95.560775, 
        weight: 1, 
    },
    {
        latitude: 29.824072,  
        longitude: -95.474218, 
        weight: 1, 
    },
    {
        latitude: 29.845838,  
        longitude: -95.272968, 
        weight: 1, 
    },
    {
        latitude: 29.665445,  
        longitude: -95.26032, 
        weight: 1, 
    },
    {
        latitude: 29.67574,  
        longitude: -95.265895, 
        weight: 1, 
    },
    {
        latitude: 29.752664,  
        longitude: -95.360624, 
        weight: 1, 
    },
    {
        latitude: 29.698366,  
        longitude: -95.375114, 
        weight: 1, 
    },
    {
        latitude: 29.61009,  
        longitude: -95.210258, 
        weight: 1, 
    },
    {
        latitude: 29.549015,  
        longitude: -95.14634, 
        weight: 1, 
    },
    {
        latitude: 29.763979,  
        longitude: -95.361757, 
        weight: 1, 
    },
    {
        latitude: 29.73104,  
        longitude: -95.415255, 
        weight: 1, 
    },
    {
        latitude: 29.698442,  
        longitude: -95.552247, 
        weight: 1, 
    },
    {
        latitude: 29.79816,  
        longitude: -95.369047, 
        weight: 1, 
    },
    {
        latitude: 29.687075,  
        longitude: -95.525983, 
        weight: 1, 
    },
    {
        latitude: 29.802847,  
        longitude: -95.486964, 
        weight: 1, 
    },
    {
        latitude: 29.802843,  
        longitude: -95.47922, 
        weight: 1, 
    },
    {
        latitude: 29.644615,  
        longitude: -95.241185, 
        weight: 1, 
    },
    {
        latitude: 29.73632,  
        longitude: -95.594806, 
        weight: 1, 
    },
    {
        latitude: 29.611223,  
        longitude: -95.238242, 
        weight: 1, 
    },
    {
        latitude: 29.752664,  
        longitude: -95.360624, 
        weight: 1, 
    },
    {
        latitude: 29.829061,  
        longitude: -95.284418, 
        weight: 1, 
    },
    {
        latitude: 29.720623,  
        longitude: -95.556847, 
        weight: 1, 
    },
    {
        latitude: 29.756236,  
        longitude: -95.457716, 
        weight: 1, 
    },
    {
        latitude: 30.049471,  
        longitude: -95.235398, 
        weight: 1, 
    },
    {
        latitude: 29.758459,  
        longitude: -95.347421, 
        weight: 1, 
    },
    {
        latitude: 29.946219,  
        longitude: -95.298945, 
        weight: 1, 
    },
    {
        latitude: 29.675488,  
        longitude: -95.547867, 
        weight: 1, 
    },
    {
        latitude: 29.710313,  
        longitude: -95.50402, 
        weight: 1, 
    },
    {
        latitude: 29.696482,  
        longitude: -95.30282, 
        weight: 1, 
    },
    {
        latitude: 29.86176,  
        longitude: -95.505434, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.716749,  
        longitude: -95.375038, 
        weight: 1, 
    },
    {
        latitude: 29.668365,  
        longitude: -95.261375, 
        weight: 1, 
    },
    {
        latitude: 29.684705,  
        longitude: -95.338138, 
        weight: 1, 
    },
    {
        latitude: 29.68525,  
        longitude: -95.291642, 
        weight: 1, 
    },
    {
        latitude: 29.819294,  
        longitude: -95.313337, 
        weight: 1, 
    },
    {
        latitude: 29.840808,  
        longitude: -95.375625, 
        weight: 1, 
    },
    {
        latitude: 29.766478,  
        longitude: -95.397396, 
        weight: 1, 
    },
    {
        latitude: 29.841873,  
        longitude: -95.300397, 
        weight: 1, 
    },
    {
        latitude: 29.747924,  
        longitude: -95.355472, 
        weight: 1, 
    },
    {
        latitude: 29.726862,  
        longitude: -95.371038, 
        weight: 1, 
    },
    {
        latitude: 29.733016,  
        longitude: -95.487675, 
        weight: 1, 
    },
    {
        latitude: 29.950649,  
        longitude: -95.394643, 
        weight: 1, 
    },
    {
        latitude: 29.801342,  
        longitude: -95.330627, 
        weight: 1, 
    },
    {
        latitude: 29.869949,  
        longitude: -95.39407, 
        weight: 1, 
    },
    {
        latitude: 29.733048,  
        longitude: -95.484585, 
        weight: 1, 
    },
    {
        latitude: 29.754612,  
        longitude: -95.333923, 
        weight: 1, 
    },
    {
        latitude: 29.726013,  
        longitude: -95.373993, 
        weight: 1, 
    },
    {
        latitude: 29.644232,  
        longitude: -95.508293, 
        weight: 1, 
    },
    {
        latitude: 29.727853,  
        longitude: -95.576759, 
        weight: 1, 
    },
    {
        latitude: 29.799737,  
        longitude: -95.409438, 
        weight: 1, 
    },
    {
        latitude: 29.84116,  
        longitude: -95.400198, 
        weight: 1, 
    },
    {
        latitude: 29.77952,  
        longitude: -95.218575, 
        weight: 1, 
    },
    {
        latitude: 29.786199,  
        longitude: -95.188373, 
        weight: 1, 
    },
    {
        latitude: 29.706087,  
        longitude: -95.318241, 
        weight: 1, 
    },
    {
        latitude: 29.593366,  
        longitude: -95.192527, 
        weight: 1, 
    },
    {
        latitude: 29.593366,  
        longitude: -95.192527, 
        weight: 1, 
    },
    {
        latitude: 29.732639,  
        longitude: -95.28318, 
        weight: 1, 
    },
    {
        latitude: 29.732639,  
        longitude: -95.28318, 
        weight: 1, 
    },
    {
        latitude: 29.623234,  
        longitude: -95.499056, 
        weight: 1, 
    },
    {
        latitude: 29.726781,  
        longitude: -95.28677, 
        weight: 1, 
    },
    {
        latitude: 29.811924,  
        longitude: -95.355415, 
        weight: 1, 
    },
    {
        latitude: 29.811924,  
        longitude: -95.355415, 
        weight: 1, 
    },
    {
        latitude: 29.811924,  
        longitude: -95.355415, 
        weight: 1, 
    },
    {
        latitude: 29.730563,  
        longitude: -95.643987, 
        weight: 1, 
    },
    {
        latitude: 29.803728,  
        longitude: -95.420255, 
        weight: 1, 
    },
    {
        latitude: 29.773213,  
        longitude: -95.291398, 
        weight: 1, 
    },
    {
        latitude: 29.964531,  
        longitude: -95.535769, 
        weight: 1, 
    },
    {
        latitude: 29.961466,  
        longitude: -95.428535, 
        weight: 1, 
    },
    {
        latitude: 29.75938,  
        longitude: -95.354118, 
        weight: 1, 
    },
    {
        latitude: 29.75938,  
        longitude: -95.354118, 
        weight: 1, 
    },
    {
        latitude: 29.737768,  
        longitude: -95.488556, 
        weight: 1, 
    },
    {
        latitude: 29.716669,  
        longitude: -95.317166, 
        weight: 1, 
    },
    {
        latitude: 29.845377,  
        longitude: -95.539361, 
        weight: 1, 
    },
    {
        latitude: 29.617859,  
        longitude: -95.221319, 
        weight: 1, 
    },
    {
        latitude: 29.745624,  
        longitude: -95.37007, 
        weight: 1, 
    },
    {
        latitude: 29.655109,  
        longitude: -95.252604, 
        weight: 1, 
    },
    {
        latitude: 29.687415,  
        longitude: -95.516778, 
        weight: 1, 
    },
    {
        latitude: 29.722172,  
        longitude: -95.380069, 
        weight: 1, 
    },
    {
        latitude: 29.722172,  
        longitude: -95.380069, 
        weight: 1, 
    },
    {
        latitude: 29.860897,  
        longitude: -95.391104, 
        weight: 1, 
    },
    {
        latitude: 29.741842,  
        longitude: -95.350781, 
        weight: 1, 
    },
    {
        latitude: 29.677939,  
        longitude: -95.549846, 
        weight: 1, 
    },
    {
        latitude: 29.88329,  
        longitude: -95.417825, 
        weight: 1, 
    },
    {
        latitude: 29.9308,  
        longitude: -95.409719, 
        weight: 1, 
    },
    {
        latitude: 29.9308,  
        longitude: -95.409719, 
        weight: 1, 
    },
    {
        latitude: 29.862822,  
        longitude: -95.387226, 
        weight: 1, 
    },
    {
        latitude: 29.832522,  
        longitude: -95.545289, 
        weight: 1, 
    },
    {
        latitude: 29.690797,  
        longitude: -95.595931, 
        weight: 1, 
    },
    {
        latitude: 29.659374,  
        longitude: -95.368021, 
        weight: 1, 
    },
    {
        latitude: 29.659374,  
        longitude: -95.368021, 
        weight: 1, 
    },
    {
        latitude: 29.659374,  
        longitude: -95.368021, 
        weight: 1, 
    },
    {
        latitude: 29.659374,  
        longitude: -95.368021, 
        weight: 1, 
    },
    {
        latitude: 29.741667,  
        longitude: -95.457545, 
        weight: 1, 
    },
    {
        latitude: 29.825757,  
        longitude: -95.33768, 
        weight: 1, 
    },
    {
        latitude: 29.753379,  
        longitude: -95.362647, 
        weight: 1, 
    },
    {
        latitude: 29.709053,  
        longitude: -95.527068, 
        weight: 1, 
    },
    {
        latitude: 29.879452,  
        longitude: -95.372494, 
        weight: 1, 
    },
    {
        latitude: 29.848729,  
        longitude: -95.505928, 
        weight: 1, 
    },
    {
        latitude: 29.848729,  
        longitude: -95.505928, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506145, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506145, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506145, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506145, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506145, 
        weight: 1, 
    },
    {
        latitude: 29.669065,  
        longitude: -95.351504, 
        weight: 1, 
    },
    {
        latitude: 29.777163,  
        longitude: -95.314935, 
        weight: 1, 
    },
    {
        latitude: 29.679349,  
        longitude: -95.352067, 
        weight: 1, 
    },
    {
        latitude: 29.744851,  
        longitude: -95.584016, 
        weight: 1, 
    },
    {
        latitude: 29.794526,  
        longitude: -95.473782, 
        weight: 1, 
    },
    {
        latitude: 29.791469,  
        longitude: -95.360893, 
        weight: 1, 
    },
    {
        latitude: 29.678717,  
        longitude: -95.556144, 
        weight: 1, 
    },
    {
        latitude: 29.772117,  
        longitude: -95.333735, 
        weight: 1, 
    },
    {
        latitude: 29.744528,  
        longitude: -95.393467, 
        weight: 1, 
    },
    {
        latitude: 29.982765,  
        longitude: -95.281501, 
        weight: 1, 
    },
    {
        latitude: 29.730653,  
        longitude: -95.428282, 
        weight: 1, 
    },
    {
        latitude: 29.807528,  
        longitude: -95.52279, 
        weight: 1, 
    },
    {
        latitude: 29.725365,  
        longitude: -95.539101, 
        weight: 1, 
    },
    {
        latitude: 29.664059,  
        longitude: -95.328613, 
        weight: 1, 
    },
    {
        latitude: 29.730593,  
        longitude: -95.63972, 
        weight: 1, 
    },
    {
        latitude: 29.638468,  
        longitude: -95.237932, 
        weight: 1, 
    },
    {
        latitude: 29.744751,  
        longitude: -95.380932, 
        weight: 1, 
    },
    {
        latitude: 29.746395,  
        longitude: -95.373207, 
        weight: 1, 
    },
    {
        latitude: 29.942694,  
        longitude: -95.330708, 
        weight: 1, 
    },
    {
        latitude: 29.745458,  
        longitude: -95.371478, 
        weight: 1, 
    },
    {
        latitude: 29.646475,  
        longitude: -95.508307, 
        weight: 1, 
    },
    {
        latitude: 29.720886,  
        longitude: -95.30207, 
        weight: 1, 
    },
    {
        latitude: 29.614671,  
        longitude: -95.215, 
        weight: 1, 
    },
    {
        latitude: 29.734021,  
        longitude: -95.42252, 
        weight: 1, 
    },
    {
        latitude: 29.727853,  
        longitude: -95.576759, 
        weight: 1, 
    },
    {
        latitude: 29.752955,  
        longitude: -95.369267, 
        weight: 1, 
    },
    {
        latitude: 29.735737,  
        longitude: -95.632221, 
        weight: 1, 
    },
    {
        latitude: 29.735737,  
        longitude: -95.632221, 
        weight: 1, 
    },
    {
        latitude: 29.853066,  
        longitude: -95.515406, 
        weight: 1, 
    },
    {
        latitude: 29.857759,  
        longitude: -95.30049, 
        weight: 1, 
    },
    {
        latitude: 29.709132,  
        longitude: -95.235148, 
        weight: 1, 
    },
    {
        latitude: 29.851469,  
        longitude: -95.397447, 
        weight: 1, 
    },
    {
        latitude: 29.751113,  
        longitude: -95.377166, 
        weight: 1, 
    },
    {
        latitude: 29.7347,  
        longitude: -95.489824, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.831734,  
        longitude: -95.523621, 
        weight: 1, 
    },
    {
        latitude: 29.732965,  
        longitude: -95.484243, 
        weight: 1, 
    },
    {
        latitude: 29.721264,  
        longitude: -95.567583, 
        weight: 1, 
    },
    {
        latitude: 29.840486,  
        longitude: -95.321398, 
        weight: 1, 
    },
    {
        latitude: 29.840486,  
        longitude: -95.321398, 
        weight: 1, 
    },
    {
        latitude: 29.856484,  
        longitude: -95.397329, 
        weight: 1, 
    },
    {
        latitude: 29.746798,  
        longitude: -95.3768, 
        weight: 1, 
    },
    {
        latitude: 29.69118,  
        longitude: -95.504898, 
        weight: 1, 
    },
    {
        latitude: 29.676649,  
        longitude: -95.428244, 
        weight: 1, 
    },
    {
        latitude: 29.685741,  
        longitude: -95.362698, 
        weight: 1, 
    },
    {
        latitude: 29.673956,  
        longitude: -95.430327, 
        weight: 1, 
    },
    {
        latitude: 30.082901,  
        longitude: -95.193178, 
        weight: 1, 
    },
    {
        latitude: 29.743441,  
        longitude: -95.402902, 
        weight: 1, 
    },
    {
        latitude: 29.793538,  
        longitude: -95.688383, 
        weight: 1, 
    },
    {
        latitude: 29.731791,  
        longitude: -95.510014, 
        weight: 1, 
    },
    {
        latitude: 29.811143,  
        longitude: -95.475118, 
        weight: 1, 
    },
    {
        latitude: 29.64892,  
        longitude: -95.345551, 
        weight: 1, 
    },
    {
        latitude: 29.72383,  
        longitude: -95.378408, 
        weight: 1, 
    },
    {
        latitude: 29.969307,  
        longitude: -95.166743, 
        weight: 1, 
    },
    {
        latitude: 29.74386,  
        longitude: -95.370061, 
        weight: 1, 
    },
    {
        latitude: 29.725983,  
        longitude: -95.278583, 
        weight: 1, 
    },
    {
        latitude: 29.687739,  
        longitude: -95.525997, 
        weight: 1, 
    },
    {
        latitude: 29.548637,  
        longitude: -95.316818, 
        weight: 1, 
    },
    {
        latitude: 29.797113,  
        longitude: -95.383987, 
        weight: 1, 
    },
    {
        latitude: 29.726085,  
        longitude: -95.526039, 
        weight: 1, 
    },
    {
        latitude: 29.746678,  
        longitude: -95.447537, 
        weight: 1, 
    },
    {
        latitude: 29.743451,  
        longitude: -95.497601, 
        weight: 1, 
    },
    {
        latitude: 29.712535,  
        longitude: -95.316274, 
        weight: 1, 
    },
    {
        latitude: 29.655646,  
        longitude: -95.508409, 
        weight: 1, 
    },
    {
        latitude: 29.781417,  
        longitude: -95.316651, 
        weight: 1, 
    },
    {
        latitude: 29.691139,  
        longitude: -95.535201, 
        weight: 1, 
    },
    {
        latitude: 29.850898,  
        longitude: -95.473568, 
        weight: 1, 
    },
    {
        latitude: 29.848362,  
        longitude: -95.403024, 
        weight: 1, 
    },
    {
        latitude: 29.73299,  
        longitude: -95.354765, 
        weight: 1, 
    },
    {
        latitude: 29.747136,  
        longitude: -95.359655, 
        weight: 1, 
    },
    {
        latitude: 29.692779,  
        longitude: -95.413063, 
        weight: 1, 
    },
    {
        latitude: 29.829293,  
        longitude: -95.380961, 
        weight: 1, 
    },
    {
        latitude: 29.638674,  
        longitude: -95.250373, 
        weight: 1, 
    },
    {
        latitude: 29.667692,  
        longitude: -95.556632, 
        weight: 1, 
    },
    {
        latitude: 29.684478,  
        longitude: -95.597597, 
        weight: 1, 
    },
    {
        latitude: 29.821049,  
        longitude: -95.34858, 
        weight: 1, 
    },
    {
        latitude: 29.821049,  
        longitude: -95.34858, 
        weight: 1, 
    },
    {
        latitude: 29.708698,  
        longitude: -95.510471, 
        weight: 1, 
    },
    {
        latitude: 29.644142,  
        longitude: -95.508305, 
        weight: 1, 
    },
    {
        latitude: 29.760585,  
        longitude: -95.361972, 
        weight: 1, 
    },
    {
        latitude: 29.764309,  
        longitude: -95.36043, 
        weight: 1, 
    },
    {
        latitude: 29.724344,  
        longitude: -95.373008, 
        weight: 1, 
    },
    {
        latitude: 29.736422,  
        longitude: -95.495291, 
        weight: 1, 
    },
    {
        latitude: 29.720886,  
        longitude: -95.30207, 
        weight: 1, 
    },
    {
        latitude: 29.720886,  
        longitude: -95.30207, 
        weight: 1, 
    },
    {
        latitude: 29.720886,  
        longitude: -95.30207, 
        weight: 1, 
    },
    {
        latitude: 29.720886,  
        longitude: -95.30207, 
        weight: 1, 
    },
    {
        latitude: 29.612364,  
        longitude: -95.309816, 
        weight: 1, 
    },
    {
        latitude: 29.705822,  
        longitude: -95.510932, 
        weight: 1, 
    },
    {
        latitude: 29.703636,  
        longitude: -95.277931, 
        weight: 1, 
    },
    {
        latitude: 29.746484,  
        longitude: -95.356735, 
        weight: 1, 
    },
    {
        latitude: 29.722702,  
        longitude: -95.489022, 
        weight: 1, 
    },
    {
        latitude: 29.722702,  
        longitude: -95.489022, 
        weight: 1, 
    },
    {
        latitude: 29.543405,  
        longitude: -95.145625, 
        weight: 1, 
    },
    {
        latitude: 29.687177,  
        longitude: -95.525983, 
        weight: 1, 
    },
    {
        latitude: 29.747892,  
        longitude: -95.569568, 
        weight: 1, 
    },
    {
        latitude: 29.748109,  
        longitude: -95.366707, 
        weight: 1, 
    },
    {
        latitude: 29.872835,  
        longitude: -95.399757, 
        weight: 1, 
    },
    {
        latitude: 29.689212,  
        longitude: -95.46152, 
        weight: 1, 
    },
    {
        latitude: 29.86176,  
        longitude: -95.505434, 
        weight: 1, 
    },
    {
        latitude: 29.747473,  
        longitude: -95.388231, 
        weight: 1, 
    },
    {
        latitude: 29.719527,  
        longitude: -95.372477, 
        weight: 1, 
    },
    {
        latitude: 29.742771,  
        longitude: -95.402682, 
        weight: 1, 
    },
    {
        latitude: 29.742771,  
        longitude: -95.402682, 
        weight: 1, 
    },
    {
        latitude: 29.831595,  
        longitude: -95.383546, 
        weight: 1, 
    },
    {
        latitude: 29.831595,  
        longitude: -95.383546, 
        weight: 1, 
    },
    {
        latitude: 29.801047,  
        longitude: -95.511332, 
        weight: 1, 
    },
    {
        latitude: 29.801047,  
        longitude: -95.511332, 
        weight: 1, 
    },
    {
        latitude: 29.737671,  
        longitude: -95.496456, 
        weight: 1, 
    },
    {
        latitude: 29.754813,  
        longitude: -95.361385, 
        weight: 1, 
    },
    {
        latitude: 29.753013,  
        longitude: -95.369346, 
        weight: 1, 
    },
    {
        latitude: 29.694529,  
        longitude: -95.277723, 
        weight: 1, 
    },
    {
        latitude: 29.696282,  
        longitude: -95.552199, 
        weight: 1, 
    },
    {
        latitude: 29.727852,  
        longitude: -95.589672, 
        weight: 1, 
    },
    {
        latitude: 29.857875,  
        longitude: -95.473342, 
        weight: 1, 
    },
    {
        latitude: 29.668281,  
        longitude: -95.516814, 
        weight: 1, 
    },
    {
        latitude: 29.763869,  
        longitude: -95.370263, 
        weight: 1, 
    },
    {
        latitude: 29.671938,  
        longitude: -95.428016, 
        weight: 1, 
    },
    {
        latitude: 29.674555,  
        longitude: -95.355797, 
        weight: 1, 
    },
    {
        latitude: 29.922298,  
        longitude: -95.407042, 
        weight: 1, 
    },
    {
        latitude: 29.922298,  
        longitude: -95.407042, 
        weight: 1, 
    },
    {
        latitude: 29.769968,  
        longitude: -95.401118, 
        weight: 1, 
    },
    {
        latitude: 29.671938,  
        longitude: -95.428016, 
        weight: 1, 
    },
    {
        latitude: 29.764235,  
        longitude: -95.222096, 
        weight: 1, 
    },
    {
        latitude: 29.768667,  
        longitude: -95.387714, 
        weight: 1, 
    },
    {
        latitude: 29.648608,  
        longitude: -95.21075, 
        weight: 1, 
    },
    {
        latitude: 29.638557,  
        longitude: -95.224682, 
        weight: 1, 
    },
    {
        latitude: 29.668471,  
        longitude: -95.347366, 
        weight: 1, 
    },
    {
        latitude: 29.668471,  
        longitude: -95.347366, 
        weight: 1, 
    },
    {
        latitude: 29.647367,  
        longitude: -95.537084, 
        weight: 1, 
    },
    {
        latitude: 29.772969,  
        longitude: -95.404912, 
        weight: 1, 
    },
    {
        latitude: 29.736716,  
        longitude: -95.574832, 
        weight: 1, 
    },
    {
        latitude: 29.700011,  
        longitude: -95.486683, 
        weight: 1, 
    },
    {
        latitude: 29.747606,  
        longitude: -95.569379, 
        weight: 1, 
    },
    {
        latitude: 29.762306,  
        longitude: -95.360793, 
        weight: 1, 
    },
    {
        latitude: 29.749083,  
        longitude: -95.377523, 
        weight: 1, 
    },
    {
        latitude: 29.749083,  
        longitude: -95.377523, 
        weight: 1, 
    },
    {
        latitude: 29.967811,  
        longitude: -95.430564, 
        weight: 1, 
    },
    {
        latitude: 29.734135,  
        longitude: -95.329685, 
        weight: 1, 
    },
    {
        latitude: 29.734135,  
        longitude: -95.329685, 
        weight: 1, 
    },
    {
        latitude: 29.734135,  
        longitude: -95.329685, 
        weight: 1, 
    },
    {
        latitude: 29.658782,  
        longitude: -95.255049, 
        weight: 1, 
    },
    {
        latitude: 29.658782,  
        longitude: -95.255049, 
        weight: 1, 
    },
    {
        latitude: 29.747553,  
        longitude: -95.367953, 
        weight: 1, 
    },
    {
        latitude: 29.747553,  
        longitude: -95.367953, 
        weight: 1, 
    },
    {
        latitude: 29.855596,  
        longitude: -95.38738, 
        weight: 1, 
    },
    {
        latitude: 29.855596,  
        longitude: -95.38738, 
        weight: 1, 
    },
    {
        latitude: 29.855596,  
        longitude: -95.38738, 
        weight: 1, 
    },
    {
        latitude: 29.73908,  
        longitude: -95.48858, 
        weight: 1, 
    },
    {
        latitude: 29.729902,  
        longitude: -95.568051, 
        weight: 1, 
    },
    {
        latitude: 29.65751,  
        longitude: -95.539074, 
        weight: 1, 
    },
    {
        latitude: 29.65751,  
        longitude: -95.539074, 
        weight: 1, 
    },
    {
        latitude: 29.661539,  
        longitude: -95.597836, 
        weight: 1, 
    },
    {
        latitude: 29.747182,  
        longitude: -95.562107, 
        weight: 1, 
    },
    {
        latitude: 29.68693,  
        longitude: -95.368322, 
        weight: 1, 
    },
    {
        latitude: 29.618564,  
        longitude: -95.28528, 
        weight: 1, 
    },
    {
        latitude: 29.849986,  
        longitude: -95.303804, 
        weight: 1, 
    },
    {
        latitude: 29.967811,  
        longitude: -95.430564, 
        weight: 1, 
    },
    {
        latitude: 29.733981,  
        longitude: -95.489824, 
        weight: 1, 
    },
    {
        latitude: 29.772896,  
        longitude: -95.29142, 
        weight: 1, 
    },
    {
        latitude: 29.803177,  
        longitude: -95.317002, 
        weight: 1, 
    },
    {
        latitude: 29.651873,  
        longitude: -95.548888, 
        weight: 1, 
    },
    {
        latitude: 29.86176,  
        longitude: -95.505434, 
        weight: 1, 
    },
    {
        latitude: 29.688373,  
        longitude: -95.570259, 
        weight: 1, 
    },
    {
        latitude: 29.709053,  
        longitude: -95.527068, 
        weight: 1, 
    },
    {
        latitude: 29.84169,  
        longitude: -95.324008, 
        weight: 1, 
    },
    {
        latitude: 29.854896,  
        longitude: -95.39634, 
        weight: 1, 
    },
    {
        latitude: 29.735509,  
        longitude: -95.29502, 
        weight: 1, 
    },
    {
        latitude: 29.735509,  
        longitude: -95.29502, 
        weight: 1, 
    },
    {
        latitude: 29.652522,  
        longitude: -95.355465, 
        weight: 1, 
    },
    {
        latitude: 29.710877,  
        longitude: -95.506283, 
        weight: 1, 
    },
    {
        latitude: 29.719291,  
        longitude: -95.357643, 
        weight: 1, 
    },
    {
        latitude: 29.719291,  
        longitude: -95.357643, 
        weight: 1, 
    },
    {
        latitude: 29.709861,  
        longitude: -95.310419, 
        weight: 1, 
    },
    {
        latitude: 29.777287,  
        longitude: -95.417955, 
        weight: 1, 
    },
    {
        latitude: 29.777287,  
        longitude: -95.417955, 
        weight: 1, 
    },
    {
        latitude: 29.785099,  
        longitude: -95.532315, 
        weight: 1, 
    },
    {
        latitude: 29.822121,  
        longitude: -95.332887, 
        weight: 1, 
    },
    {
        latitude: 29.702052,  
        longitude: -95.516247, 
        weight: 1, 
    },
    {
        latitude: 29.867547,  
        longitude: -95.417165, 
        weight: 1, 
    },
    {
        latitude: 29.636351,  
        longitude: -95.246284, 
        weight: 1, 
    },
    {
        latitude: 29.797526,  
        longitude: -95.56983, 
        weight: 1, 
    },
    {
        latitude: 29.797526,  
        longitude: -95.56983, 
        weight: 1, 
    },
    {
        latitude: 29.674197,  
        longitude: -95.384439, 
        weight: 1, 
    },
    {
        latitude: 29.788504,  
        longitude: -95.291585, 
        weight: 1, 
    },
    {
        latitude: 29.737547,  
        longitude: -95.506701, 
        weight: 1, 
    },
    {
        latitude: 29.832522,  
        longitude: -95.545289, 
        weight: 1, 
    },
    {
        latitude: 29.630288,  
        longitude: -95.464139, 
        weight: 1, 
    },
    {
        latitude: 29.714923,  
        longitude: -95.315443, 
        weight: 1, 
    },
    {
        latitude: 29.714923,  
        longitude: -95.315443, 
        weight: 1, 
    },
    {
        latitude: 29.6717,  
        longitude: -95.261937, 
        weight: 1, 
    },
    {
        latitude: 29.686064,  
        longitude: -95.569614, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.638443,  
        longitude: -95.446335, 
        weight: 1, 
    },
    {
        latitude: 29.6483,  
        longitude: -95.508342, 
        weight: 1, 
    },
    {
        latitude: 29.661355,  
        longitude: -95.304817, 
        weight: 1, 
    },
    {
        latitude: 29.680532,  
        longitude: -95.552002, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.689602,  
        longitude: -95.363271, 
        weight: 1, 
    },
    {
        latitude: 29.692794,  
        longitude: -95.323297, 
        weight: 1, 
    },
    {
        latitude: 29.709828,  
        longitude: -95.545502, 
        weight: 1, 
    },
    {
        latitude: 29.709828,  
        longitude: -95.545502, 
        weight: 1, 
    },
    {
        latitude: 29.666942,  
        longitude: -95.568952, 
        weight: 1, 
    },
    {
        latitude: 29.695982,  
        longitude: -95.575217, 
        weight: 1, 
    },
    {
        latitude: 29.569383,  
        longitude: -95.130149, 
        weight: 1, 
    },
    {
        latitude: 29.673356,  
        longitude: -95.307151, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495205, 
        weight: 1, 
    },
    {
        latitude: 29.690551,  
        longitude: -95.546894, 
        weight: 1, 
    },
    {
        latitude: 29.851096,  
        longitude: -95.342456, 
        weight: 1, 
    },
    {
        latitude: 29.717734,  
        longitude: -95.326258, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.737564,  
        longitude: -95.505169, 
        weight: 1, 
    },
    {
        latitude: 29.731843,  
        longitude: -95.377757, 
        weight: 1, 
    },
    {
        latitude: 29.864069,  
        longitude: -95.311578, 
        weight: 1, 
    },
    {
        latitude: 29.819427,  
        longitude: -95.307475, 
        weight: 1, 
    },
    {
        latitude: 29.6879,  
        longitude: -95.238981, 
        weight: 1, 
    },
    {
        latitude: 29.812265,  
        longitude: -95.284498, 
        weight: 1, 
    },
    {
        latitude: 29.800273,  
        longitude: -95.328209, 
        weight: 1, 
    },
    {
        latitude: 29.679002,  
        longitude: -95.294594, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.948705,  
        longitude: -95.331367, 
        weight: 1, 
    },
    {
        latitude: 29.712787,  
        longitude: -95.283217, 
        weight: 1, 
    },
    {
        latitude: 29.837242,  
        longitude: -95.384346, 
        weight: 1, 
    },
    {
        latitude: 29.837242,  
        longitude: -95.384346, 
        weight: 1, 
    },
    {
        latitude: 29.785909,  
        longitude: -95.19459, 
        weight: 1, 
    },
    {
        latitude: 29.705819,  
        longitude: -95.493053, 
        weight: 1, 
    },
    {
        latitude: 29.942547,  
        longitude: -95.398407, 
        weight: 1, 
    },
    {
        latitude: 29.690298,  
        longitude: -95.357672, 
        weight: 1, 
    },
    {
        latitude: 29.841381,  
        longitude: -95.499259, 
        weight: 1, 
    },
    {
        latitude: 29.664597,  
        longitude: -95.340274, 
        weight: 1, 
    },
    {
        latitude: 29.793913,  
        longitude: -95.33827, 
        weight: 1, 
    },
    {
        latitude: 29.773851,  
        longitude: -95.316694, 
        weight: 1, 
    },
    {
        latitude: 29.843,  
        longitude: -95.319022, 
        weight: 1, 
    },
    {
        latitude: 29.850538,  
        longitude: -95.480786, 
        weight: 1, 
    },
    {
        latitude: 29.672151,  
        longitude: -95.462199, 
        weight: 1, 
    },
    {
        latitude: 29.738871,  
        longitude: -95.381813, 
        weight: 1, 
    },
    {
        latitude: 29.831456,  
        longitude: -95.392888, 
        weight: 1, 
    },
    {
        latitude: 29.849349,  
        longitude: -95.395001, 
        weight: 1, 
    },
    {
        latitude: 29.855787,  
        longitude: -95.292816, 
        weight: 1, 
    },
    {
        latitude: 29.82222,  
        longitude: -95.410499, 
        weight: 1, 
    },
    {
        latitude: 29.671432,  
        longitude: -95.586024, 
        weight: 1, 
    },
    {
        latitude: 29.703865,  
        longitude: -95.575378, 
        weight: 1, 
    },
    {
        latitude: 29.631433,  
        longitude: -95.441173, 
        weight: 1, 
    },
    {
        latitude: 29.710094,  
        longitude: -95.482895, 
        weight: 1, 
    },
    {
        latitude: 29.934355,  
        longitude: -95.412501, 
        weight: 1, 
    },
    {
        latitude: 29.77161,  
        longitude: -95.3386, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.948564,  
        longitude: -95.331839, 
        weight: 1, 
    },
    {
        latitude: 29.71059,  
        longitude: -95.506584, 
        weight: 1, 
    },
    {
        latitude: 29.685285,  
        longitude: -95.399636, 
        weight: 1, 
    },
    {
        latitude: 29.806997,  
        longitude: -95.320671, 
        weight: 1, 
    },
    {
        latitude: 29.742289,  
        longitude: -95.355223, 
        weight: 1, 
    },
    {
        latitude: 29.742289,  
        longitude: -95.355223, 
        weight: 1, 
    },
    {
        latitude: 29.677349,  
        longitude: -95.553518, 
        weight: 1, 
    },
    {
        latitude: 29.760228,  
        longitude: -95.374551, 
        weight: 1, 
    },
    {
        latitude: 29.746297,  
        longitude: -95.353126, 
        weight: 1, 
    },
    {
        latitude: 29.773908,  
        longitude: -95.370119, 
        weight: 1, 
    },
    {
        latitude: 29.773908,  
        longitude: -95.370119, 
        weight: 1, 
    },
    {
        latitude: 29.809896,  
        longitude: -95.410761, 
        weight: 1, 
    },
    {
        latitude: 29.671938,  
        longitude: -95.428016, 
        weight: 1, 
    },
    {
        latitude: 29.658367,  
        longitude: -95.360012, 
        weight: 1, 
    },
    {
        latitude: 29.680437,  
        longitude: -95.559609, 
        weight: 1, 
    },
    {
        latitude: 29.851886,  
        longitude: -95.362244, 
        weight: 1, 
    },
    {
        latitude: 29.582582,  
        longitude: -95.517959, 
        weight: 1, 
    },
    {
        latitude: 29.675587,  
        longitude: -95.546059, 
        weight: 1, 
    },
    {
        latitude: 29.675587,  
        longitude: -95.546059, 
        weight: 1, 
    },
    {
        latitude: 29.749191,  
        longitude: -95.372374, 
        weight: 1, 
    },
    {
        latitude: 29.700809,  
        longitude: -95.537937, 
        weight: 1, 
    },
    {
        latitude: 29.743751,  
        longitude: -95.576292, 
        weight: 1, 
    },
    {
        latitude: 29.776884,  
        longitude: -95.580796, 
        weight: 1, 
    },
    {
        latitude: 29.688259,  
        longitude: -95.505815, 
        weight: 1, 
    },
    {
        latitude: 29.725979,  
        longitude: -95.332929, 
        weight: 1, 
    },
    {
        latitude: 29.740585,  
        longitude: -95.531491, 
        weight: 1, 
    },
    {
        latitude: 29.740585,  
        longitude: -95.531491, 
        weight: 1, 
    },
    {
        latitude: 29.740585,  
        longitude: -95.531491, 
        weight: 1, 
    },
    {
        latitude: 29.740585,  
        longitude: -95.531491, 
        weight: 1, 
    },
    {
        latitude: 29.699693,  
        longitude: -95.242614, 
        weight: 1, 
    },
    {
        latitude: 29.675199,  
        longitude: -95.285757, 
        weight: 1, 
    },
    {
        latitude: 29.717736,  
        longitude: -95.536052, 
        weight: 1, 
    },
    {
        latitude: 29.821146,  
        longitude: -95.405002, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 30.065279,  
        longitude: -95.153367, 
        weight: 1, 
    },
    {
        latitude: 29.965488,  
        longitude: -95.539799, 
        weight: 1, 
    },
    {
        latitude: 29.792586,  
        longitude: -95.399011, 
        weight: 1, 
    },
    {
        latitude: 29.792586,  
        longitude: -95.399011, 
        weight: 1, 
    },
    {
        latitude: 29.679401,  
        longitude: -95.490319, 
        weight: 1, 
    },
    {
        latitude: 29.679401,  
        longitude: -95.490319, 
        weight: 1, 
    },
    {
        latitude: 29.679401,  
        longitude: -95.490319, 
        weight: 1, 
    },
    {
        latitude: 29.671644,  
        longitude: -95.277089, 
        weight: 1, 
    },
    {
        latitude: 29.720475,  
        longitude: -95.57202, 
        weight: 1, 
    },
    {
        latitude: 29.811014,  
        longitude: -95.50639, 
        weight: 1, 
    },
    {
        latitude: 29.774073,  
        longitude: -95.398657, 
        weight: 1, 
    },
    {
        latitude: 29.771057,  
        longitude: -95.275513, 
        weight: 1, 
    },
    {
        latitude: 29.771057,  
        longitude: -95.275513, 
        weight: 1, 
    },
    {
        latitude: 29.67496,  
        longitude: -95.555522, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.707204,  
        longitude: -95.499143, 
        weight: 1, 
    },
    {
        latitude: 29.968069,  
        longitude: -95.335375, 
        weight: 1, 
    },
    {
        latitude: 29.73155,  
        longitude: -95.466986, 
        weight: 1, 
    },
    {
        latitude: 29.73155,  
        longitude: -95.466986, 
        weight: 1, 
    },
    {
        latitude: 29.73155,  
        longitude: -95.466986, 
        weight: 1, 
    },
    {
        latitude: 29.810407,  
        longitude: -95.301896, 
        weight: 1, 
    },
    {
        latitude: 29.715391,  
        longitude: -95.500116, 
        weight: 1, 
    },
    {
        latitude: 29.688475,  
        longitude: -95.569762, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.724933,  
        longitude: -95.372536, 
        weight: 1, 
    },
    {
        latitude: 29.724933,  
        longitude: -95.372536, 
        weight: 1, 
    },
    {
        latitude: 29.611417,  
        longitude: -95.227465, 
        weight: 1, 
    },
    {
        latitude: 29.72772,  
        longitude: -95.367637, 
        weight: 1, 
    },
    {
        latitude: 29.689805,  
        longitude: -95.507199, 
        weight: 1, 
    },
    {
        latitude: 29.79989,  
        longitude: -95.493242, 
        weight: 1, 
    },
    {
        latitude: 29.808007,  
        longitude: -95.279788, 
        weight: 1, 
    },
    {
        latitude: 29.73338,  
        longitude: -95.431853, 
        weight: 1, 
    },
    {
        latitude: 29.80861,  
        longitude: -95.401538, 
        weight: 1, 
    },
    {
        latitude: 29.8739,  
        longitude: -95.300615, 
        weight: 1, 
    },
    {
        latitude: 29.8739,  
        longitude: -95.300615, 
        weight: 1, 
    },
    {
        latitude: 29.846801,  
        longitude: -95.503179, 
        weight: 1, 
    },
    {
        latitude: 29.778328,  
        longitude: -95.317191, 
        weight: 1, 
    },
    {
        latitude: 29.740553,  
        longitude: -95.464853, 
        weight: 1, 
    },
    {
        latitude: 29.740553,  
        longitude: -95.464853, 
        weight: 1, 
    },
    {
        latitude: 29.740553,  
        longitude: -95.464853, 
        weight: 1, 
    },
    {
        latitude: 29.826208,  
        longitude: -95.48876, 
        weight: 1, 
    },
    {
        latitude: 29.806409,  
        longitude: -95.376952, 
        weight: 1, 
    },
    {
        latitude: 29.774653,  
        longitude: -95.341791, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.659907,  
        longitude: -95.316376, 
        weight: 1, 
    },
    {
        latitude: 29.740695,  
        longitude: -95.538351, 
        weight: 1, 
    },
    {
        latitude: 29.578223,  
        longitude: -95.159963, 
        weight: 1, 
    },
    {
        latitude: 29.70823,  
        longitude: -95.482572, 
        weight: 1, 
    },
    {
        latitude: 29.66092,  
        longitude: -95.562893, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.723109,  
        longitude: -95.372637, 
        weight: 1, 
    },
    {
        latitude: 29.715634,  
        longitude: -95.321664, 
        weight: 1, 
    },
    {
        latitude: 29.789899,  
        longitude: -95.341891, 
        weight: 1, 
    },
    {
        latitude: 29.77907,  
        longitude: -95.332239, 
        weight: 1, 
    },
    {
        latitude: 29.951757,  
        longitude: -95.540794, 
        weight: 1, 
    },
    {
        latitude: 29.828331,  
        longitude: -95.375433, 
        weight: 1, 
    },
    {
        latitude: 29.551152,  
        longitude: -95.125626, 
        weight: 1, 
    },
    {
        latitude: 29.620847,  
        longitude: -95.304183, 
        weight: 1, 
    },
    {
        latitude: 29.735176,  
        longitude: -95.382071, 
        weight: 1, 
    },
    {
        latitude: 29.798141,  
        longitude: -95.369966, 
        weight: 1, 
    },
    {
        latitude: 29.798141,  
        longitude: -95.369966, 
        weight: 1, 
    },
    {
        latitude: 29.669664,  
        longitude: -95.529735, 
        weight: 1, 
    },
    {
        latitude: 29.793318,  
        longitude: -95.579566, 
        weight: 1, 
    },
    {
        latitude: 29.686432,  
        longitude: -95.529122, 
        weight: 1, 
    },
    {
        latitude: 29.779918,  
        longitude: -95.623188, 
        weight: 1, 
    },
    {
        latitude: 29.699087,  
        longitude: -95.557459, 
        weight: 1, 
    },
    {
        latitude: 29.699087,  
        longitude: -95.557459, 
        weight: 1, 
    },
    {
        latitude: 29.809806,  
        longitude: -95.525865, 
        weight: 1, 
    },
    {
        latitude: 29.777443,  
        longitude: -95.59878, 
        weight: 1, 
    },
    {
        latitude: 29.703759,  
        longitude: -95.298747, 
        weight: 1, 
    },
    {
        latitude: 29.835146,  
        longitude: -95.384356, 
        weight: 1, 
    },
    {
        latitude: 29.588896,  
        longitude: -95.186163, 
        weight: 1, 
    },
    {
        latitude: 29.764429,  
        longitude: -95.277699, 
        weight: 1, 
    },
    {
        latitude: 29.63816,  
        longitude: -95.338048, 
        weight: 1, 
    },
    {
        latitude: 29.716067,  
        longitude: -95.519979, 
        weight: 1, 
    },
    {
        latitude: 29.833227,  
        longitude: -95.485318, 
        weight: 1, 
    },
    {
        latitude: 29.621581,  
        longitude: -95.406062, 
        weight: 1, 
    },
    {
        latitude: 29.727701,  
        longitude: -95.497834, 
        weight: 1, 
    },
    {
        latitude: 29.721148,  
        longitude: -95.476472, 
        weight: 1, 
    },
    {
        latitude: 29.665192,  
        longitude: -95.504777, 
        weight: 1, 
    },
    {
        latitude: 29.641303,  
        longitude: -95.379788, 
        weight: 1, 
    },
    {
        latitude: 29.737357,  
        longitude: -95.522828, 
        weight: 1, 
    },
    {
        latitude: 29.719505,  
        longitude: -95.500985, 
        weight: 1, 
    },
    {
        latitude: 29.719505,  
        longitude: -95.500985, 
        weight: 1, 
    },
    {
        latitude: 29.780504,  
        longitude: -95.323716, 
        weight: 1, 
    },
    {
        latitude: 29.632771,  
        longitude: -95.469584, 
        weight: 1, 
    },
    {
        latitude: 29.795033,  
        longitude: -95.360932, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.715721,  
        longitude: -95.548395, 
        weight: 1, 
    },
    {
        latitude: 29.755861,  
        longitude: -95.359428, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.754355,  
        longitude: -95.360603, 
        weight: 1, 
    },
    {
        latitude: 29.822532,  
        longitude: -95.472574, 
        weight: 1, 
    },
    {
        latitude: 29.822532,  
        longitude: -95.472574, 
        weight: 1, 
    },
    {
        latitude: 29.67189,  
        longitude: -95.3361, 
        weight: 1, 
    },
    {
        latitude: 29.819928,  
        longitude: -95.38328, 
        weight: 1, 
    },
    {
        latitude: 29.819928,  
        longitude: -95.38328, 
        weight: 1, 
    },
    {
        latitude: 29.796752,  
        longitude: -95.51391, 
        weight: 1, 
    },
    {
        latitude: 29.728979,  
        longitude: -95.520524, 
        weight: 1, 
    },
    {
        latitude: 29.949611,  
        longitude: -95.41251, 
        weight: 1, 
    },
    {
        latitude: 29.828331,  
        longitude: -95.375433, 
        weight: 1, 
    },
    {
        latitude: 29.828331,  
        longitude: -95.375433, 
        weight: 1, 
    },
    {
        latitude: 29.95341,  
        longitude: -95.538947, 
        weight: 1, 
    },
    {
        latitude: 29.64282,  
        longitude: -95.402059, 
        weight: 1, 
    },
    {
        latitude: 29.783244,  
        longitude: -95.575647, 
        weight: 1, 
    },
    {
        latitude: 29.857721,  
        longitude: -95.301493, 
        weight: 1, 
    },
    {
        latitude: 29.710748,  
        longitude: -95.361827, 
        weight: 1, 
    },
    {
        latitude: 29.743286,  
        longitude: -95.374458, 
        weight: 1, 
    },
    {
        latitude: 29.559404,  
        longitude: -95.124554, 
        weight: 1, 
    },
    {
        latitude: 29.768443,  
        longitude: -95.367609, 
        weight: 1, 
    },
    {
        latitude: 29.73299,  
        longitude: -95.354765, 
        weight: 1, 
    },
    {
        latitude: 29.614823,  
        longitude: -95.495497, 
        weight: 1, 
    },
    {
        latitude: 29.784255,  
        longitude: -95.646335, 
        weight: 1, 
    },
    {
        latitude: 29.736198,  
        longitude: -95.604713, 
        weight: 1, 
    },
    {
        latitude: 29.626398,  
        longitude: -95.427028, 
        weight: 1, 
    },
    {
        latitude: 29.925226,  
        longitude: -95.401774, 
        weight: 1, 
    },
    {
        latitude: 29.65564,  
        longitude: -95.377104, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.755387,  
        longitude: -95.388931, 
        weight: 1, 
    },
    {
        latitude: 29.793833,  
        longitude: -95.363955, 
        weight: 1, 
    },
    {
        latitude: 29.793833,  
        longitude: -95.363955, 
        weight: 1, 
    },
    {
        latitude: 29.721148,  
        longitude: -95.476472, 
        weight: 1, 
    },
    {
        latitude: 29.73104,  
        longitude: -95.415255, 
        weight: 1, 
    },
    {
        latitude: 29.723535,  
        longitude: -95.459795, 
        weight: 1, 
    },
    {
        latitude: 29.736381,  
        longitude: -95.592732, 
        weight: 1, 
    },
    {
        latitude: 29.95341,  
        longitude: -95.538947, 
        weight: 1, 
    },
    {
        latitude: 29.752612,  
        longitude: -95.378648, 
        weight: 1, 
    },
    {
        latitude: 29.656619,  
        longitude: -95.528044, 
        weight: 1, 
    },
    {
        latitude: 29.803932,  
        longitude: -95.401428, 
        weight: 1, 
    },
    {
        latitude: 29.762846,  
        longitude: -95.360367, 
        weight: 1, 
    },
    {
        latitude: 30.05081,  
        longitude: -95.181878, 
        weight: 1, 
    },
    {
        latitude: 29.847971,  
        longitude: -95.356122, 
        weight: 1, 
    },
    {
        latitude: 29.655711,  
        longitude: -95.579578, 
        weight: 1, 
    },
    {
        latitude: 29.739735,  
        longitude: -95.410719, 
        weight: 1, 
    },
    {
        latitude: 29.733642,  
        longitude: -95.605789, 
        weight: 1, 
    },
    {
        latitude: 29.675325,  
        longitude: -95.307059, 
        weight: 1, 
    },
    {
        latitude: 29.821218,  
        longitude: -95.530849, 
        weight: 1, 
    },
    {
        latitude: 29.847213,  
        longitude: -95.407865, 
        weight: 1, 
    },
    {
        latitude: 29.847213,  
        longitude: -95.407865, 
        weight: 1, 
    },
    {
        latitude: 29.776516,  
        longitude: -95.312611, 
        weight: 1, 
    },
    {
        latitude: 29.799661,  
        longitude: -95.31697, 
        weight: 1, 
    },
    {
        latitude: 29.672306,  
        longitude: -95.280858, 
        weight: 1, 
    },
    {
        latitude: 29.602768,  
        longitude: -95.472898, 
        weight: 1, 
    },
    {
        latitude: 29.767405,  
        longitude: -95.447242, 
        weight: 1, 
    },
    {
        latitude: 29.961158,  
        longitude: -95.546506, 
        weight: 1, 
    },
    {
        latitude: 29.668047,  
        longitude: -95.3584, 
        weight: 1, 
    },
    {
        latitude: 29.871083,  
        longitude: -95.33694, 
        weight: 1, 
    },
    {
        latitude: 29.915183,  
        longitude: -95.412699, 
        weight: 1, 
    },
    {
        latitude: 29.915183,  
        longitude: -95.412699, 
        weight: 1, 
    },
    {
        latitude: 29.766478,  
        longitude: -95.397396, 
        weight: 1, 
    },
    {
        latitude: 29.953633,  
        longitude: -95.546648, 
        weight: 1, 
    },
    {
        latitude: 29.771099,  
        longitude: -95.212718, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.833376,  
        longitude: -95.396886, 
        weight: 1, 
    },
    {
        latitude: 29.793574,  
        longitude: -95.218717, 
        weight: 1, 
    },
    {
        latitude: 29.791879,  
        longitude: -95.544613, 
        weight: 1, 
    },
    {
        latitude: 29.74362,  
        longitude: -95.295847, 
        weight: 1, 
    },
    {
        latitude: 29.620512,  
        longitude: -95.381277, 
        weight: 1, 
    },
    {
        latitude: 29.809703,  
        longitude: -95.431398, 
        weight: 1, 
    },
    {
        latitude: 29.757508,  
        longitude: -95.39092, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.754002,  
        longitude: -95.527943, 
        weight: 1, 
    },
    {
        latitude: 29.883105,  
        longitude: -95.465401, 
        weight: 1, 
    },
    {
        latitude: 29.708978,  
        longitude: -95.35682, 
        weight: 1, 
    },
    {
        latitude: 29.827061,  
        longitude: -95.385857, 
        weight: 1, 
    },
    {
        latitude: 29.856988,  
        longitude: -95.337793, 
        weight: 1, 
    },
    {
        latitude: 29.856988,  
        longitude: -95.337793, 
        weight: 1, 
    },
    {
        latitude: 29.821942,  
        longitude: -95.524472, 
        weight: 1, 
    },
    {
        latitude: 29.821942,  
        longitude: -95.524472, 
        weight: 1, 
    },
    {
        latitude: 29.850712,  
        longitude: -95.510145, 
        weight: 1, 
    },
    {
        latitude: 29.850924,  
        longitude: -95.515418, 
        weight: 1, 
    },
    {
        latitude: 29.850924,  
        longitude: -95.515418, 
        weight: 1, 
    },
    {
        latitude: 29.850924,  
        longitude: -95.515418, 
        weight: 1, 
    },
    {
        latitude: 29.799222,  
        longitude: -95.542547, 
        weight: 1, 
    },
    {
        latitude: 29.736198,  
        longitude: -95.604713, 
        weight: 1, 
    },
    {
        latitude: 29.607189,  
        longitude: -95.209808, 
        weight: 1, 
    },
    {
        latitude: 29.815298,  
        longitude: -95.38544, 
        weight: 1, 
    },
    {
        latitude: 29.617644,  
        longitude: -95.421482, 
        weight: 1, 
    },
    {
        latitude: 29.943062,  
        longitude: -95.430691, 
        weight: 1, 
    },
    {
        latitude: 29.745571,  
        longitude: -95.507085, 
        weight: 1, 
    },
    {
        latitude: 29.780518,  
        longitude: -95.428871, 
        weight: 1, 
    },
    {
        latitude: 29.841887,  
        longitude: -95.383578, 
        weight: 1, 
    },
    {
        latitude: 29.644575,  
        longitude: -95.243998, 
        weight: 1, 
    },
    {
        latitude: 29.780118,  
        longitude: -95.398775, 
        weight: 1, 
    },
    {
        latitude: 29.806932,  
        longitude: -95.4102, 
        weight: 1, 
    },
    {
        latitude: 29.845671,  
        longitude: -95.371755, 
        weight: 1, 
    },
    {
        latitude: 29.767226,  
        longitude: -95.623865, 
        weight: 1, 
    },
    {
        latitude: 29.784098,  
        longitude: -95.218994, 
        weight: 1, 
    },
    {
        latitude: 30.043724,  
        longitude: -95.253899, 
        weight: 1, 
    },
    {
        latitude: 29.688611,  
        longitude: -95.419107, 
        weight: 1, 
    },
    {
        latitude: 29.801327,  
        longitude: -95.322351, 
        weight: 1, 
    },
    {
        latitude: 29.801327,  
        longitude: -95.322351, 
        weight: 1, 
    },
    {
        latitude: 29.688574,  
        longitude: -95.569276, 
        weight: 1, 
    },
    {
        latitude: 29.739421,  
        longitude: -95.469725, 
        weight: 1, 
    },
    {
        latitude: 29.890525,  
        longitude: -95.318085, 
        weight: 1, 
    },
    {
        latitude: 29.890525,  
        longitude: -95.318085, 
        weight: 1, 
    },
    {
        latitude: 29.890525,  
        longitude: -95.318085, 
        weight: 1, 
    },
    {
        latitude: 29.718718,  
        longitude: -95.476453, 
        weight: 1, 
    },
    {
        latitude: 29.815426,  
        longitude: -95.277277, 
        weight: 1, 
    },
    {
        latitude: 29.745715,  
        longitude: -95.368745, 
        weight: 1, 
    },
    {
        latitude: 29.640089,  
        longitude: -95.342833, 
        weight: 1, 
    },
    {
        latitude: 29.77009,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.957612,  
        longitude: -95.541962, 
        weight: 1, 
    },
    {
        latitude: 29.722989,  
        longitude: -95.545628, 
        weight: 1, 
    },
    {
        latitude: 29.942547,  
        longitude: -95.398407, 
        weight: 1, 
    },
    {
        latitude: 29.834062,  
        longitude: -95.324938, 
        weight: 1, 
    },
    {
        latitude: 29.765532,  
        longitude: -95.605586, 
        weight: 1, 
    },
    {
        latitude: 29.677494,  
        longitude: -95.413982, 
        weight: 1, 
    },
    {
        latitude: 29.756569,  
        longitude: -95.351273, 
        weight: 1, 
    },
    {
        latitude: 29.757838,  
        longitude: -95.401449, 
        weight: 1, 
    },
    {
        latitude: 29.770677,  
        longitude: -95.380371, 
        weight: 1, 
    },
    {
        latitude: 29.67541,  
        longitude: -95.590317, 
        weight: 1, 
    },
    {
        latitude: 29.67541,  
        longitude: -95.590317, 
        weight: 1, 
    },
    {
        latitude: 30.043562,  
        longitude: -95.240602, 
        weight: 1, 
    },
    {
        latitude: 30.043562,  
        longitude: -95.240602, 
        weight: 1, 
    },
    {
        latitude: 29.823093,  
        longitude: -95.459329, 
        weight: 1, 
    },
    {
        latitude: 29.823093,  
        longitude: -95.459329, 
        weight: 1, 
    },
    {
        latitude: 29.588832,  
        longitude: -95.186103, 
        weight: 1, 
    },
    {
        latitude: 29.737195,  
        longitude: -95.514194, 
        weight: 1, 
    },
    {
        latitude: 29.751904,  
        longitude: -95.354984, 
        weight: 1, 
    },
    {
        latitude: 29.614065,  
        longitude: -95.384399, 
        weight: 1, 
    },
    {
        latitude: 29.803501,  
        longitude: -95.544927, 
        weight: 1, 
    },
    {
        latitude: 29.737239,  
        longitude: -95.369769, 
        weight: 1, 
    },
    {
        latitude: 29.777349,  
        longitude: -95.218525, 
        weight: 1, 
    },
    {
        latitude: 30.035913,  
        longitude: -95.173416, 
        weight: 1, 
    },
    {
        latitude: 29.73712,  
        longitude: -95.41873, 
        weight: 1, 
    },
    {
        latitude: 30.052225,  
        longitude: -95.208482, 
        weight: 1, 
    },
    {
        latitude: 29.628021,  
        longitude: -95.443947, 
        weight: 1, 
    },
    {
        latitude: 29.628021,  
        longitude: -95.443947, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.802946,  
        longitude: -95.325884, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.618589,  
        longitude: -95.277792, 
        weight: 1, 
    },
    {
        latitude: 29.85159,  
        longitude: -95.504646, 
        weight: 1, 
    },
    {
        latitude: 29.642854,  
        longitude: -95.37942, 
        weight: 1, 
    },
    {
        latitude: 29.818924,  
        longitude: -95.209887, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.828922,  
        longitude: -95.410628, 
        weight: 1, 
    },
    {
        latitude: 29.543375,  
        longitude: -95.145683, 
        weight: 1, 
    },
    {
        latitude: 29.808624,  
        longitude: -95.365268, 
        weight: 1, 
    },
    {
        latitude: 29.850918,  
        longitude: -95.245378, 
        weight: 1, 
    },
    {
        latitude: 29.850918,  
        longitude: -95.245378, 
        weight: 1, 
    },
    {
        latitude: 29.748972,  
        longitude: -95.392216, 
        weight: 1, 
    },
    {
        latitude: 29.833517,  
        longitude: -95.447855, 
        weight: 1, 
    },
    {
        latitude: 29.805,  
        longitude: -95.429176, 
        weight: 1, 
    },
    {
        latitude: 29.689809,  
        longitude: -95.380846, 
        weight: 1, 
    },
    {
        latitude: 29.689809,  
        longitude: -95.380846, 
        weight: 1, 
    },
    {
        latitude: 29.797793,  
        longitude: -95.270849, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.70588,  
        longitude: -95.369953, 
        weight: 1, 
    },
    {
        latitude: 29.966978,  
        longitude: -95.545658, 
        weight: 1, 
    },
    {
        latitude: 29.747217,  
        longitude: -95.391959, 
        weight: 1, 
    },
    {
        latitude: 29.763334,  
        longitude: -95.461604, 
        weight: 1, 
    },
    {
        latitude: 29.721264,  
        longitude: -95.567583, 
        weight: 1, 
    },
    {
        latitude: 29.672811,  
        longitude: -95.376196, 
        weight: 1, 
    },
    {
        latitude: 29.817902,  
        longitude: -95.453145, 
        weight: 1, 
    },
    {
        latitude: 29.817902,  
        longitude: -95.453145, 
        weight: 1, 
    },
    {
        latitude: 29.817902,  
        longitude: -95.453145, 
        weight: 1, 
    },
    {
        latitude: 29.67256,  
        longitude: -95.370972, 
        weight: 1, 
    },
    {
        latitude: 29.799661,  
        longitude: -95.31697, 
        weight: 1, 
    },
    {
        latitude: 29.751563,  
        longitude: -95.456092, 
        weight: 1, 
    },
    {
        latitude: 29.751563,  
        longitude: -95.456092, 
        weight: 1, 
    },
    {
        latitude: 29.593635,  
        longitude: -95.460179, 
        weight: 1, 
    },
    {
        latitude: 29.669972,  
        longitude: -95.312086, 
        weight: 1, 
    },
    {
        latitude: 29.63772,  
        longitude: -95.439594, 
        weight: 1, 
    },
    {
        latitude: 29.76575,  
        longitude: -95.456364, 
        weight: 1, 
    },
    {
        latitude: 29.746658,  
        longitude: -95.367973, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.698678,  
        longitude: -95.272027, 
        weight: 1, 
    },
    {
        latitude: 29.840703,  
        longitude: -95.389989, 
        weight: 1, 
    },
    {
        latitude: 29.725541,  
        longitude: -95.492099, 
        weight: 1, 
    },
    {
        latitude: 29.725541,  
        longitude: -95.492099, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.744322,  
        longitude: -95.305425, 
        weight: 1, 
    },
    {
        latitude: 29.736422,  
        longitude: -95.495291, 
        weight: 1, 
    },
    {
        latitude: 29.712801,  
        longitude: -95.545971, 
        weight: 1, 
    },
    {
        latitude: 29.549015,  
        longitude: -95.14634, 
        weight: 1, 
    },
    {
        latitude: 29.717179,  
        longitude: -95.324674, 
        weight: 1, 
    },
    {
        latitude: 29.717179,  
        longitude: -95.324674, 
        weight: 1, 
    },
    {
        latitude: 29.939051,  
        longitude: -95.385866, 
        weight: 1, 
    },
    {
        latitude: 29.837779,  
        longitude: -95.390583, 
        weight: 1, 
    },
    {
        latitude: 29.844429,  
        longitude: -95.494401, 
        weight: 1, 
    },
    {
        latitude: 29.693573,  
        longitude: -95.547693, 
        weight: 1, 
    },
    {
        latitude: 29.693573,  
        longitude: -95.547693, 
        weight: 1, 
    },
    {
        latitude: 29.84624,  
        longitude: -95.364266, 
        weight: 1, 
    },
    {
        latitude: 29.933535,  
        longitude: -95.175102, 
        weight: 1, 
    },
    {
        latitude: 29.77009,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.673034,  
        longitude: -95.508581, 
        weight: 1, 
    },
    {
        latitude: 29.735891,  
        longitude: -95.62205, 
        weight: 1, 
    },
    {
        latitude: 29.675002,  
        longitude: -95.424665, 
        weight: 1, 
    },
    {
        latitude: 29.739828,  
        longitude: -95.356854, 
        weight: 1, 
    },
    {
        latitude: 29.738806,  
        longitude: -95.484432, 
        weight: 1, 
    },
    {
        latitude: 29.738806,  
        longitude: -95.484432, 
        weight: 1, 
    },
    {
        latitude: 30.043757,  
        longitude: -95.430002, 
        weight: 1, 
    },
    {
        latitude: 29.73202,  
        longitude: -95.356132, 
        weight: 1, 
    },
    {
        latitude: 29.70786,  
        longitude: -95.551483, 
        weight: 1, 
    },
    {
        latitude: 29.793913,  
        longitude: -95.33827, 
        weight: 1, 
    },
    {
        latitude: 29.855903,  
        longitude: -95.368985, 
        weight: 1, 
    },
    {
        latitude: 29.848598,  
        longitude: -95.394573, 
        weight: 1, 
    },
    {
        latitude: 29.742454,  
        longitude: -95.415014, 
        weight: 1, 
    },
    {
        latitude: 29.756852,  
        longitude: -95.411011, 
        weight: 1, 
    },
    {
        latitude: 29.737307,  
        longitude: -95.526229, 
        weight: 1, 
    },
    {
        latitude: 29.771381,  
        longitude: -95.213898, 
        weight: 1, 
    },
    {
        latitude: 29.774832,  
        longitude: -95.3226, 
        weight: 1, 
    },
    {
        latitude: 29.931911,  
        longitude: -95.395372, 
        weight: 1, 
    },
    {
        latitude: 29.854439,  
        longitude: -95.399548, 
        weight: 1, 
    },
    {
        latitude: 29.731883,  
        longitude: -95.418659, 
        weight: 1, 
    },
    {
        latitude: 29.693142,  
        longitude: -95.340038, 
        weight: 1, 
    },
    {
        latitude: 29.751781,  
        longitude: -95.376492, 
        weight: 1, 
    },
    {
        latitude: 29.736737,  
        longitude: -95.29881, 
        weight: 1, 
    },
    {
        latitude: 29.737794,  
        longitude: -95.5609, 
        weight: 1, 
    },
    {
        latitude: 29.679367,  
        longitude: -95.412296, 
        weight: 1, 
    },
    {
        latitude: 29.610445,  
        longitude: -95.396815, 
        weight: 1, 
    },
    {
        latitude: 29.757207,  
        longitude: -95.40324, 
        weight: 1, 
    },
    {
        latitude: 29.88176,  
        longitude: -95.371845, 
        weight: 1, 
    },
    {
        latitude: 29.689128,  
        longitude: -95.46424, 
        weight: 1, 
    },
    {
        latitude: 29.950738,  
        longitude: -95.53497, 
        weight: 1, 
    },
    {
        latitude: 29.596125,  
        longitude: -95.198428, 
        weight: 1, 
    },
    {
        latitude: 29.667629,  
        longitude: -95.532385, 
        weight: 1, 
    },
    {
        latitude: 29.67824,  
        longitude: -95.415055, 
        weight: 1, 
    },
    {
        latitude: 29.870987,  
        longitude: -95.351537, 
        weight: 1, 
    },
    {
        latitude: 29.690371,  
        longitude: -95.366421, 
        weight: 1, 
    },
    {
        latitude: 29.773493,  
        longitude: -95.307784, 
        weight: 1, 
    },
    {
        latitude: 29.793554,  
        longitude: -95.329842, 
        weight: 1, 
    },
    {
        latitude: 29.783897,  
        longitude: -95.554027, 
        weight: 1, 
    },
    {
        latitude: 29.793916,  
        longitude: -95.338031, 
        weight: 1, 
    },
    {
        latitude: 29.599516,  
        longitude: -95.482026, 
        weight: 1, 
    },
    {
        latitude: 29.745594,  
        longitude: -95.379005, 
        weight: 1, 
    },
    {
        latitude: 29.824052,  
        longitude: -95.522651, 
        weight: 1, 
    },
    {
        latitude: 29.766248,  
        longitude: -95.375881, 
        weight: 1, 
    },
    {
        latitude: 29.766248,  
        longitude: -95.375881, 
        weight: 1, 
    },
    {
        latitude: 29.778784,  
        longitude: -95.558077, 
        weight: 1, 
    },
    {
        latitude: 29.694577,  
        longitude: -95.318887, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.741136,  
        longitude: -95.374767, 
        weight: 1, 
    },
    {
        latitude: 29.681679,  
        longitude: -95.234187, 
        weight: 1, 
    },
    {
        latitude: 29.778219,  
        longitude: -95.599023, 
        weight: 1, 
    },
    {
        latitude: 29.885115,  
        longitude: -95.295075, 
        weight: 1, 
    },
    {
        latitude: 29.677402,  
        longitude: -95.428656, 
        weight: 1, 
    },
    {
        latitude: 29.754558,  
        longitude: -95.376124, 
        weight: 1, 
    },
    {
        latitude: 29.945177,  
        longitude: -95.415001, 
        weight: 1, 
    },
    {
        latitude: 29.921727,  
        longitude: -95.160521, 
        weight: 1, 
    },
    {
        latitude: 29.883215,  
        longitude: -95.466179, 
        weight: 1, 
    },
    {
        latitude: 29.583679,  
        longitude: -95.470379, 
        weight: 1, 
    },
    {
        latitude: 29.583679,  
        longitude: -95.470379, 
        weight: 1, 
    },
    {
        latitude: 29.84886,  
        longitude: -95.403037, 
        weight: 1, 
    },
    {
        latitude: 29.957573,  
        longitude: -95.423172, 
        weight: 1, 
    },
    {
        latitude: 29.797805,  
        longitude: -95.270827, 
        weight: 1, 
    },
    {
        latitude: 29.683357,  
        longitude: -95.600311, 
        weight: 1, 
    },
    {
        latitude: 29.729814,  
        longitude: -95.29502, 
        weight: 1, 
    },
    {
        latitude: 29.70505,  
        longitude: -95.311456, 
        weight: 1, 
    },
    {
        latitude: 29.711021,  
        longitude: -95.506126, 
        weight: 1, 
    },
    {
        latitude: 29.964225,  
        longitude: -95.550256, 
        weight: 1, 
    },
    {
        latitude: 29.938614,  
        longitude: -95.364164, 
        weight: 1, 
    },
    {
        latitude: 29.960446,  
        longitude: -95.54675, 
        weight: 1, 
    },
    {
        latitude: 29.636862,  
        longitude: -95.238303, 
        weight: 1, 
    },
    {
        latitude: 29.964225,  
        longitude: -95.550256, 
        weight: 1, 
    },
    {
        latitude: 29.788582,  
        longitude: -95.640294, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.770508,  
        longitude: -95.415248, 
        weight: 1, 
    },
    {
        latitude: 29.709861,  
        longitude: -95.310419, 
        weight: 1, 
    },
    {
        latitude: 29.800459,  
        longitude: -95.435071, 
        weight: 1, 
    },
    {
        latitude: 29.729713,  
        longitude: -95.484172, 
        weight: 1, 
    },
    {
        latitude: 29.750038,  
        longitude: -95.350148, 
        weight: 1, 
    },
    {
        latitude: 29.746645,  
        longitude: -95.461144, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.501611, 
        weight: 1, 
    },
    {
        latitude: 29.712507,  
        longitude: -95.393499, 
        weight: 1, 
    },
    {
        latitude: 29.712507,  
        longitude: -95.393499, 
        weight: 1, 
    },
    {
        latitude: 29.670423,  
        longitude: -95.35715, 
        weight: 1, 
    },
    {
        latitude: 29.670423,  
        longitude: -95.35715, 
        weight: 1, 
    },
    {
        latitude: 29.703184,  
        longitude: -95.277542, 
        weight: 1, 
    },
    {
        latitude: 29.803745,  
        longitude: -95.416736, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.828373,  
        longitude: -95.373419, 
        weight: 1, 
    },
    {
        latitude: 29.843597,  
        longitude: -95.366251, 
        weight: 1, 
    },
    {
        latitude: 29.843597,  
        longitude: -95.366251, 
        weight: 1, 
    },
    {
        latitude: 29.685272,  
        longitude: -95.290351, 
        weight: 1, 
    },
    {
        latitude: 29.750088,  
        longitude: -95.475997, 
        weight: 1, 
    },
    {
        latitude: 29.750088,  
        longitude: -95.475997, 
        weight: 1, 
    },
    {
        latitude: 29.800398,  
        longitude: -95.31641, 
        weight: 1, 
    },
    {
        latitude: 29.737665,  
        longitude: -95.497081, 
        weight: 1, 
    },
    {
        latitude: 29.633837,  
        longitude: -95.468628, 
        weight: 1, 
    },
    {
        latitude: 29.633837,  
        longitude: -95.468628, 
        weight: 1, 
    },
    {
        latitude: 29.832992,  
        longitude: -95.472923, 
        weight: 1, 
    },
    {
        latitude: 29.705699,  
        longitude: -95.604511, 
        weight: 1, 
    },
    {
        latitude: 29.705699,  
        longitude: -95.604511, 
        weight: 1, 
    },
    {
        latitude: 29.697321,  
        longitude: -95.373941, 
        weight: 1, 
    },
    {
        latitude: 29.812289,  
        longitude: -95.430338, 
        weight: 1, 
    },
    {
        latitude: 29.717813,  
        longitude: -95.533382, 
        weight: 1, 
    },
    {
        latitude: 29.72163,  
        longitude: -95.382691, 
        weight: 1, 
    },
    {
        latitude: 29.708122,  
        longitude: -95.403712, 
        weight: 1, 
    },
    {
        latitude: 29.773232,  
        longitude: -95.206312, 
        weight: 1, 
    },
    {
        latitude: 29.707476,  
        longitude: -95.335394, 
        weight: 1, 
    },
    {
        latitude: 29.601317,  
        longitude: -95.507502, 
        weight: 1, 
    },
    {
        latitude: 29.829338,  
        longitude: -95.50927, 
        weight: 1, 
    },
    {
        latitude: 29.782317,  
        longitude: -95.609421, 
        weight: 1, 
    },
    {
        latitude: 29.770508,  
        longitude: -95.415248, 
        weight: 1, 
    },
    {
        latitude: 29.746465,  
        longitude: -95.374537, 
        weight: 1, 
    },
    {
        latitude: 29.727512,  
        longitude: -95.433435, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.730942,  
        longitude: -95.354941, 
        weight: 1, 
    },
    {
        latitude: 29.730942,  
        longitude: -95.354941, 
        weight: 1, 
    },
    {
        latitude: 29.700408,  
        longitude: -95.552296, 
        weight: 1, 
    },
    {
        latitude: 29.831937,  
        longitude: -95.342356, 
        weight: 1, 
    },
    {
        latitude: 29.849432,  
        longitude: -95.47661, 
        weight: 1, 
    },
    {
        latitude: 29.8067,  
        longitude: -95.484929, 
        weight: 1, 
    },
    {
        latitude: 29.670077,  
        longitude: -95.277056, 
        weight: 1, 
    },
    {
        latitude: 29.81695,  
        longitude: -95.445899, 
        weight: 1, 
    },
    {
        latitude: 29.737566,  
        longitude: -95.264363, 
        weight: 1, 
    },
    {
        latitude: 29.737566,  
        longitude: -95.264363, 
        weight: 1, 
    },
    {
        latitude: 29.736823,  
        longitude: -95.567853, 
        weight: 1, 
    },
    {
        latitude: 29.850168,  
        longitude: -95.395691, 
        weight: 1, 
    },
    {
        latitude: 29.850168,  
        longitude: -95.395691, 
        weight: 1, 
    },
    {
        latitude: 29.784439,  
        longitude: -95.652515, 
        weight: 1, 
    },
    {
        latitude: 29.801621,  
        longitude: -95.435208, 
        weight: 1, 
    },
    {
        latitude: 29.801621,  
        longitude: -95.435208, 
        weight: 1, 
    },
    {
        latitude: 29.731129,  
        longitude: -95.353251, 
        weight: 1, 
    },
    {
        latitude: 29.731129,  
        longitude: -95.353251, 
        weight: 1, 
    },
    {
        latitude: 29.731129,  
        longitude: -95.353251, 
        weight: 1, 
    },
    {
        latitude: 29.721729,  
        longitude: -95.376187, 
        weight: 1, 
    },
    {
        latitude: 29.721729,  
        longitude: -95.376187, 
        weight: 1, 
    },
    {
        latitude: 29.757752,  
        longitude: -95.376414, 
        weight: 1, 
    },
    {
        latitude: 29.746307,  
        longitude: -95.533675, 
        weight: 1, 
    },
    {
        latitude: 29.746307,  
        longitude: -95.533675, 
        weight: 1, 
    },
    {
        latitude: 29.758996,  
        longitude: -95.386524, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.772561,  
        longitude: -95.218393, 
        weight: 1, 
    },
    {
        latitude: 29.772561,  
        longitude: -95.218393, 
        weight: 1, 
    },
    {
        latitude: 29.687113,  
        longitude: -95.5519, 
        weight: 1, 
    },
    {
        latitude: 29.613545,  
        longitude: -95.430805, 
        weight: 1, 
    },
    {
        latitude: 29.804692,  
        longitude: -95.546973, 
        weight: 1, 
    },
    {
        latitude: 29.759783,  
        longitude: -95.471608, 
        weight: 1, 
    },
    {
        latitude: 29.691612,  
        longitude: -95.57371, 
        weight: 1, 
    },
    {
        latitude: 29.751716,  
        longitude: -95.603741, 
        weight: 1, 
    },
    {
        latitude: 29.838096,  
        longitude: -95.384355, 
        weight: 1, 
    },
    {
        latitude: 29.881869,  
        longitude: -95.453159, 
        weight: 1, 
    },
    {
        latitude: 29.966978,  
        longitude: -95.545658, 
        weight: 1, 
    },
    {
        latitude: 29.788582,  
        longitude: -95.640294, 
        weight: 1, 
    },
    {
        latitude: 29.797805,  
        longitude: -95.270827, 
        weight: 1, 
    },
    {
        latitude: 29.702308,  
        longitude: -95.359239, 
        weight: 1, 
    },
    {
        latitude: 29.743899,  
        longitude: -95.538411, 
        weight: 1, 
    },
    {
        latitude: 29.735859,  
        longitude: -95.624476, 
        weight: 1, 
    },
    {
        latitude: 29.850531,  
        longitude: -95.325077, 
        weight: 1, 
    },
    {
        latitude: 29.850531,  
        longitude: -95.325077, 
        weight: 1, 
    },
    {
        latitude: 29.717592,  
        longitude: -95.335365, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.810965,  
        longitude: -95.498638, 
        weight: 1, 
    },
    {
        latitude: 29.724933,  
        longitude: -95.372536, 
        weight: 1, 
    },
    {
        latitude: 29.68116,  
        longitude: -95.349272, 
        weight: 1, 
    },
    {
        latitude: 29.693335,  
        longitude: -95.510582, 
        weight: 1, 
    },
    {
        latitude: 29.736372,  
        longitude: -95.489823, 
        weight: 1, 
    },
    {
        latitude: 29.6794,  
        longitude: -95.556007, 
        weight: 1, 
    },
    {
        latitude: 29.742759,  
        longitude: -95.408619, 
        weight: 1, 
    },
    {
        latitude: 29.802839,  
        longitude: -95.484832, 
        weight: 1, 
    },
    {
        latitude: 29.687068,  
        longitude: -95.290293, 
        weight: 1, 
    },
    {
        latitude: 29.884122,  
        longitude: -95.373481, 
        weight: 1, 
    },
    {
        latitude: 29.884122,  
        longitude: -95.373481, 
        weight: 1, 
    },
    {
        latitude: 29.94438,  
        longitude: -95.399857, 
        weight: 1, 
    },
    {
        latitude: 29.74624,  
        longitude: -95.37722, 
        weight: 1, 
    },
    {
        latitude: 29.644615,  
        longitude: -95.241185, 
        weight: 1, 
    },
    {
        latitude: 29.772905,  
        longitude: -95.381597, 
        weight: 1, 
    },
    {
        latitude: 29.735907,  
        longitude: -95.619586, 
        weight: 1, 
    },
    {
        latitude: 29.856678,  
        longitude: -95.395551, 
        weight: 1, 
    },
    {
        latitude: 29.619215,  
        longitude: -95.215225, 
        weight: 1, 
    },
    {
        latitude: 29.743815,  
        longitude: -95.450062, 
        weight: 1, 
    },
    {
        latitude: 29.771547,  
        longitude: -95.227431, 
        weight: 1, 
    },
    {
        latitude: 29.769999,  
        longitude: -95.382754, 
        weight: 1, 
    },
    {
        latitude: 29.685324,  
        longitude: -95.288334, 
        weight: 1, 
    },
    {
        latitude: 29.809339,  
        longitude: -95.366746, 
        weight: 1, 
    },
    {
        latitude: 29.809339,  
        longitude: -95.366746, 
        weight: 1, 
    },
    {
        latitude: 29.827167,  
        longitude: -95.270004, 
        weight: 1, 
    },
    {
        latitude: 29.827167,  
        longitude: -95.270004, 
        weight: 1, 
    },
    {
        latitude: 29.785363,  
        longitude: -95.184825, 
        weight: 1, 
    },
    {
        latitude: 29.766695,  
        longitude: -95.337356, 
        weight: 1, 
    },
    {
        latitude: 29.766695,  
        longitude: -95.337356, 
        weight: 1, 
    },
    {
        latitude: 29.6919,  
        longitude: -95.551818, 
        weight: 1, 
    },
    {
        latitude: 29.6919,  
        longitude: -95.551818, 
        weight: 1, 
    },
    {
        latitude: 29.705461,  
        longitude: -95.49517, 
        weight: 1, 
    },
    {
        latitude: 29.777659,  
        longitude: -95.218511, 
        weight: 1, 
    },
    {
        latitude: 29.921709,  
        longitude: -95.409147, 
        weight: 1, 
    },
    {
        latitude: 29.700866,  
        longitude: -95.345672, 
        weight: 1, 
    },
    {
        latitude: 29.822672,  
        longitude: -95.539012, 
        weight: 1, 
    },
    {
        latitude: 29.699635,  
        longitude: -95.382732, 
        weight: 1, 
    },
    {
        latitude: 29.74373,  
        longitude: -95.345044, 
        weight: 1, 
    },
    {
        latitude: 29.889555,  
        longitude: -95.415481, 
        weight: 1, 
    },
    {
        latitude: 29.742934,  
        longitude: -95.318767, 
        weight: 1, 
    },
    {
        latitude: 29.668909,  
        longitude: -95.278892, 
        weight: 1, 
    },
    {
        latitude: 29.685079,  
        longitude: -95.355283, 
        weight: 1, 
    },
    {
        latitude: 29.854215,  
        longitude: -95.240872, 
        weight: 1, 
    },
    {
        latitude: 29.854215,  
        longitude: -95.240872, 
        weight: 1, 
    },
    {
        latitude: 29.740399,  
        longitude: -95.61419, 
        weight: 1, 
    },
    {
        latitude: 29.624023,  
        longitude: -95.275253, 
        weight: 1, 
    },
    {
        latitude: 29.674644,  
        longitude: -95.419501, 
        weight: 1, 
    },
    {
        latitude: 29.674644,  
        longitude: -95.419501, 
        weight: 1, 
    },
    {
        latitude: 29.749527,  
        longitude: -95.380928, 
        weight: 1, 
    },
    {
        latitude: 29.851007,  
        longitude: -95.381659, 
        weight: 1, 
    },
    {
        latitude: 29.673428,  
        longitude: -95.54518, 
        weight: 1, 
    },
    {
        latitude: 29.744951,  
        longitude: -95.345307, 
        weight: 1, 
    },
    {
        latitude: 29.770429,  
        longitude: -95.211645, 
        weight: 1, 
    },
    {
        latitude: 29.785602,  
        longitude: -95.360811, 
        weight: 1, 
    },
    {
        latitude: 29.732616,  
        longitude: -95.571693, 
        weight: 1, 
    },
    {
        latitude: 29.741924,  
        longitude: -95.642803, 
        weight: 1, 
    },
    {
        latitude: 29.98735,  
        longitude: -95.346518, 
        weight: 1, 
    },
    {
        latitude: 29.938167,  
        longitude: -95.407462, 
        weight: 1, 
    },
    {
        latitude: 29.747927,  
        longitude: -95.575497, 
        weight: 1, 
    },
    {
        latitude: 29.809216,  
        longitude: -95.470665, 
        weight: 1, 
    },
    {
        latitude: 29.750511,  
        longitude: -95.618801, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.677785,  
        longitude: -95.314407, 
        weight: 1, 
    },
    {
        latitude: 29.677785,  
        longitude: -95.314407, 
        weight: 1, 
    },
    {
        latitude: 29.703903,  
        longitude: -95.355618, 
        weight: 1, 
    },
    {
        latitude: 29.686453,  
        longitude: -95.541987, 
        weight: 1, 
    },
    {
        latitude: 29.563717,  
        longitude: -95.108019, 
        weight: 1, 
    },
    {
        latitude: 29.563717,  
        longitude: -95.108019, 
        weight: 1, 
    },
    {
        latitude: 29.931156,  
        longitude: -95.40588, 
        weight: 1, 
    },
    {
        latitude: 29.782063,  
        longitude: -95.404328, 
        weight: 1, 
    },
    {
        latitude: 29.802683,  
        longitude: -95.352403, 
        weight: 1, 
    },
    {
        latitude: 29.738643,  
        longitude: -95.402088, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.854243,  
        longitude: -95.258585, 
        weight: 1, 
    },
    {
        latitude: 29.883228,  
        longitude: -95.466251, 
        weight: 1, 
    },
    {
        latitude: 29.725979,  
        longitude: -95.332929, 
        weight: 1, 
    },
    {
        latitude: 29.935429,  
        longitude: -95.327167, 
        weight: 1, 
    },
    {
        latitude: 29.783604,  
        longitude: -95.446848, 
        weight: 1, 
    },
    {
        latitude: 29.736476,  
        longitude: -95.521112, 
        weight: 1, 
    },
    {
        latitude: 29.837584,  
        longitude: -95.368137, 
        weight: 1, 
    },
    {
        latitude: 29.835691,  
        longitude: -95.258069, 
        weight: 1, 
    },
    {
        latitude: 30.050084,  
        longitude: -95.254255, 
        weight: 1, 
    },
    {
        latitude: 29.684941,  
        longitude: -95.508759, 
        weight: 1, 
    },
    {
        latitude: 29.863462,  
        longitude: -95.457856, 
        weight: 1, 
    },
    {
        latitude: 29.680454,  
        longitude: -95.584448, 
        weight: 1, 
    },
    {
        latitude: 29.937912,  
        longitude: -95.41201, 
        weight: 1, 
    },
    {
        latitude: 29.667679,  
        longitude: -95.355646, 
        weight: 1, 
    },
    {
        latitude: 29.652563,  
        longitude: -95.259839, 
        weight: 1, 
    },
    {
        latitude: 29.640581,  
        longitude: -95.534308, 
        weight: 1, 
    },
    {
        latitude: 29.620617,  
        longitude: -95.376316, 
        weight: 1, 
    },
    {
        latitude: 29.73622,  
        longitude: -95.385744, 
        weight: 1, 
    },
    {
        latitude: 29.747968,  
        longitude: -95.37588, 
        weight: 1, 
    },
    {
        latitude: 29.803878,  
        longitude: -95.404286, 
        weight: 1, 
    },
    {
        latitude: 29.948958,  
        longitude: -95.416252, 
        weight: 1, 
    },
    {
        latitude: 29.948958,  
        longitude: -95.416252, 
        weight: 1, 
    },
    {
        latitude: 29.758145,  
        longitude: -95.256684, 
        weight: 1, 
    },
    {
        latitude: 29.714562,  
        longitude: -95.532604, 
        weight: 1, 
    },
    {
        latitude: 30.058256,  
        longitude: -95.252869, 
        weight: 1, 
    },
    {
        latitude: 30.058256,  
        longitude: -95.252869, 
        weight: 1, 
    },
    {
        latitude: 29.948734,  
        longitude: -95.331833, 
        weight: 1, 
    },
    {
        latitude: 29.948734,  
        longitude: -95.331833, 
        weight: 1, 
    },
    {
        latitude: 29.761368,  
        longitude: -95.357601, 
        weight: 1, 
    },
    {
        latitude: 29.761368,  
        longitude: -95.357601, 
        weight: 1, 
    },
    {
        latitude: 29.708881,  
        longitude: -95.496833, 
        weight: 1, 
    },
    {
        latitude: 29.630345,  
        longitude: -95.339355, 
        weight: 1, 
    },
    {
        latitude: 29.841381,  
        longitude: -95.499259, 
        weight: 1, 
    },
    {
        latitude: 29.677041,  
        longitude: -95.290743, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.646819,  
        longitude: -95.500434, 
        weight: 1, 
    },
    {
        latitude: 29.646819,  
        longitude: -95.500434, 
        weight: 1, 
    },
    {
        latitude: 29.744437,  
        longitude: -95.377408, 
        weight: 1, 
    },
    {
        latitude: 29.812487,  
        longitude: -95.282204, 
        weight: 1, 
    },
    {
        latitude: 29.734078,  
        longitude: -95.384247, 
        weight: 1, 
    },
    {
        latitude: 29.720298,  
        longitude: -95.55366, 
        weight: 1, 
    },
    {
        latitude: 29.702874,  
        longitude: -95.365309, 
        weight: 1, 
    },
    {
        latitude: 29.664821,  
        longitude: -95.590811, 
        weight: 1, 
    },
    {
        latitude: 30.038946,  
        longitude: -95.24746, 
        weight: 1, 
    },
    {
        latitude: 29.736188,  
        longitude: -95.605543, 
        weight: 1, 
    },
    {
        latitude: 29.858596,  
        longitude: -95.523379, 
        weight: 1, 
    },
    {
        latitude: 29.672944,  
        longitude: -95.551103, 
        weight: 1, 
    },
    {
        latitude: 30.049086,  
        longitude: -95.252987, 
        weight: 1, 
    },
    {
        latitude: 29.710805,  
        longitude: -95.400035, 
        weight: 1, 
    },
    {
        latitude: 30.050574,  
        longitude: -95.252862, 
        weight: 1, 
    },
    {
        latitude: 29.820325,  
        longitude: -95.345413, 
        weight: 1, 
    },
    {
        latitude: 29.639783,  
        longitude: -95.463556, 
        weight: 1, 
    },
    {
        latitude: 29.750051,  
        longitude: -95.478473, 
        weight: 1, 
    },
    {
        latitude: 29.70363,  
        longitude: -95.367713, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.732996,  
        longitude: -95.354783, 
        weight: 1, 
    },
    {
        latitude: 29.658437,  
        longitude: -95.255728, 
        weight: 1, 
    },
    {
        latitude: 29.793663,  
        longitude: -95.316844, 
        weight: 1, 
    },
    {
        latitude: 29.831375,  
        longitude: -95.328909, 
        weight: 1, 
    },
    {
        latitude: 29.699245,  
        longitude: -95.369829, 
        weight: 1, 
    },
    {
        latitude: 29.670106,  
        longitude: -95.24295, 
        weight: 1, 
    },
    {
        latitude: 29.670106,  
        longitude: -95.24295, 
        weight: 1, 
    },
    {
        latitude: 29.759389,  
        longitude: -95.317902, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.755881,  
        longitude: -95.63946, 
        weight: 1, 
    },
    {
        latitude: 29.671681,  
        longitude: -95.279026, 
        weight: 1, 
    },
    {
        latitude: 29.684618,  
        longitude: -95.276134, 
        weight: 1, 
    },
    {
        latitude: 29.831661,  
        longitude: -95.337761, 
        weight: 1, 
    },
    {
        latitude: 29.779746,  
        longitude: -95.218569, 
        weight: 1, 
    },
    {
        latitude: 29.793308,  
        longitude: -95.473228, 
        weight: 1, 
    },
    {
        latitude: 29.663129,  
        longitude: -95.338403, 
        weight: 1, 
    },
    {
        latitude: 29.817854,  
        longitude: -95.346856, 
        weight: 1, 
    },
    {
        latitude: 29.737459,  
        longitude: -95.514355, 
        weight: 1, 
    },
    {
        latitude: 30.050296,  
        longitude: -95.257118, 
        weight: 1, 
    },
    {
        latitude: 29.705147,  
        longitude: -95.521309, 
        weight: 1, 
    },
    {
        latitude: 29.736544,  
        longitude: -95.586748, 
        weight: 1, 
    },
    {
        latitude: 29.736544,  
        longitude: -95.586748, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.672523,  
        longitude: -95.607209, 
        weight: 1, 
    },
    {
        latitude: 29.608268,  
        longitude: -95.220962, 
        weight: 1, 
    },
    {
        latitude: 30.068593,  
        longitude: -95.210909, 
        weight: 1, 
    },
    {
        latitude: 30.068593,  
        longitude: -95.210909, 
        weight: 1, 
    },
    {
        latitude: 29.752159,  
        longitude: -95.498607, 
        weight: 1, 
    },
    {
        latitude: 29.752159,  
        longitude: -95.498607, 
        weight: 1, 
    },
    {
        latitude: 29.744242,  
        longitude: -95.362158, 
        weight: 1, 
    },
    {
        latitude: 29.600545,  
        longitude: -95.33095, 
        weight: 1, 
    },
    {
        latitude: 29.600545,  
        longitude: -95.33095, 
        weight: 1, 
    },
    {
        latitude: 29.656912,  
        longitude: -95.383703, 
        weight: 1, 
    },
    {
        latitude: 29.710786,  
        longitude: -95.273027, 
        weight: 1, 
    },
    {
        latitude: 29.593763,  
        longitude: -95.467919, 
        weight: 1, 
    },
    {
        latitude: 29.67632,  
        longitude: -95.328671, 
        weight: 1, 
    },
    {
        latitude: 29.742703,  
        longitude: -95.359751, 
        weight: 1, 
    },
    {
        latitude: 29.766878,  
        longitude: -95.2977, 
        weight: 1, 
    },
    {
        latitude: 29.766878,  
        longitude: -95.2977, 
        weight: 1, 
    },
    {
        latitude: 29.82266,  
        longitude: -95.305951, 
        weight: 1, 
    },
    {
        latitude: 29.767951,  
        longitude: -95.318767, 
        weight: 1, 
    },
    {
        latitude: 29.704998,  
        longitude: -95.537979, 
        weight: 1, 
    },
    {
        latitude: 29.651652,  
        longitude: -95.367336, 
        weight: 1, 
    },
    {
        latitude: 29.672716,  
        longitude: -95.491078, 
        weight: 1, 
    },
    {
        latitude: 29.7617,  
        longitude: -95.470325, 
        weight: 1, 
    },
    {
        latitude: 29.734348,  
        longitude: -95.392509, 
        weight: 1, 
    },
    {
        latitude: 29.608477,  
        longitude: -95.386255, 
        weight: 1, 
    },
    {
        latitude: 29.826158,  
        longitude: -95.331076, 
        weight: 1, 
    },
    {
        latitude: 29.826158,  
        longitude: -95.331076, 
        weight: 1, 
    },
    {
        latitude: 29.724744,  
        longitude: -95.454742, 
        weight: 1, 
    },
    {
        latitude: 29.692975,  
        longitude: -95.601381, 
        weight: 1, 
    },
    {
        latitude: 29.543296,  
        longitude: -95.143887, 
        weight: 1, 
    },
    {
        latitude: 29.837916,  
        longitude: -95.51424, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 29.809279,  
        longitude: -95.470739, 
        weight: 1, 
    },
    {
        latitude: 29.80662,  
        longitude: -95.454197, 
        weight: 1, 
    },
    {
        latitude: 29.689033,  
        longitude: -95.353705, 
        weight: 1, 
    },
    {
        latitude: 29.759703,  
        longitude: -95.360191, 
        weight: 1, 
    },
    {
        latitude: 29.950422,  
        longitude: -95.407692, 
        weight: 1, 
    },
    {
        latitude: 29.950422,  
        longitude: -95.407692, 
        weight: 1, 
    },
    {
        latitude: 29.79323,  
        longitude: -95.35191, 
        weight: 1, 
    },
    {
        latitude: 29.79323,  
        longitude: -95.35191, 
        weight: 1, 
    },
    {
        latitude: 29.772161,  
        longitude: -95.186435, 
        weight: 1, 
    },
    {
        latitude: 29.830396,  
        longitude: -95.301998, 
        weight: 1, 
    },
    {
        latitude: 29.734445,  
        longitude: -95.395048, 
        weight: 1, 
    },
    {
        latitude: 29.714092,  
        longitude: -95.381749, 
        weight: 1, 
    },
    {
        latitude: 30.040052,  
        longitude: -95.255281, 
        weight: 1, 
    },
    {
        latitude: 29.630289,  
        longitude: -95.507627, 
        weight: 1, 
    },
    {
        latitude: 29.630289,  
        longitude: -95.507627, 
        weight: 1, 
    },
    {
        latitude: 29.729806,  
        longitude: -95.597144, 
        weight: 1, 
    },
    {
        latitude: 29.641881,  
        longitude: -95.519747, 
        weight: 1, 
    },
    {
        latitude: 30.052669,  
        longitude: -95.252365, 
        weight: 1, 
    },
    {
        latitude: 29.730227,  
        longitude: -95.417785, 
        weight: 1, 
    },
    {
        latitude: 29.656923,  
        longitude: -95.508426, 
        weight: 1, 
    },
    {
        latitude: 29.721685,  
        longitude: -95.37608, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.785257,  
        longitude: -95.57631, 
        weight: 1, 
    },
    {
        latitude: 29.605806,  
        longitude: -95.463318, 
        weight: 1, 
    },
    {
        latitude: 29.593484,  
        longitude: -95.184179, 
        weight: 1, 
    },
    {
        latitude: 29.733896,  
        longitude: -95.476501, 
        weight: 1, 
    },
    {
        latitude: 29.618281,  
        longitude: -95.230276, 
        weight: 1, 
    },
    {
        latitude: 29.883319,  
        longitude: -95.417838, 
        weight: 1, 
    },
    {
        latitude: 29.828966,  
        longitude: -95.297948, 
        weight: 1, 
    },
    {
        latitude: 29.828966,  
        longitude: -95.297948, 
        weight: 1, 
    },
    {
        latitude: 29.773151,  
        longitude: -95.354607, 
        weight: 1, 
    },
    {
        latitude: 29.679793,  
        longitude: -95.248403, 
        weight: 1, 
    },
    {
        latitude: 29.840651,  
        longitude: -95.324399, 
        weight: 1, 
    },
    {
        latitude: 29.840651,  
        longitude: -95.324399, 
        weight: 1, 
    },
    {
        latitude: 29.739964,  
        longitude: -95.259465, 
        weight: 1, 
    },
    {
        latitude: 29.735914,  
        longitude: -95.619689, 
        weight: 1, 
    },
    {
        latitude: 29.73941,  
        longitude: -95.538372, 
        weight: 1, 
    },
    {
        latitude: 29.823874,  
        longitude: -95.286631, 
        weight: 1, 
    },
    {
        latitude: 29.653849,  
        longitude: -95.371887, 
        weight: 1, 
    },
    {
        latitude: 29.627647,  
        longitude: -95.364981, 
        weight: 1, 
    },
    {
        latitude: 29.698332,  
        longitude: -95.492953, 
        weight: 1, 
    },
    {
        latitude: 29.711021,  
        longitude: -95.506126, 
        weight: 1, 
    },
    {
        latitude: 29.674449,  
        longitude: -95.546041, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.679888,  
        longitude: -95.465826, 
        weight: 1, 
    },
    {
        latitude: 29.784237,  
        longitude: -95.604263, 
        weight: 1, 
    },
    {
        latitude: 29.81957,  
        longitude: -95.208054, 
        weight: 1, 
    },
    {
        latitude: 30.057364,  
        longitude: -95.219169, 
        weight: 1, 
    },
    {
        latitude: 29.909116,  
        longitude: -95.663024, 
        weight: 1, 
    },
    {
        latitude: 29.678887,  
        longitude: -95.48185, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.755782,  
        longitude: -95.64451, 
        weight: 1, 
    },
    {
        latitude: 29.663201,  
        longitude: -95.364184, 
        weight: 1, 
    },
    {
        latitude: 29.67541,  
        longitude: -95.590317, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.649664,  
        longitude: -95.249015, 
        weight: 1, 
    },
    {
        latitude: 29.722721,  
        longitude: -95.454753, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.560494,  
        longitude: -95.125579, 
        weight: 1, 
    },
    {
        latitude: 29.654238,  
        longitude: -95.555621, 
        weight: 1, 
    },
    {
        latitude: 29.817529,  
        longitude: -95.45174, 
        weight: 1, 
    },
    {
        latitude: 29.711139,  
        longitude: -95.563272, 
        weight: 1, 
    },
    {
        latitude: 29.691804,  
        longitude: -95.366466, 
        weight: 1, 
    },
    {
        latitude: 29.775637,  
        longitude: -95.318272, 
        weight: 1, 
    },
    {
        latitude: 29.773033,  
        longitude: -95.361114, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.609624,  
        longitude: -95.232486, 
        weight: 1, 
    },
    {
        latitude: 29.869887,  
        longitude: -95.408983, 
        weight: 1, 
    },
    {
        latitude: 29.655025,  
        longitude: -95.368589, 
        weight: 1, 
    },
    {
        latitude: 29.675496,  
        longitude: -95.546066, 
        weight: 1, 
    },
    {
        latitude: 29.737054,  
        longitude: -95.548481, 
        weight: 1, 
    },
    {
        latitude: 29.644578,  
        longitude: -95.246612, 
        weight: 1, 
    },
    {
        latitude: 29.641637,  
        longitude: -95.242133, 
        weight: 1, 
    },
    {
        latitude: 29.74242,  
        longitude: -95.372607, 
        weight: 1, 
    },
    {
        latitude: 29.675068,  
        longitude: -95.570418, 
        weight: 1, 
    },
    {
        latitude: 29.776231,  
        longitude: -95.322733, 
        weight: 1, 
    },
    {
        latitude: 29.776231,  
        longitude: -95.322733, 
        weight: 1, 
    },
    {
        latitude: 29.649185,  
        longitude: -95.218911, 
        weight: 1, 
    },
    {
        latitude: 29.672172,  
        longitude: -95.438427, 
        weight: 1, 
    },
    {
        latitude: 29.776446,  
        longitude: -95.225329, 
        weight: 1, 
    },
    {
        latitude: 29.776446,  
        longitude: -95.225329, 
        weight: 1, 
    },
    {
        latitude: 29.74165,  
        longitude: -95.301756, 
        weight: 1, 
    },
    {
        latitude: 29.742148,  
        longitude: -95.461039, 
        weight: 1, 
    },
    {
        latitude: 29.742281,  
        longitude: -95.362583, 
        weight: 1, 
    },
    {
        latitude: 29.751154,  
        longitude: -95.26546, 
        weight: 1, 
    },
    {
        latitude: 29.737054,  
        longitude: -95.548481, 
        weight: 1, 
    },
    {
        latitude: 29.737163,  
        longitude: -95.540178, 
        weight: 1, 
    },
    {
        latitude: 29.710529,  
        longitude: -95.506653, 
        weight: 1, 
    },
    {
        latitude: 29.729255,  
        longitude: -95.317996, 
        weight: 1, 
    },
    {
        latitude: 29.543375,  
        longitude: -95.145683, 
        weight: 1, 
    },
    {
        latitude: 29.840532,  
        longitude: -95.342815, 
        weight: 1, 
    },
    {
        latitude: 29.953004,  
        longitude: -95.39323, 
        weight: 1, 
    },
    {
        latitude: 29.953004,  
        longitude: -95.39323, 
        weight: 1, 
    },
    {
        latitude: 29.613626,  
        longitude: -95.464937, 
        weight: 1, 
    },
    {
        latitude: 29.737871,  
        longitude: -95.481146, 
        weight: 1, 
    },
    {
        latitude: 29.589336,  
        longitude: -95.178193, 
        weight: 1, 
    },
    {
        latitude: 29.701853,  
        longitude: -95.295697, 
        weight: 1, 
    },
    {
        latitude: 29.781893,  
        longitude: -95.429167, 
        weight: 1, 
    },
    {
        latitude: 29.740244,  
        longitude: -95.339878, 
        weight: 1, 
    },
    {
        latitude: 29.713116,  
        longitude: -95.358425, 
        weight: 1, 
    },
    {
        latitude: 29.713116,  
        longitude: -95.358425, 
        weight: 1, 
    },
    {
        latitude: 29.687375,  
        longitude: -95.297717, 
        weight: 1, 
    },
    {
        latitude: 29.750512,  
        longitude: -95.61941, 
        weight: 1, 
    },
    {
        latitude: 29.723354,  
        longitude: -95.55797, 
        weight: 1, 
    },
    {
        latitude: 29.772715,  
        longitude: -95.325455, 
        weight: 1, 
    },
    {
        latitude: 29.78151,  
        longitude: -95.292982, 
        weight: 1, 
    },
    {
        latitude: 29.692096,  
        longitude: -95.374476, 
        weight: 1, 
    },
    {
        latitude: 29.934063,  
        longitude: -95.416733, 
        weight: 1, 
    },
    {
        latitude: 29.736873,  
        longitude: -95.291573, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.952961,  
        longitude: -95.389025, 
        weight: 1, 
    },
    {
        latitude: 29.68318,  
        longitude: -95.277392, 
        weight: 1, 
    },
    {
        latitude: 29.825784,  
        longitude: -95.337681, 
        weight: 1, 
    },
    {
        latitude: 29.954936,  
        longitude: -95.535277, 
        weight: 1, 
    },
    {
        latitude: 29.7347,  
        longitude: -95.489824, 
        weight: 1, 
    },
    {
        latitude: 29.755804,  
        longitude: -95.351875, 
        weight: 1, 
    },
    {
        latitude: 29.735508,  
        longitude: -95.588625, 
        weight: 1, 
    },
    {
        latitude: 29.735508,  
        longitude: -95.588625, 
        weight: 1, 
    },
    {
        latitude: 29.645071,  
        longitude: -95.526062, 
        weight: 1, 
    },
    {
        latitude: 29.645071,  
        longitude: -95.526062, 
        weight: 1, 
    },
    {
        latitude: 29.645071,  
        longitude: -95.526062, 
        weight: 1, 
    },
    {
        latitude: 29.645071,  
        longitude: -95.526062, 
        weight: 1, 
    },
    {
        latitude: 29.684451,  
        longitude: -95.439972, 
        weight: 1, 
    },
    {
        latitude: 29.950414,  
        longitude: -95.407588, 
        weight: 1, 
    },
    {
        latitude: 29.950414,  
        longitude: -95.407588, 
        weight: 1, 
    },
    {
        latitude: 29.651839,  
        longitude: -95.37288, 
        weight: 1, 
    },
    {
        latitude: 29.658254,  
        longitude: -95.478958, 
        weight: 1, 
    },
    {
        latitude: 29.808002,  
        longitude: -95.505711, 
        weight: 1, 
    },
    {
        latitude: 29.706802,  
        longitude: -95.505096, 
        weight: 1, 
    },
    {
        latitude: 29.732746,  
        longitude: -95.520542, 
        weight: 1, 
    },
    {
        latitude: 29.701584,  
        longitude: -95.371476, 
        weight: 1, 
    },
    {
        latitude: 29.734421,  
        longitude: -95.397976, 
        weight: 1, 
    },
    {
        latitude: 29.85955,  
        longitude: -95.40213, 
        weight: 1, 
    },
    {
        latitude: 29.689425,  
        longitude: -95.533062, 
        weight: 1, 
    },
    {
        latitude: 29.780638,  
        longitude: -95.317425, 
        weight: 1, 
    },
    {
        latitude: 29.828331,  
        longitude: -95.531799, 
        weight: 1, 
    },
    {
        latitude: 29.715392,  
        longitude: -95.538961, 
        weight: 1, 
    },
    {
        latitude: 29.705466,  
        longitude: -95.515001, 
        weight: 1, 
    },
    {
        latitude: 29.665606,  
        longitude: -95.328341, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.961362,  
        longitude: -95.552487, 
        weight: 1, 
    },
    {
        latitude: 29.70318,  
        longitude: -95.36922, 
        weight: 1, 
    },
    {
        latitude: 29.743303,  
        longitude: -95.469388, 
        weight: 1, 
    },
    {
        latitude: 29.881381,  
        longitude: -95.300613, 
        weight: 1, 
    },
    {
        latitude: 29.727545,  
        longitude: -95.520976, 
        weight: 1, 
    },
    {
        latitude: 29.727545,  
        longitude: -95.520976, 
        weight: 1, 
    },
    {
        latitude: 29.838489,  
        longitude: -95.36819, 
        weight: 1, 
    },
    {
        latitude: 29.838489,  
        longitude: -95.36819, 
        weight: 1, 
    },
    {
        latitude: 29.838489,  
        longitude: -95.36819, 
        weight: 1, 
    },
    {
        latitude: 29.838489,  
        longitude: -95.36819, 
        weight: 1, 
    },
    {
        latitude: 29.644081,  
        longitude: -95.512623, 
        weight: 1, 
    },
    {
        latitude: 29.755929,  
        longitude: -95.367041, 
        weight: 1, 
    },
    {
        latitude: 29.737925,  
        longitude: -95.47673, 
        weight: 1, 
    },
    {
        latitude: 29.846412,  
        longitude: -95.262306, 
        weight: 1, 
    },
    {
        latitude: 29.775761,  
        longitude: -95.220355, 
        weight: 1, 
    },
    {
        latitude: 29.758669,  
        longitude: -95.362274, 
        weight: 1, 
    },
    {
        latitude: 29.654638,  
        longitude: -95.582821, 
        weight: 1, 
    },
    {
        latitude: 29.870156,  
        longitude: -95.490274, 
        weight: 1, 
    },
    {
        latitude: 30.049487,  
        longitude: -95.239942, 
        weight: 1, 
    },
    {
        latitude: 29.779159,  
        longitude: -95.218568, 
        weight: 1, 
    },
    {
        latitude: 29.704502,  
        longitude: -95.513481, 
        weight: 1, 
    },
    {
        latitude: 29.704502,  
        longitude: -95.513481, 
        weight: 1, 
    },
    {
        latitude: 29.776732,  
        longitude: -95.291043, 
        weight: 1, 
    },
    {
        latitude: 29.709309,  
        longitude: -95.401038, 
        weight: 1, 
    },
    {
        latitude: 29.709309,  
        longitude: -95.401038, 
        weight: 1, 
    },
    {
        latitude: 29.677041,  
        longitude: -95.290743, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.698173,  
        longitude: -95.337649, 
        weight: 1, 
    },
    {
        latitude: 29.776867,  
        longitude: -95.580568, 
        weight: 1, 
    },
    {
        latitude: 29.646776,  
        longitude: -95.368427, 
        weight: 1, 
    },
    {
        latitude: 29.848463,  
        longitude: -95.303411, 
        weight: 1, 
    },
    {
        latitude: 29.831426,  
        longitude: -95.285456, 
        weight: 1, 
    },
    {
        latitude: 29.80129,  
        longitude: -95.267795, 
        weight: 1, 
    },
    {
        latitude: 29.800251,  
        longitude: -95.334575, 
        weight: 1, 
    },
    {
        latitude: 29.71335,  
        longitude: -95.361602, 
        weight: 1, 
    },
    {
        latitude: 29.870157,  
        longitude: -95.376436, 
        weight: 1, 
    },
    {
        latitude: 29.748301,  
        longitude: -95.35279, 
        weight: 1, 
    },
    {
        latitude: 29.730588,  
        longitude: -95.308826, 
        weight: 1, 
    },
    {
        latitude: 29.74641,  
        longitude: -95.613161, 
        weight: 1, 
    },
    {
        latitude: 29.686991,  
        longitude: -95.364328, 
        weight: 1, 
    },
    {
        latitude: 29.617103,  
        longitude: -95.233164, 
        weight: 1, 
    },
    {
        latitude: 29.805688,  
        longitude: -95.512483, 
        weight: 1, 
    },
    {
        latitude: 29.805688,  
        longitude: -95.512483, 
        weight: 1, 
    },
    {
        latitude: 29.686636,  
        longitude: -95.364463, 
        weight: 1, 
    },
    {
        latitude: 29.863456,  
        longitude: -95.546671, 
        weight: 1, 
    },
    {
        latitude: 29.863456,  
        longitude: -95.546671, 
        weight: 1, 
    },
    {
        latitude: 29.735292,  
        longitude: -95.525201, 
        weight: 1, 
    },
    {
        latitude: 29.647412,  
        longitude: -95.499516, 
        weight: 1, 
    },
    {
        latitude: 29.624019,  
        longitude: -95.240206, 
        weight: 1, 
    },
    {
        latitude: 29.848268,  
        longitude: -95.314324, 
        weight: 1, 
    },
    {
        latitude: 29.848268,  
        longitude: -95.314324, 
        weight: 1, 
    },
    {
        latitude: 29.848268,  
        longitude: -95.314324, 
        weight: 1, 
    },
    {
        latitude: 29.655738,  
        longitude: -95.478088, 
        weight: 1, 
    },
    {
        latitude: 29.655738,  
        longitude: -95.478088, 
        weight: 1, 
    },
    {
        latitude: 29.85629,  
        longitude: -95.373985, 
        weight: 1, 
    },
    {
        latitude: 29.748105,  
        longitude: -95.56957, 
        weight: 1, 
    },
    {
        latitude: 29.792233,  
        longitude: -95.371262, 
        weight: 1, 
    },
    {
        latitude: 29.868097,  
        longitude: -95.288815, 
        weight: 1, 
    },
    {
        latitude: 29.915141,  
        longitude: -95.409733, 
        weight: 1, 
    },
    {
        latitude: 29.871641,  
        longitude: -95.378643, 
        weight: 1, 
    },
    {
        latitude: 29.640885,  
        longitude: -95.242713, 
        weight: 1, 
    },
    {
        latitude: 29.674672,  
        longitude: -95.42468, 
        weight: 1, 
    },
    {
        latitude: 29.870766,  
        longitude: -95.436623, 
        weight: 1, 
    },
    {
        latitude: 29.870766,  
        longitude: -95.436623, 
        weight: 1, 
    },
    {
        latitude: 29.924341,  
        longitude: -95.405635, 
        weight: 1, 
    },
    {
        latitude: 29.573435,  
        longitude: -95.148577, 
        weight: 1, 
    },
    {
        latitude: 29.730692,  
        longitude: -95.311987, 
        weight: 1, 
    },
    {
        latitude: 29.773262,  
        longitude: -95.562415, 
        weight: 1, 
    },
    {
        latitude: 29.949724,  
        longitude: -95.412284, 
        weight: 1, 
    },
    {
        latitude: 29.947549,  
        longitude: -95.397297, 
        weight: 1, 
    },
    {
        latitude: 29.704442,  
        longitude: -95.332834, 
        weight: 1, 
    },
    {
        latitude: 29.838322,  
        longitude: -95.56344, 
        weight: 1, 
    },
    {
        latitude: 29.712577,  
        longitude: -95.393684, 
        weight: 1, 
    },
    {
        latitude: 29.608871,  
        longitude: -95.194794, 
        weight: 1, 
    },
    {
        latitude: 29.76107,  
        longitude: -95.283687, 
        weight: 1, 
    },
    {
        latitude: 29.762495,  
        longitude: -95.350757, 
        weight: 1, 
    },
    {
        latitude: 29.73768,  
        longitude: -95.492319, 
        weight: 1, 
    },
    {
        latitude: 29.779422,  
        longitude: -95.535943, 
        weight: 1, 
    },
    {
        latitude: 29.865761,  
        longitude: -95.486294, 
        weight: 1, 
    },
    {
        latitude: 29.727955,  
        longitude: -95.427914, 
        weight: 1, 
    },
    {
        latitude: 29.771058,  
        longitude: -95.225254, 
        weight: 1, 
    },
    {
        latitude: 29.742755,  
        longitude: -95.403739, 
        weight: 1, 
    },
    {
        latitude: 29.855799,  
        longitude: -95.540222, 
        weight: 1, 
    },
    {
        latitude: 29.788373,  
        longitude: -95.629623, 
        weight: 1, 
    },
    {
        latitude: 29.591002,  
        longitude: -95.454082, 
        weight: 1, 
    },
    {
        latitude: 29.704442,  
        longitude: -95.332834, 
        weight: 1, 
    },
    {
        latitude: 29.693033,  
        longitude: -95.415508, 
        weight: 1, 
    },
    {
        latitude: 29.693033,  
        longitude: -95.415508, 
        weight: 1, 
    },
    {
        latitude: 29.778508,  
        longitude: -95.316599, 
        weight: 1, 
    },
    {
        latitude: 29.75812,  
        longitude: -95.556682, 
        weight: 1, 
    },
    {
        latitude: 29.945177,  
        longitude: -95.415, 
        weight: 1, 
    },
    {
        latitude: 29.945177,  
        longitude: -95.415, 
        weight: 1, 
    },
    {
        latitude: 29.867283,  
        longitude: -95.562716, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.957881,  
        longitude: -95.541742, 
        weight: 1, 
    },
    {
        latitude: 29.668442,  
        longitude: -95.261444, 
        weight: 1, 
    },
    {
        latitude: 29.707805,  
        longitude: -95.351261, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.674499,  
        longitude: -95.562245, 
        weight: 1, 
    },
    {
        latitude: 29.898014,  
        longitude: -95.425754, 
        weight: 1, 
    },
    {
        latitude: 29.80648,  
        longitude: -95.492041, 
        weight: 1, 
    },
    {
        latitude: 29.701234,  
        longitude: -95.605947, 
        weight: 1, 
    },
    {
        latitude: 29.740425,  
        longitude: -95.466518, 
        weight: 1, 
    },
    {
        latitude: 29.671292,  
        longitude: -95.302483, 
        weight: 1, 
    },
    {
        latitude: 29.759591,  
        longitude: -95.360027, 
        weight: 1, 
    },
    {
        latitude: 29.772471,  
        longitude: -95.218391, 
        weight: 1, 
    },
    {
        latitude: 29.721092,  
        longitude: -95.501038, 
        weight: 1, 
    },
    {
        latitude: 29.771324,  
        longitude: -95.410605, 
        weight: 1, 
    },
    {
        latitude: 29.605561,  
        longitude: -95.229794, 
        weight: 1, 
    },
    {
        latitude: 29.708798,  
        longitude: -95.276982, 
        weight: 1, 
    },
    {
        latitude: 29.706297,  
        longitude: -95.584805, 
        weight: 1, 
    },
    {
        latitude: 29.706297,  
        longitude: -95.584805, 
        weight: 1, 
    },
    {
        latitude: 29.706297,  
        longitude: -95.584805, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.738032,  
        longitude: -95.441624, 
        weight: 1, 
    },
    {
        latitude: 29.73293,  
        longitude: -95.495572, 
        weight: 1, 
    },
    {
        latitude: 29.713842,  
        longitude: -95.488903, 
        weight: 1, 
    },
    {
        latitude: 29.713842,  
        longitude: -95.488903, 
        weight: 1, 
    },
    {
        latitude: 29.697618,  
        longitude: -95.568221, 
        weight: 1, 
    },
    {
        latitude: 29.68992,  
        longitude: -95.364944, 
        weight: 1, 
    },
    {
        latitude: 29.764101,  
        longitude: -95.430159, 
        weight: 1, 
    },
    {
        latitude: 29.956127,  
        longitude: -95.423149, 
        weight: 1, 
    },
    {
        latitude: 29.956127,  
        longitude: -95.423149, 
        weight: 1, 
    },
    {
        latitude: 29.809807,  
        longitude: -95.525927, 
        weight: 1, 
    },
    {
        latitude: 29.937295,  
        longitude: -95.175889, 
        weight: 1, 
    },
    {
        latitude: 29.762249,  
        longitude: -95.420083, 
        weight: 1, 
    },
    {
        latitude: 29.825718,  
        longitude: -95.410679, 
        weight: 1, 
    },
    {
        latitude: 29.738862,  
        longitude: -95.58866, 
        weight: 1, 
    },
    {
        latitude: 29.630922,  
        longitude: -95.414041, 
        weight: 1, 
    },
    {
        latitude: 29.560589,  
        longitude: -95.139494, 
        weight: 1, 
    },
    {
        latitude: 29.75584,  
        longitude: -95.628034, 
        weight: 1, 
    },
    {
        latitude: 29.622699,  
        longitude: -95.22274, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.809638,  
        longitude: -95.445111, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.736222,  
        longitude: -95.514181, 
        weight: 1, 
    },
    {
        latitude: 29.775728,  
        longitude: -95.222537, 
        weight: 1, 
    },
    {
        latitude: 29.68672,  
        longitude: -95.55751, 
        weight: 1, 
    },
    {
        latitude: 29.675584,  
        longitude: -95.546095, 
        weight: 1, 
    },
    {
        latitude: 29.789349,  
        longitude: -95.549078, 
        weight: 1, 
    },
    {
        latitude: 29.713018,  
        longitude: -95.518058, 
        weight: 1, 
    },
    {
        latitude: 29.637234,  
        longitude: -95.336713, 
        weight: 1, 
    },
    {
        latitude: 29.828354,  
        longitude: -95.428413, 
        weight: 1, 
    },
    {
        latitude: 29.741312,  
        longitude: -95.379861, 
        weight: 1, 
    },
    {
        latitude: 29.741312,  
        longitude: -95.379861, 
        weight: 1, 
    },
    {
        latitude: 29.816225,  
        longitude: -95.464019, 
        weight: 1, 
    },
    {
        latitude: 29.844199,  
        longitude: -95.358952, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.967311,  
        longitude: -95.535669, 
        weight: 1, 
    },
    {
        latitude: 29.664898,  
        longitude: -95.550464, 
        weight: 1, 
    },
    {
        latitude: 29.760696,  
        longitude: -95.348061, 
        weight: 1, 
    },
    {
        latitude: 29.563137,  
        longitude: -95.141888, 
        weight: 1, 
    },
    {
        latitude: 29.563137,  
        longitude: -95.141888, 
        weight: 1, 
    },
    {
        latitude: 29.563137,  
        longitude: -95.141888, 
        weight: 1, 
    },
    {
        latitude: 29.688862,  
        longitude: -95.412516, 
        weight: 1, 
    },
    {
        latitude: 29.714627,  
        longitude: -95.396864, 
        weight: 1, 
    },
    {
        latitude: 29.673634,  
        longitude: -95.266414, 
        weight: 1, 
    },
    {
        latitude: 29.733644,  
        longitude: -95.598384, 
        weight: 1, 
    },
    {
        latitude: 29.780067,  
        longitude: -95.581594, 
        weight: 1, 
    },
    {
        latitude: 29.596176,  
        longitude: -95.489568, 
        weight: 1, 
    },
    {
        latitude: 29.729722,  
        longitude: -95.412842, 
        weight: 1, 
    },
    {
        latitude: 29.753034,  
        longitude: -95.367946, 
        weight: 1, 
    },
    {
        latitude: 29.740905,  
        longitude: -95.459902, 
        weight: 1, 
    },
    {
        latitude: 29.7324,  
        longitude: -95.360165, 
        weight: 1, 
    },
    {
        latitude: 29.726705,  
        longitude: -95.65212, 
        weight: 1, 
    },
    {
        latitude: 29.983357,  
        longitude: -95.293841, 
        weight: 1, 
    },
    {
        latitude: 29.681229,  
        longitude: -95.272865, 
        weight: 1, 
    },
    {
        latitude: 29.681229,  
        longitude: -95.272865, 
        weight: 1, 
    },
    {
        latitude: 29.702386,  
        longitude: -95.288867, 
        weight: 1, 
    },
    {
        latitude: 29.702386,  
        longitude: -95.288867, 
        weight: 1, 
    },
    {
        latitude: 29.708322,  
        longitude: -95.521333, 
        weight: 1, 
    },
    {
        latitude: 29.712781,  
        longitude: -95.487117, 
        weight: 1, 
    },
    {
        latitude: 29.712781,  
        longitude: -95.487117, 
        weight: 1, 
    },
    {
        latitude: 29.712781,  
        longitude: -95.487117, 
        weight: 1, 
    },
    {
        latitude: 29.728678,  
        longitude: -95.58013, 
        weight: 1, 
    },
    {
        latitude: 29.68901,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.850898,  
        longitude: -95.473568, 
        weight: 1, 
    },
    {
        latitude: 29.610033,  
        longitude: -95.43872, 
        weight: 1, 
    },
    {
        latitude: 29.65862,  
        longitude: -95.330049, 
        weight: 1, 
    },
    {
        latitude: 29.613482,  
        longitude: -95.435242, 
        weight: 1, 
    },
    {
        latitude: 29.613482,  
        longitude: -95.435242, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.761184,  
        longitude: -95.348897, 
        weight: 1, 
    },
    {
        latitude: 29.761184,  
        longitude: -95.348897, 
        weight: 1, 
    },
    {
        latitude: 29.737737,  
        longitude: -95.484296, 
        weight: 1, 
    },
    {
        latitude: 29.658946,  
        longitude: -95.569817, 
        weight: 1, 
    },
    {
        latitude: 29.731027,  
        longitude: -95.41631, 
        weight: 1, 
    },
    {
        latitude: 29.67229,  
        longitude: -95.588968, 
        weight: 1, 
    },
    {
        latitude: 29.754522,  
        longitude: -95.380629, 
        weight: 1, 
    },
    {
        latitude: 30.058256,  
        longitude: -95.252869, 
        weight: 1, 
    },
    {
        latitude: 29.804742,  
        longitude: -95.414251, 
        weight: 1, 
    },
    {
        latitude: 30.053733,  
        longitude: -95.251848, 
        weight: 1, 
    },
    {
        latitude: 29.657763,  
        longitude: -95.386175, 
        weight: 1, 
    },
    {
        latitude: 29.645745,  
        longitude: -95.530467, 
        weight: 1, 
    },
    {
        latitude: 29.556776,  
        longitude: -95.140379, 
        weight: 1, 
    },
    {
        latitude: 29.845671,  
        longitude: -95.371755, 
        weight: 1, 
    },
    {
        latitude: 29.950672,  
        longitude: -95.392773, 
        weight: 1, 
    },
    {
        latitude: 29.705016,  
        longitude: -95.583159, 
        weight: 1, 
    },
    {
        latitude: 29.705016,  
        longitude: -95.583159, 
        weight: 1, 
    },
    {
        latitude: 29.731408,  
        longitude: -95.620477, 
        weight: 1, 
    },
    {
        latitude: 29.735893,  
        longitude: -95.620605, 
        weight: 1, 
    },
    {
        latitude: 29.779987,  
        longitude: -95.399867, 
        weight: 1, 
    },
    {
        latitude: 29.780349,  
        longitude: -95.399876, 
        weight: 1, 
    },
    {
        latitude: 29.800251,  
        longitude: -95.334575, 
        weight: 1, 
    },
    {
        latitude: 29.756567,  
        longitude: -95.408395, 
        weight: 1, 
    },
    {
        latitude: 29.803423,  
        longitude: -95.361047, 
        weight: 1, 
    },
    {
        latitude: 29.694273,  
        longitude: -95.293231, 
        weight: 1, 
    },
    {
        latitude: 29.832522,  
        longitude: -95.545289, 
        weight: 1, 
    },
    {
        latitude: 29.708956,  
        longitude: -95.538826, 
        weight: 1, 
    },
    {
        latitude: 29.716066,  
        longitude: -95.545246, 
        weight: 1, 
    },
    {
        latitude: 29.690936,  
        longitude: -95.3661, 
        weight: 1, 
    },
    {
        latitude: 29.748585,  
        longitude: -95.376647, 
        weight: 1, 
    },
    {
        latitude: 29.69022,  
        longitude: -95.513152, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.796668,  
        longitude: -95.410018, 
        weight: 1, 
    },
    {
        latitude: 29.790792,  
        longitude: -95.565113, 
        weight: 1, 
    },
    {
        latitude: 29.71969,  
        longitude: -95.496345, 
        weight: 1, 
    },
    {
        latitude: 29.796668,  
        longitude: -95.410018, 
        weight: 1, 
    },
    {
        latitude: 29.947656,  
        longitude: -95.331818, 
        weight: 1, 
    },
    {
        latitude: 29.735419,  
        longitude: -95.46543, 
        weight: 1, 
    },
    {
        latitude: 29.706206,  
        longitude: -95.413257, 
        weight: 1, 
    },
    {
        latitude: 30.07042,  
        longitude: -95.200445, 
        weight: 1, 
    },
    {
        latitude: 29.667629,  
        longitude: -95.532385, 
        weight: 1, 
    },
    {
        latitude: 29.735208,  
        longitude: -95.296543, 
        weight: 1, 
    },
    {
        latitude: 29.815724,  
        longitude: -95.475387, 
        weight: 1, 
    },
    {
        latitude: 29.846224,  
        longitude: -95.346658, 
        weight: 1, 
    },
    {
        latitude: 29.701195,  
        longitude: -95.359512, 
        weight: 1, 
    },
    {
        latitude: 29.711122,  
        longitude: -95.538877, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.702741,  
        longitude: -95.332118, 
        weight: 1, 
    },
    {
        latitude: 29.702741,  
        longitude: -95.332118, 
        weight: 1, 
    },
    {
        latitude: 29.708794,  
        longitude: -95.5604, 
        weight: 1, 
    },
    {
        latitude: 29.850107,  
        longitude: -95.418889, 
        weight: 1, 
    },
    {
        latitude: 29.607173,  
        longitude: -95.212084, 
        weight: 1, 
    },
    {
        latitude: 29.649623,  
        longitude: -95.337978, 
        weight: 1, 
    },
    {
        latitude: 29.746695,  
        longitude: -95.358937, 
        weight: 1, 
    },
    {
        latitude: 29.555374,  
        longitude: -95.119453, 
        weight: 1, 
    },
    {
        latitude: 29.867258,  
        longitude: -95.565603, 
        weight: 1, 
    },
    {
        latitude: 29.950475,  
        longitude: -95.403973, 
        weight: 1, 
    },
    {
        latitude: 29.670856,  
        longitude: -95.461348, 
        weight: 1, 
    },
    {
        latitude: 29.738928,  
        longitude: -95.254841, 
        weight: 1, 
    },
    {
        latitude: 29.741163,  
        longitude: -95.517248, 
        weight: 1, 
    },
    {
        latitude: 29.835281,  
        longitude: -95.371511, 
        weight: 1, 
    },
    {
        latitude: 29.619843,  
        longitude: -95.349648, 
        weight: 1, 
    },
    {
        latitude: 29.667629,  
        longitude: -95.532385, 
        weight: 1, 
    },
    {
        latitude: 29.915196,  
        longitude: -95.412162, 
        weight: 1, 
    },
    {
        latitude: 29.826207,  
        longitude: -95.367664, 
        weight: 1, 
    },
    {
        latitude: 29.748027,  
        longitude: -95.334322, 
        weight: 1, 
    },
    {
        latitude: 29.649476,  
        longitude: -95.496262, 
        weight: 1, 
    },
    {
        latitude: 29.86103,  
        longitude: -95.34312, 
        weight: 1, 
    },
    {
        latitude: 29.68696,  
        longitude: -95.370847, 
        weight: 1, 
    },
    {
        latitude: 29.784891,  
        longitude: -95.583553, 
        weight: 1, 
    },
    {
        latitude: 29.675072,  
        longitude: -95.424646, 
        weight: 1, 
    },
    {
        latitude: 29.771199,  
        longitude: -95.213817, 
        weight: 1, 
    },
    {
        latitude: 29.741887,  
        longitude: -95.314984, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.744582,  
        longitude: -95.391259, 
        weight: 1, 
    },
    {
        latitude: 29.757707,  
        longitude: -95.284972, 
        weight: 1, 
    },
    {
        latitude: 29.757707,  
        longitude: -95.284972, 
        weight: 1, 
    },
    {
        latitude: 29.770634,  
        longitude: -95.327537, 
        weight: 1, 
    },
    {
        latitude: 29.857752,  
        longitude: -95.299122, 
        weight: 1, 
    },
    {
        latitude: 29.857752,  
        longitude: -95.299122, 
        weight: 1, 
    },
    {
        latitude: 29.685953,  
        longitude: -95.505144, 
        weight: 1, 
    },
    {
        latitude: 29.74032,  
        longitude: -95.334088, 
        weight: 1, 
    },
    {
        latitude: 29.636486,  
        longitude: -95.235996, 
        weight: 1, 
    },
    {
        latitude: 29.661948,  
        longitude: -95.581653, 
        weight: 1, 
    },
    {
        latitude: 29.934013,  
        longitude: -95.303161, 
        weight: 1, 
    },
    {
        latitude: 29.96199,  
        longitude: -95.5571, 
        weight: 1, 
    },
    {
        latitude: 30.058256,  
        longitude: -95.252869, 
        weight: 1, 
    },
    {
        latitude: 29.678967,  
        longitude: -95.482122, 
        weight: 1, 
    },
    {
        latitude: 29.77803,  
        longitude: -95.332232, 
        weight: 1, 
    },
    {
        latitude: 29.778084,  
        longitude: -95.391761, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.4515, 
        weight: 1, 
    },
    {
        latitude: 29.652145,  
        longitude: -95.254711, 
        weight: 1, 
    },
    {
        latitude: 29.656072,  
        longitude: -95.503407, 
        weight: 1, 
    },
    {
        latitude: 29.656072,  
        longitude: -95.503407, 
        weight: 1, 
    },
    {
        latitude: 29.689482,  
        longitude: -95.325222, 
        weight: 1, 
    },
    {
        latitude: 29.813591,  
        longitude: -95.362277, 
        weight: 1, 
    },
    {
        latitude: 29.730938,  
        longitude: -95.387489, 
        weight: 1, 
    },
    {
        latitude: 29.730938,  
        longitude: -95.387489, 
        weight: 1, 
    },
    {
        latitude: 29.72004,  
        longitude: -95.485215, 
        weight: 1, 
    },
    {
        latitude: 29.680057,  
        longitude: -95.393881, 
        weight: 1, 
    },
    {
        latitude: 29.680057,  
        longitude: -95.393881, 
        weight: 1, 
    },
    {
        latitude: 29.680057,  
        longitude: -95.393881, 
        weight: 1, 
    },
    {
        latitude: 29.680057,  
        longitude: -95.393881, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.683844,  
        longitude: -95.3438, 
        weight: 1, 
    },
    {
        latitude: 29.774156,  
        longitude: -95.592553, 
        weight: 1, 
    },
    {
        latitude: 29.849812,  
        longitude: -95.279327, 
        weight: 1, 
    },
    {
        latitude: 29.951108,  
        longitude: -95.358378, 
        weight: 1, 
    },
    {
        latitude: 29.732701,  
        longitude: -95.437871, 
        weight: 1, 
    },
    {
        latitude: 29.764223,  
        longitude: -95.213135, 
        weight: 1, 
    },
    {
        latitude: 29.701145,  
        longitude: -95.303253, 
        weight: 1, 
    },
    {
        latitude: 29.717333,  
        longitude: -95.292792, 
        weight: 1, 
    },
    {
        latitude: 29.77934,  
        longitude: -95.218572, 
        weight: 1, 
    },
    {
        latitude: 29.749013,  
        longitude: -95.357238, 
        weight: 1, 
    },
    {
        latitude: 29.863587,  
        longitude: -95.390908, 
        weight: 1, 
    },
    {
        latitude: 29.967811,  
        longitude: -95.430564, 
        weight: 1, 
    },
    {
        latitude: 29.931802,  
        longitude: -95.396935, 
        weight: 1, 
    },
    {
        latitude: 29.739246,  
        longitude: -95.559855, 
        weight: 1, 
    },
    {
        latitude: 29.739246,  
        longitude: -95.559855, 
        weight: 1, 
    },
    {
        latitude: 29.727756,  
        longitude: -95.441283, 
        weight: 1, 
    },
    {
        latitude: 29.959174,  
        longitude: -95.563917, 
        weight: 1, 
    },
    {
        latitude: 29.684581,  
        longitude: -95.338609, 
        weight: 1, 
    },
    {
        latitude: 29.684581,  
        longitude: -95.338609, 
        weight: 1, 
    },
    {
        latitude: 29.728434,  
        longitude: -95.365805, 
        weight: 1, 
    },
    {
        latitude: 29.780453,  
        longitude: -95.398762, 
        weight: 1, 
    },
    {
        latitude: 29.789136,  
        longitude: -95.653169, 
        weight: 1, 
    },
    {
        latitude: 29.675869,  
        longitude: -95.484356, 
        weight: 1, 
    },
    {
        latitude: 29.821937,  
        longitude: -95.527758, 
        weight: 1, 
    },
    {
        latitude: 29.674347,  
        longitude: -95.244421, 
        weight: 1, 
    },
    {
        latitude: 29.733601,  
        longitude: -95.382118, 
        weight: 1, 
    },
    {
        latitude: 29.700456,  
        longitude: -95.565091, 
        weight: 1, 
    },
    {
        latitude: 29.700219,  
        longitude: -95.609595, 
        weight: 1, 
    },
    {
        latitude: 29.700219,  
        longitude: -95.609595, 
        weight: 1, 
    },
    {
        latitude: 29.733856,  
        longitude: -95.501219, 
        weight: 1, 
    },
    {
        latitude: 29.738589,  
        longitude: -95.38106, 
        weight: 1, 
    },
    {
        latitude: 29.715078,  
        longitude: -95.381409, 
        weight: 1, 
    },
    {
        latitude: 29.832522,  
        longitude: -95.545289, 
        weight: 1, 
    },
    {
        latitude: 29.734773,  
        longitude: -95.363484, 
        weight: 1, 
    },
    {
        latitude: 29.735828,  
        longitude: -95.515682, 
        weight: 1, 
    },
    {
        latitude: 29.667122,  
        longitude: -95.313152, 
        weight: 1, 
    },
    {
        latitude: 29.833851,  
        longitude: -95.386354, 
        weight: 1, 
    },
    {
        latitude: 29.719998,  
        longitude: -95.490302, 
        weight: 1, 
    },
    {
        latitude: 29.857654,  
        longitude: -95.299014, 
        weight: 1, 
    },
    {
        latitude: 29.857654,  
        longitude: -95.299014, 
        weight: 1, 
    },
    {
        latitude: 29.857654,  
        longitude: -95.299014, 
        weight: 1, 
    },
    {
        latitude: 29.80498,  
        longitude: -95.484884, 
        weight: 1, 
    },
    {
        latitude: 29.937396,  
        longitude: -95.313483, 
        weight: 1, 
    },
    {
        latitude: 29.859631,  
        longitude: -95.399501, 
        weight: 1, 
    },
    {
        latitude: 29.796133,  
        longitude: -95.530024, 
        weight: 1, 
    },
    {
        latitude: 29.796133,  
        longitude: -95.530024, 
        weight: 1, 
    },
    {
        latitude: 29.698149,  
        longitude: -95.306167, 
        weight: 1, 
    },
    {
        latitude: 29.71537,  
        longitude: -95.500141, 
        weight: 1, 
    },
    {
        latitude: 29.847052,  
        longitude: -95.462934, 
        weight: 1, 
    },
    {
        latitude: 29.821058,  
        longitude: -95.514853, 
        weight: 1, 
    },
    {
        latitude: 29.731312,  
        longitude: -95.372581, 
        weight: 1, 
    },
    {
        latitude: 29.779701,  
        longitude: -95.218579, 
        weight: 1, 
    },
    {
        latitude: 29.743815,  
        longitude: -95.450062, 
        weight: 1, 
    },
    {
        latitude: 29.64351,  
        longitude: -95.24867, 
        weight: 1, 
    },
    {
        latitude: 29.854882,  
        longitude: -95.401951, 
        weight: 1, 
    },
    {
        latitude: 29.663495,  
        longitude: -95.508523, 
        weight: 1, 
    },
    {
        latitude: 29.684228,  
        longitude: -95.422556, 
        weight: 1, 
    },
    {
        latitude: 29.82761,  
        longitude: -95.367261, 
        weight: 1, 
    },
    {
        latitude: 29.631899,  
        longitude: -95.347702, 
        weight: 1, 
    },
    {
        latitude: 29.789453,  
        longitude: -95.688335, 
        weight: 1, 
    },
    {
        latitude: 29.846446,  
        longitude: -95.424911, 
        weight: 1, 
    },
    {
        latitude: 29.846446,  
        longitude: -95.424911, 
        weight: 1, 
    },
    {
        latitude: 29.827306,  
        longitude: -95.328753, 
        weight: 1, 
    },
    {
        latitude: 29.667129,  
        longitude: -95.595071, 
        weight: 1, 
    },
    {
        latitude: 29.627416,  
        longitude: -95.443926, 
        weight: 1, 
    },
    {
        latitude: 29.740663,  
        longitude: -95.587665, 
        weight: 1, 
    },
    {
        latitude: 29.837944,  
        longitude: -95.387416, 
        weight: 1, 
    },
    {
        latitude: 29.741586,  
        longitude: -95.449129, 
        weight: 1, 
    },
    {
        latitude: 29.938598,  
        longitude: -95.36598, 
        weight: 1, 
    },
    {
        latitude: 29.687132,  
        longitude: -95.379907, 
        weight: 1, 
    },
    {
        latitude: 29.687132,  
        longitude: -95.379907, 
        weight: 1, 
    },
    {
        latitude: 29.815202,  
        longitude: -95.203631, 
        weight: 1, 
    },
    {
        latitude: 29.594916,  
        longitude: -95.465475, 
        weight: 1, 
    },
    {
        latitude: 29.680298,  
        longitude: -95.431748, 
        weight: 1, 
    },
    {
        latitude: 29.806012,  
        longitude: -95.398731, 
        weight: 1, 
    },
    {
        latitude: 29.860462,  
        longitude: -95.376345, 
        weight: 1, 
    },
    {
        latitude: 29.774557,  
        longitude: -95.46686, 
        weight: 1, 
    },
    {
        latitude: 29.836992,  
        longitude: -95.34519, 
        weight: 1, 
    },
    {
        latitude: 29.836992,  
        longitude: -95.34519, 
        weight: 1, 
    },
    {
        latitude: 30.085071,  
        longitude: -95.186425, 
        weight: 1, 
    },
    {
        latitude: 30.037853,  
        longitude: -95.222622, 
        weight: 1, 
    },
    {
        latitude: 29.804133,  
        longitude: -95.335088, 
        weight: 1, 
    },
    {
        latitude: 29.746333,  
        longitude: -95.613233, 
        weight: 1, 
    },
    {
        latitude: 29.746333,  
        longitude: -95.613233, 
        weight: 1, 
    },
    {
        latitude: 29.746333,  
        longitude: -95.613233, 
        weight: 1, 
    },
    {
        latitude: 29.746333,  
        longitude: -95.613233, 
        weight: 1, 
    },
    {
        latitude: 29.802907,  
        longitude: -95.402122, 
        weight: 1, 
    },
    {
        latitude: 29.745093,  
        longitude: -95.269104, 
        weight: 1, 
    },
    {
        latitude: 29.824093,  
        longitude: -95.362522, 
        weight: 1, 
    },
    {
        latitude: 29.682792,  
        longitude: -95.367269, 
        weight: 1, 
    },
    {
        latitude: 29.765089,  
        longitude: -95.271945, 
        weight: 1, 
    },
    {
        latitude: 29.732616,  
        longitude: -95.571693, 
        weight: 1, 
    },
    {
        latitude: 29.685553,  
        longitude: -95.278252, 
        weight: 1, 
    },
    {
        latitude: 29.6337,  
        longitude: -95.416084, 
        weight: 1, 
    },
    {
        latitude: 29.828159,  
        longitude: -95.330118, 
        weight: 1, 
    },
    {
        latitude: 29.828159,  
        longitude: -95.330118, 
        weight: 1, 
    },
    {
        latitude: 29.778039,  
        longitude: -95.294496, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.746645,  
        longitude: -95.461144, 
        weight: 1, 
    },
    {
        latitude: 29.732669,  
        longitude: -95.41867, 
        weight: 1, 
    },
    {
        latitude: 29.857463,  
        longitude: -95.526097, 
        weight: 1, 
    },
    {
        latitude: 29.827295,  
        longitude: -95.481975, 
        weight: 1, 
    },
    {
        latitude: 29.752973,  
        longitude: -95.358352, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.807174,  
        longitude: -95.485897, 
        weight: 1, 
    },
    {
        latitude: 29.753567,  
        longitude: -95.36502, 
        weight: 1, 
    },
    {
        latitude: 29.674863,  
        longitude: -95.289351, 
        weight: 1, 
    },
    {
        latitude: 29.674863,  
        longitude: -95.289351, 
        weight: 1, 
    },
    {
        latitude: 29.684228,  
        longitude: -95.422556, 
        weight: 1, 
    },
    {
        latitude: 29.77081,  
        longitude: -95.325322, 
        weight: 1, 
    },
    {
        latitude: 29.78179,  
        longitude: -95.536032, 
        weight: 1, 
    },
    {
        latitude: 29.78179,  
        longitude: -95.536032, 
        weight: 1, 
    },
    {
        latitude: 29.689867,  
        longitude: -95.417675, 
        weight: 1, 
    },
    {
        latitude: 29.677888,  
        longitude: -95.424502, 
        weight: 1, 
    },
    {
        latitude: 29.714065,  
        longitude: -95.314364, 
        weight: 1, 
    },
    {
        latitude: 29.730415,  
        longitude: -95.474863, 
        weight: 1, 
    },
    {
        latitude: 29.870121,  
        longitude: -95.435923, 
        weight: 1, 
    },
    {
        latitude: 29.705177,  
        longitude: -95.516878, 
        weight: 1, 
    },
    {
        latitude: 29.957291,  
        longitude: -95.551597, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.4515, 
        weight: 1, 
    },
    {
        latitude: 29.841338,  
        longitude: -95.504413, 
        weight: 1, 
    },
    {
        latitude: 29.808749,  
        longitude: -95.419214, 
        weight: 1, 
    },
    {
        latitude: 29.863445,  
        longitude: -95.409555, 
        weight: 1, 
    },
    {
        latitude: 29.677089,  
        longitude: -95.425744, 
        weight: 1, 
    },
    {
        latitude: 29.658782,  
        longitude: -95.255049, 
        weight: 1, 
    },
    {
        latitude: 29.759638,  
        longitude: -95.360084, 
        weight: 1, 
    },
    {
        latitude: 29.676994,  
        longitude: -95.480353, 
        weight: 1, 
    },
    {
        latitude: 29.657626,  
        longitude: -95.466348, 
        weight: 1, 
    },
    {
        latitude: 29.738222,  
        longitude: -95.35983, 
        weight: 1, 
    },
    {
        latitude: 29.646108,  
        longitude: -95.355839, 
        weight: 1, 
    },
    {
        latitude: 29.738756,  
        longitude: -95.507669, 
        weight: 1, 
    },
    {
        latitude: 29.738457,  
        longitude: -95.517128, 
        weight: 1, 
    },
    {
        latitude: 29.676079,  
        longitude: -95.267313, 
        weight: 1, 
    },
    {
        latitude: 29.676079,  
        longitude: -95.267313, 
        weight: 1, 
    },
    {
        latitude: 29.687044,  
        longitude: -95.440588, 
        weight: 1, 
    },
    {
        latitude: 29.866719,  
        longitude: -95.336277, 
        weight: 1, 
    },
    {
        latitude: 29.776014,  
        longitude: -95.564492, 
        weight: 1, 
    },
    {
        latitude: 29.694273,  
        longitude: -95.529297, 
        weight: 1, 
    },
    {
        latitude: 29.729356,  
        longitude: -95.476392, 
        weight: 1, 
    },
    {
        latitude: 29.729356,  
        longitude: -95.476392, 
        weight: 1, 
    },
    {
        latitude: 29.689346,  
        longitude: -95.51422, 
        weight: 1, 
    },
    {
        latitude: 29.871915,  
        longitude: -95.484433, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.731526,  
        longitude: -95.479152, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.651859,  
        longitude: -95.372881, 
        weight: 1, 
    },
    {
        latitude: 29.6613,  
        longitude: -95.276808, 
        weight: 1, 
    },
    {
        latitude: 29.6613,  
        longitude: -95.276808, 
        weight: 1, 
    },
    {
        latitude: 29.711951,  
        longitude: -95.27992, 
        weight: 1, 
    },
    {
        latitude: 29.711951,  
        longitude: -95.27992, 
        weight: 1, 
    },
    {
        latitude: 29.850223,  
        longitude: -95.545096, 
        weight: 1, 
    },
    {
        latitude: 29.797805,  
        longitude: -95.270827, 
        weight: 1, 
    },
    {
        latitude: 29.805484,  
        longitude: -95.305853, 
        weight: 1, 
    },
    {
        latitude: 29.73995,  
        longitude: -95.588659, 
        weight: 1, 
    },
    {
        latitude: 29.805484,  
        longitude: -95.305853, 
        weight: 1, 
    },
    {
        latitude: 29.81405,  
        longitude: -95.461691, 
        weight: 1, 
    },
    {
        latitude: 29.940066,  
        longitude: -95.331277, 
        weight: 1, 
    },
    {
        latitude: 29.736707,  
        longitude: -95.310787, 
        weight: 1, 
    },
    {
        latitude: 29.736707,  
        longitude: -95.310787, 
        weight: 1, 
    },
    {
        latitude: 29.792942,  
        longitude: -95.579584, 
        weight: 1, 
    },
    {
        latitude: 29.698006,  
        longitude: -95.604433, 
        weight: 1, 
    },
    {
        latitude: 29.743087,  
        longitude: -95.629744, 
        weight: 1, 
    },
    {
        latitude: 29.859664,  
        longitude: -95.389102, 
        weight: 1, 
    },
    {
        latitude: 29.968462,  
        longitude: -95.533562, 
        weight: 1, 
    },
    {
        latitude: 29.954936,  
        longitude: -95.535277, 
        weight: 1, 
    },
    {
        latitude: 29.93975,  
        longitude: -95.295257, 
        weight: 1, 
    },
    {
        latitude: 29.93975,  
        longitude: -95.295257, 
        weight: 1, 
    },
    {
        latitude: 29.802963,  
        longitude: -95.325884, 
        weight: 1, 
    },
    {
        latitude: 29.742002,  
        longitude: -95.630479, 
        weight: 1, 
    },
    {
        latitude: 29.714247,  
        longitude: -95.556748, 
        weight: 1, 
    },
    {
        latitude: 29.744327,  
        longitude: -95.457828, 
        weight: 1, 
    },
    {
        latitude: 29.931797,  
        longitude: -95.414726, 
        weight: 1, 
    },
    {
        latitude: 29.750296,  
        longitude: -95.561314, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.840459,  
        longitude: -95.490792, 
        weight: 1, 
    },
    {
        latitude: 29.82764,  
        longitude: -95.458115, 
        weight: 1, 
    },
    {
        latitude: 29.740883,  
        longitude: -95.532771, 
        weight: 1, 
    },
    {
        latitude: 29.74024,  
        longitude: -95.510786, 
        weight: 1, 
    },
    {
        latitude: 29.753723,  
        longitude: -95.355914, 
        weight: 1, 
    },
    {
        latitude: 29.783515,  
        longitude: -95.342532, 
        weight: 1, 
    },
    {
        latitude: 29.817379,  
        longitude: -95.384342, 
        weight: 1, 
    },
    {
        latitude: 29.754851,  
        longitude: -95.365285, 
        weight: 1, 
    },
    {
        latitude: 29.708322,  
        longitude: -95.521333, 
        weight: 1, 
    },
    {
        latitude: 29.841661,  
        longitude: -95.475282, 
        weight: 1, 
    },
    {
        latitude: 29.785846,  
        longitude: -95.277936, 
        weight: 1, 
    },
    {
        latitude: 29.785846,  
        longitude: -95.277936, 
        weight: 1, 
    },
    {
        latitude: 29.60203,  
        longitude: -95.21368, 
        weight: 1, 
    },
    {
        latitude: 29.665435,  
        longitude: -95.337097, 
        weight: 1, 
    },
    {
        latitude: 29.713604,  
        longitude: -95.493097, 
        weight: 1, 
    },
    {
        latitude: 29.821771,  
        longitude: -95.382482, 
        weight: 1, 
    },
    {
        latitude: 29.560566,  
        longitude: -95.125634, 
        weight: 1, 
    },
    {
        latitude: 29.862338,  
        longitude: -95.317853, 
        weight: 1, 
    },
    {
        latitude: 29.824065,  
        longitude: -95.522632, 
        weight: 1, 
    },
    {
        latitude: 29.757026,  
        longitude: -95.277478, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.711732,  
        longitude: -95.309577, 
        weight: 1, 
    },
    {
        latitude: 29.783038,  
        longitude: -95.330985, 
        weight: 1, 
    },
    {
        latitude: 29.950274,  
        longitude: -95.308683, 
        weight: 1, 
    },
    {
        latitude: 29.68568,  
        longitude: -95.296644, 
        weight: 1, 
    },
    {
        latitude: 29.810784,  
        longitude: -95.240549, 
        weight: 1, 
    },
    {
        latitude: 29.773155,  
        longitude: -95.354608, 
        weight: 1, 
    },
    {
        latitude: 29.777943,  
        longitude: -95.186693, 
        weight: 1, 
    },
    {
        latitude: 29.65619,  
        longitude: -95.508429, 
        weight: 1, 
    },
    {
        latitude: 29.799169,  
        longitude: -95.503958, 
        weight: 1, 
    },
    {
        latitude: 29.799169,  
        longitude: -95.503958, 
        weight: 1, 
    },
    {
        latitude: 29.946082,  
        longitude: -95.439826, 
        weight: 1, 
    },
    {
        latitude: 29.879986,  
        longitude: -95.446107, 
        weight: 1, 
    },
    {
        latitude: 29.663305,  
        longitude: -95.532907, 
        weight: 1, 
    },
    {
        latitude: 29.72991,  
        longitude: -95.575791, 
        weight: 1, 
    },
    {
        latitude: 29.750249,  
        longitude: -95.450662, 
        weight: 1, 
    },
    {
        latitude: 29.858616,  
        longitude: -95.50498, 
        weight: 1, 
    },
    {
        latitude: 29.968069,  
        longitude: -95.335375, 
        weight: 1, 
    },
    {
        latitude: 29.821771,  
        longitude: -95.382482, 
        weight: 1, 
    },
    {
        latitude: 29.714247,  
        longitude: -95.556748, 
        weight: 1, 
    },
    {
        latitude: 29.731743,  
        longitude: -95.464319, 
        weight: 1, 
    },
    {
        latitude: 29.812036,  
        longitude: -95.286575, 
        weight: 1, 
    },
    {
        latitude: 29.727633,  
        longitude: -95.555965, 
        weight: 1, 
    },
    {
        latitude: 29.806429,  
        longitude: -95.299135, 
        weight: 1, 
    },
    {
        latitude: 29.703876,  
        longitude: -95.57463, 
        weight: 1, 
    },
    {
        latitude: 29.863462,  
        longitude: -95.457856, 
        weight: 1, 
    },
    {
        latitude: 29.863462,  
        longitude: -95.457856, 
        weight: 1, 
    },
    {
        latitude: 29.740177,  
        longitude: -95.359068, 
        weight: 1, 
    },
    {
        latitude: 29.740177,  
        longitude: -95.359068, 
        weight: 1, 
    },
    {
        latitude: 29.814129,  
        longitude: -95.387037, 
        weight: 1, 
    },
    {
        latitude: 29.808891,  
        longitude: -95.267573, 
        weight: 1, 
    },
    {
        latitude: 29.856542,  
        longitude: -95.300491, 
        weight: 1, 
    },
    {
        latitude: 29.856542,  
        longitude: -95.300491, 
        weight: 1, 
    },
    {
        latitude: 29.859631,  
        longitude: -95.399501, 
        weight: 1, 
    },
    {
        latitude: 29.702089,  
        longitude: -95.516203, 
        weight: 1, 
    },
    {
        latitude: 29.663495,  
        longitude: -95.508523, 
        weight: 1, 
    },
    {
        latitude: 29.67824,  
        longitude: -95.415055, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.682263,  
        longitude: -95.567416, 
        weight: 1, 
    },
    {
        latitude: 29.673211,  
        longitude: -95.448938, 
        weight: 1, 
    },
    {
        latitude: 29.711586,  
        longitude: -95.611572, 
        weight: 1, 
    },
    {
        latitude: 29.646909,  
        longitude: -95.233555, 
        weight: 1, 
    },
    {
        latitude: 29.854514,  
        longitude: -95.30168, 
        weight: 1, 
    },
    {
        latitude: 29.787223,  
        longitude: -95.409799, 
        weight: 1, 
    },
    {
        latitude: 29.7762,  
        longitude: -95.618528, 
        weight: 1, 
    },
    {
        latitude: 29.748079,  
        longitude: -95.366689, 
        weight: 1, 
    },
    {
        latitude: 29.784893,  
        longitude: -95.332664, 
        weight: 1, 
    },
    {
        latitude: 29.801558,  
        longitude: -95.210459, 
        weight: 1, 
    },
    {
        latitude: 29.939371,  
        longitude: -95.395969, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495205, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495205, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495205, 
        weight: 1, 
    },
    {
        latitude: 29.705466,  
        longitude: -95.515001, 
        weight: 1, 
    },
    {
        latitude: 29.705466,  
        longitude: -95.515001, 
        weight: 1, 
    },
    {
        latitude: 29.677496,  
        longitude: -95.556314, 
        weight: 1, 
    },
    {
        latitude: 29.71814,  
        longitude: -95.616507, 
        weight: 1, 
    },
    {
        latitude: 29.825632,  
        longitude: -95.287056, 
        weight: 1, 
    },
    {
        latitude: 29.81625,  
        longitude: -95.269802, 
        weight: 1, 
    },
    {
        latitude: 29.802001,  
        longitude: -95.549338, 
        weight: 1, 
    },
    {
        latitude: 29.802001,  
        longitude: -95.549338, 
        weight: 1, 
    },
    {
        latitude: 29.802001,  
        longitude: -95.549338, 
        weight: 1, 
    },
    {
        latitude: 29.679375,  
        longitude: -95.286402, 
        weight: 1, 
    },
    {
        latitude: 29.692492,  
        longitude: -95.567808, 
        weight: 1, 
    },
    {
        latitude: 29.714154,  
        longitude: -95.315771, 
        weight: 1, 
    },
    {
        latitude: 29.803867,  
        longitude: -95.406193, 
        weight: 1, 
    },
    {
        latitude: 29.789538,  
        longitude: -95.396386, 
        weight: 1, 
    },
    {
        latitude: 29.803225,  
        longitude: -95.317003, 
        weight: 1, 
    },
    {
        latitude: 29.789384,  
        longitude: -95.568032, 
        weight: 1, 
    },
    {
        latitude: 29.732851,  
        longitude: -95.480377, 
        weight: 1, 
    },
    {
        latitude: 29.720262,  
        longitude: -95.277083, 
        weight: 1, 
    },
    {
        latitude: 29.854896,  
        longitude: -95.39634, 
        weight: 1, 
    },
    {
        latitude: 29.73719,  
        longitude: -95.531451, 
        weight: 1, 
    },
    {
        latitude: 29.732925,  
        longitude: -95.495993, 
        weight: 1, 
    },
    {
        latitude: 29.73979,  
        longitude: -95.285921, 
        weight: 1, 
    },
    {
        latitude: 29.68894,  
        longitude: -95.60447, 
        weight: 1, 
    },
    {
        latitude: 29.706919,  
        longitude: -95.232952, 
        weight: 1, 
    },
    {
        latitude: 29.691678,  
        longitude: -95.571019, 
        weight: 1, 
    },
    {
        latitude: 29.748896,  
        longitude: -95.457725, 
        weight: 1, 
    },
    {
        latitude: 29.735691,  
        longitude: -95.636597, 
        weight: 1, 
    },
    {
        latitude: 29.767047,  
        longitude: -95.269363, 
        weight: 1, 
    },
    {
        latitude: 29.717722,  
        longitude: -95.522707, 
        weight: 1, 
    },
    {
        latitude: 29.862372,  
        longitude: -95.447933, 
        weight: 1, 
    },
    {
        latitude: 29.65797,  
        longitude: -95.381875, 
        weight: 1, 
    },
    {
        latitude: 29.656912,  
        longitude: -95.383703, 
        weight: 1, 
    },
    {
        latitude: 29.869887,  
        longitude: -95.408983, 
        weight: 1, 
    },
    {
        latitude: 29.613337,  
        longitude: -95.444917, 
        weight: 1, 
    },
    {
        latitude: 29.613337,  
        longitude: -95.444917, 
        weight: 1, 
    },
    {
        latitude: 29.817859,  
        longitude: -95.34461, 
        weight: 1, 
    },
    {
        latitude: 29.729912,  
        longitude: -95.382512, 
        weight: 1, 
    },
    {
        latitude: 29.818764,  
        longitude: -95.47374, 
        weight: 1, 
    },
    {
        latitude: 29.818764,  
        longitude: -95.47374, 
        weight: 1, 
    },
    {
        latitude: 29.749913,  
        longitude: -95.496604, 
        weight: 1, 
    },
    {
        latitude: 29.736222,  
        longitude: -95.514181, 
        weight: 1, 
    },
    {
        latitude: 29.669799,  
        longitude: -95.569825, 
        weight: 1, 
    },
    {
        latitude: 29.669799,  
        longitude: -95.569825, 
        weight: 1, 
    },
    {
        latitude: 29.651806,  
        longitude: -95.233139, 
        weight: 1, 
    },
    {
        latitude: 29.671448,  
        longitude: -95.530574, 
        weight: 1, 
    },
    {
        latitude: 30.077347,  
        longitude: -95.171647, 
        weight: 1, 
    },
    {
        latitude: 29.655314,  
        longitude: -95.253809, 
        weight: 1, 
    },
    {
        latitude: 29.948698,  
        longitude: -95.410273, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.537871, 
        weight: 1, 
    },
    {
        latitude: 29.728178,  
        longitude: -95.49485, 
        weight: 1, 
    },
    {
        latitude: 29.710907,  
        longitude: -95.284601, 
        weight: 1, 
    },
    {
        latitude: 29.737997,  
        longitude: -95.380055, 
        weight: 1, 
    },
    {
        latitude: 29.647312,  
        longitude: -95.521003, 
        weight: 1, 
    },
    {
        latitude: 29.692471,  
        longitude: -95.392182, 
        weight: 1, 
    },
    {
        latitude: 29.692471,  
        longitude: -95.392182, 
        weight: 1, 
    },
    {
        latitude: 29.675013,  
        longitude: -95.587266, 
        weight: 1, 
    },
    {
        latitude: 29.746492,  
        longitude: -95.360379, 
        weight: 1, 
    },
    {
        latitude: 29.697512,  
        longitude: -95.272834, 
        weight: 1, 
    },
    {
        latitude: 29.71153,  
        longitude: -95.493675, 
        weight: 1, 
    },
    {
        latitude: 29.766174,  
        longitude: -95.340616, 
        weight: 1, 
    },
    {
        latitude: 29.641928,  
        longitude: -95.423494, 
        weight: 1, 
    },
    {
        latitude: 29.737658,  
        longitude: -95.379506, 
        weight: 1, 
    },
    {
        latitude: 29.73895,  
        longitude: -95.605915, 
        weight: 1, 
    },
    {
        latitude: 29.856542,  
        longitude: -95.300491, 
        weight: 1, 
    },
    {
        latitude: 29.806081,  
        longitude: -95.352504, 
        weight: 1, 
    },
    {
        latitude: 29.806081,  
        longitude: -95.352504, 
        weight: 1, 
    },
    {
        latitude: 29.685032,  
        longitude: -95.508751, 
        weight: 1, 
    },
    {
        latitude: 29.732063,  
        longitude: -95.285604, 
        weight: 1, 
    },
    {
        latitude: 29.732063,  
        longitude: -95.285604, 
        weight: 1, 
    },
    {
        latitude: 29.730652,  
        longitude: -95.327199, 
        weight: 1, 
    },
    {
        latitude: 29.656067,  
        longitude: -95.503303, 
        weight: 1, 
    },
    {
        latitude: 29.656067,  
        longitude: -95.503303, 
        weight: 1, 
    },
    {
        latitude: 29.729322,  
        longitude: -95.511461, 
        weight: 1, 
    },
    {
        latitude: 29.732062,  
        longitude: -95.327703, 
        weight: 1, 
    },
    {
        latitude: 29.739574,  
        longitude: -95.256405, 
        weight: 1, 
    },
    {
        latitude: 29.797116,  
        longitude: -95.367702, 
        weight: 1, 
    },
    {
        latitude: 29.681079,  
        longitude: -95.476989, 
        weight: 1, 
    },
    {
        latitude: 29.787939,  
        longitude: -95.56015, 
        weight: 1, 
    },
    {
        latitude: 29.703561,  
        longitude: -95.557761, 
        weight: 1, 
    },
    {
        latitude: 29.78415,  
        longitude: -95.582329, 
        weight: 1, 
    },
    {
        latitude: 29.986072,  
        longitude: -95.350099, 
        weight: 1, 
    },
    {
        latitude: 29.814972,  
        longitude: -95.533774, 
        weight: 1, 
    },
    {
        latitude: 29.657843,  
        longitude: -95.278595, 
        weight: 1, 
    },
    {
        latitude: 29.798247,  
        longitude: -95.396546, 
        weight: 1, 
    },
    {
        latitude: 29.834507,  
        longitude: -95.341273, 
        weight: 1, 
    },
    {
        latitude: 29.834507,  
        longitude: -95.341273, 
        weight: 1, 
    },
    {
        latitude: 29.834507,  
        longitude: -95.341273, 
        weight: 1, 
    },
    {
        latitude: 29.730179,  
        longitude: -95.423167, 
        weight: 1, 
    },
    {
        latitude: 29.929631,  
        longitude: -95.413004, 
        weight: 1, 
    },
    {
        latitude: 29.753513,  
        longitude: -95.455069, 
        weight: 1, 
    },
    {
        latitude: 29.775761,  
        longitude: -95.220355, 
        weight: 1, 
    },
    {
        latitude: 29.728898,  
        longitude: -95.528684, 
        weight: 1, 
    },
    {
        latitude: 29.70155,  
        longitude: -95.544557, 
        weight: 1, 
    },
    {
        latitude: 29.644558,  
        longitude: -95.244, 
        weight: 1, 
    },
    {
        latitude: 29.731824,  
        longitude: -95.428612, 
        weight: 1, 
    },
    {
        latitude: 29.711781,  
        longitude: -95.560406, 
        weight: 1, 
    },
    {
        latitude: 29.82785,  
        longitude: -95.462077, 
        weight: 1, 
    },
    {
        latitude: 29.634683,  
        longitude: -95.467439, 
        weight: 1, 
    },
    {
        latitude: 29.731027,  
        longitude: -95.41631, 
        weight: 1, 
    },
    {
        latitude: 29.731526,  
        longitude: -95.479134, 
        weight: 1, 
    },
    {
        latitude: 30.03726,  
        longitude: -95.244746, 
        weight: 1, 
    },
    {
        latitude: 29.743758,  
        longitude: -95.450083, 
        weight: 1, 
    },
    {
        latitude: 29.6745,  
        longitude: -95.574823, 
        weight: 1, 
    },
    {
        latitude: 29.731511,  
        longitude: -95.472969, 
        weight: 1, 
    },
    {
        latitude: 29.738292,  
        longitude: -95.435203, 
        weight: 1, 
    },
    {
        latitude: 29.958335,  
        longitude: -95.419006, 
        weight: 1, 
    },
    {
        latitude: 29.653286,  
        longitude: -95.365976, 
        weight: 1, 
    },
    {
        latitude: 29.729347,  
        longitude: -95.376518, 
        weight: 1, 
    },
    {
        latitude: 29.732926,  
        longitude: -95.522788, 
        weight: 1, 
    },
    {
        latitude: 29.673592,  
        longitude: -95.336468, 
        weight: 1, 
    },
    {
        latitude: 29.677397,  
        longitude: -95.416786, 
        weight: 1, 
    },
    {
        latitude: 29.93441,  
        longitude: -95.41558, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508315, 
        weight: 1, 
    },
    {
        latitude: 29.695453,  
        longitude: -95.612055, 
        weight: 1, 
    },
    {
        latitude: 29.808254,  
        longitude: -95.45443, 
        weight: 1, 
    },
    {
        latitude: 29.724357,  
        longitude: -95.533409, 
        weight: 1, 
    },
    {
        latitude: 29.810284,  
        longitude: -95.35653, 
        weight: 1, 
    },
    {
        latitude: 29.737794,  
        longitude: -95.5609, 
        weight: 1, 
    },
    {
        latitude: 29.796071,  
        longitude: -95.484894, 
        weight: 1, 
    },
    {
        latitude: 29.84628,  
        longitude: -95.499081, 
        weight: 1, 
    },
    {
        latitude: 29.815944,  
        longitude: -95.532819, 
        weight: 1, 
    },
    {
        latitude: 29.695215,  
        longitude: -95.492224, 
        weight: 1, 
    },
    {
        latitude: 29.666809,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.666809,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.698939,  
        longitude: -95.423137, 
        weight: 1, 
    },
    {
        latitude: 29.799299,  
        longitude: -95.518257, 
        weight: 1, 
    },
    {
        latitude: 29.727634,  
        longitude: -95.558236, 
        weight: 1, 
    },
    {
        latitude: 29.689714,  
        longitude: -95.503052, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.592686,  
        longitude: -95.474321, 
        weight: 1, 
    },
    {
        latitude: 29.772865,  
        longitude: -95.182819, 
        weight: 1, 
    },
    {
        latitude: 29.772865,  
        longitude: -95.182819, 
        weight: 1, 
    },
    {
        latitude: 29.632393,  
        longitude: -95.502073, 
        weight: 1, 
    },
    {
        latitude: 29.632393,  
        longitude: -95.502073, 
        weight: 1, 
    },
    {
        latitude: 29.879126,  
        longitude: -95.283793, 
        weight: 1, 
    },
    {
        latitude: 29.621011,  
        longitude: -95.201286, 
        weight: 1, 
    },
    {
        latitude: 29.621011,  
        longitude: -95.201286, 
        weight: 1, 
    },
    {
        latitude: 29.729801,  
        longitude: -95.602784, 
        weight: 1, 
    },
    {
        latitude: 29.733597,  
        longitude: -95.320371, 
        weight: 1, 
    },
    {
        latitude: 29.970472,  
        longitude: -95.529826, 
        weight: 1, 
    },
    {
        latitude: 30.050574,  
        longitude: -95.252862, 
        weight: 1, 
    },
    {
        latitude: 29.6466,  
        longitude: -95.503188, 
        weight: 1, 
    },
    {
        latitude: 29.6466,  
        longitude: -95.503188, 
        weight: 1, 
    },
    {
        latitude: 29.6466,  
        longitude: -95.503188, 
        weight: 1, 
    },
    {
        latitude: 29.784439,  
        longitude: -95.652515, 
        weight: 1, 
    },
    {
        latitude: 29.871707,  
        longitude: -95.427107, 
        weight: 1, 
    },
    {
        latitude: 29.871707,  
        longitude: -95.427107, 
        weight: 1, 
    },
    {
        latitude: 29.594836,  
        longitude: -95.501234, 
        weight: 1, 
    },
    {
        latitude: 29.78595,  
        longitude: -95.644227, 
        weight: 1, 
    },
    {
        latitude: 29.854709,  
        longitude: -95.514136, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.735207,  
        longitude: -95.306957, 
        weight: 1, 
    },
    {
        latitude: 29.744637,  
        longitude: -95.39277, 
        weight: 1, 
    },
    {
        latitude: 29.796614,  
        longitude: -95.337023, 
        weight: 1, 
    },
    {
        latitude: 29.748056,  
        longitude: -95.37067, 
        weight: 1, 
    },
    {
        latitude: 29.754461,  
        longitude: -95.362614, 
        weight: 1, 
    },
    {
        latitude: 29.868173,  
        longitude: -95.311264, 
        weight: 1, 
    },
    {
        latitude: 29.74084,  
        longitude: -95.460899, 
        weight: 1, 
    },
    {
        latitude: 29.732359,  
        longitude: -95.514123, 
        weight: 1, 
    },
    {
        latitude: 29.686545,  
        longitude: -95.558739, 
        weight: 1, 
    },
    {
        latitude: 29.730588,  
        longitude: -95.308826, 
        weight: 1, 
    },
    {
        latitude: 29.743255,  
        longitude: -95.47525, 
        weight: 1, 
    },
    {
        latitude: 29.543405,  
        longitude: -95.145625, 
        weight: 1, 
    },
    {
        latitude: 29.859869,  
        longitude: -95.369934, 
        weight: 1, 
    },
    {
        latitude: 29.8455,  
        longitude: -95.394992, 
        weight: 1, 
    },
    {
        latitude: 29.795884,  
        longitude: -95.523305, 
        weight: 1, 
    },
    {
        latitude: 29.871798,  
        longitude: -95.300596, 
        weight: 1, 
    },
    {
        latitude: 29.674723,  
        longitude: -95.516045, 
        weight: 1, 
    },
    {
        latitude: 29.819484,  
        longitude: -95.466794, 
        weight: 1, 
    },
    {
        latitude: 29.67738,  
        longitude: -95.428542, 
        weight: 1, 
    },
    {
        latitude: 29.813108,  
        longitude: -95.427689, 
        weight: 1, 
    },
    {
        latitude: 29.719864,  
        longitude: -95.415665, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.606473,  
        longitude: -95.493675, 
        weight: 1, 
    },
    {
        latitude: 29.769068,  
        longitude: -95.213332, 
        weight: 1, 
    },
    {
        latitude: 29.612266,  
        longitude: -95.428131, 
        weight: 1, 
    },
    {
        latitude: 29.71546,  
        longitude: -95.614742, 
        weight: 1, 
    },
    {
        latitude: 29.82824,  
        longitude: -95.433617, 
        weight: 1, 
    },
    {
        latitude: 29.643595,  
        longitude: -95.512496, 
        weight: 1, 
    },
    {
        latitude: 29.857487,  
        longitude: -95.347879, 
        weight: 1, 
    },
    {
        latitude: 29.725555,  
        longitude: -95.412941, 
        weight: 1, 
    },
    {
        latitude: 29.927356,  
        longitude: -95.331377, 
        weight: 1, 
    },
    {
        latitude: 29.670478,  
        longitude: -95.462135, 
        weight: 1, 
    },
    {
        latitude: 29.63693,  
        longitude: -95.339385, 
        weight: 1, 
    },
    {
        latitude: 29.756234,  
        longitude: -95.455075, 
        weight: 1, 
    },
    {
        latitude: 29.725335,  
        longitude: -95.468167, 
        weight: 1, 
    },
    {
        latitude: 29.743392,  
        longitude: -95.497624, 
        weight: 1, 
    },
    {
        latitude: 29.657972,  
        longitude: -95.382233, 
        weight: 1, 
    },
    {
        latitude: 29.737459,  
        longitude: -95.514301, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.501611, 
        weight: 1, 
    },
    {
        latitude: 29.800459,  
        longitude: -95.435071, 
        weight: 1, 
    },
    {
        latitude: 29.737163,  
        longitude: -95.540178, 
        weight: 1, 
    },
    {
        latitude: 29.63816,  
        longitude: -95.338048, 
        weight: 1, 
    },
    {
        latitude: 29.63816,  
        longitude: -95.338048, 
        weight: 1, 
    },
    {
        latitude: 29.690115,  
        longitude: -95.344328, 
        weight: 1, 
    },
    {
        latitude: 29.767906,  
        longitude: -95.198994, 
        weight: 1, 
    },
    {
        latitude: 29.945686,  
        longitude: -95.39617, 
        weight: 1, 
    },
    {
        latitude: 29.703594,  
        longitude: -95.596954, 
        weight: 1, 
    },
    {
        latitude: 29.853495,  
        longitude: -95.509446, 
        weight: 1, 
    },
    {
        latitude: 29.600041,  
        longitude: -95.500678, 
        weight: 1, 
    },
    {
        latitude: 29.761893,  
        longitude: -95.362294, 
        weight: 1, 
    },
    {
        latitude: 29.848734,  
        longitude: -95.331764, 
        weight: 1, 
    },
    {
        latitude: 29.732713,  
        longitude: -95.353861, 
        weight: 1, 
    },
    {
        latitude: 30.071275,  
        longitude: -95.165156, 
        weight: 1, 
    },
    {
        latitude: 29.88316,  
        longitude: -95.46586, 
        weight: 1, 
    },
    {
        latitude: 29.793112,  
        longitude: -95.688376, 
        weight: 1, 
    },
    {
        latitude: 30.02654,  
        longitude: -95.118626, 
        weight: 1, 
    },
    {
        latitude: 30.02654,  
        longitude: -95.118626, 
        weight: 1, 
    },
    {
        latitude: 29.643028,  
        longitude: -95.199051, 
        weight: 1, 
    },
    {
        latitude: 29.636744,  
        longitude: -95.239236, 
        weight: 1, 
    },
    {
        latitude: 29.613412,  
        longitude: -95.219579, 
        weight: 1, 
    },
    {
        latitude: 29.648171,  
        longitude: -95.368442, 
        weight: 1, 
    },
    {
        latitude: 29.733644,  
        longitude: -95.598384, 
        weight: 1, 
    },
    {
        latitude: 29.724748,  
        longitude: -95.516916, 
        weight: 1, 
    },
    {
        latitude: 29.642112,  
        longitude: -95.24488, 
        weight: 1, 
    },
    {
        latitude: 29.870763,  
        longitude: -95.331381, 
        weight: 1, 
    },
    {
        latitude: 29.812402,  
        longitude: -95.415105, 
        weight: 1, 
    },
    {
        latitude: 29.985985,  
        longitude: -95.335762, 
        weight: 1, 
    },
    {
        latitude: 29.71302,  
        longitude: -95.518614, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.759591,  
        longitude: -95.360027, 
        weight: 1, 
    },
    {
        latitude: 29.774931,  
        longitude: -95.24739, 
        weight: 1, 
    },
    {
        latitude: 29.727783,  
        longitude: -95.566364, 
        weight: 1, 
    },
    {
        latitude: 29.849489,  
        longitude: -95.298813, 
        weight: 1, 
    },
    {
        latitude: 29.849489,  
        longitude: -95.298813, 
        weight: 1, 
    },
    {
        latitude: 29.615215,  
        longitude: -95.228533, 
        weight: 1, 
    },
    {
        latitude: 29.689086,  
        longitude: -95.595901, 
        weight: 1, 
    },
    {
        latitude: 29.687554,  
        longitude: -95.364096, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.806558,  
        longitude: -95.55766, 
        weight: 1, 
    },
    {
        latitude: 29.673188,  
        longitude: -95.271128, 
        weight: 1, 
    },
    {
        latitude: 29.721183,  
        longitude: -95.375506, 
        weight: 1, 
    },
    {
        latitude: 29.721183,  
        longitude: -95.375506, 
        weight: 1, 
    },
    {
        latitude: 29.74024,  
        longitude: -95.510786, 
        weight: 1, 
    },
    {
        latitude: 29.723204,  
        longitude: -95.378624, 
        weight: 1, 
    },
    {
        latitude: 29.729309,  
        longitude: -95.514164, 
        weight: 1, 
    },
    {
        latitude: 29.729309,  
        longitude: -95.514164, 
        weight: 1, 
    },
    {
        latitude: 29.729309,  
        longitude: -95.514164, 
        weight: 1, 
    },
    {
        latitude: 29.803022,  
        longitude: -95.499733, 
        weight: 1, 
    },
    {
        latitude: 29.764344,  
        longitude: -95.208909, 
        weight: 1, 
    },
    {
        latitude: 29.764344,  
        longitude: -95.208909, 
        weight: 1, 
    },
    {
        latitude: 29.732366,  
        longitude: -95.350498, 
        weight: 1, 
    },
    {
        latitude: 29.72492,  
        longitude: -95.46818, 
        weight: 1, 
    },
    {
        latitude: 29.75852,  
        longitude: -95.367508, 
        weight: 1, 
    },
    {
        latitude: 29.689093,  
        longitude: -95.596005, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.642112,  
        longitude: -95.24488, 
        weight: 1, 
    },
    {
        latitude: 29.767343,  
        longitude: -95.337524, 
        weight: 1, 
    },
    {
        latitude: 29.95305,  
        longitude: -95.5384, 
        weight: 1, 
    },
    {
        latitude: 29.95305,  
        longitude: -95.5384, 
        weight: 1, 
    },
    {
        latitude: 29.95305,  
        longitude: -95.5384, 
        weight: 1, 
    },
    {
        latitude: 29.741681,  
        longitude: -95.513555, 
        weight: 1, 
    },
    {
        latitude: 29.550857,  
        longitude: -95.125988, 
        weight: 1, 
    },
    {
        latitude: 29.550857,  
        longitude: -95.125988, 
        weight: 1, 
    },
    {
        latitude: 29.640489,  
        longitude: -95.482337, 
        weight: 1, 
    },
    {
        latitude: 29.746301,  
        longitude: -95.533711, 
        weight: 1, 
    },
    {
        latitude: 29.709747,  
        longitude: -95.314027, 
        weight: 1, 
    },
    {
        latitude: 29.770151,  
        longitude: -95.203219, 
        weight: 1, 
    },
    {
        latitude: 29.770151,  
        longitude: -95.203219, 
        weight: 1, 
    },
    {
        latitude: 29.637906,  
        longitude: -95.397068, 
        weight: 1, 
    },
    {
        latitude: 29.860977,  
        longitude: -95.551382, 
        weight: 1, 
    },
    {
        latitude: 29.860977,  
        longitude: -95.551382, 
        weight: 1, 
    },
    {
        latitude: 30.065328,  
        longitude: -95.243341, 
        weight: 1, 
    },
    {
        latitude: 29.78415,  
        longitude: -95.582329, 
        weight: 1, 
    },
    {
        latitude: 29.784001,  
        longitude: -95.568181, 
        weight: 1, 
    },
    {
        latitude: 29.537316,  
        longitude: -95.155033, 
        weight: 1, 
    },
    {
        latitude: 29.606878,  
        longitude: -95.271512, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.822848,  
        longitude: -95.529559, 
        weight: 1, 
    },
    {
        latitude: 29.655945,  
        longitude: -95.575192, 
        weight: 1, 
    },
    {
        latitude: 29.833717,  
        longitude: -95.484603, 
        weight: 1, 
    },
    {
        latitude: 29.714434,  
        longitude: -95.624008, 
        weight: 1, 
    },
    {
        latitude: 29.714434,  
        longitude: -95.624008, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.739028,  
        longitude: -95.49666, 
        weight: 1, 
    },
    {
        latitude: 29.802845,  
        longitude: -95.475463, 
        weight: 1, 
    },
    {
        latitude: 29.831665,  
        longitude: -95.545316, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.817246,  
        longitude: -95.43549, 
        weight: 1, 
    },
    {
        latitude: 29.810783,  
        longitude: -95.383836, 
        weight: 1, 
    },
    {
        latitude: 29.644504,  
        longitude: -95.491743, 
        weight: 1, 
    },
    {
        latitude: 29.644504,  
        longitude: -95.491743, 
        weight: 1, 
    },
    {
        latitude: 29.644504,  
        longitude: -95.491743, 
        weight: 1, 
    },
    {
        latitude: 29.858011,  
        longitude: -95.473343, 
        weight: 1, 
    },
    {
        latitude: 29.681325,  
        longitude: -95.479259, 
        weight: 1, 
    },
    {
        latitude: 29.733229,  
        longitude: -95.559799, 
        weight: 1, 
    },
    {
        latitude: 29.710527,  
        longitude: -95.314735, 
        weight: 1, 
    },
    {
        latitude: 29.675819,  
        longitude: -95.282945, 
        weight: 1, 
    },
    {
        latitude: 29.668899,  
        longitude: -95.460987, 
        weight: 1, 
    },
    {
        latitude: 29.884071,  
        longitude: -95.426797, 
        weight: 1, 
    },
    {
        latitude: 29.788582,  
        longitude: -95.640294, 
        weight: 1, 
    },
    {
        latitude: 29.772348,  
        longitude: -95.613807, 
        weight: 1, 
    },
    {
        latitude: 29.594808,  
        longitude: -95.266232, 
        weight: 1, 
    },
    {
        latitude: 29.594808,  
        longitude: -95.266232, 
        weight: 1, 
    },
    {
        latitude: 29.594808,  
        longitude: -95.266232, 
        weight: 1, 
    },
    {
        latitude: 29.638339,  
        longitude: -95.480771, 
        weight: 1, 
    },
    {
        latitude: 29.75717,  
        longitude: -95.407194, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.77355,  
        longitude: -95.39059, 
        weight: 1, 
    },
    {
        latitude: 29.761556,  
        longitude: -95.422845, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.742864,  
        longitude: -95.341124, 
        weight: 1, 
    },
    {
        latitude: 29.750512,  
        longitude: -95.61941, 
        weight: 1, 
    },
    {
        latitude: 29.729722,  
        longitude: -95.412842, 
        weight: 1, 
    },
    {
        latitude: 29.938212,  
        longitude: -95.404237, 
        weight: 1, 
    },
    {
        latitude: 29.68565,  
        longitude: -95.551436, 
        weight: 1, 
    },
    {
        latitude: 29.745882,  
        longitude: -95.33445, 
        weight: 1, 
    },
    {
        latitude: 29.704741,  
        longitude: -95.383132, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.970472,  
        longitude: -95.529826, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.98735,  
        longitude: -95.346518, 
        weight: 1, 
    },
    {
        latitude: 29.820518,  
        longitude: -95.277371, 
        weight: 1, 
    },
    {
        latitude: 29.588429,  
        longitude: -95.457469, 
        weight: 1, 
    },
    {
        latitude: 29.858092,  
        longitude: -95.473333, 
        weight: 1, 
    },
    {
        latitude: 29.736151,  
        longitude: -95.607598, 
        weight: 1, 
    },
    {
        latitude: 29.595814,  
        longitude: -95.197446, 
        weight: 1, 
    },
    {
        latitude: 29.958002,  
        longitude: -95.429046, 
        weight: 1, 
    },
    {
        latitude: 29.716604,  
        longitude: -95.557974, 
        weight: 1, 
    },
    {
        latitude: 29.759094,  
        longitude: -95.351821, 
        weight: 1, 
    },
    {
        latitude: 29.838592,  
        longitude: -95.384345, 
        weight: 1, 
    },
    {
        latitude: 29.67038,  
        longitude: -95.334495, 
        weight: 1, 
    },
    {
        latitude: 29.779422,  
        longitude: -95.535943, 
        weight: 1, 
    },
    {
        latitude: 29.794791,  
        longitude: -95.335061, 
        weight: 1, 
    },
    {
        latitude: 29.740425,  
        longitude: -95.466518, 
        weight: 1, 
    },
    {
        latitude: 29.720264,  
        longitude: -95.319775, 
        weight: 1, 
    },
    {
        latitude: 29.590921,  
        longitude: -95.454059, 
        weight: 1, 
    },
    {
        latitude: 29.957159,  
        longitude: -95.542239, 
        weight: 1, 
    },
    {
        latitude: 29.71956,  
        longitude: -95.500975, 
        weight: 1, 
    },
    {
        latitude: 29.71956,  
        longitude: -95.500975, 
        weight: 1, 
    },
    {
        latitude: 29.735295,  
        longitude: -95.484232, 
        weight: 1, 
    },
    {
        latitude: 29.746581,  
        longitude: -95.620126, 
        weight: 1, 
    },
    {
        latitude: 29.805767,  
        longitude: -95.551861, 
        weight: 1, 
    },
    {
        latitude: 29.73545,  
        longitude: -95.480983, 
        weight: 1, 
    },
    {
        latitude: 29.727783,  
        longitude: -95.36776, 
        weight: 1, 
    },
    {
        latitude: 29.959976,  
        longitude: -95.547866, 
        weight: 1, 
    },
    {
        latitude: 29.715626,  
        longitude: -95.735827, 
        weight: 1, 
    },
    {
        latitude: 29.690642,  
        longitude: -95.432342, 
        weight: 1, 
    },
    {
        latitude: 29.764326,  
        longitude: -95.401771, 
        weight: 1, 
    },
    {
        latitude: 29.851712,  
        longitude: -95.506473, 
        weight: 1, 
    },
    {
        latitude: 29.851712,  
        longitude: -95.506473, 
        weight: 1, 
    },
    {
        latitude: 29.740529,  
        longitude: -95.467924, 
        weight: 1, 
    },
    {
        latitude: 29.697354,  
        longitude: -95.387396, 
        weight: 1, 
    },
    {
        latitude: 29.685296,  
        longitude: -95.396043, 
        weight: 1, 
    },
    {
        latitude: 29.712236,  
        longitude: -95.310332, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.674952,  
        longitude: -95.555533, 
        weight: 1, 
    },
    {
        latitude: 29.720961,  
        longitude: -95.489011, 
        weight: 1, 
    },
    {
        latitude: 29.716194,  
        longitude: -95.538943, 
        weight: 1, 
    },
    {
        latitude: 29.627611,  
        longitude: -95.392477, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.965387,  
        longitude: -95.436585, 
        weight: 1, 
    },
    {
        latitude: 29.965387,  
        longitude: -95.436585, 
        weight: 1, 
    },
    {
        latitude: 29.986014,  
        longitude: -95.339272, 
        weight: 1, 
    },
    {
        latitude: 29.665185,  
        longitude: -95.276917, 
        weight: 1, 
    },
    {
        latitude: 29.665185,  
        longitude: -95.276917, 
        weight: 1, 
    },
    {
        latitude: 29.925166,  
        longitude: -95.405409, 
        weight: 1, 
    },
    {
        latitude: 29.675274,  
        longitude: -95.603674, 
        weight: 1, 
    },
    {
        latitude: 29.785204,  
        longitude: -95.580332, 
        weight: 1, 
    },
    {
        latitude: 29.785204,  
        longitude: -95.580332, 
        weight: 1, 
    },
    {
        latitude: 29.64637,  
        longitude: -95.253618, 
        weight: 1, 
    },
    {
        latitude: 29.64637,  
        longitude: -95.253618, 
        weight: 1, 
    },
    {
        latitude: 29.728221,  
        longitude: -95.454361, 
        weight: 1, 
    },
    {
        latitude: 29.738683,  
        longitude: -95.26343, 
        weight: 1, 
    },
    {
        latitude: 29.950589,  
        longitude: -95.400734, 
        weight: 1, 
    },
    {
        latitude: 29.693854,  
        longitude: -95.552117, 
        weight: 1, 
    },
    {
        latitude: 29.783737,  
        longitude: -95.417676, 
        weight: 1, 
    },
    {
        latitude: 29.948615,  
        longitude: -95.331358, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.748105,  
        longitude: -95.56957, 
        weight: 1, 
    },
    {
        latitude: 29.721148,  
        longitude: -95.476472, 
        weight: 1, 
    },
    {
        latitude: 29.727722,  
        longitude: -95.545255, 
        weight: 1, 
    },
    {
        latitude: 29.708966,  
        longitude: -95.493125, 
        weight: 1, 
    },
    {
        latitude: 29.794248,  
        longitude: -95.540805, 
        weight: 1, 
    },
    {
        latitude: 29.69157,  
        longitude: -95.595946, 
        weight: 1, 
    },
    {
        latitude: 29.739147,  
        longitude: -95.29364, 
        weight: 1, 
    },
    {
        latitude: 29.578845,  
        longitude: -95.129361, 
        weight: 1, 
    },
    {
        latitude: 29.674936,  
        longitude: -95.582512, 
        weight: 1, 
    },
    {
        latitude: 29.738291,  
        longitude: -95.597993, 
        weight: 1, 
    },
    {
        latitude: 29.738291,  
        longitude: -95.597993, 
        weight: 1, 
    },
    {
        latitude: 29.741168,  
        longitude: -95.455783, 
        weight: 1, 
    },
    {
        latitude: 29.832422,  
        longitude: -95.480872, 
        weight: 1, 
    },
    {
        latitude: 29.943364,  
        longitude: -95.174756, 
        weight: 1, 
    },
    {
        latitude: 29.657699,  
        longitude: -95.387946, 
        weight: 1, 
    },
    {
        latitude: 29.830952,  
        longitude: -95.381614, 
        weight: 1, 
    },
    {
        latitude: 29.820642,  
        longitude: -95.459445, 
        weight: 1, 
    },
    {
        latitude: 29.820642,  
        longitude: -95.459445, 
        weight: 1, 
    },
    {
        latitude: 29.946542,  
        longitude: -95.396525, 
        weight: 1, 
    },
    {
        latitude: 29.848582,  
        longitude: -95.394562, 
        weight: 1, 
    },
    {
        latitude: 29.848582,  
        longitude: -95.394562, 
        weight: 1, 
    },
    {
        latitude: 29.952316,  
        longitude: -95.289787, 
        weight: 1, 
    },
    {
        latitude: 29.672186,  
        longitude: -95.438617, 
        weight: 1, 
    },
    {
        latitude: 29.719905,  
        longitude: -95.605953, 
        weight: 1, 
    },
    {
        latitude: 29.702308,  
        longitude: -95.359239, 
        weight: 1, 
    },
    {
        latitude: 29.715384,  
        longitude: -95.556657, 
        weight: 1, 
    },
    {
        latitude: 29.965615,  
        longitude: -95.419787, 
        weight: 1, 
    },
    {
        latitude: 29.728993,  
        longitude: -95.531174, 
        weight: 1, 
    },
    {
        latitude: 29.907753,  
        longitude: -95.412038, 
        weight: 1, 
    },
    {
        latitude: 29.750511,  
        longitude: -95.618801, 
        weight: 1, 
    },
    {
        latitude: 29.590608,  
        longitude: -95.169969, 
        weight: 1, 
    },
    {
        latitude: 29.618382,  
        longitude: -95.438938, 
        weight: 1, 
    },
    {
        latitude: 29.775434,  
        longitude: -95.33878, 
        weight: 1, 
    },
    {
        latitude: 29.755264,  
        longitude: -95.392184, 
        weight: 1, 
    },
    {
        latitude: 29.600901,  
        longitude: -95.11435, 
        weight: 1, 
    },
    {
        latitude: 29.747955,  
        longitude: -95.396854, 
        weight: 1, 
    },
    {
        latitude: 29.740891,  
        longitude: -95.37774, 
        weight: 1, 
    },
    {
        latitude: 29.678122,  
        longitude: -95.510823, 
        weight: 1, 
    },
    {
        latitude: 29.628688,  
        longitude: -95.186911, 
        weight: 1, 
    },
    {
        latitude: 29.742092,  
        longitude: -95.47943, 
        weight: 1, 
    },
    {
        latitude: 29.707073,  
        longitude: -95.372185, 
        weight: 1, 
    },
    {
        latitude: 29.6483,  
        longitude: -95.508342, 
        weight: 1, 
    },
    {
        latitude: 29.77918,  
        longitude: -95.544478, 
        weight: 1, 
    },
    {
        latitude: 29.63694,  
        longitude: -95.491575, 
        weight: 1, 
    },
    {
        latitude: 29.802401,  
        longitude: -95.426323, 
        weight: 1, 
    },
    {
        latitude: 29.708702,  
        longitude: -95.358138, 
        weight: 1, 
    },
    {
        latitude: 29.634641,  
        longitude: -95.355753, 
        weight: 1, 
    },
    {
        latitude: 29.634641,  
        longitude: -95.355753, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.741228,  
        longitude: -95.312385, 
        weight: 1, 
    },
    {
        latitude: 29.647981,  
        longitude: -95.517092, 
        weight: 1, 
    },
    {
        latitude: 29.647981,  
        longitude: -95.517092, 
        weight: 1, 
    },
    {
        latitude: 29.678407,  
        longitude: -95.351657, 
        weight: 1, 
    },
    {
        latitude: 29.701584,  
        longitude: -95.371476, 
        weight: 1, 
    },
    {
        latitude: 29.701584,  
        longitude: -95.371476, 
        weight: 1, 
    },
    {
        latitude: 29.701584,  
        longitude: -95.371476, 
        weight: 1, 
    },
    {
        latitude: 29.694559,  
        longitude: -95.491135, 
        weight: 1, 
    },
    {
        latitude: 29.694559,  
        longitude: -95.491135, 
        weight: 1, 
    },
    {
        latitude: 29.642457,  
        longitude: -95.515084, 
        weight: 1, 
    },
    {
        latitude: 29.737171,  
        longitude: -95.539325, 
        weight: 1, 
    },
    {
        latitude: 29.657945,  
        longitude: -95.583542, 
        weight: 1, 
    },
    {
        latitude: 29.737877,  
        longitude: -95.479641, 
        weight: 1, 
    },
    {
        latitude: 29.952194,  
        longitude: -95.296428, 
        weight: 1, 
    },
    {
        latitude: 29.676109,  
        longitude: -95.538058, 
        weight: 1, 
    },
    {
        latitude: 29.750016,  
        longitude: -95.378029, 
        weight: 1, 
    },
    {
        latitude: 29.858824,  
        longitude: -95.505938, 
        weight: 1, 
    },
    {
        latitude: 29.750771,  
        longitude: -95.382497, 
        weight: 1, 
    },
    {
        latitude: 29.73473,  
        longitude: -95.367317, 
        weight: 1, 
    },
    {
        latitude: 29.797092,  
        longitude: -95.397816, 
        weight: 1, 
    },
    {
        latitude: 29.783737,  
        longitude: -95.417676, 
        weight: 1, 
    },
    {
        latitude: 29.953826,  
        longitude: -95.555516, 
        weight: 1, 
    },
    {
        latitude: 29.869945,  
        longitude: -95.39445, 
        weight: 1, 
    },
    {
        latitude: 29.82743,  
        longitude: -95.32271, 
        weight: 1, 
    },
    {
        latitude: 29.82743,  
        longitude: -95.32271, 
        weight: 1, 
    },
    {
        latitude: 29.704758,  
        longitude: -95.347006, 
        weight: 1, 
    },
    {
        latitude: 29.983357,  
        longitude: -95.293841, 
        weight: 1, 
    },
    {
        latitude: 29.631409,  
        longitude: -95.221239, 
        weight: 1, 
    },
    {
        latitude: 29.849135,  
        longitude: -95.262374, 
        weight: 1, 
    },
    {
        latitude: 29.753854,  
        longitude: -95.39804, 
        weight: 1, 
    },
    {
        latitude: 29.867498,  
        longitude: -95.397795, 
        weight: 1, 
    },
    {
        latitude: 29.845728,  
        longitude: -95.392547, 
        weight: 1, 
    },
    {
        latitude: 29.606495,  
        longitude: -95.411151, 
        weight: 1, 
    },
    {
        latitude: 29.728678,  
        longitude: -95.58013, 
        weight: 1, 
    },
    {
        latitude: 29.728678,  
        longitude: -95.58013, 
        weight: 1, 
    },
    {
        latitude: 29.870624,  
        longitude: -95.331341, 
        weight: 1, 
    },
    {
        latitude: 29.819695,  
        longitude: -95.328745, 
        weight: 1, 
    },
    {
        latitude: 29.681403,  
        longitude: -95.550421, 
        weight: 1, 
    },
    {
        latitude: 29.737188,  
        longitude: -95.538692, 
        weight: 1, 
    },
    {
        latitude: 29.727512,  
        longitude: -95.433435, 
        weight: 1, 
    },
    {
        latitude: 29.628845,  
        longitude: -95.327194, 
        weight: 1, 
    },
    {
        latitude: 29.843032,  
        longitude: -95.310842, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.627237,  
        longitude: -95.206217, 
        weight: 1, 
    },
    {
        latitude: 29.681418,  
        longitude: -95.238318, 
        weight: 1, 
    },
    {
        latitude: 29.773932,  
        longitude: -95.482528, 
        weight: 1, 
    },
    {
        latitude: 29.669988,  
        longitude: -95.277035, 
        weight: 1, 
    },
    {
        latitude: 29.607198,  
        longitude: -95.261387, 
        weight: 1, 
    },
    {
        latitude: 29.797638,  
        longitude: -95.447796, 
        weight: 1, 
    },
    {
        latitude: 29.770116,  
        longitude: -95.402406, 
        weight: 1, 
    },
    {
        latitude: 29.959976,  
        longitude: -95.547866, 
        weight: 1, 
    },
    {
        latitude: 29.816328,  
        longitude: -95.410444, 
        weight: 1, 
    },
    {
        latitude: 29.632546,  
        longitude: -95.476096, 
        weight: 1, 
    },
    {
        latitude: 29.750512,  
        longitude: -95.61941, 
        weight: 1, 
    },
    {
        latitude: 29.790144,  
        longitude: -95.468068, 
        weight: 1, 
    },
    {
        latitude: 29.965615,  
        longitude: -95.419787, 
        weight: 1, 
    },
    {
        latitude: 30.001423,  
        longitude: -95.290756, 
        weight: 1, 
    },
    {
        latitude: 29.80787,  
        longitude: -95.528892, 
        weight: 1, 
    },
    {
        latitude: 29.696573,  
        longitude: -95.367355, 
        weight: 1, 
    },
    {
        latitude: 29.678591,  
        longitude: -95.426713, 
        weight: 1, 
    },
    {
        latitude: 29.659849,  
        longitude: -95.358418, 
        weight: 1, 
    },
    {
        latitude: 29.764569,  
        longitude: -95.357144, 
        weight: 1, 
    },
    {
        latitude: 29.822679,  
        longitude: -95.538753, 
        weight: 1, 
    },
    {
        latitude: 29.730807,  
        longitude: -95.590641, 
        weight: 1, 
    },
    {
        latitude: 29.719484,  
        longitude: -95.489006, 
        weight: 1, 
    },
    {
        latitude: 29.719484,  
        longitude: -95.489006, 
        weight: 1, 
    },
    {
        latitude: 29.941769,  
        longitude: -95.440311, 
        weight: 1, 
    },
    {
        latitude: 29.859346,  
        longitude: -95.382321, 
        weight: 1, 
    },
    {
        latitude: 29.716369,  
        longitude: -95.489263, 
        weight: 1, 
    },
    {
        latitude: 29.589439,  
        longitude: -95.462195, 
        weight: 1, 
    },
    {
        latitude: 29.725846,  
        longitude: -95.427801, 
        weight: 1, 
    },
    {
        latitude: 29.650737,  
        longitude: -95.207993, 
        weight: 1, 
    },
    {
        latitude: 29.811649,  
        longitude: -95.317141, 
        weight: 1, 
    },
    {
        latitude: 29.811649,  
        longitude: -95.317141, 
        weight: 1, 
    },
    {
        latitude: 29.784787,  
        longitude: -95.468385, 
        weight: 1, 
    },
    {
        latitude: 29.742781,  
        longitude: -95.402638, 
        weight: 1, 
    },
    {
        latitude: 29.725859,  
        longitude: -95.464747, 
        weight: 1, 
    },
    {
        latitude: 29.725859,  
        longitude: -95.464747, 
        weight: 1, 
    },
    {
        latitude: 29.838066,  
        longitude: -95.381287, 
        weight: 1, 
    },
    {
        latitude: 29.838066,  
        longitude: -95.381287, 
        weight: 1, 
    },
    {
        latitude: 29.789562,  
        longitude: -95.337399, 
        weight: 1, 
    },
    {
        latitude: 29.741583,  
        longitude: -95.35035, 
        weight: 1, 
    },
    {
        latitude: 29.77563,  
        longitude: -95.357765, 
        weight: 1, 
    },
    {
        latitude: 29.738332,  
        longitude: -95.613783, 
        weight: 1, 
    },
    {
        latitude: 29.844132,  
        longitude: -95.392245, 
        weight: 1, 
    },
    {
        latitude: 29.684686,  
        longitude: -95.569501, 
        weight: 1, 
    },
    {
        latitude: 29.695534,  
        longitude: -95.388058, 
        weight: 1, 
    },
    {
        latitude: 29.94609,  
        longitude: -95.43923, 
        weight: 1, 
    },
    {
        latitude: 29.755879,  
        longitude: -95.639853, 
        weight: 1, 
    },
    {
        latitude: 29.674399,  
        longitude: -95.535243, 
        weight: 1, 
    },
    {
        latitude: 29.730652,  
        longitude: -95.486834, 
        weight: 1, 
    },
    {
        latitude: 29.730652,  
        longitude: -95.486834, 
        weight: 1, 
    },
    {
        latitude: 29.730652,  
        longitude: -95.486834, 
        weight: 1, 
    },
    {
        latitude: 29.730652,  
        longitude: -95.486834, 
        weight: 1, 
    },
    {
        latitude: 29.83754,  
        longitude: -95.558742, 
        weight: 1, 
    },
    {
        latitude: 29.707476,  
        longitude: -95.335394, 
        weight: 1, 
    },
    {
        latitude: 29.767099,  
        longitude: -95.624325, 
        weight: 1, 
    },
    {
        latitude: 29.820526,  
        longitude: -95.459457, 
        weight: 1, 
    },
    {
        latitude: 29.652651,  
        longitude: -95.55887, 
        weight: 1, 
    },
    {
        latitude: 29.652651,  
        longitude: -95.55887, 
        weight: 1, 
    },
    {
        latitude: 29.851523,  
        longitude: -95.283651, 
        weight: 1, 
    },
    {
        latitude: 29.864984,  
        longitude: -95.335013, 
        weight: 1, 
    },
    {
        latitude: 29.864984,  
        longitude: -95.335013, 
        weight: 1, 
    },
    {
        latitude: 29.716075,  
        longitude: -95.314927, 
        weight: 1, 
    },
    {
        latitude: 29.716421,  
        longitude: -95.484997, 
        weight: 1, 
    },
    {
        latitude: 29.716421,  
        longitude: -95.484997, 
        weight: 1, 
    },
    {
        latitude: 29.723645,  
        longitude: -95.350979, 
        weight: 1, 
    },
    {
        latitude: 29.678045,  
        longitude: -95.602638, 
        weight: 1, 
    },
    {
        latitude: 29.871104,  
        longitude: -95.397641, 
        weight: 1, 
    },
    {
        latitude: 29.731526,  
        longitude: -95.479134, 
        weight: 1, 
    },
    {
        latitude: 29.823437,  
        longitude: -95.564252, 
        weight: 1, 
    },
    {
        latitude: 29.705615,  
        longitude: -95.47883, 
        weight: 1, 
    },
    {
        latitude: 29.617859,  
        longitude: -95.221319, 
        weight: 1, 
    },
    {
        latitude: 29.717339,  
        longitude: -95.498975, 
        weight: 1, 
    },
    {
        latitude: 29.727627,  
        longitude: -95.55819, 
        weight: 1, 
    },
    {
        latitude: 29.746975,  
        longitude: -95.58168, 
        weight: 1, 
    },
    {
        latitude: 29.734385,  
        longitude: -95.391137, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.753021,  
        longitude: -95.376923, 
        weight: 1, 
    },
    {
        latitude: 29.766377,  
        longitude: -95.423979, 
        weight: 1, 
    },
    {
        latitude: 29.750536,  
        longitude: -95.404708, 
        weight: 1, 
    },
    {
        latitude: 29.781315,  
        longitude: -95.411822, 
        weight: 1, 
    },
    {
        latitude: 29.783503,  
        longitude: -95.470121, 
        weight: 1, 
    },
    {
        latitude: 29.731647,  
        longitude: -95.532787, 
        weight: 1, 
    },
    {
        latitude: 29.929215,  
        longitude: -95.409851, 
        weight: 1, 
    },
    {
        latitude: 29.739374,  
        longitude: -95.498358, 
        weight: 1, 
    },
    {
        latitude: 29.678738,  
        longitude: -95.339267, 
        weight: 1, 
    },
    {
        latitude: 29.697733,  
        longitude: -95.55073, 
        weight: 1, 
    },
    {
        latitude: 29.80129,  
        longitude: -95.267795, 
        weight: 1, 
    },
    {
        latitude: 29.675068,  
        longitude: -95.570418, 
        weight: 1, 
    },
    {
        latitude: 29.711887,  
        longitude: -95.343159, 
        weight: 1, 
    },
    {
        latitude: 29.734048,  
        longitude: -95.532826, 
        weight: 1, 
    },
    {
        latitude: 29.837524,  
        longitude: -95.301554, 
        weight: 1, 
    },
    {
        latitude: 29.690183,  
        longitude: -95.34451, 
        weight: 1, 
    },
    {
        latitude: 29.617592,  
        longitude: -95.195922, 
        weight: 1, 
    },
    {
        latitude: 29.74886,  
        longitude: -95.583827, 
        weight: 1, 
    },
    {
        latitude: 29.717425,  
        longitude: -95.314272, 
        weight: 1, 
    },
    {
        latitude: 29.719546,  
        longitude: -95.610525, 
        weight: 1, 
    },
    {
        latitude: 29.770435,  
        longitude: -95.412667, 
        weight: 1, 
    },
    {
        latitude: 29.673427,  
        longitude: -95.544075, 
        weight: 1, 
    },
    {
        latitude: 29.707296,  
        longitude: -95.495198, 
        weight: 1, 
    },
    {
        latitude: 29.70546,  
        longitude: -95.491159, 
        weight: 1, 
    },
    {
        latitude: 29.855787,  
        longitude: -95.292816, 
        weight: 1, 
    },
    {
        latitude: 29.711573,  
        longitude: -95.295987, 
        weight: 1, 
    },
    {
        latitude: 29.856841,  
        longitude: -95.401242, 
        weight: 1, 
    },
    {
        latitude: 29.733056,  
        longitude: -95.48436, 
        weight: 1, 
    },
    {
        latitude: 29.759999,  
        longitude: -95.463278, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.950414,  
        longitude: -95.407588, 
        weight: 1, 
    },
    {
        latitude: 29.862768,  
        longitude: -95.506086, 
        weight: 1, 
    },
    {
        latitude: 29.657673,  
        longitude: -95.389473, 
        weight: 1, 
    },
    {
        latitude: 29.745444,  
        longitude: -95.385982, 
        weight: 1, 
    },
    {
        latitude: 29.72666,  
        longitude: -95.400399, 
        weight: 1, 
    },
    {
        latitude: 29.964118,  
        longitude: -95.550775, 
        weight: 1, 
    },
    {
        latitude: 29.831537,  
        longitude: -95.270086, 
        weight: 1, 
    },
    {
        latitude: 29.848132,  
        longitude: -95.381439, 
        weight: 1, 
    },
    {
        latitude: 29.700812,  
        longitude: -95.376398, 
        weight: 1, 
    },
    {
        latitude: 29.785061,  
        longitude: -95.480682, 
        weight: 1, 
    },
    {
        latitude: 29.783107,  
        longitude: -95.477166, 
        weight: 1, 
    },
    {
        latitude: 29.904278,  
        longitude: -95.411971, 
        weight: 1, 
    },
    {
        latitude: 29.648989,  
        longitude: -95.249504, 
        weight: 1, 
    },
    {
        latitude: 30.03759,  
        longitude: -95.262354, 
        weight: 1, 
    },
    {
        latitude: 29.81965,  
        longitude: -95.429496, 
        weight: 1, 
    },
    {
        latitude: 29.705151,  
        longitude: -95.516381, 
        weight: 1, 
    },
    {
        latitude: 29.868726,  
        longitude: -95.367304, 
        weight: 1, 
    },
    {
        latitude: 29.868726,  
        longitude: -95.367304, 
        weight: 1, 
    },
    {
        latitude: 29.74219,  
        longitude: -95.590287, 
        weight: 1, 
    },
    {
        latitude: 29.943408,  
        longitude: -95.321777, 
        weight: 1, 
    },
    {
        latitude: 29.943408,  
        longitude: -95.321777, 
        weight: 1, 
    },
    {
        latitude: 29.736544,  
        longitude: -95.586748, 
        weight: 1, 
    },
    {
        latitude: 29.736544,  
        longitude: -95.586748, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.722987,  
        longitude: -95.476597, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.701707,  
        longitude: -95.369692, 
        weight: 1, 
    },
    {
        latitude: 29.657552,  
        longitude: -95.584708, 
        weight: 1, 
    },
    {
        latitude: 29.689289,  
        longitude: -95.363388, 
        weight: 1, 
    },
    {
        latitude: 29.737942,  
        longitude: -95.47499, 
        weight: 1, 
    },
    {
        latitude: 29.965976,  
        longitude: -95.422141, 
        weight: 1, 
    },
    {
        latitude: 29.665467,  
        longitude: -95.276904, 
        weight: 1, 
    },
    {
        latitude: 29.737842,  
        longitude: -95.482379, 
        weight: 1, 
    },
    {
        latitude: 29.771339,  
        longitude: -95.191716, 
        weight: 1, 
    },
    {
        latitude: 29.808852,  
        longitude: -95.40382, 
        weight: 1, 
    },
    {
        latitude: 29.703741,  
        longitude: -95.58786, 
        weight: 1, 
    },
    {
        latitude: 29.705522,  
        longitude: -95.488095, 
        weight: 1, 
    },
    {
        latitude: 29.705522,  
        longitude: -95.488095, 
        weight: 1, 
    },
    {
        latitude: 29.640463,  
        longitude: -95.463578, 
        weight: 1, 
    },
    {
        latitude: 29.711007,  
        longitude: -95.483142, 
        weight: 1, 
    },
    {
        latitude: 29.864984,  
        longitude: -95.335013, 
        weight: 1, 
    },
    {
        latitude: 29.736856,  
        longitude: -95.495293, 
        weight: 1, 
    },
    {
        latitude: 29.736856,  
        longitude: -95.495293, 
        weight: 1, 
    },
    {
        latitude: 29.959976,  
        longitude: -95.547866, 
        weight: 1, 
    },
    {
        latitude: 29.70546,  
        longitude: -95.491159, 
        weight: 1, 
    },
    {
        latitude: 29.705521,  
        longitude: -95.48473, 
        weight: 1, 
    },
    {
        latitude: 30.067638,  
        longitude: -95.185537, 
        weight: 1, 
    },
    {
        latitude: 29.588261,  
        longitude: -95.105208, 
        weight: 1, 
    },
    {
        latitude: 29.736037,  
        longitude: -95.403193, 
        weight: 1, 
    },
    {
        latitude: 29.685049,  
        longitude: -95.361541, 
        weight: 1, 
    },
    {
        latitude: 29.737925,  
        longitude: -95.47673, 
        weight: 1, 
    },
    {
        latitude: 29.687785,  
        longitude: -95.506799, 
        weight: 1, 
    },
    {
        latitude: 29.687472,  
        longitude: -95.507422, 
        weight: 1, 
    },
    {
        latitude: 29.640455,  
        longitude: -95.243347, 
        weight: 1, 
    },
    {
        latitude: 29.640455,  
        longitude: -95.243347, 
        weight: 1, 
    },
    {
        latitude: 29.812195,  
        longitude: -95.480699, 
        weight: 1, 
    },
    {
        latitude: 29.812195,  
        longitude: -95.480699, 
        weight: 1, 
    },
    {
        latitude: 29.812195,  
        longitude: -95.480699, 
        weight: 1, 
    },
    {
        latitude: 29.818737,  
        longitude: -95.47373, 
        weight: 1, 
    },
    {
        latitude: 29.653062,  
        longitude: -95.562784, 
        weight: 1, 
    },
    {
        latitude: 29.799024,  
        longitude: -95.563888, 
        weight: 1, 
    },
    {
        latitude: 29.799024,  
        longitude: -95.563888, 
        weight: 1, 
    },
    {
        latitude: 29.927868,  
        longitude: -95.411544, 
        weight: 1, 
    },
    {
        latitude: 29.938599,  
        longitude: -95.36581, 
        weight: 1, 
    },
    {
        latitude: 29.75694,  
        longitude: -95.283613, 
        weight: 1, 
    },
    {
        latitude: 29.725438,  
        longitude: -95.475713, 
        weight: 1, 
    },
    {
        latitude: 29.701958,  
        longitude: -95.516374, 
        weight: 1, 
    },
    {
        latitude: 29.766682,  
        longitude: -95.420153, 
        weight: 1, 
    },
    {
        latitude: 29.693186,  
        longitude: -95.49298, 
        weight: 1, 
    },
    {
        latitude: 29.687769,  
        longitude: -95.506831, 
        weight: 1, 
    },
    {
        latitude: 29.764522,  
        longitude: -95.549545, 
        weight: 1, 
    },
    {
        latitude: 29.687879,  
        longitude: -95.506613, 
        weight: 1, 
    },
    {
        latitude: 29.693186,  
        longitude: -95.49298, 
        weight: 1, 
    },
    {
        latitude: 29.751337,  
        longitude: -95.455185, 
        weight: 1, 
    },
    {
        latitude: 29.931751,  
        longitude: -95.411112, 
        weight: 1, 
    },
    {
        latitude: 29.931773,  
        longitude: -95.403125, 
        weight: 1, 
    },
    {
        latitude: 29.829321,  
        longitude: -95.328895, 
        weight: 1, 
    },
    {
        latitude: 29.848303,  
        longitude: -95.429837, 
        weight: 1, 
    },
    {
        latitude: 29.767447,  
        longitude: -95.341709, 
        weight: 1, 
    },
    {
        latitude: 29.691882,  
        longitude: -95.362327, 
        weight: 1, 
    },
    {
        latitude: 29.691882,  
        longitude: -95.362327, 
        weight: 1, 
    },
    {
        latitude: 29.732991,  
        longitude: -95.563825, 
        weight: 1, 
    },
    {
        latitude: 29.700219,  
        longitude: -95.609595, 
        weight: 1, 
    },
    {
        latitude: 29.616854,  
        longitude: -95.227885, 
        weight: 1, 
    },
    {
        latitude: 29.850538,  
        longitude: -95.480786, 
        weight: 1, 
    },
    {
        latitude: 29.800064,  
        longitude: -95.361019, 
        weight: 1, 
    },
    {
        latitude: 29.664082,  
        longitude: -95.283073, 
        weight: 1, 
    },
    {
        latitude: 29.688284,  
        longitude: -95.570243, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.844702,  
        longitude: -95.333947, 
        weight: 1, 
    },
    {
        latitude: 29.721649,  
        longitude: -95.403769, 
        weight: 1, 
    },
    {
        latitude: 29.938344,  
        longitude: -95.393353, 
        weight: 1, 
    },
    {
        latitude: 29.738093,  
        longitude: -95.62352, 
        weight: 1, 
    },
    {
        latitude: 29.595824,  
        longitude: -95.197508, 
        weight: 1, 
    },
    {
        latitude: 29.783384,  
        longitude: -95.464759, 
        weight: 1, 
    },
    {
        latitude: 29.739915,  
        longitude: -95.468825, 
        weight: 1, 
    },
    {
        latitude: 29.623294,  
        longitude: -95.226565, 
        weight: 1, 
    },
    {
        latitude: 29.784345,  
        longitude: -95.479439, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.682609,  
        longitude: -95.558388, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.987335,  
        longitude: -95.346031, 
        weight: 1, 
    },
    {
        latitude: 29.685784,  
        longitude: -95.238386, 
        weight: 1, 
    },
    {
        latitude: 29.780307,  
        longitude: -95.394007, 
        weight: 1, 
    },
    {
        latitude: 29.750903,  
        longitude: -95.353239, 
        weight: 1, 
    },
    {
        latitude: 29.938711,  
        longitude: -95.353792, 
        weight: 1, 
    },
    {
        latitude: 29.730724,  
        longitude: -95.592498, 
        weight: 1, 
    },
    {
        latitude: 29.838276,  
        longitude: -95.488437, 
        weight: 1, 
    },
    {
        latitude: 29.685341,  
        longitude: -95.392649, 
        weight: 1, 
    },
    {
        latitude: 29.777388,  
        longitude: -95.291466, 
        weight: 1, 
    },
    {
        latitude: 29.744867,  
        longitude: -95.345376, 
        weight: 1, 
    },
    {
        latitude: 29.744867,  
        longitude: -95.345376, 
        weight: 1, 
    },
    {
        latitude: 29.737887,  
        longitude: -95.480213, 
        weight: 1, 
    },
    {
        latitude: 29.773243,  
        longitude: -95.324078, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 29.764326,  
        longitude: -95.401771, 
        weight: 1, 
    },
    {
        latitude: 29.673742,  
        longitude: -95.477113, 
        weight: 1, 
    },
    {
        latitude: 29.938344,  
        longitude: -95.393353, 
        weight: 1, 
    },
    {
        latitude: 29.938344,  
        longitude: -95.393353, 
        weight: 1, 
    },
    {
        latitude: 29.605806,  
        longitude: -95.463318, 
        weight: 1, 
    },
    {
        latitude: 29.747937,  
        longitude: -95.576466, 
        weight: 1, 
    },
    {
        latitude: 29.792402,  
        longitude: -95.35899, 
        weight: 1, 
    },
    {
        latitude: 29.736223,  
        longitude: -95.600903, 
        weight: 1, 
    },
    {
        latitude: 29.691685,  
        longitude: -95.366077, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.848582,  
        longitude: -95.394562, 
        weight: 1, 
    },
    {
        latitude: 29.675651,  
        longitude: -95.528224, 
        weight: 1, 
    },
    {
        latitude: 29.694859,  
        longitude: -95.492878, 
        weight: 1, 
    },
    {
        latitude: 29.64282,  
        longitude: -95.402059, 
        weight: 1, 
    },
    {
        latitude: 29.707296,  
        longitude: -95.495198, 
        weight: 1, 
    },
    {
        latitude: 29.773774,  
        longitude: -95.356881, 
        weight: 1, 
    },
    {
        latitude: 29.72101,  
        longitude: -95.468134, 
        weight: 1, 
    },
    {
        latitude: 29.728079,  
        longitude: -95.369838, 
        weight: 1, 
    },
    {
        latitude: 29.724659,  
        longitude: -95.311005, 
        weight: 1, 
    },
    {
        latitude: 29.6483,  
        longitude: -95.508342, 
        weight: 1, 
    },
    {
        latitude: 29.678806,  
        longitude: -95.569451, 
        weight: 1, 
    },
    {
        latitude: 30.070206,  
        longitude: -95.197176, 
        weight: 1, 
    },
    {
        latitude: 30.070206,  
        longitude: -95.197176, 
        weight: 1, 
    },
    {
        latitude: 29.947985,  
        longitude: -95.397685, 
        weight: 1, 
    },
    {
        latitude: 29.651239,  
        longitude: -95.515249, 
        weight: 1, 
    },
    {
        latitude: 29.639479,  
        longitude: -95.242268, 
        weight: 1, 
    },
    {
        latitude: 29.822077,  
        longitude: -95.334824, 
        weight: 1, 
    },
    {
        latitude: 29.68232,  
        longitude: -95.368172, 
        weight: 1, 
    },
    {
        latitude: 29.751113,  
        longitude: -95.377166, 
        weight: 1, 
    },
    {
        latitude: 29.681791,  
        longitude: -95.261402, 
        weight: 1, 
    },
    {
        latitude: 29.764822,  
        longitude: -95.381344, 
        weight: 1, 
    },
    {
        latitude: 29.846224,  
        longitude: -95.346658, 
        weight: 1, 
    },
    {
        latitude: 29.728384,  
        longitude: -95.544187, 
        weight: 1, 
    },
    {
        latitude: 29.779594,  
        longitude: -95.560614, 
        weight: 1, 
    },
    {
        latitude: 29.862498,  
        longitude: -95.372982, 
        weight: 1, 
    },
    {
        latitude: 29.640542,  
        longitude: -95.463569, 
        weight: 1, 
    },
    {
        latitude: 29.94528,  
        longitude: -95.414609, 
        weight: 1, 
    },
    {
        latitude: 29.840654,  
        longitude: -95.348024, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.856423,  
        longitude: -95.50538, 
        weight: 1, 
    },
    {
        latitude: 29.674976,  
        longitude: -95.54239, 
        weight: 1, 
    },
    {
        latitude: 29.846281,  
        longitude: -95.402991, 
        weight: 1, 
    },
    {
        latitude: 29.627844,  
        longitude: -95.39248, 
        weight: 1, 
    },
    {
        latitude: 29.755291,  
        longitude: -95.626295, 
        weight: 1, 
    },
    {
        latitude: 29.932767,  
        longitude: -95.291832, 
        weight: 1, 
    },
    {
        latitude: 29.664815,  
        longitude: -95.316575, 
        weight: 1, 
    },
    {
        latitude: 29.702068,  
        longitude: -95.363354, 
        weight: 1, 
    },
    {
        latitude: 29.957766,  
        longitude: -95.541661, 
        weight: 1, 
    },
    {
        latitude: 29.803134,  
        longitude: -95.338254, 
        weight: 1, 
    },
    {
        latitude: 29.750237,  
        longitude: -95.37033, 
        weight: 1, 
    },
    {
        latitude: 29.769106,  
        longitude: -95.38303, 
        weight: 1, 
    },
    {
        latitude: 29.652749,  
        longitude: -95.550025, 
        weight: 1, 
    },
    {
        latitude: 29.584524,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.584524,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.783898,  
        longitude: -95.553916, 
        weight: 1, 
    },
    {
        latitude: 29.616179,  
        longitude: -95.384574, 
        weight: 1, 
    },
    {
        latitude: 29.694157,  
        longitude: -95.400568, 
        weight: 1, 
    },
    {
        latitude: 29.735324,  
        longitude: -95.466743, 
        weight: 1, 
    },
    {
        latitude: 29.845277,  
        longitude: -95.399631, 
        weight: 1, 
    },
    {
        latitude: 29.845328,  
        longitude: -95.546825, 
        weight: 1, 
    },
    {
        latitude: 29.967081,  
        longitude: -95.334896, 
        weight: 1, 
    },
    {
        latitude: 29.712889,  
        longitude: -95.35807, 
        weight: 1, 
    },
    {
        latitude: 29.78507,  
        longitude: -95.548583, 
        weight: 1, 
    },
    {
        latitude: 29.773151,  
        longitude: -95.354607, 
        weight: 1, 
    },
    {
        latitude: 29.780468,  
        longitude: -95.352815, 
        weight: 1, 
    },
    {
        latitude: 29.780468,  
        longitude: -95.352815, 
        weight: 1, 
    },
    {
        latitude: 29.671438,  
        longitude: -95.554941, 
        weight: 1, 
    },
    {
        latitude: 29.671438,  
        longitude: -95.554941, 
        weight: 1, 
    },
    {
        latitude: 29.837592,  
        longitude: -95.368042, 
        weight: 1, 
    },
    {
        latitude: 29.729712,  
        longitude: -95.444919, 
        weight: 1, 
    },
    {
        latitude: 29.753638,  
        longitude: -95.357828, 
        weight: 1, 
    },
    {
        latitude: 29.753638,  
        longitude: -95.357828, 
        weight: 1, 
    },
    {
        latitude: 29.680446,  
        longitude: -95.369243, 
        weight: 1, 
    },
    {
        latitude: 29.744459,  
        longitude: -95.300896, 
        weight: 1, 
    },
    {
        latitude: 29.685867,  
        longitude: -95.464355, 
        weight: 1, 
    },
    {
        latitude: 29.776943,  
        longitude: -95.582623, 
        weight: 1, 
    },
    {
        latitude: 29.698938,  
        longitude: -95.533453, 
        weight: 1, 
    },
    {
        latitude: 29.850618,  
        longitude: -95.473317, 
        weight: 1, 
    },
    {
        latitude: 29.858779,  
        longitude: -95.406048, 
        weight: 1, 
    },
    {
        latitude: 29.858779,  
        longitude: -95.406048, 
        weight: 1, 
    },
    {
        latitude: 29.86627,  
        longitude: -95.47417, 
        weight: 1, 
    },
    {
        latitude: 29.779451,  
        longitude: -95.535913, 
        weight: 1, 
    },
    {
        latitude: 29.807961,  
        longitude: -95.545161, 
        weight: 1, 
    },
    {
        latitude: 29.644375,  
        longitude: -95.499728, 
        weight: 1, 
    },
    {
        latitude: 29.698051,  
        longitude: -95.486721, 
        weight: 1, 
    },
    {
        latitude: 29.698051,  
        longitude: -95.486721, 
        weight: 1, 
    },
    {
        latitude: 29.740536,  
        longitude: -95.466951, 
        weight: 1, 
    },
    {
        latitude: 29.593151,  
        longitude: -95.196851, 
        weight: 1, 
    },
    {
        latitude: 29.945052,  
        longitude: -95.331779, 
        weight: 1, 
    },
    {
        latitude: 29.817485,  
        longitude: -95.384259, 
        weight: 1, 
    },
    {
        latitude: 29.73027,  
        longitude: -95.378429, 
        weight: 1, 
    },
    {
        latitude: 29.964358,  
        longitude: -95.551152, 
        weight: 1, 
    },
    {
        latitude: 29.737153,  
        longitude: -95.514184, 
        weight: 1, 
    },
    {
        latitude: 29.679706,  
        longitude: -95.472011, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.646475,  
        longitude: -95.508307, 
        weight: 1, 
    },
    {
        latitude: 29.74685,  
        longitude: -95.479515, 
        weight: 1, 
    },
    {
        latitude: 29.74595,  
        longitude: -95.366016, 
        weight: 1, 
    },
    {
        latitude: 29.86439,  
        longitude: -95.304947, 
        weight: 1, 
    },
    {
        latitude: 29.779422,  
        longitude: -95.535943, 
        weight: 1, 
    },
    {
        latitude: 29.779422,  
        longitude: -95.535943, 
        weight: 1, 
    },
    {
        latitude: 29.662447,  
        longitude: -95.276824, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.657137,  
        longitude: -95.495836, 
        weight: 1, 
    },
    {
        latitude: 29.83134,  
        longitude: -95.283421, 
        weight: 1, 
    },
    {
        latitude: 29.788217,  
        longitude: -95.218686, 
        weight: 1, 
    },
    {
        latitude: 29.787415,  
        longitude: -95.311244, 
        weight: 1, 
    },
    {
        latitude: 29.787415,  
        longitude: -95.311244, 
        weight: 1, 
    },
    {
        latitude: 29.960292,  
        longitude: -95.552305, 
        weight: 1, 
    },
    {
        latitude: 29.755929,  
        longitude: -95.367041, 
        weight: 1, 
    },
    {
        latitude: 29.685995,  
        longitude: -95.336546, 
        weight: 1, 
    },
    {
        latitude: 29.828898,  
        longitude: -95.362461, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.787998,  
        longitude: -95.186951, 
        weight: 1, 
    },
    {
        latitude: 29.824931,  
        longitude: -95.378288, 
        weight: 1, 
    },
    {
        latitude: 29.807961,  
        longitude: -95.545161, 
        weight: 1, 
    },
    {
        latitude: 29.957159,  
        longitude: -95.542239, 
        weight: 1, 
    },
    {
        latitude: 29.560293,  
        longitude: -95.123474, 
        weight: 1, 
    },
    {
        latitude: 29.799041,  
        longitude: -95.37557, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.859614,  
        longitude: -95.401648, 
        weight: 1, 
    },
    {
        latitude: 29.740751,  
        longitude: -95.460882, 
        weight: 1, 
    },
    {
        latitude: 29.736107,  
        longitude: -95.343516, 
        weight: 1, 
    },
    {
        latitude: 29.73797,  
        longitude: -95.357155, 
        weight: 1, 
    },
    {
        latitude: 29.697747,  
        longitude: -95.297226, 
        weight: 1, 
    },
    {
        latitude: 29.697747,  
        longitude: -95.297226, 
        weight: 1, 
    },
    {
        latitude: 29.797929,  
        longitude: -95.322273, 
        weight: 1, 
    },
    {
        latitude: 29.782093,  
        longitude: -95.559097, 
        weight: 1, 
    },
    {
        latitude: 29.766638,  
        longitude: -95.398086, 
        weight: 1, 
    },
    {
        latitude: 29.638955,  
        longitude: -95.240581, 
        weight: 1, 
    },
    {
        latitude: 29.701476,  
        longitude: -95.295198, 
        weight: 1, 
    },
    {
        latitude: 29.736222,  
        longitude: -95.514181, 
        weight: 1, 
    },
    {
        latitude: 29.699721,  
        longitude: -95.281521, 
        weight: 1, 
    },
    {
        latitude: 29.799072,  
        longitude: -95.437286, 
        weight: 1, 
    },
    {
        latitude: 29.67824,  
        longitude: -95.415055, 
        weight: 1, 
    },
    {
        latitude: 29.67824,  
        longitude: -95.415055, 
        weight: 1, 
    },
    {
        latitude: 29.688776,  
        longitude: -95.260775, 
        weight: 1, 
    },
    {
        latitude: 29.855494,  
        longitude: -95.356404, 
        weight: 1, 
    },
    {
        latitude: 29.677494,  
        longitude: -95.413982, 
        weight: 1, 
    },
    {
        latitude: 29.943418,  
        longitude: -95.395254, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.651632,  
        longitude: -95.232167, 
        weight: 1, 
    },
    {
        latitude: 29.961365,  
        longitude: -95.424695, 
        weight: 1, 
    },
    {
        latitude: 29.741832,  
        longitude: -95.410728, 
        weight: 1, 
    },
    {
        latitude: 29.677656,  
        longitude: -95.369678, 
        weight: 1, 
    },
    {
        latitude: 29.670931,  
        longitude: -95.503139, 
        weight: 1, 
    },
    {
        latitude: 29.75584,  
        longitude: -95.628034, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.945052,  
        longitude: -95.331777, 
        weight: 1, 
    },
    {
        latitude: 29.738972,  
        longitude: -95.309693, 
        weight: 1, 
    },
    {
        latitude: 29.736199,  
        longitude: -95.603856, 
        weight: 1, 
    },
    {
        latitude: 29.736199,  
        longitude: -95.603856, 
        weight: 1, 
    },
    {
        latitude: 29.736199,  
        longitude: -95.603856, 
        weight: 1, 
    },
    {
        latitude: 29.711954,  
        longitude: -95.311162, 
        weight: 1, 
    },
    {
        latitude: 29.747179,  
        longitude: -95.372755, 
        weight: 1, 
    },
    {
        latitude: 29.614671,  
        longitude: -95.215, 
        weight: 1, 
    },
    {
        latitude: 29.543296,  
        longitude: -95.143887, 
        weight: 1, 
    },
    {
        latitude: 29.594495,  
        longitude: -95.495828, 
        weight: 1, 
    },
    {
        latitude: 29.744866,  
        longitude: -95.595205, 
        weight: 1, 
    },
    {
        latitude: 29.733688,  
        longitude: -95.651425, 
        weight: 1, 
    },
    {
        latitude: 29.739746,  
        longitude: -95.347379, 
        weight: 1, 
    },
    {
        latitude: 29.666288,  
        longitude: -95.463393, 
        weight: 1, 
    },
    {
        latitude: 29.645538,  
        longitude: -95.483805, 
        weight: 1, 
    },
    {
        latitude: 29.698381,  
        longitude: -95.377282, 
        weight: 1, 
    },
    {
        latitude: 29.68217,  
        longitude: -95.417477, 
        weight: 1, 
    },
    {
        latitude: 29.707191,  
        longitude: -95.545615, 
        weight: 1, 
    },
    {
        latitude: 29.808469,  
        longitude: -95.317068, 
        weight: 1, 
    },
    {
        latitude: 29.666893,  
        longitude: -95.261276, 
        weight: 1, 
    },
    {
        latitude: 29.737513,  
        longitude: -95.511186, 
        weight: 1, 
    },
    {
        latitude: 29.967311,  
        longitude: -95.535669, 
        weight: 1, 
    },
    {
        latitude: 29.628178,  
        longitude: -95.491399, 
        weight: 1, 
    },
    {
        latitude: 29.750573,  
        longitude: -95.324352, 
        weight: 1, 
    },
    {
        latitude: 29.785742,  
        longitude: -95.64056, 
        weight: 1, 
    },
    {
        latitude: 29.82595,  
        longitude: -95.432589, 
        weight: 1, 
    },
    {
        latitude: 29.820116,  
        longitude: -95.46994, 
        weight: 1, 
    },
    {
        latitude: 29.676907,  
        longitude: -95.343456, 
        weight: 1, 
    },
    {
        latitude: 29.676907,  
        longitude: -95.343456, 
        weight: 1, 
    },
    {
        latitude: 29.757542,  
        longitude: -95.364535, 
        weight: 1, 
    },
    {
        latitude: 29.725647,  
        longitude: -95.405708, 
        weight: 1, 
    },
    {
        latitude: 29.828416,  
        longitude: -95.376018, 
        weight: 1, 
    },
    {
        latitude: 29.952171,  
        longitude: -95.399731, 
        weight: 1, 
    },
    {
        latitude: 29.930965,  
        longitude: -95.300271, 
        weight: 1, 
    },
    {
        latitude: 29.681953,  
        longitude: -95.328801, 
        weight: 1, 
    },
    {
        latitude: 29.669541,  
        longitude: -95.309164, 
        weight: 1, 
    },
    {
        latitude: 29.77918,  
        longitude: -95.544478, 
        weight: 1, 
    },
    {
        latitude: 29.85763,  
        longitude: -95.300361, 
        weight: 1, 
    },
    {
        latitude: 29.698283,  
        longitude: -95.401406, 
        weight: 1, 
    },
    {
        latitude: 29.771558,  
        longitude: -95.21408, 
        weight: 1, 
    },
    {
        latitude: 29.732476,  
        longitude: -95.342337, 
        weight: 1, 
    },
    {
        latitude: 29.731785,  
        longitude: -95.488478, 
        weight: 1, 
    },
    {
        latitude: 29.630898,  
        longitude: -95.272445, 
        weight: 1, 
    },
    {
        latitude: 29.616162,  
        longitude: -95.215564, 
        weight: 1, 
    },
    {
        latitude: 29.94892,  
        longitude: -95.415099, 
        weight: 1, 
    },
    {
        latitude: 29.641948,  
        longitude: -95.241817, 
        weight: 1, 
    },
    {
        latitude: 29.772976,  
        longitude: -95.319031, 
        weight: 1, 
    },
    {
        latitude: 29.696916,  
        longitude: -95.587717, 
        weight: 1, 
    },
    {
        latitude: 29.623398,  
        longitude: -95.226453, 
        weight: 1, 
    },
    {
        latitude: 29.741506,  
        longitude: -95.450672, 
        weight: 1, 
    },
    {
        latitude: 29.776503,  
        longitude: -95.312234, 
        weight: 1, 
    },
    {
        latitude: 29.688475,  
        longitude: -95.569762, 
        weight: 1, 
    },
    {
        latitude: 29.831938,  
        longitude: -95.32578, 
        weight: 1, 
    },
    {
        latitude: 29.748776,  
        longitude: -95.34199, 
        weight: 1, 
    },
    {
        latitude: 29.747923,  
        longitude: -95.371897, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.815714,  
        longitude: -95.361157, 
        weight: 1, 
    },
    {
        latitude: 29.753123,  
        longitude: -95.403745, 
        weight: 1, 
    },
    {
        latitude: 29.802902,  
        longitude: -95.432563, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.637044,  
        longitude: -95.232818, 
        weight: 1, 
    },
    {
        latitude: 29.77105,  
        longitude: -95.2132, 
        weight: 1, 
    },
    {
        latitude: 29.699407,  
        longitude: -95.490795, 
        weight: 1, 
    },
    {
        latitude: 29.616706,  
        longitude: -95.379583, 
        weight: 1, 
    },
    {
        latitude: 29.716075,  
        longitude: -95.314927, 
        weight: 1, 
    },
    {
        latitude: 29.605871,  
        longitude: -95.493306, 
        weight: 1, 
    },
    {
        latitude: 29.703647,  
        longitude: -95.594349, 
        weight: 1, 
    },
    {
        latitude: 29.94252,  
        longitude: -95.398308, 
        weight: 1, 
    },
    {
        latitude: 29.637545,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.72899,  
        longitude: -95.527426, 
        weight: 1, 
    },
    {
        latitude: 29.688923,  
        longitude: -95.584931, 
        weight: 1, 
    },
    {
        latitude: 29.7431,  
        longitude: -95.263537, 
        weight: 1, 
    },
    {
        latitude: 29.731314,  
        longitude: -95.464197, 
        weight: 1, 
    },
    {
        latitude: 29.804769,  
        longitude: -95.498493, 
        weight: 1, 
    },
    {
        latitude: 29.946384,  
        longitude: -95.404789, 
        weight: 1, 
    },
    {
        latitude: 29.740077,  
        longitude: -95.576195, 
        weight: 1, 
    },
    {
        latitude: 29.65746,  
        longitude: -95.508432, 
        weight: 1, 
    },
    {
        latitude: 29.664466,  
        longitude: -95.539605, 
        weight: 1, 
    },
    {
        latitude: 29.811457,  
        longitude: -95.429322, 
        weight: 1, 
    },
    {
        latitude: 29.664563,  
        longitude: -95.508516, 
        weight: 1, 
    },
    {
        latitude: 29.841534,  
        longitude: -95.473207, 
        weight: 1, 
    },
    {
        latitude: 29.746316,  
        longitude: -95.576913, 
        weight: 1, 
    },
    {
        latitude: 29.742229,  
        longitude: -95.305881, 
        weight: 1, 
    },
    {
        latitude: 29.64929,  
        longitude: -95.218626, 
        weight: 1, 
    },
    {
        latitude: 29.850527,  
        longitude: -95.262362, 
        weight: 1, 
    },
    {
        latitude: 29.721148,  
        longitude: -95.476472, 
        weight: 1, 
    },
    {
        latitude: 29.732903,  
        longitude: -95.555324, 
        weight: 1, 
    },
    {
        latitude: 29.783893,  
        longitude: -95.557489, 
        weight: 1, 
    },
    {
        latitude: 29.859347,  
        longitude: -95.333021, 
        weight: 1, 
    },
    {
        latitude: 29.702315,  
        longitude: -95.359262, 
        weight: 1, 
    },
    {
        latitude: 29.812687,  
        longitude: -95.545212, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.695427,  
        longitude: -95.285593, 
        weight: 1, 
    },
    {
        latitude: 29.673288,  
        longitude: -95.53408, 
        weight: 1, 
    },
    {
        latitude: 29.816624,  
        longitude: -95.535146, 
        weight: 1, 
    },
    {
        latitude: 29.671995,  
        longitude: -95.508577, 
        weight: 1, 
    },
    {
        latitude: 29.702362,  
        longitude: -95.28653, 
        weight: 1, 
    },
    {
        latitude: 29.776016,  
        longitude: -95.427318, 
        weight: 1, 
    },
    {
        latitude: 29.776016,  
        longitude: -95.427318, 
        weight: 1, 
    },
    {
        latitude: 29.677949,  
        longitude: -95.549877, 
        weight: 1, 
    },
    {
        latitude: 29.781784,  
        longitude: -95.457263, 
        weight: 1, 
    },
    {
        latitude: 29.946293,  
        longitude: -95.331337, 
        weight: 1, 
    },
    {
        latitude: 29.685362,  
        longitude: -95.391398, 
        weight: 1, 
    },
    {
        latitude: 29.727702,  
        longitude: -95.381745, 
        weight: 1, 
    },
    {
        latitude: 29.964118,  
        longitude: -95.550775, 
        weight: 1, 
    },
    {
        latitude: 29.776421,  
        longitude: -95.360772, 
        weight: 1, 
    },
    {
        latitude: 29.75037,  
        longitude: -95.61874, 
        weight: 1, 
    },
    {
        latitude: 29.753559,  
        longitude: -95.286469, 
        weight: 1, 
    },
    {
        latitude: 29.860066,  
        longitude: -95.468563, 
        weight: 1, 
    },
    {
        latitude: 29.711643,  
        longitude: -95.315314, 
        weight: 1, 
    },
    {
        latitude: 29.72507,  
        longitude: -95.525148, 
        weight: 1, 
    },
    {
        latitude: 29.744809,  
        longitude: -95.449952, 
        weight: 1, 
    },
    {
        latitude: 29.790737,  
        longitude: -95.416626, 
        weight: 1, 
    },
    {
        latitude: 29.684966,  
        longitude: -95.241165, 
        weight: 1, 
    },
    {
        latitude: 29.684966,  
        longitude: -95.241165, 
        weight: 1, 
    },
    {
        latitude: 29.816335,  
        longitude: -95.410435, 
        weight: 1, 
    },
    {
        latitude: 29.721685,  
        longitude: -95.37608, 
        weight: 1, 
    },
    {
        latitude: 29.80427,  
        longitude: -95.493932, 
        weight: 1, 
    },
    {
        latitude: 29.741611,  
        longitude: -95.33001, 
        weight: 1, 
    },
    {
        latitude: 29.822114,  
        longitude: -95.269898, 
        weight: 1, 
    },
    {
        latitude: 29.731764,  
        longitude: -95.493233, 
        weight: 1, 
    },
    {
        latitude: 29.950475,  
        longitude: -95.403973, 
        weight: 1, 
    },
    {
        latitude: 29.746132,  
        longitude: -95.362051, 
        weight: 1, 
    },
    {
        latitude: 29.633897,  
        longitude: -95.478218, 
        weight: 1, 
    },
    {
        latitude: 29.779302,  
        longitude: -95.315791, 
        weight: 1, 
    },
    {
        latitude: 29.740425,  
        longitude: -95.466518, 
        weight: 1, 
    },
    {
        latitude: 29.740425,  
        longitude: -95.466518, 
        weight: 1, 
    },
    {
        latitude: 29.736198,  
        longitude: -95.604713, 
        weight: 1, 
    },
    {
        latitude: 29.80616,  
        longitude: -95.282108, 
        weight: 1, 
    },
    {
        latitude: 29.80616,  
        longitude: -95.282108, 
        weight: 1, 
    },
    {
        latitude: 29.613811,  
        longitude: -95.386623, 
        weight: 1, 
    },
    {
        latitude: 29.767951,  
        longitude: -95.318767, 
        weight: 1, 
    },
    {
        latitude: 29.767951,  
        longitude: -95.318767, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 29.802817,  
        longitude: -95.482138, 
        weight: 1, 
    },
    {
        latitude: 29.985542,  
        longitude: -95.308429, 
        weight: 1, 
    },
    {
        latitude: 29.717451,  
        longitude: -95.416679, 
        weight: 1, 
    },
    {
        latitude: 29.779159,  
        longitude: -95.218568, 
        weight: 1, 
    },
    {
        latitude: 29.977253,  
        longitude: -95.280169, 
        weight: 1, 
    },
    {
        latitude: 29.977253,  
        longitude: -95.280169, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.731708,  
        longitude: -95.564914, 
        weight: 1, 
    },
    {
        latitude: 29.794451,  
        longitude: -95.34405, 
        weight: 1, 
    },
    {
        latitude: 29.732991,  
        longitude: -95.563844, 
        weight: 1, 
    },
    {
        latitude: 29.863182,  
        longitude: -95.427717, 
        weight: 1, 
    },
    {
        latitude: 29.862863,  
        longitude: -95.3977, 
        weight: 1, 
    },
    {
        latitude: 29.83259,  
        longitude: -95.405869, 
        weight: 1, 
    },
    {
        latitude: 29.624007,  
        longitude: -95.433608, 
        weight: 1, 
    },
    {
        latitude: 29.807072,  
        longitude: -95.320672, 
        weight: 1, 
    },
    {
        latitude: 29.930367,  
        longitude: -95.318739, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.675464,  
        longitude: -95.548256, 
        weight: 1, 
    },
    {
        latitude: 29.963165,  
        longitude: -95.425781, 
        weight: 1, 
    },
    {
        latitude: 29.766195,  
        longitude: -95.402855, 
        weight: 1, 
    },
    {
        latitude: 29.946027,  
        longitude: -95.444503, 
        weight: 1, 
    },
    {
        latitude: 29.946027,  
        longitude: -95.444503, 
        weight: 1, 
    },
    {
        latitude: 29.804893,  
        longitude: -95.28407, 
        weight: 1, 
    },
    {
        latitude: 29.804893,  
        longitude: -95.28407, 
        weight: 1, 
    },
    {
        latitude: 29.804893,  
        longitude: -95.28407, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.961373,  
        longitude: -95.424678, 
        weight: 1, 
    },
    {
        latitude: 29.869846,  
        longitude: -95.403072, 
        weight: 1, 
    },
    {
        latitude: 29.664563,  
        longitude: -95.508516, 
        weight: 1, 
    },
    {
        latitude: 29.664563,  
        longitude: -95.508516, 
        weight: 1, 
    },
    {
        latitude: 29.744582,  
        longitude: -95.391259, 
        weight: 1, 
    },
    {
        latitude: 29.764072,  
        longitude: -95.43006, 
        weight: 1, 
    },
    {
        latitude: 29.850712,  
        longitude: -95.510145, 
        weight: 1, 
    },
    {
        latitude: 29.758399,  
        longitude: -95.284981, 
        weight: 1, 
    },
    {
        latitude: 29.851944,  
        longitude: -95.262365, 
        weight: 1, 
    },
    {
        latitude: 29.747391,  
        longitude: -95.390984, 
        weight: 1, 
    },
    {
        latitude: 29.794414,  
        longitude: -95.342095, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.781735,  
        longitude: -95.457176, 
        weight: 1, 
    },
    {
        latitude: 29.800234,  
        longitude: -95.544799, 
        weight: 1, 
    },
    {
        latitude: 29.636486,  
        longitude: -95.235996, 
        weight: 1, 
    },
    {
        latitude: 29.730169,  
        longitude: -95.423148, 
        weight: 1, 
    },
    {
        latitude: 29.723409,  
        longitude: -95.387664, 
        weight: 1, 
    },
    {
        latitude: 29.67181,  
        longitude: -95.377895, 
        weight: 1, 
    },
    {
        latitude: 29.930601,  
        longitude: -95.302826, 
        weight: 1, 
    },
    {
        latitude: 29.731708,  
        longitude: -95.564914, 
        weight: 1, 
    },
    {
        latitude: 29.943127,  
        longitude: -95.427337, 
        weight: 1, 
    },
    {
        latitude: 29.675251,  
        longitude: -95.551365, 
        weight: 1, 
    },
    {
        latitude: 29.924646,  
        longitude: -95.411751, 
        weight: 1, 
    },
    {
        latitude: 29.672128,  
        longitude: -95.322766, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.762169,  
        longitude: -95.4201, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.681547,  
        longitude: -95.508722, 
        weight: 1, 
    },
    {
        latitude: 29.668941,  
        longitude: -95.401942, 
        weight: 1, 
    },
    {
        latitude: 29.668941,  
        longitude: -95.401942, 
        weight: 1, 
    },
    {
        latitude: 29.741087,  
        longitude: -95.456834, 
        weight: 1, 
    },
    {
        latitude: 29.709559,  
        longitude: -95.3076, 
        weight: 1, 
    },
    {
        latitude: 29.619728,  
        longitude: -95.45398, 
        weight: 1, 
    },
    {
        latitude: 29.784054,  
        longitude: -95.336706, 
        weight: 1, 
    },
    {
        latitude: 29.950589,  
        longitude: -95.400734, 
        weight: 1, 
    },
    {
        latitude: 29.95305,  
        longitude: -95.5384, 
        weight: 1, 
    },
    {
        latitude: 29.748232,  
        longitude: -95.373142, 
        weight: 1, 
    },
    {
        latitude: 29.748535,  
        longitude: -95.372894, 
        weight: 1, 
    },
    {
        latitude: 29.748535,  
        longitude: -95.372894, 
        weight: 1, 
    },
    {
        latitude: 29.986061,  
        longitude: -95.352425, 
        weight: 1, 
    },
    {
        latitude: 29.640463,  
        longitude: -95.463578, 
        weight: 1, 
    },
    {
        latitude: 29.679979,  
        longitude: -95.52825, 
        weight: 1, 
    },
    {
        latitude: 29.704483,  
        longitude: -95.277964, 
        weight: 1, 
    },
    {
        latitude: 29.636569,  
        longitude: -95.243785, 
        weight: 1, 
    },
    {
        latitude: 29.950183,  
        longitude: -95.399325, 
        weight: 1, 
    },
    {
        latitude: 29.950183,  
        longitude: -95.399325, 
        weight: 1, 
    },
    {
        latitude: 29.791054,  
        longitude: -95.523571, 
        weight: 1, 
    },
    {
        latitude: 29.791054,  
        longitude: -95.523571, 
        weight: 1, 
    },
    {
        latitude: 29.94798,  
        longitude: -95.395756, 
        weight: 1, 
    },
    {
        latitude: 29.928448,  
        longitude: -95.398137, 
        weight: 1, 
    },
    {
        latitude: 29.83143,  
        longitude: -95.482151, 
        weight: 1, 
    },
    {
        latitude: 29.740733,  
        longitude: -95.462966, 
        weight: 1, 
    },
    {
        latitude: 29.95504,  
        longitude: -95.541256, 
        weight: 1, 
    },
    {
        latitude: 29.671817,  
        longitude: -95.531914, 
        weight: 1, 
    },
    {
        latitude: 29.695229,  
        longitude: -95.402954, 
        weight: 1, 
    },
    {
        latitude: 29.730225,  
        longitude: -95.41783, 
        weight: 1, 
    },
    {
        latitude: 29.793022,  
        longitude: -95.688385, 
        weight: 1, 
    },
    {
        latitude: 29.762846,  
        longitude: -95.360367, 
        weight: 1, 
    },
    {
        latitude: 29.823579,  
        longitude: -95.434344, 
        weight: 1, 
    },
    {
        latitude: 29.72289,  
        longitude: -95.476483, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.812972,  
        longitude: -95.395963, 
        weight: 1, 
    },
    {
        latitude: 29.730269,  
        longitude: -95.348179, 
        weight: 1, 
    },
    {
        latitude: 29.709784,  
        longitude: -95.538842, 
        weight: 1, 
    },
    {
        latitude: 29.732779,  
        longitude: -95.384119, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.860791,  
        longitude: -95.312642, 
        weight: 1, 
    },
    {
        latitude: 29.809857,  
        longitude: -95.519455, 
        weight: 1, 
    },
    {
        latitude: 29.665934,  
        longitude: -95.572954, 
        weight: 1, 
    },
    {
        latitude: 29.965956,  
        longitude: -95.421867, 
        weight: 1, 
    },
    {
        latitude: 29.771416,  
        longitude: -95.600458, 
        weight: 1, 
    },
    {
        latitude: 29.781583,  
        longitude: -95.290942, 
        weight: 1, 
    },
    {
        latitude: 29.781583,  
        longitude: -95.290942, 
        weight: 1, 
    },
    {
        latitude: 29.781583,  
        longitude: -95.290942, 
        weight: 1, 
    },
    {
        latitude: 29.967921,  
        longitude: -95.534557, 
        weight: 1, 
    },
    {
        latitude: 29.672323,  
        longitude: -95.436794, 
        weight: 1, 
    },
    {
        latitude: 29.659873,  
        longitude: -95.571389, 
        weight: 1, 
    },
    {
        latitude: 29.675358,  
        longitude: -95.549998, 
        weight: 1, 
    },
    {
        latitude: 29.639783,  
        longitude: -95.463556, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.702387,  
        longitude: -95.422917, 
        weight: 1, 
    },
    {
        latitude: 29.665623,  
        longitude: -95.272777, 
        weight: 1, 
    },
    {
        latitude: 29.72295,  
        longitude: -95.484583, 
        weight: 1, 
    },
    {
        latitude: 29.960497,  
        longitude: -95.42658, 
        weight: 1, 
    },
    {
        latitude: 29.837332,  
        longitude: -95.384336, 
        weight: 1, 
    },
    {
        latitude: 29.860169,  
        longitude: -95.374118, 
        weight: 1, 
    },
    {
        latitude: 29.732945,  
        longitude: -95.466697, 
        weight: 1, 
    },
    {
        latitude: 29.848239,  
        longitude: -95.342884, 
        weight: 1, 
    },
    {
        latitude: 29.725734,  
        longitude: -95.57906, 
        weight: 1, 
    },
    {
        latitude: 29.674482,  
        longitude: -95.355043, 
        weight: 1, 
    },
    {
        latitude: 29.851687,  
        longitude: -95.333012, 
        weight: 1, 
    },
    {
        latitude: 29.737665,  
        longitude: -95.496353, 
        weight: 1, 
    },
    {
        latitude: 29.801706,  
        longitude: -95.367998, 
        weight: 1, 
    },
    {
        latitude: 29.841881,  
        longitude: -95.375904, 
        weight: 1, 
    },
    {
        latitude: 29.841881,  
        longitude: -95.375904, 
        weight: 1, 
    },
    {
        latitude: 29.675249,  
        longitude: -95.551261, 
        weight: 1, 
    },
    {
        latitude: 29.679583,  
        longitude: -95.564823, 
        weight: 1, 
    },
    {
        latitude: 29.753258,  
        longitude: -95.382179, 
        weight: 1, 
    },
    {
        latitude: 29.753258,  
        longitude: -95.382179, 
        weight: 1, 
    },
    {
        latitude: 29.671332,  
        longitude: -95.461318, 
        weight: 1, 
    },
    {
        latitude: 29.679915,  
        longitude: -95.395848, 
        weight: 1, 
    },
    {
        latitude: 29.848691,  
        longitude: -95.342721, 
        weight: 1, 
    },
    {
        latitude: 29.763415,  
        longitude: -95.360807, 
        weight: 1, 
    },
    {
        latitude: 29.616162,  
        longitude: -95.215564, 
        weight: 1, 
    },
    {
        latitude: 29.730458,  
        longitude: -95.418651, 
        weight: 1, 
    },
    {
        latitude: 29.730458,  
        longitude: -95.418651, 
        weight: 1, 
    },
    {
        latitude: 29.730458,  
        longitude: -95.418651, 
        weight: 1, 
    },
    {
        latitude: 29.86983,  
        longitude: -95.405598, 
        weight: 1, 
    },
    {
        latitude: 29.683417,  
        longitude: -95.277397, 
        weight: 1, 
    },
    {
        latitude: 29.816926,  
        longitude: -95.553909, 
        weight: 1, 
    },
    {
        latitude: 29.787027,  
        longitude: -95.307202, 
        weight: 1, 
    },
    {
        latitude: 29.773529,  
        longitude: -95.352455, 
        weight: 1, 
    },
    {
        latitude: 29.711776,  
        longitude: -95.556272, 
        weight: 1, 
    },
    {
        latitude: 29.837379,  
        longitude: -95.384336, 
        weight: 1, 
    },
    {
        latitude: 29.827078,  
        longitude: -95.384079, 
        weight: 1, 
    },
    {
        latitude: 29.762979,  
        longitude: -95.360113, 
        weight: 1, 
    },
    {
        latitude: 29.837332,  
        longitude: -95.384336, 
        weight: 1, 
    },
    {
        latitude: 29.766956,  
        longitude: -95.409394, 
        weight: 1, 
    },
    {
        latitude: 29.631973,  
        longitude: -95.344433, 
        weight: 1, 
    },
    {
        latitude: 29.948615,  
        longitude: -95.331358, 
        weight: 1, 
    },
    {
        latitude: 29.942909,  
        longitude: -95.446592, 
        weight: 1, 
    },
    {
        latitude: 29.654467,  
        longitude: -95.253815, 
        weight: 1, 
    },
    {
        latitude: 29.704595,  
        longitude: -95.555695, 
        weight: 1, 
    },
    {
        latitude: 30.001531,  
        longitude: -95.281432, 
        weight: 1, 
    },
    {
        latitude: 29.740077,  
        longitude: -95.576195, 
        weight: 1, 
    },
    {
        latitude: 29.802973,  
        longitude: -95.508751, 
        weight: 1, 
    },
    {
        latitude: 29.777443,  
        longitude: -95.59878, 
        weight: 1, 
    },
    {
        latitude: 29.685477,  
        longitude: -95.43424, 
        weight: 1, 
    },
    {
        latitude: 29.860773,  
        longitude: -95.349922, 
        weight: 1, 
    },
    {
        latitude: 29.731792,  
        longitude: -95.489784, 
        weight: 1, 
    },
    {
        latitude: 29.733039,  
        longitude: -95.54637, 
        weight: 1, 
    },
    {
        latitude: 29.828831,  
        longitude: -95.509251, 
        weight: 1, 
    },
    {
        latitude: 29.635712,  
        longitude: -95.469441, 
        weight: 1, 
    },
    {
        latitude: 29.675086,  
        longitude: -95.584544, 
        weight: 1, 
    },
    {
        latitude: 29.652651,  
        longitude: -95.55887, 
        weight: 1, 
    },
    {
        latitude: 29.817352,  
        longitude: -95.372656, 
        weight: 1, 
    },
    {
        latitude: 29.637234,  
        longitude: -95.336713, 
        weight: 1, 
    },
    {
        latitude: 29.590091,  
        longitude: -95.458501, 
        weight: 1, 
    },
    {
        latitude: 29.590091,  
        longitude: -95.458501, 
        weight: 1, 
    },
    {
        latitude: 29.756878,  
        longitude: -95.364765, 
        weight: 1, 
    },
    {
        latitude: 29.687005,  
        longitude: -95.420352, 
        weight: 1, 
    },
    {
        latitude: 29.687005,  
        longitude: -95.420352, 
        weight: 1, 
    },
    {
        latitude: 29.746113,  
        longitude: -95.578102, 
        weight: 1, 
    },
    {
        latitude: 29.676079,  
        longitude: -95.267313, 
        weight: 1, 
    },
    {
        latitude: 29.829988,  
        longitude: -95.381366, 
        weight: 1, 
    },
    {
        latitude: 29.747052,  
        longitude: -95.585049, 
        weight: 1, 
    },
    {
        latitude: 29.938698,  
        longitude: -95.356255, 
        weight: 1, 
    },
    {
        latitude: 29.796639,  
        longitude: -95.334101, 
        weight: 1, 
    },
    {
        latitude: 29.63476,  
        longitude: -95.463581, 
        weight: 1, 
    },
    {
        latitude: 29.63476,  
        longitude: -95.463581, 
        weight: 1, 
    },
    {
        latitude: 29.624806,  
        longitude: -95.346525, 
        weight: 1, 
    },
    {
        latitude: 29.840644,  
        longitude: -95.389961, 
        weight: 1, 
    },
    {
        latitude: 29.745512,  
        longitude: -95.3927, 
        weight: 1, 
    },
    {
        latitude: 29.807167,  
        longitude: -95.456132, 
        weight: 1, 
    },
    {
        latitude: 29.773197,  
        longitude: -95.231367, 
        weight: 1, 
    },
    {
        latitude: 29.773197,  
        longitude: -95.231367, 
        weight: 1, 
    },
    {
        latitude: 29.847307,  
        longitude: -95.401492, 
        weight: 1, 
    },
    {
        latitude: 29.73519,  
        longitude: -95.403029, 
        weight: 1, 
    },
    {
        latitude: 29.831619,  
        longitude: -95.29374, 
        weight: 1, 
    },
    {
        latitude: 29.89898,  
        longitude: -95.412636, 
        weight: 1, 
    },
    {
        latitude: 29.605644,  
        longitude: -95.215534, 
        weight: 1, 
    },
    {
        latitude: 29.661567,  
        longitude: -95.612887, 
        weight: 1, 
    },
    {
        latitude: 29.735357,  
        longitude: -95.388045, 
        weight: 1, 
    },
    {
        latitude: 29.744824,  
        longitude: -95.49732, 
        weight: 1, 
    },
    {
        latitude: 29.905145,  
        longitude: -95.412765, 
        weight: 1, 
    },
    {
        latitude: 29.656657,  
        longitude: -95.501, 
        weight: 1, 
    },
    {
        latitude: 29.688462,  
        longitude: -95.569828, 
        weight: 1, 
    },
    {
        latitude: 29.698381,  
        longitude: -95.475199, 
        weight: 1, 
    },
    {
        latitude: 29.733597,  
        longitude: -95.288798, 
        weight: 1, 
    },
    {
        latitude: 29.639386,  
        longitude: -95.445107, 
        weight: 1, 
    },
    {
        latitude: 29.700604,  
        longitude: -95.49699, 
        weight: 1, 
    },
    {
        latitude: 29.672186,  
        longitude: -95.438617, 
        weight: 1, 
    },
    {
        latitude: 29.697467,  
        longitude: -95.331513, 
        weight: 1, 
    },
    {
        latitude: 30.001531,  
        longitude: -95.281432, 
        weight: 1, 
    },
    {
        latitude: 29.883672,  
        longitude: -95.470722, 
        weight: 1, 
    },
    {
        latitude: 29.769941,  
        longitude: -95.326424, 
        weight: 1, 
    },
    {
        latitude: 29.769941,  
        longitude: -95.326424, 
        weight: 1, 
    },
    {
        latitude: 29.740794,  
        longitude: -95.418775, 
        weight: 1, 
    },
    {
        latitude: 29.637715,  
        longitude: -95.232422, 
        weight: 1, 
    },
    {
        latitude: 29.605961,  
        longitude: -95.242588, 
        weight: 1, 
    },
    {
        latitude: 29.842568,  
        longitude: -95.290457, 
        weight: 1, 
    },
    {
        latitude: 29.777551,  
        longitude: -95.224258, 
        weight: 1, 
    },
    {
        latitude: 29.741575,  
        longitude: -95.382527, 
        weight: 1, 
    },
    {
        latitude: 29.933973,  
        longitude: -95.417431, 
        weight: 1, 
    },
    {
        latitude: 29.862157,  
        longitude: -95.416878, 
        weight: 1, 
    },
    {
        latitude: 29.67296,  
        longitude: -95.506916, 
        weight: 1, 
    },
    {
        latitude: 29.817802,  
        longitude: -95.531669, 
        weight: 1, 
    },
    {
        latitude: 29.734505,  
        longitude: -95.3905, 
        weight: 1, 
    },
    {
        latitude: 29.853475,  
        longitude: -95.277837, 
        weight: 1, 
    },
    {
        latitude: 29.697375,  
        longitude: -95.374089, 
        weight: 1, 
    },
    {
        latitude: 29.687445,  
        longitude: -95.360573, 
        weight: 1, 
    },
    {
        latitude: 29.738589,  
        longitude: -95.408153, 
        weight: 1, 
    },
    {
        latitude: 29.728898,  
        longitude: -95.528684, 
        weight: 1, 
    },
    {
        latitude: 29.713038,  
        longitude: -95.355085, 
        weight: 1, 
    },
    {
        latitude: 29.645134,  
        longitude: -95.508293, 
        weight: 1, 
    },
    {
        latitude: 29.779613,  
        longitude: -95.477689, 
        weight: 1, 
    },
    {
        latitude: 29.660581,  
        longitude: -95.500359, 
        weight: 1, 
    },
    {
        latitude: 29.719546,  
        longitude: -95.610525, 
        weight: 1, 
    },
    {
        latitude: 29.771462,  
        longitude: -95.388962, 
        weight: 1, 
    },
    {
        latitude: 29.771462,  
        longitude: -95.388962, 
        weight: 1, 
    },
    {
        latitude: 29.771462,  
        longitude: -95.388962, 
        weight: 1, 
    },
    {
        latitude: 29.87128,  
        longitude: -95.473537, 
        weight: 1, 
    },
    {
        latitude: 29.736169,  
        longitude: -95.605853, 
        weight: 1, 
    },
    {
        latitude: 29.93885,  
        longitude: -95.315667, 
        weight: 1, 
    },
    {
        latitude: 29.68162,  
        longitude: -95.508567, 
        weight: 1, 
    },
    {
        latitude: 29.721511,  
        longitude: -95.520317, 
        weight: 1, 
    },
    {
        latitude: 29.752781,  
        longitude: -95.378126, 
        weight: 1, 
    },
    {
        latitude: 29.784255,  
        longitude: -95.646335, 
        weight: 1, 
    },
    {
        latitude: 30.026382,  
        longitude: -95.10623, 
        weight: 1, 
    },
    {
        latitude: 29.785514,  
        longitude: -95.694517, 
        weight: 1, 
    },
    {
        latitude: 29.785514,  
        longitude: -95.694517, 
        weight: 1, 
    },
    {
        latitude: 29.7075,  
        longitude: -95.60726, 
        weight: 1, 
    },
    {
        latitude: 29.7387,  
        longitude: -95.600956, 
        weight: 1, 
    },
    {
        latitude: 29.599898,  
        longitude: -95.129781, 
        weight: 1, 
    },
    {
        latitude: 29.586896,  
        longitude: -95.515791, 
        weight: 1, 
    },
    {
        latitude: 29.725052,  
        longitude: -95.356804, 
        weight: 1, 
    },
    {
        latitude: 29.72991,  
        longitude: -95.575791, 
        weight: 1, 
    },
    {
        latitude: 29.644378,  
        longitude: -95.357002, 
        weight: 1, 
    },
    {
        latitude: 29.58898,  
        longitude: -95.45288, 
        weight: 1, 
    },
    {
        latitude: 29.58898,  
        longitude: -95.45288, 
        weight: 1, 
    },
    {
        latitude: 29.594453,  
        longitude: -95.107954, 
        weight: 1, 
    },
    {
        latitude: 29.75031,  
        longitude: -95.456639, 
        weight: 1, 
    },
    {
        latitude: 29.742307,  
        longitude: -95.386517, 
        weight: 1, 
    },
    {
        latitude: 29.737453,  
        longitude: -95.507777, 
        weight: 1, 
    },
    {
        latitude: 29.817937,  
        longitude: -95.410442, 
        weight: 1, 
    },
    {
        latitude: 29.825817,  
        longitude: -95.394363, 
        weight: 1, 
    },
    {
        latitude: 29.616609,  
        longitude: -95.355316, 
        weight: 1, 
    },
    {
        latitude: 29.575881,  
        longitude: -95.162051, 
        weight: 1, 
    },
    {
        latitude: 29.774579,  
        longitude: -95.38147, 
        weight: 1, 
    },
    {
        latitude: 29.6761,  
        longitude: -95.3949, 
        weight: 1, 
    },
    {
        latitude: 29.652996,  
        longitude: -95.260699, 
        weight: 1, 
    },
    {
        latitude: 29.690683,  
        longitude: -95.353026, 
        weight: 1, 
    },
    {
        latitude: 29.627629,  
        longitude: -95.235153, 
        weight: 1, 
    },
    {
        latitude: 29.627629,  
        longitude: -95.235153, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.732779,  
        longitude: -95.384119, 
        weight: 1, 
    },
    {
        latitude: 29.741575,  
        longitude: -95.382527, 
        weight: 1, 
    },
    {
        latitude: 29.826479,  
        longitude: -95.284429, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.741689,  
        longitude: -95.470724, 
        weight: 1, 
    },
    {
        latitude: 29.778466,  
        longitude: -95.410485, 
        weight: 1, 
    },
    {
        latitude: 29.771077,  
        longitude: -95.403593, 
        weight: 1, 
    },
    {
        latitude: 29.606226,  
        longitude: -95.247112, 
        weight: 1, 
    },
    {
        latitude: 29.752526,  
        longitude: -95.391524, 
        weight: 1, 
    },
    {
        latitude: 29.653863,  
        longitude: -95.258353, 
        weight: 1, 
    },
    {
        latitude: 29.830054,  
        longitude: -95.361052, 
        weight: 1, 
    },
    {
        latitude: 29.698411,  
        longitude: -95.376627, 
        weight: 1, 
    },
    {
        latitude: 29.689867,  
        longitude: -95.417675, 
        weight: 1, 
    },
    {
        latitude: 29.823452,  
        longitude: -95.284214, 
        weight: 1, 
    },
    {
        latitude: 29.677034,  
        longitude: -95.496006, 
        weight: 1, 
    },
    {
        latitude: 29.612124,  
        longitude: -95.338751, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.79743,  
        longitude: -95.576275, 
        weight: 1, 
    },
    {
        latitude: 29.79743,  
        longitude: -95.576275, 
        weight: 1, 
    },
    {
        latitude: 29.839651,  
        longitude: -95.346021, 
        weight: 1, 
    },
    {
        latitude: 29.938711,  
        longitude: -95.353792, 
        weight: 1, 
    },
    {
        latitude: 29.602144,  
        longitude: -95.464454, 
        weight: 1, 
    },
    {
        latitude: 29.667515,  
        longitude: -95.569083, 
        weight: 1, 
    },
    {
        latitude: 29.740088,  
        longitude: -95.466887, 
        weight: 1, 
    },
    {
        latitude: 29.794989,  
        longitude: -95.52807, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.938996,  
        longitude: -95.397596, 
        weight: 1, 
    },
    {
        latitude: 29.673861,  
        longitude: -95.289208, 
        weight: 1, 
    },
    {
        latitude: 29.642294,  
        longitude: -95.244857, 
        weight: 1, 
    },
    {
        latitude: 29.709118,  
        longitude: -95.489395, 
        weight: 1, 
    },
    {
        latitude: 29.663305,  
        longitude: -95.532907, 
        weight: 1, 
    },
    {
        latitude: 29.837567,  
        longitude: -95.487688, 
        weight: 1, 
    },
    {
        latitude: 29.820116,  
        longitude: -95.46994, 
        weight: 1, 
    },
    {
        latitude: 29.714697,  
        longitude: -95.366035, 
        weight: 1, 
    },
    {
        latitude: 29.811102,  
        longitude: -95.277107, 
        weight: 1, 
    },
    {
        latitude: 29.846941,  
        longitude: -95.342939, 
        weight: 1, 
    },
    {
        latitude: 29.873626,  
        longitude: -95.397732, 
        weight: 1, 
    },
    {
        latitude: 29.879301,  
        longitude: -95.291348, 
        weight: 1, 
    },
    {
        latitude: 29.72804,  
        longitude: -95.525171, 
        weight: 1, 
    },
    {
        latitude: 29.624027,  
        longitude: -95.428409, 
        weight: 1, 
    },
    {
        latitude: 29.730137,  
        longitude: -95.468884, 
        weight: 1, 
    },
    {
        latitude: 29.715405,  
        longitude: -95.614741, 
        weight: 1, 
    },
    {
        latitude: 29.931745,  
        longitude: -95.410754, 
        weight: 1, 
    },
    {
        latitude: 29.743354,  
        longitude: -95.485412, 
        weight: 1, 
    },
    {
        latitude: 29.747424,  
        longitude: -95.566331, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.770011,  
        longitude: -95.283854, 
        weight: 1, 
    },
    {
        latitude: 29.633254,  
        longitude: -95.413789, 
        weight: 1, 
    },
    {
        latitude: 29.633254,  
        longitude: -95.413789, 
        weight: 1, 
    },
    {
        latitude: 29.844039,  
        longitude: -95.439887, 
        weight: 1, 
    },
    {
        latitude: 29.736463,  
        longitude: -95.590864, 
        weight: 1, 
    },
    {
        latitude: 29.707185,  
        longitude: -95.501561, 
        weight: 1, 
    },
    {
        latitude: 29.84646,  
        longitude: -95.454529, 
        weight: 1, 
    },
    {
        latitude: 29.774648,  
        longitude: -95.218439, 
        weight: 1, 
    },
    {
        latitude: 29.652624,  
        longitude: -95.355342, 
        weight: 1, 
    },
    {
        latitude: 29.848122,  
        longitude: -95.344416, 
        weight: 1, 
    },
    {
        latitude: 29.822798,  
        longitude: -95.545266, 
        weight: 1, 
    },
    {
        latitude: 29.995857,  
        longitude: -95.303085, 
        weight: 1, 
    },
    {
        latitude: 29.675291,  
        longitude: -95.614354, 
        weight: 1, 
    },
    {
        latitude: 29.675291,  
        longitude: -95.614354, 
        weight: 1, 
    },
    {
        latitude: 29.78107,  
        longitude: -95.372945, 
        weight: 1, 
    },
    {
        latitude: 29.805761,  
        longitude: -95.446651, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.655427,  
        longitude: -95.249254, 
        weight: 1, 
    },
    {
        latitude: 29.865211,  
        longitude: -95.503473, 
        weight: 1, 
    },
    {
        latitude: 29.720389,  
        longitude: -95.535387, 
        weight: 1, 
    },
    {
        latitude: 29.848691,  
        longitude: -95.342721, 
        weight: 1, 
    },
    {
        latitude: 29.666,  
        longitude: -95.528095, 
        weight: 1, 
    },
    {
        latitude: 29.828632,  
        longitude: -95.381462, 
        weight: 1, 
    },
    {
        latitude: 29.828632,  
        longitude: -95.381462, 
        weight: 1, 
    },
    {
        latitude: 29.809182,  
        longitude: -95.399351, 
        weight: 1, 
    },
    {
        latitude: 29.81241,  
        longitude: -95.445364, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.666304,  
        longitude: -95.508548, 
        weight: 1, 
    },
    {
        latitude: 29.852437,  
        longitude: -95.362448, 
        weight: 1, 
    },
    {
        latitude: 29.953421,  
        longitude: -95.376823, 
        weight: 1, 
    },
    {
        latitude: 29.750292,  
        longitude: -95.572116, 
        weight: 1, 
    },
    {
        latitude: 29.825964,  
        longitude: -95.304607, 
        weight: 1, 
    },
    {
        latitude: 29.71313,  
        longitude: -95.398062, 
        weight: 1, 
    },
    {
        latitude: 29.70491,  
        longitude: -95.546556, 
        weight: 1, 
    },
    {
        latitude: 29.905442,  
        longitude: -95.294092, 
        weight: 1, 
    },
    {
        latitude: 29.943118,  
        longitude: -95.426971, 
        weight: 1, 
    },
    {
        latitude: 29.832527,  
        longitude: -95.524404, 
        weight: 1, 
    },
    {
        latitude: 29.95637,  
        longitude: -95.423141, 
        weight: 1, 
    },
    {
        latitude: 29.826541,  
        longitude: -95.284428, 
        weight: 1, 
    },
    {
        latitude: 29.713769,  
        longitude: -95.354739, 
        weight: 1, 
    },
    {
        latitude: 29.812305,  
        longitude: -95.318978, 
        weight: 1, 
    },
    {
        latitude: 29.738579,  
        longitude: -95.408243, 
        weight: 1, 
    },
    {
        latitude: 29.759591,  
        longitude: -95.360027, 
        weight: 1, 
    },
    {
        latitude: 29.55497,  
        longitude: -95.156036, 
        weight: 1, 
    },
    {
        latitude: 29.688261,  
        longitude: -95.570218, 
        weight: 1, 
    },
    {
        latitude: 29.750289,  
        longitude: -95.561894, 
        weight: 1, 
    },
    {
        latitude: 29.831345,  
        longitude: -95.297476, 
        weight: 1, 
    },
    {
        latitude: 29.83513,  
        longitude: -95.485056, 
        weight: 1, 
    },
    {
        latitude: 29.808493,  
        longitude: -95.469662, 
        weight: 1, 
    },
    {
        latitude: 29.814594,  
        longitude: -95.429367, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.606016,  
        longitude: -95.228358, 
        weight: 1, 
    },
    {
        latitude: 29.613393,  
        longitude: -95.442875, 
        weight: 1, 
    },
    {
        latitude: 29.736287,  
        longitude: -95.596736, 
        weight: 1, 
    },
    {
        latitude: 29.66915,  
        longitude: -95.336969, 
        weight: 1, 
    },
    {
        latitude: 29.794687,  
        longitude: -95.312352, 
        weight: 1, 
    },
    {
        latitude: 29.666631,  
        longitude: -95.575975, 
        weight: 1, 
    },
    {
        latitude: 29.635859,  
        longitude: -95.257656, 
        weight: 1, 
    },
    {
        latitude: 29.801646,  
        longitude: -95.426938, 
        weight: 1, 
    },
    {
        latitude: 29.735453,  
        longitude: -95.38426, 
        weight: 1, 
    },
    {
        latitude: 29.60282,  
        longitude: -95.506931, 
        weight: 1, 
    },
    {
        latitude: 29.724137,  
        longitude: -95.567029, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.755881,  
        longitude: -95.63946, 
        weight: 1, 
    },
    {
        latitude: 29.666613,  
        longitude: -95.604719, 
        weight: 1, 
    },
    {
        latitude: 29.785644,  
        longitude: -95.573092, 
        weight: 1, 
    },
    {
        latitude: 29.696573,  
        longitude: -95.367355, 
        weight: 1, 
    },
    {
        latitude: 29.696573,  
        longitude: -95.367355, 
        weight: 1, 
    },
    {
        latitude: 29.724189,  
        longitude: -95.386921, 
        weight: 1, 
    },
    {
        latitude: 29.624677,  
        longitude: -95.243744, 
        weight: 1, 
    },
    {
        latitude: 29.784967,  
        longitude: -95.524797, 
        weight: 1, 
    },
    {
        latitude: 29.678578,  
        longitude: -95.430609, 
        weight: 1, 
    },
    {
        latitude: 29.812229,  
        longitude: -95.399383, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.769568,  
        longitude: -95.351826, 
        weight: 1, 
    },
    {
        latitude: 29.732594,  
        longitude: -95.568329, 
        weight: 1, 
    },
    {
        latitude: 29.691083,  
        longitude: -95.518345, 
        weight: 1, 
    },
    {
        latitude: 29.854898,  
        longitude: -95.396192, 
        weight: 1, 
    },
    {
        latitude: 29.80662,  
        longitude: -95.454197, 
        weight: 1, 
    },
    {
        latitude: 29.802832,  
        longitude: -95.48093, 
        weight: 1, 
    },
    {
        latitude: 29.943132,  
        longitude: -95.427109, 
        weight: 1, 
    },
    {
        latitude: 29.798987,  
        longitude: -95.436712, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.673744,  
        longitude: -95.554999, 
        weight: 1, 
    },
    {
        latitude: 29.626364,  
        longitude: -95.382552, 
        weight: 1, 
    },
    {
        latitude: 29.659835,  
        longitude: -95.48782, 
        weight: 1, 
    },
    {
        latitude: 29.637906,  
        longitude: -95.397068, 
        weight: 1, 
    },
    {
        latitude: 29.846941,  
        longitude: -95.342939, 
        weight: 1, 
    },
    {
        latitude: 29.818342,  
        longitude: -95.404712, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.865427,  
        longitude: -95.370969, 
        weight: 1, 
    },
    {
        latitude: 29.578678,  
        longitude: -95.14742, 
        weight: 1, 
    },
    {
        latitude: 29.760147,  
        longitude: -95.217155, 
        weight: 1, 
    },
    {
        latitude: 29.837679,  
        longitude: -95.570004, 
        weight: 1, 
    },
    {
        latitude: 29.837679,  
        longitude: -95.570004, 
        weight: 1, 
    },
    {
        latitude: 29.712357,  
        longitude: -95.494199, 
        weight: 1, 
    },
    {
        latitude: 29.750507,  
        longitude: -95.572149, 
        weight: 1, 
    },
    {
        latitude: 29.880276,  
        longitude: -95.292876, 
        weight: 1, 
    },
    {
        latitude: 29.672615,  
        longitude: -95.539465, 
        weight: 1, 
    },
    {
        latitude: 29.748144,  
        longitude: -95.300597, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.7431,  
        longitude: -95.263537, 
        weight: 1, 
    },
    {
        latitude: 29.778538,  
        longitude: -95.430468, 
        weight: 1, 
    },
    {
        latitude: 29.778538,  
        longitude: -95.430468, 
        weight: 1, 
    },
    {
        latitude: 29.744081,  
        longitude: -95.394529, 
        weight: 1, 
    },
    {
        latitude: 29.675947,  
        longitude: -95.54132, 
        weight: 1, 
    },
    {
        latitude: 29.675947,  
        longitude: -95.54132, 
        weight: 1, 
    },
    {
        latitude: 29.688914,  
        longitude: -95.585958, 
        weight: 1, 
    },
    {
        latitude: 29.738887,  
        longitude: -95.380498, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.980588,  
        longitude: -95.346079, 
        weight: 1, 
    },
    {
        latitude: 29.955784,  
        longitude: -95.542218, 
        weight: 1, 
    },
    {
        latitude: 29.636962,  
        longitude: -95.339282, 
        weight: 1, 
    },
    {
        latitude: 29.636962,  
        longitude: -95.339282, 
        weight: 1, 
    },
    {
        latitude: 29.608983,  
        longitude: -95.226995, 
        weight: 1, 
    },
    {
        latitude: 29.739834,  
        longitude: -95.293392, 
        weight: 1, 
    },
    {
        latitude: 29.819484,  
        longitude: -95.466794, 
        weight: 1, 
    },
    {
        latitude: 29.765733,  
        longitude: -95.43087, 
        weight: 1, 
    },
    {
        latitude: 29.828405,  
        longitude: -95.448068, 
        weight: 1, 
    },
    {
        latitude: 29.733644,  
        longitude: -95.598384, 
        weight: 1, 
    },
    {
        latitude: 29.733644,  
        longitude: -95.598384, 
        weight: 1, 
    },
    {
        latitude: 29.778958,  
        longitude: -95.558092, 
        weight: 1, 
    },
    {
        latitude: 29.71387,  
        longitude: -95.410446, 
        weight: 1, 
    },
    {
        latitude: 29.822537,  
        longitude: -95.437965, 
        weight: 1, 
    },
    {
        latitude: 29.741557,  
        longitude: -95.358139, 
        weight: 1, 
    },
    {
        latitude: 29.662111,  
        longitude: -95.363184, 
        weight: 1, 
    },
    {
        latitude: 29.6735,  
        longitude: -95.344043, 
        weight: 1, 
    },
    {
        latitude: 29.960575,  
        longitude: -95.424198, 
        weight: 1, 
    },
    {
        latitude: 29.960575,  
        longitude: -95.424198, 
        weight: 1, 
    },
    {
        latitude: 29.807809,  
        longitude: -95.413011, 
        weight: 1, 
    },
    {
        latitude: 29.729031,  
        longitude: -95.524132, 
        weight: 1, 
    },
    {
        latitude: 29.729031,  
        longitude: -95.524132, 
        weight: 1, 
    },
    {
        latitude: 29.732223,  
        longitude: -95.424451, 
        weight: 1, 
    },
    {
        latitude: 29.785063,  
        longitude: -95.549659, 
        weight: 1, 
    },
    {
        latitude: 29.616893,  
        longitude: -95.465005, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.740948,  
        longitude: -95.497559, 
        weight: 1, 
    },
    {
        latitude: 29.848304,  
        longitude: -95.313538, 
        weight: 1, 
    },
    {
        latitude: 29.881525,  
        longitude: -95.424705, 
        weight: 1, 
    },
    {
        latitude: 29.779422,  
        longitude: -95.535943, 
        weight: 1, 
    },
    {
        latitude: 29.779422,  
        longitude: -95.535943, 
        weight: 1, 
    },
    {
        latitude: 29.795941,  
        longitude: -95.272453, 
        weight: 1, 
    },
    {
        latitude: 29.776455,  
        longitude: -95.315353, 
        weight: 1, 
    },
    {
        latitude: 29.666189,  
        longitude: -95.559382, 
        weight: 1, 
    },
    {
        latitude: 29.666189,  
        longitude: -95.559382, 
        weight: 1, 
    },
    {
        latitude: 29.642935,  
        longitude: -95.360558, 
        weight: 1, 
    },
    {
        latitude: 29.849744,  
        longitude: -95.485312, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.962575,  
        longitude: -95.421867, 
        weight: 1, 
    },
    {
        latitude: 29.679276,  
        longitude: -95.537766, 
        weight: 1, 
    },
    {
        latitude: 29.736554,  
        longitude: -95.58592, 
        weight: 1, 
    },
    {
        latitude: 29.744081,  
        longitude: -95.394529, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.77652,  
        longitude: -95.311539, 
        weight: 1, 
    },
    {
        latitude: 29.736544,  
        longitude: -95.586748, 
        weight: 1, 
    },
    {
        latitude: 29.785099,  
        longitude: -95.532315, 
        weight: 1, 
    },
    {
        latitude: 29.785099,  
        longitude: -95.532315, 
        weight: 1, 
    },
    {
        latitude: 29.71365,  
        longitude: -95.389243, 
        weight: 1, 
    },
    {
        latitude: 29.721302,  
        longitude: -95.38995, 
        weight: 1, 
    },
    {
        latitude: 29.729235,  
        longitude: -95.634803, 
        weight: 1, 
    },
    {
        latitude: 29.73902,  
        longitude: -95.379227, 
        weight: 1, 
    },
    {
        latitude: 29.967311,  
        longitude: -95.535669, 
        weight: 1, 
    },
    {
        latitude: 29.803019,  
        longitude: -95.511741, 
        weight: 1, 
    },
    {
        latitude: 29.729674,  
        longitude: -95.346177, 
        weight: 1, 
    },
    {
        latitude: 29.720902,  
        longitude: -95.385582, 
        weight: 1, 
    },
    {
        latitude: 29.761919,  
        longitude: -95.3583, 
        weight: 1, 
    },
    {
        latitude: 29.850913,  
        longitude: -95.413447, 
        weight: 1, 
    },
    {
        latitude: 29.885204,  
        longitude: -95.487661, 
        weight: 1, 
    },
    {
        latitude: 29.809787,  
        longitude: -95.525498, 
        weight: 1, 
    },
    {
        latitude: 29.833434,  
        longitude: -95.375829, 
        weight: 1, 
    },
    {
        latitude: 29.786095,  
        longitude: -95.360587, 
        weight: 1, 
    },
    {
        latitude: 29.786095,  
        longitude: -95.360587, 
        weight: 1, 
    },
    {
        latitude: 29.72796,  
        longitude: -95.350359, 
        weight: 1, 
    },
    {
        latitude: 29.771006,  
        longitude: -95.302231, 
        weight: 1, 
    },
    {
        latitude: 29.689805,  
        longitude: -95.507199, 
        weight: 1, 
    },
    {
        latitude: 29.829646,  
        longitude: -95.381152, 
        weight: 1, 
    },
    {
        latitude: 29.829646,  
        longitude: -95.381152, 
        weight: 1, 
    },
    {
        latitude: 29.966245,  
        longitude: -95.422944, 
        weight: 1, 
    },
    {
        latitude: 29.827195,  
        longitude: -95.39453, 
        weight: 1, 
    },
    {
        latitude: 29.624677,  
        longitude: -95.243744, 
        weight: 1, 
    },
    {
        latitude: 29.633783,  
        longitude: -95.41156, 
        weight: 1, 
    },
    {
        latitude: 29.840124,  
        longitude: -95.420264, 
        weight: 1, 
    },
    {
        latitude: 29.647592,  
        longitude: -95.37173, 
        weight: 1, 
    },
    {
        latitude: 29.733552,  
        longitude: -95.605797, 
        weight: 1, 
    },
    {
        latitude: 29.738594,  
        longitude: -95.407237, 
        weight: 1, 
    },
    {
        latitude: 29.785578,  
        longitude: -95.350855, 
        weight: 1, 
    },
    {
        latitude: 29.852002,  
        longitude: -95.349849, 
        weight: 1, 
    },
    {
        latitude: 29.832685,  
        longitude: -95.448074, 
        weight: 1, 
    },
    {
        latitude: 29.734348,  
        longitude: -95.392509, 
        weight: 1, 
    },
    {
        latitude: 29.812333,  
        longitude: -95.425107, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.81262,  
        longitude: -95.322513, 
        weight: 1, 
    },
    {
        latitude: 29.796763,  
        longitude: -95.33853, 
        weight: 1, 
    },
    {
        latitude: 29.722987,  
        longitude: -95.476597, 
        weight: 1, 
    },
    {
        latitude: 29.672819,  
        longitude: -95.424804, 
        weight: 1, 
    },
    {
        latitude: 29.820569,  
        longitude: -95.454867, 
        weight: 1, 
    },
    {
        latitude: 29.779644,  
        longitude: -95.456657, 
        weight: 1, 
    },
    {
        latitude: 29.613749,  
        longitude: -95.235245, 
        weight: 1, 
    },
    {
        latitude: 29.638654,  
        longitude: -95.250773, 
        weight: 1, 
    },
    {
        latitude: 29.631082,  
        longitude: -95.425232, 
        weight: 1, 
    },
    {
        latitude: 29.660572,  
        longitude: -95.5899, 
        weight: 1, 
    },
    {
        latitude: 29.683905,  
        longitude: -95.554703, 
        weight: 1, 
    },
    {
        latitude: 29.727886,  
        longitude: -95.41585, 
        weight: 1, 
    },
    {
        latitude: 29.789136,  
        longitude: -95.653169, 
        weight: 1, 
    },
    {
        latitude: 29.823809,  
        longitude: -95.402635, 
        weight: 1, 
    },
    {
        latitude: 29.779918,  
        longitude: -95.623188, 
        weight: 1, 
    },
    {
        latitude: 29.717288,  
        longitude: -95.546188, 
        weight: 1, 
    },
    {
        latitude: 29.595522,  
        longitude: -95.184864, 
        weight: 1, 
    },
    {
        latitude: 29.748144,  
        longitude: -95.300597, 
        weight: 1, 
    },
    {
        latitude: 29.77687,  
        longitude: -95.35133, 
        weight: 1, 
    },
    {
        latitude: 29.77687,  
        longitude: -95.35133, 
        weight: 1, 
    },
    {
        latitude: 29.699635,  
        longitude: -95.382732, 
        weight: 1, 
    },
    {
        latitude: 29.585971,  
        longitude: -95.453309, 
        weight: 1, 
    },
    {
        latitude: 29.772348,  
        longitude: -95.613807, 
        weight: 1, 
    },
    {
        latitude: 29.862048,  
        longitude: -95.26246, 
        weight: 1, 
    },
    {
        latitude: 29.729294,  
        longitude: -95.514779, 
        weight: 1, 
    },
    {
        latitude: 29.700252,  
        longitude: -95.493213, 
        weight: 1, 
    },
    {
        latitude: 29.576201,  
        longitude: -95.140265, 
        weight: 1, 
    },
    {
        latitude: 29.692574,  
        longitude: -95.334848, 
        weight: 1, 
    },
    {
        latitude: 29.629852,  
        longitude: -95.42237, 
        weight: 1, 
    },
    {
        latitude: 29.629852,  
        longitude: -95.42237, 
        weight: 1, 
    },
    {
        latitude: 29.864754,  
        longitude: -95.377621, 
        weight: 1, 
    },
    {
        latitude: 29.942181,  
        longitude: -95.440348, 
        weight: 1, 
    },
    {
        latitude: 29.703615,  
        longitude: -95.596153, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.725221,  
        longitude: -95.355885, 
        weight: 1, 
    },
    {
        latitude: 29.703626,  
        longitude: -95.594831, 
        weight: 1, 
    },
    {
        latitude: 29.725335,  
        longitude: -95.468167, 
        weight: 1, 
    },
    {
        latitude: 29.725335,  
        longitude: -95.468167, 
        weight: 1, 
    },
    {
        latitude: 29.57343,  
        longitude: -95.112182, 
        weight: 1, 
    },
    {
        latitude: 29.68217,  
        longitude: -95.417477, 
        weight: 1, 
    },
    {
        latitude: 29.954936,  
        longitude: -95.535277, 
        weight: 1, 
    },
    {
        latitude: 29.812401,  
        longitude: -95.416496, 
        weight: 1, 
    },
    {
        latitude: 29.802621,  
        longitude: -95.266612, 
        weight: 1, 
    },
    {
        latitude: 29.732244,  
        longitude: -95.543195, 
        weight: 1, 
    },
    {
        latitude: 29.627824,  
        longitude: -95.326819, 
        weight: 1, 
    },
    {
        latitude: 29.724095,  
        longitude: -95.46815, 
        weight: 1, 
    },
    {
        latitude: 29.602422,  
        longitude: -95.169839, 
        weight: 1, 
    },
    {
        latitude: 29.66524,  
        longitude: -95.463747, 
        weight: 1, 
    },
    {
        latitude: 29.767509,  
        longitude: -95.410553, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.680455,  
        longitude: -95.421177, 
        weight: 1, 
    },
    {
        latitude: 29.961285,  
        longitude: -95.547226, 
        weight: 1, 
    },
    {
        latitude: 29.723573,  
        longitude: -95.391396, 
        weight: 1, 
    },
    {
        latitude: 29.770444,  
        longitude: -95.411641, 
        weight: 1, 
    },
    {
        latitude: 29.77716,  
        longitude: -95.393954, 
        weight: 1, 
    },
    {
        latitude: 29.763334,  
        longitude: -95.461604, 
        weight: 1, 
    },
    {
        latitude: 29.849432,  
        longitude: -95.47661, 
        weight: 1, 
    },
    {
        latitude: 29.985642,  
        longitude: -95.317414, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.4515, 
        weight: 1, 
    },
    {
        latitude: 29.639907,  
        longitude: -95.364372, 
        weight: 1, 
    },
    {
        latitude: 29.688914,  
        longitude: -95.585958, 
        weight: 1, 
    },
    {
        latitude: 29.685998,  
        longitude: -95.370132, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.77355,  
        longitude: -95.39059, 
        weight: 1, 
    },
    {
        latitude: 29.663641,  
        longitude: -95.598061, 
        weight: 1, 
    },
    {
        latitude: 29.678407,  
        longitude: -95.351657, 
        weight: 1, 
    },
    {
        latitude: 29.680387,  
        longitude: -95.559626, 
        weight: 1, 
    },
    {
        latitude: 29.769263,  
        longitude: -95.213367, 
        weight: 1, 
    },
    {
        latitude: 29.692844,  
        longitude: -95.413091, 
        weight: 1, 
    },
    {
        latitude: 29.680387,  
        longitude: -95.559626, 
        weight: 1, 
    },
    {
        latitude: 29.648526,  
        longitude: -95.244859, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.653012,  
        longitude: -95.562443, 
        weight: 1, 
    },
    {
        latitude: 29.672298,  
        longitude: -95.280846, 
        weight: 1, 
    },
    {
        latitude: 29.725108,  
        longitude: -95.359081, 
        weight: 1, 
    },
    {
        latitude: 29.776518,  
        longitude: -95.313411, 
        weight: 1, 
    },
    {
        latitude: 29.690975,  
        longitude: -95.417141, 
        weight: 1, 
    },
    {
        latitude: 29.685517,  
        longitude: -95.53349, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.733713,  
        longitude: -95.335917, 
        weight: 1, 
    },
    {
        latitude: 29.784231,  
        longitude: -95.603054, 
        weight: 1, 
    },
    {
        latitude: 29.785095,  
        longitude: -95.533406, 
        weight: 1, 
    },
    {
        latitude: 29.547301,  
        longitude: -95.102414, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.703659,  
        longitude: -95.55676, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.710209,  
        longitude: -95.371094, 
        weight: 1, 
    },
    {
        latitude: 29.796721,  
        longitude: -95.546911, 
        weight: 1, 
    },
    {
        latitude: 29.796333,  
        longitude: -95.254279, 
        weight: 1, 
    },
    {
        latitude: 29.593313,  
        longitude: -95.179905, 
        weight: 1, 
    },
    {
        latitude: 29.792639,  
        longitude: -95.335918, 
        weight: 1, 
    },
    {
        latitude: 29.73619,  
        longitude: -95.605397, 
        weight: 1, 
    },
    {
        latitude: 30.070037,  
        longitude: -95.203636, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.740399,  
        longitude: -95.61419, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.970928,  
        longitude: -95.420877, 
        weight: 1, 
    },
    {
        latitude: 29.740883,  
        longitude: -95.532771, 
        weight: 1, 
    },
    {
        latitude: 29.677963,  
        longitude: -95.602389, 
        weight: 1, 
    },
    {
        latitude: 29.840961,  
        longitude: -95.487043, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.671778,  
        longitude: -95.277073, 
        weight: 1, 
    },
    {
        latitude: 29.779948,  
        longitude: -95.308418, 
        weight: 1, 
    },
    {
        latitude: 29.728292,  
        longitude: -95.451816, 
        weight: 1, 
    },
    {
        latitude: 29.703776,  
        longitude: -95.543681, 
        weight: 1, 
    },
    {
        latitude: 29.966421,  
        longitude: -95.537602, 
        weight: 1, 
    },
    {
        latitude: 29.769522,  
        longitude: -95.352829, 
        weight: 1, 
    },
    {
        latitude: 29.674649,  
        longitude: -95.577882, 
        weight: 1, 
    },
    {
        latitude: 29.835836,  
        longitude: -95.262099, 
        weight: 1, 
    },
    {
        latitude: 29.816861,  
        longitude: -95.348147, 
        weight: 1, 
    },
    {
        latitude: 29.925129,  
        longitude: -95.407062, 
        weight: 1, 
    },
    {
        latitude: 29.609575,  
        longitude: -95.250951, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 29.864984,  
        longitude: -95.335013, 
        weight: 1, 
    },
    {
        latitude: 29.720115,  
        longitude: -95.481195, 
        weight: 1, 
    },
    {
        latitude: 29.642112,  
        longitude: -95.24488, 
        weight: 1, 
    },
    {
        latitude: 29.679476,  
        longitude: -95.538655, 
        weight: 1, 
    },
    {
        latitude: 29.849541,  
        longitude: -95.320194, 
        weight: 1, 
    },
    {
        latitude: 29.773748,  
        longitude: -95.216489, 
        weight: 1, 
    },
    {
        latitude: 29.770267,  
        longitude: -95.213282, 
        weight: 1, 
    },
    {
        latitude: 29.802601,  
        longitude: -95.218919, 
        weight: 1, 
    },
    {
        latitude: 29.77772,  
        longitude: -95.190605, 
        weight: 1, 
    },
    {
        latitude: 29.760111,  
        longitude: -95.36085, 
        weight: 1, 
    },
    {
        latitude: 29.75337,  
        longitude: -95.485839, 
        weight: 1, 
    },
    {
        latitude: 29.816837,  
        longitude: -95.324347, 
        weight: 1, 
    },
    {
        latitude: 29.703759,  
        longitude: -95.298747, 
        weight: 1, 
    },
    {
        latitude: 29.673305,  
        longitude: -95.440518, 
        weight: 1, 
    },
    {
        latitude: 29.623572,  
        longitude: -95.226289, 
        weight: 1, 
    },
    {
        latitude: 29.787558,  
        longitude: -95.321154, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.831358,  
        longitude: -95.301328, 
        weight: 1, 
    },
    {
        latitude: 29.733039,  
        longitude: -95.54637, 
        weight: 1, 
    },
    {
        latitude: 29.836508,  
        longitude: -95.318864, 
        weight: 1, 
    },
    {
        latitude: 29.710975,  
        longitude: -95.588412, 
        weight: 1, 
    },
    {
        latitude: 29.822696,  
        longitude: -95.541762, 
        weight: 1, 
    },
    {
        latitude: 29.855209,  
        longitude: -95.515905, 
        weight: 1, 
    },
    {
        latitude: 29.652624,  
        longitude: -95.355342, 
        weight: 1, 
    },
    {
        latitude: 29.79082,  
        longitude: -95.273583, 
        weight: 1, 
    },
    {
        latitude: 29.675651,  
        longitude: -95.528224, 
        weight: 1, 
    },
    {
        latitude: 29.675651,  
        longitude: -95.528224, 
        weight: 1, 
    },
    {
        latitude: 29.753123,  
        longitude: -95.403745, 
        weight: 1, 
    },
    {
        latitude: 29.781007,  
        longitude: -95.327675, 
        weight: 1, 
    },
    {
        latitude: 29.744395,  
        longitude: -95.307629, 
        weight: 1, 
    },
    {
        latitude: 29.732229,  
        longitude: -95.543115, 
        weight: 1, 
    },
    {
        latitude: 29.851102,  
        longitude: -95.507898, 
        weight: 1, 
    },
    {
        latitude: 29.688574,  
        longitude: -95.569276, 
        weight: 1, 
    },
    {
        latitude: 29.675306,  
        longitude: -95.550528, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.647041,  
        longitude: -95.288662, 
        weight: 1, 
    },
    {
        latitude: 29.813168,  
        longitude: -95.410317, 
        weight: 1, 
    },
    {
        latitude: 29.601317,  
        longitude: -95.507502, 
        weight: 1, 
    },
    {
        latitude: 29.725635,  
        longitude: -95.38438, 
        weight: 1, 
    },
    {
        latitude: 29.678085,  
        longitude: -95.329956, 
        weight: 1, 
    },
    {
        latitude: 29.768724,  
        longitude: -95.21328, 
        weight: 1, 
    },
    {
        latitude: 29.767537,  
        longitude: -95.208027, 
        weight: 1, 
    },
    {
        latitude: 29.767158,  
        longitude: -95.213248, 
        weight: 1, 
    },
    {
        latitude: 29.81731,  
        longitude: -95.473681, 
        weight: 1, 
    },
    {
        latitude: 29.666798,  
        longitude: -95.573811, 
        weight: 1, 
    },
    {
        latitude: 29.939052,  
        longitude: -95.385799, 
        weight: 1, 
    },
    {
        latitude: 29.763359,  
        longitude: -95.461594, 
        weight: 1, 
    },
    {
        latitude: 29.856131,  
        longitude: -95.313912, 
        weight: 1, 
    },
    {
        latitude: 29.690158,  
        longitude: -95.417717, 
        weight: 1, 
    },
    {
        latitude: 29.717185,  
        longitude: -95.380681, 
        weight: 1, 
    },
    {
        latitude: 29.725968,  
        longitude: -95.359867, 
        weight: 1, 
    },
    {
        latitude: 29.985472,  
        longitude: -95.2765, 
        weight: 1, 
    },
    {
        latitude: 29.736671,  
        longitude: -95.57821, 
        weight: 1, 
    },
    {
        latitude: 29.858779,  
        longitude: -95.406048, 
        weight: 1, 
    },
    {
        latitude: 29.742794,  
        longitude: -95.534515, 
        weight: 1, 
    },
    {
        latitude: 29.599009,  
        longitude: -95.486958, 
        weight: 1, 
    },
    {
        latitude: 29.726438,  
        longitude: -95.385275, 
        weight: 1, 
    },
    {
        latitude: 29.736286,  
        longitude: -95.597764, 
        weight: 1, 
    },
    {
        latitude: 29.787912,  
        longitude: -95.367465, 
        weight: 1, 
    },
    {
        latitude: 29.853637,  
        longitude: -95.426042, 
        weight: 1, 
    },
    {
        latitude: 29.739084,  
        longitude: -95.336016, 
        weight: 1, 
    },
    {
        latitude: 29.824994,  
        longitude: -95.32061, 
        weight: 1, 
    },
    {
        latitude: 29.82824,  
        longitude: -95.433617, 
        weight: 1, 
    },
    {
        latitude: 29.775051,  
        longitude: -95.334871, 
        weight: 1, 
    },
    {
        latitude: 29.795627,  
        longitude: -95.563052, 
        weight: 1, 
    },
    {
        latitude: 29.73236,  
        longitude: -95.619649, 
        weight: 1, 
    },
    {
        latitude: 29.736925,  
        longitude: -95.559956, 
        weight: 1, 
    },
    {
        latitude: 29.658422,  
        longitude: -95.355446, 
        weight: 1, 
    },
    {
        latitude: 29.752973,  
        longitude: -95.358352, 
        weight: 1, 
    },
    {
        latitude: 29.749961,  
        longitude: -95.483457, 
        weight: 1, 
    },
    {
        latitude: 29.630288,  
        longitude: -95.464139, 
        weight: 1, 
    },
    {
        latitude: 29.774653,  
        longitude: -95.317474, 
        weight: 1, 
    },
    {
        latitude: 29.731365,  
        longitude: -95.359878, 
        weight: 1, 
    },
    {
        latitude: 29.974898,  
        longitude: -95.280798, 
        weight: 1, 
    },
    {
        latitude: 29.933046,  
        longitude: -95.414841, 
        weight: 1, 
    },
    {
        latitude: 29.63651,  
        longitude: -95.252716, 
        weight: 1, 
    },
    {
        latitude: 29.652624,  
        longitude: -95.355342, 
        weight: 1, 
    },
    {
        latitude: 29.652624,  
        longitude: -95.355342, 
        weight: 1, 
    },
    {
        latitude: 29.987325,  
        longitude: -95.342156, 
        weight: 1, 
    },
    {
        latitude: 29.748056,  
        longitude: -95.37067, 
        weight: 1, 
    },
    {
        latitude: 29.798416,  
        longitude: -95.342171, 
        weight: 1, 
    },
    {
        latitude: 29.655816,  
        longitude: -95.355422, 
        weight: 1, 
    },
    {
        latitude: 29.783545,  
        longitude: -95.446369, 
        weight: 1, 
    },
    {
        latitude: 29.772867,  
        longitude: -95.186548, 
        weight: 1, 
    },
    {
        latitude: 29.756998,  
        longitude: -95.625284, 
        weight: 1, 
    },
    {
        latitude: 29.694506,  
        longitude: -95.55669, 
        weight: 1, 
    },
    {
        latitude: 29.757207,  
        longitude: -95.40324, 
        weight: 1, 
    },
    {
        latitude: 29.942547,  
        longitude: -95.398407, 
        weight: 1, 
    },
    {
        latitude: 29.94252,  
        longitude: -95.398308, 
        weight: 1, 
    },
    {
        latitude: 29.73322,  
        longitude: -95.309669, 
        weight: 1, 
    },
    {
        latitude: 29.73322,  
        longitude: -95.309669, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.775728,  
        longitude: -95.222537, 
        weight: 1, 
    },
    {
        latitude: 29.757238,  
        longitude: -95.358005, 
        weight: 1, 
    },
    {
        latitude: 29.678753,  
        longitude: -95.505823, 
        weight: 1, 
    },
    {
        latitude: 29.687999,  
        longitude: -95.570144, 
        weight: 1, 
    },
    {
        latitude: 29.78141,  
        longitude: -95.553776, 
        weight: 1, 
    },
    {
        latitude: 29.850943,  
        longitude: -95.371509, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.671512,  
        longitude: -95.554922, 
        weight: 1, 
    },
    {
        latitude: 29.675928,  
        longitude: -95.41874, 
        weight: 1, 
    },
    {
        latitude: 29.637394,  
        longitude: -95.474577, 
        weight: 1, 
    },
    {
        latitude: 29.717156,  
        longitude: -95.294906, 
        weight: 1, 
    },
    {
        latitude: 29.637871,  
        longitude: -95.437439, 
        weight: 1, 
    },
    {
        latitude: 29.930367,  
        longitude: -95.318739, 
        weight: 1, 
    },
    {
        latitude: 29.930367,  
        longitude: -95.318739, 
        weight: 1, 
    },
    {
        latitude: 29.7231,  
        longitude: -95.544, 
        weight: 1, 
    },
    {
        latitude: 29.672273,  
        longitude: -95.282437, 
        weight: 1, 
    },
    {
        latitude: 29.672273,  
        longitude: -95.282437, 
        weight: 1, 
    },
    {
        latitude: 29.672273,  
        longitude: -95.282437, 
        weight: 1, 
    },
    {
        latitude: 29.83995,  
        longitude: -95.604974, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.782063,  
        longitude: -95.404328, 
        weight: 1, 
    },
    {
        latitude: 29.94438,  
        longitude: -95.399857, 
        weight: 1, 
    },
    {
        latitude: 29.961574,  
        longitude: -95.160953, 
        weight: 1, 
    },
    {
        latitude: 29.710227,  
        longitude: -95.356346, 
        weight: 1, 
    },
    {
        latitude: 29.595824,  
        longitude: -95.197508, 
        weight: 1, 
    },
    {
        latitude: 29.63856,  
        longitude: -95.505734, 
        weight: 1, 
    },
    {
        latitude: 29.807634,  
        longitude: -95.320668, 
        weight: 1, 
    },
    {
        latitude: 29.807634,  
        longitude: -95.320668, 
        weight: 1, 
    },
    {
        latitude: 29.73236,  
        longitude: -95.619649, 
        weight: 1, 
    },
    {
        latitude: 29.939271,  
        longitude: -95.367418, 
        weight: 1, 
    },
    {
        latitude: 29.673206,  
        longitude: -95.508602, 
        weight: 1, 
    },
    {
        latitude: 29.651135,  
        longitude: -95.505724, 
        weight: 1, 
    },
    {
        latitude: 29.63811,  
        longitude: -95.252725, 
        weight: 1, 
    },
    {
        latitude: 29.72233,  
        longitude: -95.351501, 
        weight: 1, 
    },
    {
        latitude: 29.832225,  
        longitude: -95.545749, 
        weight: 1, 
    },
    {
        latitude: 29.713056,  
        longitude: -95.51582, 
        weight: 1, 
    },
    {
        latitude: 30.001531,  
        longitude: -95.281432, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.686389,  
        longitude: -95.376241, 
        weight: 1, 
    },
    {
        latitude: 29.709318,  
        longitude: -95.398854, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.76162,  
        longitude: -95.356035, 
        weight: 1, 
    },
    {
        latitude: 29.817654,  
        longitude: -95.482297, 
        weight: 1, 
    },
    {
        latitude: 29.831548,  
        longitude: -95.427869, 
        weight: 1, 
    },
    {
        latitude: 29.74033,  
        longitude: -95.60592, 
        weight: 1, 
    },
    {
        latitude: 29.705195,  
        longitude: -95.516967, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.729276,  
        longitude: -95.51484, 
        weight: 1, 
    },
    {
        latitude: 29.807503,  
        longitude: -95.316227, 
        weight: 1, 
    },
    {
        latitude: 29.749416,  
        longitude: -95.354275, 
        weight: 1, 
    },
    {
        latitude: 29.754447,  
        longitude: -95.618541, 
        weight: 1, 
    },
    {
        latitude: 29.656237,  
        longitude: -95.331581, 
        weight: 1, 
    },
    {
        latitude: 30.075588,  
        longitude: -95.186234, 
        weight: 1, 
    },
    {
        latitude: 29.738303,  
        longitude: -95.401971, 
        weight: 1, 
    },
    {
        latitude: 29.7324,  
        longitude: -95.360165, 
        weight: 1, 
    },
    {
        latitude: 29.781396,  
        longitude: -95.409174, 
        weight: 1, 
    },
    {
        latitude: 29.68962,  
        longitude: -95.57623, 
        weight: 1, 
    },
    {
        latitude: 29.779001,  
        longitude: -95.328312, 
        weight: 1, 
    },
    {
        latitude: 29.781396,  
        longitude: -95.409174, 
        weight: 1, 
    },
    {
        latitude: 29.970472,  
        longitude: -95.529826, 
        weight: 1, 
    },
    {
        latitude: 29.930367,  
        longitude: -95.318739, 
        weight: 1, 
    },
    {
        latitude: 29.832522,  
        longitude: -95.545289, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.686485,  
        longitude: -95.374101, 
        weight: 1, 
    },
    {
        latitude: 29.712372,  
        longitude: -95.278959, 
        weight: 1, 
    },
    {
        latitude: 29.851523,  
        longitude: -95.283651, 
        weight: 1, 
    },
    {
        latitude: 29.707318,  
        longitude: -95.488926, 
        weight: 1, 
    },
    {
        latitude: 29.739735,  
        longitude: -95.410719, 
        weight: 1, 
    },
    {
        latitude: 29.620119,  
        longitude: -95.463354, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 30.001531,  
        longitude: -95.281432, 
        weight: 1, 
    },
    {
        latitude: 29.61959,  
        longitude: -95.226415, 
        weight: 1, 
    },
    {
        latitude: 29.614113,  
        longitude: -95.218405, 
        weight: 1, 
    },
    {
        latitude: 29.631956,  
        longitude: -95.448477, 
        weight: 1, 
    },
    {
        latitude: 29.823541,  
        longitude: -95.391893, 
        weight: 1, 
    },
    {
        latitude: 29.69734,  
        longitude: -95.587736, 
        weight: 1, 
    },
    {
        latitude: 29.651634,  
        longitude: -95.367617, 
        weight: 1, 
    },
    {
        latitude: 29.651634,  
        longitude: -95.367617, 
        weight: 1, 
    },
    {
        latitude: 29.651634,  
        longitude: -95.367617, 
        weight: 1, 
    },
    {
        latitude: 29.748645,  
        longitude: -95.371301, 
        weight: 1, 
    },
    {
        latitude: 29.707296,  
        longitude: -95.495198, 
        weight: 1, 
    },
    {
        latitude: 29.707296,  
        longitude: -95.495198, 
        weight: 1, 
    },
    {
        latitude: 29.683954,  
        longitude: -95.373323, 
        weight: 1, 
    },
    {
        latitude: 29.748806,  
        longitude: -95.389656, 
        weight: 1, 
    },
    {
        latitude: 29.730304,  
        longitude: -95.476423, 
        weight: 1, 
    },
    {
        latitude: 29.750175,  
        longitude: -95.353683, 
        weight: 1, 
    },
    {
        latitude: 29.740961,  
        longitude: -95.58518, 
        weight: 1, 
    },
    {
        latitude: 29.821537,  
        longitude: -95.417595, 
        weight: 1, 
    },
    {
        latitude: 29.751218,  
        longitude: -95.455198, 
        weight: 1, 
    },
    {
        latitude: 29.741667,  
        longitude: -95.457545, 
        weight: 1, 
    },
    {
        latitude: 29.94438,  
        longitude: -95.399857, 
        weight: 1, 
    },
    {
        latitude: 29.94438,  
        longitude: -95.399857, 
        weight: 1, 
    },
    {
        latitude: 29.728898,  
        longitude: -95.528684, 
        weight: 1, 
    },
    {
        latitude: 29.93885,  
        longitude: -95.315667, 
        weight: 1, 
    },
    {
        latitude: 29.585702,  
        longitude: -95.514047, 
        weight: 1, 
    },
    {
        latitude: 29.703823,  
        longitude: -95.578609, 
        weight: 1, 
    },
    {
        latitude: 29.692471,  
        longitude: -95.392182, 
        weight: 1, 
    },
    {
        latitude: 29.538996,  
        longitude: -95.145203, 
        weight: 1, 
    },
    {
        latitude: 29.677397,  
        longitude: -95.432342, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.671938,  
        longitude: -95.428016, 
        weight: 1, 
    },
    {
        latitude: 29.722131,  
        longitude: -95.391692, 
        weight: 1, 
    },
    {
        latitude: 29.743822,  
        longitude: -95.351255, 
        weight: 1, 
    },
    {
        latitude: 29.743822,  
        longitude: -95.351255, 
        weight: 1, 
    },
    {
        latitude: 29.85648,  
        longitude: -95.363732, 
        weight: 1, 
    },
    {
        latitude: 29.659907,  
        longitude: -95.316376, 
        weight: 1, 
    },
    {
        latitude: 29.773614,  
        longitude: -95.23323, 
        weight: 1, 
    },
    {
        latitude: 29.735292,  
        longitude: -95.525201, 
        weight: 1, 
    },
    {
        latitude: 29.742868,  
        longitude: -95.441623, 
        weight: 1, 
    },
    {
        latitude: 29.742868,  
        longitude: -95.441623, 
        weight: 1, 
    },
    {
        latitude: 29.824065,  
        longitude: -95.522632, 
        weight: 1, 
    },
    {
        latitude: 29.666893,  
        longitude: -95.261276, 
        weight: 1, 
    },
    {
        latitude: 29.797526,  
        longitude: -95.56983, 
        weight: 1, 
    },
    {
        latitude: 29.797526,  
        longitude: -95.56983, 
        weight: 1, 
    },
    {
        latitude: 29.752699,  
        longitude: -95.35044, 
        weight: 1, 
    },
    {
        latitude: 29.665467,  
        longitude: -95.276904, 
        weight: 1, 
    },
    {
        latitude: 29.657416,  
        longitude: -95.31372, 
        weight: 1, 
    },
    {
        latitude: 29.755172,  
        longitude: -95.337395, 
        weight: 1, 
    },
    {
        latitude: 29.777802,  
        longitude: -95.538309, 
        weight: 1, 
    },
    {
        latitude: 29.822547,  
        longitude: -95.400077, 
        weight: 1, 
    },
    {
        latitude: 29.56679,  
        longitude: -95.110022, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.965812,  
        longitude: -95.284896, 
        weight: 1, 
    },
    {
        latitude: 29.697319,  
        longitude: -95.549659, 
        weight: 1, 
    },
    {
        latitude: 29.779594,  
        longitude: -95.560614, 
        weight: 1, 
    },
    {
        latitude: 29.735255,  
        longitude: -95.375612, 
        weight: 1, 
    },
    {
        latitude: 29.644541,  
        longitude: -95.242433, 
        weight: 1, 
    },
    {
        latitude: 29.792199,  
        longitude: -95.688366, 
        weight: 1, 
    },
    {
        latitude: 29.792199,  
        longitude: -95.688366, 
        weight: 1, 
    },
    {
        latitude: 29.750336,  
        longitude: -95.572141, 
        weight: 1, 
    },
    {
        latitude: 29.737311,  
        longitude: -95.526907, 
        weight: 1, 
    },
    {
        latitude: 29.6483,  
        longitude: -95.508342, 
        weight: 1, 
    },
    {
        latitude: 29.937894,  
        longitude: -95.412112, 
        weight: 1, 
    },
    {
        latitude: 29.937894,  
        longitude: -95.412112, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.739264,  
        longitude: -95.349435, 
        weight: 1, 
    },
    {
        latitude: 29.657728,  
        longitude: -95.562194, 
        weight: 1, 
    },
    {
        latitude: 29.866306,  
        longitude: -95.397771, 
        weight: 1, 
    },
    {
        latitude: 29.736656,  
        longitude: -95.466749, 
        weight: 1, 
    },
    {
        latitude: 29.690505,  
        longitude: -95.377687, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.967005,  
        longitude: -95.284355, 
        weight: 1, 
    },
    {
        latitude: 29.864149,  
        longitude: -95.418152, 
        weight: 1, 
    },
    {
        latitude: 29.602005,  
        longitude: -95.466363, 
        weight: 1, 
    },
    {
        latitude: 29.690166,  
        longitude: -95.551473, 
        weight: 1, 
    },
    {
        latitude: 29.961373,  
        longitude: -95.424678, 
        weight: 1, 
    },
    {
        latitude: 29.733503,  
        longitude: -95.360739, 
        weight: 1, 
    },
    {
        latitude: 29.678323,  
        longitude: -95.271032, 
        weight: 1, 
    },
    {
        latitude: 29.722973,  
        longitude: -95.5391, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.889745,  
        longitude: -95.501575, 
        weight: 1, 
    },
    {
        latitude: 29.716345,  
        longitude: -95.615199, 
        weight: 1, 
    },
    {
        latitude: 29.835655,  
        longitude: -95.397467, 
        weight: 1, 
    },
    {
        latitude: 29.737278,  
        longitude: -95.379226, 
        weight: 1, 
    },
    {
        latitude: 29.672819,  
        longitude: -95.424804, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.800271,  
        longitude: -95.329297, 
        weight: 1, 
    },
    {
        latitude: 29.654414,  
        longitude: -95.343738, 
        weight: 1, 
    },
    {
        latitude: 29.656944,  
        longitude: -95.375764, 
        weight: 1, 
    },
    {
        latitude: 29.656944,  
        longitude: -95.375764, 
        weight: 1, 
    },
    {
        latitude: 29.663495,  
        longitude: -95.508523, 
        weight: 1, 
    },
    {
        latitude: 29.938598,  
        longitude: -95.36598, 
        weight: 1, 
    },
    {
        latitude: 29.760155,  
        longitude: -95.361119, 
        weight: 1, 
    },
    {
        latitude: 29.81797,  
        longitude: -95.368167, 
        weight: 1, 
    },
    {
        latitude: 29.676465,  
        longitude: -95.269203, 
        weight: 1, 
    },
    {
        latitude: 29.761173,  
        longitude: -95.355239, 
        weight: 1, 
    },
    {
        latitude: 29.705719,  
        longitude: -95.604522, 
        weight: 1, 
    },
    {
        latitude: 29.752973,  
        longitude: -95.358352, 
        weight: 1, 
    },
    {
        latitude: 29.73013,  
        longitude: -95.568052, 
        weight: 1, 
    },
    {
        latitude: 29.752323,  
        longitude: -95.397898, 
        weight: 1, 
    },
    {
        latitude: 29.731519,  
        longitude: -95.479231, 
        weight: 1, 
    },
    {
        latitude: 29.713606,  
        longitude: -95.37786, 
        weight: 1, 
    },
    {
        latitude: 29.739246,  
        longitude: -95.559855, 
        weight: 1, 
    },
    {
        latitude: 29.724707,  
        longitude: -95.455067, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508296, 
        weight: 1, 
    },
    {
        latitude: 29.905958,  
        longitude: -95.412008, 
        weight: 1, 
    },
    {
        latitude: 29.735292,  
        longitude: -95.525201, 
        weight: 1, 
    },
    {
        latitude: 29.780839,  
        longitude: -95.304142, 
        weight: 1, 
    },
    {
        latitude: 29.780839,  
        longitude: -95.304142, 
        weight: 1, 
    },
    {
        latitude: 29.780839,  
        longitude: -95.304142, 
        weight: 1, 
    },
    {
        latitude: 29.667066,  
        longitude: -95.508521, 
        weight: 1, 
    },
    {
        latitude: 29.733102,  
        longitude: -95.481702, 
        weight: 1, 
    },
    {
        latitude: 29.726087,  
        longitude: -95.37413, 
        weight: 1, 
    },
    {
        latitude: 29.784137,  
        longitude: -95.581692, 
        weight: 1, 
    },
    {
        latitude: 29.671577,  
        longitude: -95.59544, 
        weight: 1, 
    },
    {
        latitude: 29.871556,  
        longitude: -95.429877, 
        weight: 1, 
    },
    {
        latitude: 29.871556,  
        longitude: -95.429877, 
        weight: 1, 
    },
    {
        latitude: 29.74487,  
        longitude: -95.394931, 
        weight: 1, 
    },
    {
        latitude: 29.761634,  
        longitude: -95.356025, 
        weight: 1, 
    },
    {
        latitude: 29.861802,  
        longitude: -95.424374, 
        weight: 1, 
    },
    {
        latitude: 29.861802,  
        longitude: -95.424374, 
        weight: 1, 
    },
    {
        latitude: 29.668938,  
        longitude: -95.355195, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.794694,  
        longitude: -95.340265, 
        weight: 1, 
    },
    {
        latitude: 29.644558,  
        longitude: -95.242436, 
        weight: 1, 
    },
    {
        latitude: 29.74003,  
        longitude: -95.360596, 
        weight: 1, 
    },
    {
        latitude: 29.770487,  
        longitude: -95.407242, 
        weight: 1, 
    },
    {
        latitude: 29.684593,  
        longitude: -95.562698, 
        weight: 1, 
    },
    {
        latitude: 29.678339,  
        longitude: -95.412262, 
        weight: 1, 
    },
    {
        latitude: 29.752323,  
        longitude: -95.397898, 
        weight: 1, 
    },
    {
        latitude: 29.746761,  
        longitude: -95.359032, 
        weight: 1, 
    },
    {
        latitude: 29.829208,  
        longitude: -95.380928, 
        weight: 1, 
    },
    {
        latitude: 29.845086,  
        longitude: -95.563366, 
        weight: 1, 
    },
    {
        latitude: 29.954936,  
        longitude: -95.535277, 
        weight: 1, 
    },
    {
        latitude: 29.802701,  
        longitude: -95.420642, 
        weight: 1, 
    },
    {
        latitude: 29.724973,  
        longitude: -95.545603, 
        weight: 1, 
    },
    {
        latitude: 29.841534,  
        longitude: -95.473188, 
        weight: 1, 
    },
    {
        latitude: 29.721993,  
        longitude: -95.55816, 
        weight: 1, 
    },
    {
        latitude: 29.705098,  
        longitude: -95.528461, 
        weight: 1, 
    },
    {
        latitude: 29.746931,  
        longitude: -95.584324, 
        weight: 1, 
    },
    {
        latitude: 29.652674,  
        longitude: -95.557606, 
        weight: 1, 
    },
    {
        latitude: 29.6483,  
        longitude: -95.508342, 
        weight: 1, 
    },
    {
        latitude: 29.637234,  
        longitude: -95.336713, 
        weight: 1, 
    },
    {
        latitude: 29.950672,  
        longitude: -95.392773, 
        weight: 1, 
    },
    {
        latitude: 29.950672,  
        longitude: -95.392773, 
        weight: 1, 
    },
    {
        latitude: 29.950672,  
        longitude: -95.392773, 
        weight: 1, 
    },
    {
        latitude: 29.772259,  
        longitude: -95.186529, 
        weight: 1, 
    },
    {
        latitude: 29.656526,  
        longitude: -95.355411, 
        weight: 1, 
    },
    {
        latitude: 29.843856,  
        longitude: -95.499144, 
        weight: 1, 
    },
    {
        latitude: 29.952166,  
        longitude: -95.302266, 
        weight: 1, 
    },
    {
        latitude: 29.952166,  
        longitude: -95.302266, 
        weight: 1, 
    },
    {
        latitude: 29.668149,  
        longitude: -95.308555, 
        weight: 1, 
    },
    {
        latitude: 29.799679,  
        longitude: -95.51635, 
        weight: 1, 
    },
    {
        latitude: 29.784507,  
        longitude: -95.66887, 
        weight: 1, 
    },
    {
        latitude: 29.737815,  
        longitude: -95.483568, 
        weight: 1, 
    },
    {
        latitude: 29.757544,  
        longitude: -95.294895, 
        weight: 1, 
    },
    {
        latitude: 29.757544,  
        longitude: -95.294895, 
        weight: 1, 
    },
    {
        latitude: 29.846394,  
        longitude: -95.393017, 
        weight: 1, 
    },
    {
        latitude: 29.846394,  
        longitude: -95.393017, 
        weight: 1, 
    },
    {
        latitude: 29.846394,  
        longitude: -95.393017, 
        weight: 1, 
    },
    {
        latitude: 29.691857,  
        longitude: -95.283465, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.679561,  
        longitude: -95.425452, 
        weight: 1, 
    },
    {
        latitude: 29.839795,  
        longitude: -95.257821, 
        weight: 1, 
    },
    {
        latitude: 29.731203,  
        longitude: -95.412818, 
        weight: 1, 
    },
    {
        latitude: 29.699109,  
        longitude: -95.406118, 
        weight: 1, 
    },
    {
        latitude: 29.737547,  
        longitude: -95.504442, 
        weight: 1, 
    },
    {
        latitude: 29.672129,  
        longitude: -95.424778, 
        weight: 1, 
    },
    {
        latitude: 29.710826,  
        longitude: -95.358935, 
        weight: 1, 
    },
    {
        latitude: 29.743286,  
        longitude: -95.374458, 
        weight: 1, 
    },
    {
        latitude: 29.717185,  
        longitude: -95.380681, 
        weight: 1, 
    },
    {
        latitude: 29.856769,  
        longitude: -95.47332, 
        weight: 1, 
    },
    {
        latitude: 29.563225,  
        longitude: -95.138805, 
        weight: 1, 
    },
    {
        latitude: 29.732851,  
        longitude: -95.480377, 
        weight: 1, 
    },
    {
        latitude: 29.735761,  
        longitude: -95.381615, 
        weight: 1, 
    },
    {
        latitude: 29.657604,  
        longitude: -95.46395, 
        weight: 1, 
    },
    {
        latitude: 29.762159,  
        longitude: -95.360727, 
        weight: 1, 
    },
    {
        latitude: 29.803735,  
        longitude: -95.420864, 
        weight: 1, 
    },
    {
        latitude: 29.65566,  
        longitude: -95.557322, 
        weight: 1, 
    },
    {
        latitude: 29.746864,  
        longitude: -95.357687, 
        weight: 1, 
    },
    {
        latitude: 29.811901,  
        longitude: -95.38338, 
        weight: 1, 
    },
    {
        latitude: 29.749473,  
        longitude: -95.389671, 
        weight: 1, 
    },
    {
        latitude: 29.764322,  
        longitude: -95.276831, 
        weight: 1, 
    },
    {
        latitude: 29.840491,  
        longitude: -95.341497, 
        weight: 1, 
    },
    {
        latitude: 29.840491,  
        longitude: -95.341497, 
        weight: 1, 
    },
    {
        latitude: 29.677829,  
        longitude: -95.435463, 
        weight: 1, 
    },
    {
        latitude: 29.755771,  
        longitude: -95.382428, 
        weight: 1, 
    },
    {
        latitude: 29.613393,  
        longitude: -95.442875, 
        weight: 1, 
    },
    {
        latitude: 29.752305,  
        longitude: -95.364555, 
        weight: 1, 
    },
    {
        latitude: 29.743704,  
        longitude: -95.377964, 
        weight: 1, 
    },
    {
        latitude: 29.770427,  
        longitude: -95.41249, 
        weight: 1, 
    },
    {
        latitude: 29.770427,  
        longitude: -95.41249, 
        weight: 1, 
    },
    {
        latitude: 29.770427,  
        longitude: -95.41249, 
        weight: 1, 
    },
    {
        latitude: 29.72237,  
        longitude: -95.391636, 
        weight: 1, 
    },
    {
        latitude: 29.739785,  
        longitude: -95.38238, 
        weight: 1, 
    },
    {
        latitude: 29.744052,  
        longitude: -95.363745, 
        weight: 1, 
    },
    {
        latitude: 29.659261,  
        longitude: -95.269652, 
        weight: 1, 
    },
    {
        latitude: 29.558534,  
        longitude: -95.123735, 
        weight: 1, 
    },
    {
        latitude: 29.828219,  
        longitude: -95.342605, 
        weight: 1, 
    },
    {
        latitude: 29.714791,  
        longitude: -95.291196, 
        weight: 1, 
    },
    {
        latitude: 30.070239,  
        longitude: -95.197145, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.782787,  
        longitude: -95.298652, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.734526,  
        longitude: -95.559837, 
        weight: 1, 
    },
    {
        latitude: 29.795876,  
        longitude: -95.556206, 
        weight: 1, 
    },
    {
        latitude: 29.688719,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.731631,  
        longitude: -95.485878, 
        weight: 1, 
    },
    {
        latitude: 29.605826,  
        longitude: -95.461975, 
        weight: 1, 
    },
    {
        latitude: 29.843607,  
        longitude: -95.494442, 
        weight: 1, 
    },
    {
        latitude: 29.733283,  
        longitude: -95.633511, 
        weight: 1, 
    },
    {
        latitude: 29.827551,  
        longitude: -95.458107, 
        weight: 1, 
    },
    {
        latitude: 29.904304,  
        longitude: -95.412748, 
        weight: 1, 
    },
    {
        latitude: 29.730111,  
        longitude: -95.418655, 
        weight: 1, 
    },
    {
        latitude: 29.677371,  
        longitude: -95.428442, 
        weight: 1, 
    },
    {
        latitude: 29.735642,  
        longitude: -95.631999, 
        weight: 1, 
    },
    {
        latitude: 29.652174,  
        longitude: -95.370631, 
        weight: 1, 
    },
    {
        latitude: 29.775732,  
        longitude: -95.315666, 
        weight: 1, 
    },
    {
        latitude: 29.716457,  
        longitude: -95.615153, 
        weight: 1, 
    },
    {
        latitude: 29.778242,  
        longitude: -95.227943, 
        weight: 1, 
    },
    {
        latitude: 29.755999,  
        longitude: -95.366974, 
        weight: 1, 
    },
    {
        latitude: 29.71295,  
        longitude: -95.509824, 
        weight: 1, 
    },
    {
        latitude: 29.731793,  
        longitude: -95.488471, 
        weight: 1, 
    },
    {
        latitude: 29.751563,  
        longitude: -95.456092, 
        weight: 1, 
    },
    {
        latitude: 29.752406,  
        longitude: -95.456019, 
        weight: 1, 
    },
    {
        latitude: 29.775387,  
        longitude: -95.186611, 
        weight: 1, 
    },
    {
        latitude: 29.674206,  
        longitude: -95.384341, 
        weight: 1, 
    },
    {
        latitude: 29.881764,  
        longitude: -95.438935, 
        weight: 1, 
    },
    {
        latitude: 29.666304,  
        longitude: -95.508548, 
        weight: 1, 
    },
    {
        latitude: 29.657843,  
        longitude: -95.278595, 
        weight: 1, 
    },
    {
        latitude: 29.656605,  
        longitude: -95.288872, 
        weight: 1, 
    },
    {
        latitude: 29.726057,  
        longitude: -95.49432, 
        weight: 1, 
    },
    {
        latitude: 29.726057,  
        longitude: -95.49432, 
        weight: 1, 
    },
    {
        latitude: 29.726057,  
        longitude: -95.49432, 
        weight: 1, 
    },
    {
        latitude: 29.689983,  
        longitude: -95.365209, 
        weight: 1, 
    },
    {
        latitude: 29.77263,  
        longitude: -95.317317, 
        weight: 1, 
    },
    {
        latitude: 29.776399,  
        longitude: -95.360838, 
        weight: 1, 
    },
    {
        latitude: 29.670334,  
        longitude: -95.251766, 
        weight: 1, 
    },
    {
        latitude: 29.677527,  
        longitude: -95.23098, 
        weight: 1, 
    },
    {
        latitude: 29.837376,  
        longitude: -95.427687, 
        weight: 1, 
    },
    {
        latitude: 29.732252,  
        longitude: -95.352028, 
        weight: 1, 
    },
    {
        latitude: 29.702874,  
        longitude: -95.365309, 
        weight: 1, 
    },
    {
        latitude: 29.769996,  
        longitude: -95.186856, 
        weight: 1, 
    },
    {
        latitude: 29.598564,  
        longitude: -95.145035, 
        weight: 1, 
    },
    {
        latitude: 29.809208,  
        longitude: -95.458949, 
        weight: 1, 
    },
    {
        latitude: 29.740961,  
        longitude: -95.58518, 
        weight: 1, 
    },
    {
        latitude: 29.830736,  
        longitude: -95.486104, 
        weight: 1, 
    },
    {
        latitude: 29.806069,  
        longitude: -95.382121, 
        weight: 1, 
    },
    {
        latitude: 29.844317,  
        longitude: -95.402972, 
        weight: 1, 
    },
    {
        latitude: 29.812554,  
        longitude: -95.406269, 
        weight: 1, 
    },
    {
        latitude: 29.601177,  
        longitude: -95.228652, 
        weight: 1, 
    },
    {
        latitude: 29.669593,  
        longitude: -95.528171, 
        weight: 1, 
    },
    {
        latitude: 29.829205,  
        longitude: -95.333666, 
        weight: 1, 
    },
    {
        latitude: 29.716457,  
        longitude: -95.615153, 
        weight: 1, 
    },
    {
        latitude: 29.848707,  
        longitude: -95.40299, 
        weight: 1, 
    },
    {
        latitude: 29.716066,  
        longitude: -95.545246, 
        weight: 1, 
    },
    {
        latitude: 29.838331,  
        longitude: -95.410853, 
        weight: 1, 
    },
    {
        latitude: 29.667994,  
        longitude: -95.594819, 
        weight: 1, 
    },
    {
        latitude: 29.867746,  
        longitude: -95.294475, 
        weight: 1, 
    },
    {
        latitude: 29.747631,  
        longitude: -95.453922, 
        weight: 1, 
    },
    {
        latitude: 29.925146,  
        longitude: -95.407062, 
        weight: 1, 
    },
    {
        latitude: 29.925146,  
        longitude: -95.407062, 
        weight: 1, 
    },
    {
        latitude: 29.753258,  
        longitude: -95.382179, 
        weight: 1, 
    },
    {
        latitude: 29.674399,  
        longitude: -95.535243, 
        weight: 1, 
    },
    {
        latitude: 29.639362,  
        longitude: -95.469289, 
        weight: 1, 
    },
    {
        latitude: 29.858545,  
        longitude: -95.327491, 
        weight: 1, 
    },
    {
        latitude: 29.827493,  
        longitude: -95.318599, 
        weight: 1, 
    },
    {
        latitude: 29.702747,  
        longitude: -95.304352, 
        weight: 1, 
    },
    {
        latitude: 29.847273,  
        longitude: -95.433677, 
        weight: 1, 
    },
    {
        latitude: 29.600463,  
        longitude: -95.279848, 
        weight: 1, 
    },
    {
        latitude: 29.835618,  
        longitude: -95.413184, 
        weight: 1, 
    },
    {
        latitude: 29.770131,  
        longitude: -95.402387, 
        weight: 1, 
    },
    {
        latitude: 29.828451,  
        longitude: -95.284423, 
        weight: 1, 
    },
    {
        latitude: 29.709715,  
        longitude: -95.518891, 
        weight: 1, 
    },
    {
        latitude: 29.764651,  
        longitude: -95.342694, 
        weight: 1, 
    },
    {
        latitude: 29.763449,  
        longitude: -95.360862, 
        weight: 1, 
    },
    {
        latitude: 29.740553,  
        longitude: -95.464853, 
        weight: 1, 
    },
    {
        latitude: 29.726037,  
        longitude: -95.494459, 
        weight: 1, 
    },
    {
        latitude: 29.67208,  
        longitude: -95.577391, 
        weight: 1, 
    },
    {
        latitude: 29.953885,  
        longitude: -95.393854, 
        weight: 1, 
    },
    {
        latitude: 29.803501,  
        longitude: -95.544927, 
        weight: 1, 
    },
    {
        latitude: 29.797039,  
        longitude: -95.52672, 
        weight: 1, 
    },
    {
        latitude: 29.797039,  
        longitude: -95.52672, 
        weight: 1, 
    },
    {
        latitude: 29.835291,  
        longitude: -95.371514, 
        weight: 1, 
    },
    {
        latitude: 29.603185,  
        longitude: -95.453976, 
        weight: 1, 
    },
    {
        latitude: 29.844904,  
        longitude: -95.473253, 
        weight: 1, 
    },
    {
        latitude: 29.784118,  
        longitude: -95.579463, 
        weight: 1, 
    },
    {
        latitude: 29.651772,  
        longitude: -95.235606, 
        weight: 1, 
    },
    {
        latitude: 29.737627,  
        longitude: -95.498756, 
        weight: 1, 
    },
    {
        latitude: 29.864571,  
        longitude: -95.384755, 
        weight: 1, 
    },
    {
        latitude: 29.850045,  
        longitude: -95.536991, 
        weight: 1, 
    },
    {
        latitude: 29.75992,  
        longitude: -95.463261, 
        weight: 1, 
    },
    {
        latitude: 29.647603,  
        longitude: -95.353521, 
        weight: 1, 
    },
    {
        latitude: 29.835142,  
        longitude: -95.402841, 
        weight: 1, 
    },
    {
        latitude: 29.714065,  
        longitude: -95.314364, 
        weight: 1, 
    },
    {
        latitude: 29.584655,  
        longitude: -95.20278, 
        weight: 1, 
    },
    {
        latitude: 29.712144,  
        longitude: -95.521174, 
        weight: 1, 
    },
    {
        latitude: 29.712144,  
        longitude: -95.521174, 
        weight: 1, 
    },
    {
        latitude: 29.737054,  
        longitude: -95.548481, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.670478,  
        longitude: -95.462135, 
        weight: 1, 
    },
    {
        latitude: 29.938662,  
        longitude: -95.359029, 
        weight: 1, 
    },
    {
        latitude: 29.732945,  
        longitude: -95.466697, 
        weight: 1, 
    },
    {
        latitude: 29.844702,  
        longitude: -95.333947, 
        weight: 1, 
    },
    {
        latitude: 29.723103,  
        longitude: -95.378666, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.880013,  
        longitude: -95.446086, 
        weight: 1, 
    },
    {
        latitude: 29.73902,  
        longitude: -95.379227, 
        weight: 1, 
    },
    {
        latitude: 29.742568,  
        longitude: -95.411822, 
        weight: 1, 
    },
    {
        latitude: 29.665634,  
        longitude: -95.510471, 
        weight: 1, 
    },
    {
        latitude: 29.676264,  
        longitude: -95.535027, 
        weight: 1, 
    },
    {
        latitude: 29.828975,  
        longitude: -95.380824, 
        weight: 1, 
    },
    {
        latitude: 29.813512,  
        longitude: -95.46919, 
        weight: 1, 
    },
    {
        latitude: 29.744163,  
        longitude: -95.318127, 
        weight: 1, 
    },
    {
        latitude: 29.638654,  
        longitude: -95.250773, 
        weight: 1, 
    },
    {
        latitude: 30.072034,  
        longitude: -95.190654, 
        weight: 1, 
    },
    {
        latitude: 29.749535,  
        longitude: -95.47276, 
        weight: 1, 
    },
    {
        latitude: 29.749535,  
        longitude: -95.47276, 
        weight: 1, 
    },
    {
        latitude: 29.684228,  
        longitude: -95.422556, 
        weight: 1, 
    },
    {
        latitude: 29.724752,  
        longitude: -95.46816, 
        weight: 1, 
    },
    {
        latitude: 29.753123,  
        longitude: -95.403745, 
        weight: 1, 
    },
    {
        latitude: 29.689466,  
        longitude: -95.344896, 
        weight: 1, 
    },
    {
        latitude: 29.847124,  
        longitude: -95.500487, 
        weight: 1, 
    },
    {
        latitude: 29.941116,  
        longitude: -95.404714, 
        weight: 1, 
    },
    {
        latitude: 29.851523,  
        longitude: -95.283651, 
        weight: 1, 
    },
    {
        latitude: 29.675314,  
        longitude: -95.460556, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.800262,  
        longitude: -95.329371, 
        weight: 1, 
    },
    {
        latitude: 29.800262,  
        longitude: -95.329371, 
        weight: 1, 
    },
    {
        latitude: 29.851437,  
        longitude: -95.453293, 
        weight: 1, 
    },
    {
        latitude: 29.803984,  
        longitude: -95.398161, 
        weight: 1, 
    },
    {
        latitude: 29.67744,  
        longitude: -95.59953, 
        weight: 1, 
    },
    {
        latitude: 29.803946,  
        longitude: -95.399605, 
        weight: 1, 
    },
    {
        latitude: 29.723586,  
        longitude: -95.493889, 
        weight: 1, 
    },
    {
        latitude: 29.850117,  
        longitude: -95.437564, 
        weight: 1, 
    },
    {
        latitude: 29.738378,  
        longitude: -95.534874, 
        weight: 1, 
    },
    {
        latitude: 29.839468,  
        longitude: -95.512853, 
        weight: 1, 
    },
    {
        latitude: 29.734996,  
        longitude: -95.650324, 
        weight: 1, 
    },
    {
        latitude: 29.736544,  
        longitude: -95.586748, 
        weight: 1, 
    },
    {
        latitude: 29.631971,  
        longitude: -95.368049, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.844132,  
        longitude: -95.392245, 
        weight: 1, 
    },
    {
        latitude: 29.805411,  
        longitude: -95.216989, 
        weight: 1, 
    },
    {
        latitude: 29.73762,  
        longitude: -95.37943, 
        weight: 1, 
    },
    {
        latitude: 29.722583,  
        longitude: -95.454328, 
        weight: 1, 
    },
    {
        latitude: 29.673744,  
        longitude: -95.554999, 
        weight: 1, 
    },
    {
        latitude: 29.799655,  
        longitude: -95.418637, 
        weight: 1, 
    },
    {
        latitude: 29.689096,  
        longitude: -95.59579, 
        weight: 1, 
    },
    {
        latitude: 29.79262,  
        longitude: -95.391752, 
        weight: 1, 
    },
    {
        latitude: 29.595488,  
        longitude: -95.172164, 
        weight: 1, 
    },
    {
        latitude: 29.757207,  
        longitude: -95.40324, 
        weight: 1, 
    },
    {
        latitude: 29.764474,  
        longitude: -95.366686, 
        weight: 1, 
    },
    {
        latitude: 29.654158,  
        longitude: -95.35259, 
        weight: 1, 
    },
    {
        latitude: 29.727748,  
        longitude: -95.570048, 
        weight: 1, 
    },
    {
        latitude: 29.952194,  
        longitude: -95.296428, 
        weight: 1, 
    },
    {
        latitude: 29.737171,  
        longitude: -95.500881, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.801564,  
        longitude: -95.371556, 
        weight: 1, 
    },
    {
        latitude: 29.801564,  
        longitude: -95.371556, 
        weight: 1, 
    },
    {
        latitude: 29.832611,  
        longitude: -95.451302, 
        weight: 1, 
    },
    {
        latitude: 29.680027,  
        longitude: -95.363355, 
        weight: 1, 
    },
    {
        latitude: 29.86162,  
        longitude: -95.524414, 
        weight: 1, 
    },
    {
        latitude: 29.713412,  
        longitude: -95.582497, 
        weight: 1, 
    },
    {
        latitude: 29.651659,  
        longitude: -95.365527, 
        weight: 1, 
    },
    {
        latitude: 29.651659,  
        longitude: -95.365527, 
        weight: 1, 
    },
    {
        latitude: 29.68035,  
        longitude: -95.238981, 
        weight: 1, 
    },
    {
        latitude: 29.581865,  
        longitude: -95.154717, 
        weight: 1, 
    },
    {
        latitude: 29.831003,  
        longitude: -95.318743, 
        weight: 1, 
    },
    {
        latitude: 29.720282,  
        longitude: -95.320349, 
        weight: 1, 
    },
    {
        latitude: 29.86176,  
        longitude: -95.505434, 
        weight: 1, 
    },
    {
        latitude: 29.774519,  
        longitude: -95.384148, 
        weight: 1, 
    },
    {
        latitude: 29.54988,  
        longitude: -95.151189, 
        weight: 1, 
    },
    {
        latitude: 29.845011,  
        longitude: -95.30317, 
        weight: 1, 
    },
    {
        latitude: 29.868777,  
        longitude: -95.291271, 
        weight: 1, 
    },
    {
        latitude: 29.669801,  
        longitude: -95.302762, 
        weight: 1, 
    },
    {
        latitude: 29.759205,  
        longitude: -95.361835, 
        weight: 1, 
    },
    {
        latitude: 29.759205,  
        longitude: -95.361835, 
        weight: 1, 
    },
    {
        latitude: 29.744327,  
        longitude: -95.457828, 
        weight: 1, 
    },
    {
        latitude: 29.786051,  
        longitude: -95.394127, 
        weight: 1, 
    },
    {
        latitude: 29.78554,  
        longitude: -95.361851, 
        weight: 1, 
    },
    {
        latitude: 29.822175,  
        longitude: -95.329804, 
        weight: 1, 
    },
    {
        latitude: 29.785021,  
        longitude: -95.364892, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 30.064272,  
        longitude: -95.109143, 
        weight: 1, 
    },
    {
        latitude: 29.76902,  
        longitude: -95.612928, 
        weight: 1, 
    },
    {
        latitude: 29.688794,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.79242,  
        longitude: -95.399017, 
        weight: 1, 
    },
    {
        latitude: 29.757133,  
        longitude: -95.374311, 
        weight: 1, 
    },
    {
        latitude: 29.717915,  
        longitude: -95.526764, 
        weight: 1, 
    },
    {
        latitude: 29.78548,  
        longitude: -95.686149, 
        weight: 1, 
    },
    {
        latitude: 29.614026,  
        longitude: -95.388176, 
        weight: 1, 
    },
    {
        latitude: 29.685405,  
        longitude: -95.436271, 
        weight: 1, 
    },
    {
        latitude: 29.863467,  
        longitude: -95.456204, 
        weight: 1, 
    },
    {
        latitude: 29.755234,  
        longitude: -95.398086, 
        weight: 1, 
    },
    {
        latitude: 29.657406,  
        longitude: -95.285468, 
        weight: 1, 
    },
    {
        latitude: 29.734087,  
        longitude: -95.341134, 
        weight: 1, 
    },
    {
        latitude: 29.738945,  
        longitude: -95.445869, 
        weight: 1, 
    },
    {
        latitude: 29.667461,  
        longitude: -95.528141, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.716075,  
        longitude: -95.314927, 
        weight: 1, 
    },
    {
        latitude: 29.957892,  
        longitude: -95.330994, 
        weight: 1, 
    },
    {
        latitude: 29.806002,  
        longitude: -95.446491, 
        weight: 1, 
    },
    {
        latitude: 29.698953,  
        longitude: -95.365402, 
        weight: 1, 
    },
    {
        latitude: 29.667695,  
        longitude: -95.267107, 
        weight: 1, 
    },
    {
        latitude: 29.634487,  
        longitude: -95.411275, 
        weight: 1, 
    },
    {
        latitude: 29.667507,  
        longitude: -95.328527, 
        weight: 1, 
    },
    {
        latitude: 29.7243,  
        longitude: -95.484273, 
        weight: 1, 
    },
    {
        latitude: 29.772134,  
        longitude: -95.411568, 
        weight: 1, 
    },
    {
        latitude: 29.70871,  
        longitude: -95.336646, 
        weight: 1, 
    },
    {
        latitude: 29.737252,  
        longitude: -95.534893, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.761184,  
        longitude: -95.348897, 
        weight: 1, 
    },
    {
        latitude: 29.75855,  
        longitude: -95.344705, 
        weight: 1, 
    },
    {
        latitude: 29.7926,  
        longitude: -95.399001, 
        weight: 1, 
    },
    {
        latitude: 29.726498,  
        longitude: -95.361056, 
        weight: 1, 
    },
    {
        latitude: 29.746798,  
        longitude: -95.3768, 
        weight: 1, 
    },
    {
        latitude: 29.746798,  
        longitude: -95.3768, 
        weight: 1, 
    },
    {
        latitude: 29.867513,  
        longitude: -95.552629, 
        weight: 1, 
    },
    {
        latitude: 29.676043,  
        longitude: -95.290054, 
        weight: 1, 
    },
    {
        latitude: 29.864305,  
        longitude: -95.533987, 
        weight: 1, 
    },
    {
        latitude: 29.836139,  
        longitude: -95.391297, 
        weight: 1, 
    },
    {
        latitude: 29.780995,  
        longitude: -95.536007, 
        weight: 1, 
    },
    {
        latitude: 29.755207,  
        longitude: -95.356708, 
        weight: 1, 
    },
    {
        latitude: 29.73804,  
        longitude: -95.61369, 
        weight: 1, 
    },
    {
        latitude: 29.720115,  
        longitude: -95.481195, 
        weight: 1, 
    },
    {
        latitude: 29.922361,  
        longitude: -95.402782, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.944701,  
        longitude: -95.546759, 
        weight: 1, 
    },
    {
        latitude: 29.877521,  
        longitude: -95.425705, 
        weight: 1, 
    },
    {
        latitude: 29.673206,  
        longitude: -95.508602, 
        weight: 1, 
    },
    {
        latitude: 29.754613,  
        longitude: -95.392147, 
        weight: 1, 
    },
    {
        latitude: 29.746581,  
        longitude: -95.620126, 
        weight: 1, 
    },
    {
        latitude: 29.940717,  
        longitude: -95.4344, 
        weight: 1, 
    },
    {
        latitude: 29.709604,  
        longitude: -95.361102, 
        weight: 1, 
    },
    {
        latitude: 29.782092,  
        longitude: -95.577097, 
        weight: 1, 
    },
    {
        latitude: 29.685649,  
        longitude: -95.50876, 
        weight: 1, 
    },
    {
        latitude: 29.75727,  
        longitude: -95.399455, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.858186,  
        longitude: -95.352767, 
        weight: 1, 
    },
    {
        latitude: 29.668416,  
        longitude: -95.263081, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 29.812477,  
        longitude: -95.41086, 
        weight: 1, 
    },
    {
        latitude: 29.769609,  
        longitude: -95.416623, 
        weight: 1, 
    },
    {
        latitude: 29.728554,  
        longitude: -95.3785, 
        weight: 1, 
    },
    {
        latitude: 29.627613,  
        longitude: -95.23714, 
        weight: 1, 
    },
    {
        latitude: 29.648471,  
        longitude: -95.461642, 
        weight: 1, 
    },
    {
        latitude: 29.810972,  
        longitude: -95.499022, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.829951,  
        longitude: -95.381353, 
        weight: 1, 
    },
    {
        latitude: 29.840982,  
        longitude: -95.422585, 
        weight: 1, 
    },
    {
        latitude: 29.792562,  
        longitude: -95.396439, 
        weight: 1, 
    },
    {
        latitude: 29.75509,  
        longitude: -95.365511, 
        weight: 1, 
    },
    {
        latitude: 29.97031,  
        longitude: -95.531124, 
        weight: 1, 
    },
    {
        latitude: 29.739941,  
        longitude: -95.380934, 
        weight: 1, 
    },
    {
        latitude: 29.60602,  
        longitude: -95.449161, 
        weight: 1, 
    },
    {
        latitude: 29.846801,  
        longitude: -95.503179, 
        weight: 1, 
    },
    {
        latitude: 29.621481,  
        longitude: -95.404027, 
        weight: 1, 
    },
    {
        latitude: 29.542711,  
        longitude: -95.143284, 
        weight: 1, 
    },
    {
        latitude: 29.698133,  
        longitude: -95.277813, 
        weight: 1, 
    },
    {
        latitude: 29.922172,  
        longitude: -95.407452, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.702165,  
        longitude: -95.384044, 
        weight: 1, 
    },
    {
        latitude: 29.596134,  
        longitude: -95.146364, 
        weight: 1, 
    },
    {
        latitude: 29.781811,  
        longitude: -95.230025, 
        weight: 1, 
    },
    {
        latitude: 29.796125,  
        longitude: -95.38016, 
        weight: 1, 
    },
    {
        latitude: 29.61266,  
        longitude: -95.254349, 
        weight: 1, 
    },
    {
        latitude: 29.61266,  
        longitude: -95.254349, 
        weight: 1, 
    },
    {
        latitude: 29.703828,  
        longitude: -95.578228, 
        weight: 1, 
    },
    {
        latitude: 29.721239,  
        longitude: -95.351929, 
        weight: 1, 
    },
    {
        latitude: 29.721462,  
        longitude: -95.386569, 
        weight: 1, 
    },
    {
        latitude: 29.734468,  
        longitude: -95.391256, 
        weight: 1, 
    },
    {
        latitude: 29.761184,  
        longitude: -95.348897, 
        weight: 1, 
    },
    {
        latitude: 29.802822,  
        longitude: -95.482934, 
        weight: 1, 
    },
    {
        latitude: 29.688886,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.829293,  
        longitude: -95.380961, 
        weight: 1, 
    },
    {
        latitude: 29.652745,  
        longitude: -95.553921, 
        weight: 1, 
    },
    {
        latitude: 29.652745,  
        longitude: -95.553921, 
        weight: 1, 
    },
    {
        latitude: 29.741389,  
        longitude: -95.379815, 
        weight: 1, 
    },
    {
        latitude: 29.671512,  
        longitude: -95.554922, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.738251,  
        longitude: -95.436726, 
        weight: 1, 
    },
    {
        latitude: 29.942132,  
        longitude: -95.438651, 
        weight: 1, 
    },
    {
        latitude: 29.815146,  
        longitude: -95.500828, 
        weight: 1, 
    },
    {
        latitude: 29.853588,  
        longitude: -95.346075, 
        weight: 1, 
    },
    {
        latitude: 29.870157,  
        longitude: -95.376436, 
        weight: 1, 
    },
    {
        latitude: 29.728811,  
        longitude: -95.399865, 
        weight: 1, 
    },
    {
        latitude: 29.966245,  
        longitude: -95.422944, 
        weight: 1, 
    },
    {
        latitude: 29.703341,  
        longitude: -95.476342, 
        weight: 1, 
    },
    {
        latitude: 29.816121,  
        longitude: -95.280685, 
        weight: 1, 
    },
    {
        latitude: 29.794398,  
        longitude: -95.218725, 
        weight: 1, 
    },
    {
        latitude: 29.725846,  
        longitude: -95.427801, 
        weight: 1, 
    },
    {
        latitude: 29.73757,  
        longitude: -95.581249, 
        weight: 1, 
    },
    {
        latitude: 29.826788,  
        longitude: -95.454601, 
        weight: 1, 
    },
    {
        latitude: 29.924443,  
        longitude: -95.411457, 
        weight: 1, 
    },
    {
        latitude: 29.750219,  
        longitude: -95.465015, 
        weight: 1, 
    },
    {
        latitude: 29.683992,  
        longitude: -95.534841, 
        weight: 1, 
    },
    {
        latitude: 29.602614,  
        longitude: -95.494513, 
        weight: 1, 
    },
    {
        latitude: 29.610433,  
        longitude: -95.433162, 
        weight: 1, 
    },
    {
        latitude: 29.610433,  
        longitude: -95.433162, 
        weight: 1, 
    },
    {
        latitude: 29.638724,  
        longitude: -95.508263, 
        weight: 1, 
    },
    {
        latitude: 29.740425,  
        longitude: -95.466518, 
        weight: 1, 
    },
    {
        latitude: 29.753137,  
        longitude: -95.402839, 
        weight: 1, 
    },
    {
        latitude: 29.668281,  
        longitude: -95.261333, 
        weight: 1, 
    },
    {
        latitude: 29.790792,  
        longitude: -95.565113, 
        weight: 1, 
    },
    {
        latitude: 29.68978,  
        longitude: -95.364543, 
        weight: 1, 
    },
    {
        latitude: 29.788152,  
        longitude: -95.360346, 
        weight: 1, 
    },
    {
        latitude: 29.645249,  
        longitude: -95.218789, 
        weight: 1, 
    },
    {
        latitude: 29.859039,  
        longitude: -95.372009, 
        weight: 1, 
    },
    {
        latitude: 29.696091,  
        longitude: -95.521919, 
        weight: 1, 
    },
    {
        latitude: 29.661933,  
        longitude: -95.425213, 
        weight: 1, 
    },
    {
        latitude: 29.789131,  
        longitude: -95.651407, 
        weight: 1, 
    },
    {
        latitude: 29.803122,  
        longitude: -95.310453, 
        weight: 1, 
    },
    {
        latitude: 29.737925,  
        longitude: -95.38012, 
        weight: 1, 
    },
    {
        latitude: 29.843683,  
        longitude: -95.514015, 
        weight: 1, 
    },
    {
        latitude: 29.663763,  
        longitude: -95.3209, 
        weight: 1, 
    },
    {
        latitude: 29.740751,  
        longitude: -95.460882, 
        weight: 1, 
    },
    {
        latitude: 29.639466,  
        longitude: -95.503151, 
        weight: 1, 
    },
    {
        latitude: 29.714547,  
        longitude: -95.48892, 
        weight: 1, 
    },
    {
        latitude: 29.675861,  
        longitude: -95.31588, 
        weight: 1, 
    },
    {
        latitude: 29.626114,  
        longitude: -95.515152, 
        weight: 1, 
    },
    {
        latitude: 29.626114,  
        longitude: -95.515152, 
        weight: 1, 
    },
    {
        latitude: 29.626114,  
        longitude: -95.515152, 
        weight: 1, 
    },
    {
        latitude: 29.740706,  
        longitude: -95.498394, 
        weight: 1, 
    },
    {
        latitude: 29.785625,  
        longitude: -95.360807, 
        weight: 1, 
    },
    {
        latitude: 29.796361,  
        longitude: -95.409993, 
        weight: 1, 
    },
    {
        latitude: 29.686304,  
        longitude: -95.364572, 
        weight: 1, 
    },
    {
        latitude: 29.66334,  
        longitude: -95.327761, 
        weight: 1, 
    },
    {
        latitude: 29.65619,  
        longitude: -95.508429, 
        weight: 1, 
    },
    {
        latitude: 29.546703,  
        longitude: -95.147776, 
        weight: 1, 
    },
    {
        latitude: 29.818167,  
        longitude: -95.467838, 
        weight: 1, 
    },
    {
        latitude: 29.818167,  
        longitude: -95.467838, 
        weight: 1, 
    },
    {
        latitude: 30.015487,  
        longitude: -95.352591, 
        weight: 1, 
    },
    {
        latitude: 29.667507,  
        longitude: -95.328527, 
        weight: 1, 
    },
    {
        latitude: 29.844838,  
        longitude: -95.316065, 
        weight: 1, 
    },
    {
        latitude: 29.844838,  
        longitude: -95.316065, 
        weight: 1, 
    },
    {
        latitude: 29.746962,  
        longitude: -95.586865, 
        weight: 1, 
    },
    {
        latitude: 29.716772,  
        longitude: -95.547788, 
        weight: 1, 
    },
    {
        latitude: 29.827978,  
        longitude: -95.379986, 
        weight: 1, 
    },
    {
        latitude: 29.681635,  
        longitude: -95.503643, 
        weight: 1, 
    },
    {
        latitude: 29.78523,  
        longitude: -95.577601, 
        weight: 1, 
    },
    {
        latitude: 30.051846,  
        longitude: -95.247655, 
        weight: 1, 
    },
    {
        latitude: 29.967063,  
        longitude: -95.284339, 
        weight: 1, 
    },
    {
        latitude: 29.830296,  
        longitude: -95.316642, 
        weight: 1, 
    },
    {
        latitude: 29.948705,  
        longitude: -95.331367, 
        weight: 1, 
    },
    {
        latitude: 29.740961,  
        longitude: -95.58518, 
        weight: 1, 
    },
    {
        latitude: 29.780067,  
        longitude: -95.581594, 
        weight: 1, 
    },
    {
        latitude: 29.85746,  
        longitude: -95.526936, 
        weight: 1, 
    },
    {
        latitude: 29.939706,  
        longitude: -95.400604, 
        weight: 1, 
    },
    {
        latitude: 29.622134,  
        longitude: -95.217027, 
        weight: 1, 
    },
    {
        latitude: 29.891162,  
        longitude: -95.303742, 
        weight: 1, 
    },
    {
        latitude: 29.700588,  
        longitude: -95.365776, 
        weight: 1, 
    },
    {
        latitude: 29.814405,  
        longitude: -95.459271, 
        weight: 1, 
    },
    {
        latitude: 29.737176,  
        longitude: -95.382664, 
        weight: 1, 
    },
    {
        latitude: 29.701597,  
        longitude: -95.322424, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.721412,  
        longitude: -95.306858, 
        weight: 1, 
    },
    {
        latitude: 29.740738,  
        longitude: -95.345382, 
        weight: 1, 
    },
    {
        latitude: 29.935882,  
        longitude: -95.174118, 
        weight: 1, 
    },
    {
        latitude: 29.780995,  
        longitude: -95.536007, 
        weight: 1, 
    },
    {
        latitude: 29.802963,  
        longitude: -95.325884, 
        weight: 1, 
    },
    {
        latitude: 29.824931,  
        longitude: -95.378288, 
        weight: 1, 
    },
    {
        latitude: 29.96506,  
        longitude: -95.290946, 
        weight: 1, 
    },
    {
        latitude: 29.734526,  
        longitude: -95.559837, 
        weight: 1, 
    },
    {
        latitude: 29.840675,  
        longitude: -95.31607, 
        weight: 1, 
    },
    {
        latitude: 29.859566,  
        longitude: -95.473354, 
        weight: 1, 
    },
    {
        latitude: 29.841252,  
        longitude: -95.251973, 
        weight: 1, 
    },
    {
        latitude: 29.785245,  
        longitude: -95.576218, 
        weight: 1, 
    },
    {
        latitude: 29.859029,  
        longitude: -95.40263, 
        weight: 1, 
    },
    {
        latitude: 29.801705,  
        longitude: -95.41528, 
        weight: 1, 
    },
    {
        latitude: 29.740733,  
        longitude: -95.462966, 
        weight: 1, 
    },
    {
        latitude: 29.828862,  
        longitude: -95.410637, 
        weight: 1, 
    },
    {
        latitude: 29.79356,  
        longitude: -95.329737, 
        weight: 1, 
    },
    {
        latitude: 29.666423,  
        longitude: -95.551867, 
        weight: 1, 
    },
    {
        latitude: 29.760883,  
        longitude: -95.352921, 
        weight: 1, 
    },
    {
        latitude: 29.82336,  
        longitude: -95.438066, 
        weight: 1, 
    },
    {
        latitude: 29.735907,  
        longitude: -95.619586, 
        weight: 1, 
    },
    {
        latitude: 29.84151,  
        longitude: -95.262264, 
        weight: 1, 
    },
    {
        latitude: 29.645397,  
        longitude: -95.37825, 
        weight: 1, 
    },
    {
        latitude: 29.939639,  
        longitude: -95.320099, 
        weight: 1, 
    },
    {
        latitude: 29.687555,  
        longitude: -95.386168, 
        weight: 1, 
    },
    {
        latitude: 29.661276,  
        longitude: -95.357184, 
        weight: 1, 
    },
    {
        latitude: 29.693341,  
        longitude: -95.587917, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.782448,  
        longitude: -95.478432, 
        weight: 1, 
    },
    {
        latitude: 29.803951,  
        longitude: -95.317024, 
        weight: 1, 
    },
    {
        latitude: 29.803951,  
        longitude: -95.317024, 
        weight: 1, 
    },
    {
        latitude: 29.841666,  
        longitude: -95.475184, 
        weight: 1, 
    },
    {
        latitude: 29.861802,  
        longitude: -95.424393, 
        weight: 1, 
    },
    {
        latitude: 29.741044,  
        longitude: -95.306821, 
        weight: 1, 
    },
    {
        latitude: 29.843469,  
        longitude: -95.393621, 
        weight: 1, 
    },
    {
        latitude: 29.784288,  
        longitude: -95.615464, 
        weight: 1, 
    },
    {
        latitude: 29.733898,  
        longitude: -95.636575, 
        weight: 1, 
    },
    {
        latitude: 29.664305,  
        longitude: -95.462852, 
        weight: 1, 
    },
    {
        latitude: 29.777065,  
        longitude: -95.395146, 
        weight: 1, 
    },
    {
        latitude: 29.718146,  
        longitude: -95.276797, 
        weight: 1, 
    },
    {
        latitude: 29.742215,  
        longitude: -95.362648, 
        weight: 1, 
    },
    {
        latitude: 29.724095,  
        longitude: -95.46815, 
        weight: 1, 
    },
    {
        latitude: 30.05268,  
        longitude: -95.173118, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.842416,  
        longitude: -95.520322, 
        weight: 1, 
    },
    {
        latitude: 29.692841,  
        longitude: -95.413099, 
        weight: 1, 
    },
    {
        latitude: 29.749949,  
        longitude: -95.355131, 
        weight: 1, 
    },
    {
        latitude: 29.766277,  
        longitude: -95.339444, 
        weight: 1, 
    },
    {
        latitude: 29.857242,  
        longitude: -95.420808, 
        weight: 1, 
    },
    {
        latitude: 30.04947,  
        longitude: -95.234218, 
        weight: 1, 
    },
    {
        latitude: 29.742599,  
        longitude: -95.500944, 
        weight: 1, 
    },
    {
        latitude: 29.68565,  
        longitude: -95.551436, 
        weight: 1, 
    },
    {
        latitude: 29.677332,  
        longitude: -95.295346, 
        weight: 1, 
    },
    {
        latitude: 29.783939,  
        longitude: -95.39886, 
        weight: 1, 
    },
    {
        latitude: 29.734002,  
        longitude: -95.559822, 
        weight: 1, 
    },
    {
        latitude: 29.755929,  
        longitude: -95.367041, 
        weight: 1, 
    },
    {
        latitude: 29.732664,  
        longitude: -95.411771, 
        weight: 1, 
    },
    {
        latitude: 29.942132,  
        longitude: -95.438651, 
        weight: 1, 
    },
    {
        latitude: 29.724959,  
        longitude: -95.441343, 
        weight: 1, 
    },
    {
        latitude: 29.675979,  
        longitude: -95.474295, 
        weight: 1, 
    },
    {
        latitude: 29.755634,  
        longitude: -95.498072, 
        weight: 1, 
    },
    {
        latitude: 29.801202,  
        longitude: -95.469975, 
        weight: 1, 
    },
    {
        latitude: 29.680666,  
        longitude: -95.551847, 
        weight: 1, 
    },
    {
        latitude: 29.984241,  
        longitude: -95.300163, 
        weight: 1, 
    },
    {
        latitude: 29.801705,  
        longitude: -95.41528, 
        weight: 1, 
    },
    {
        latitude: 29.822591,  
        longitude: -95.501949, 
        weight: 1, 
    },
    {
        latitude: 29.882011,  
        longitude: -95.440082, 
        weight: 1, 
    },
    {
        latitude: 29.735377,  
        longitude: -95.487838, 
        weight: 1, 
    },
    {
        latitude: 30.050084,  
        longitude: -95.254255, 
        weight: 1, 
    },
    {
        latitude: 29.636486,  
        longitude: -95.235996, 
        weight: 1, 
    },
    {
        latitude: 29.802843,  
        longitude: -95.47922, 
        weight: 1, 
    },
    {
        latitude: 29.691139,  
        longitude: -95.535201, 
        weight: 1, 
    },
    {
        latitude: 29.652166,  
        longitude: -95.253754, 
        weight: 1, 
    },
    {
        latitude: 29.652166,  
        longitude: -95.253754, 
        weight: 1, 
    },
    {
        latitude: 29.685461,  
        longitude: -95.281383, 
        weight: 1, 
    },
    {
        latitude: 29.685461,  
        longitude: -95.281383, 
        weight: 1, 
    },
    {
        latitude: 29.656072,  
        longitude: -95.503407, 
        weight: 1, 
    },
    {
        latitude: 29.638789,  
        longitude: -95.508254, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.634461,  
        longitude: -95.339351, 
        weight: 1, 
    },
    {
        latitude: 29.797132,  
        longitude: -95.324029, 
        weight: 1, 
    },
    {
        latitude: 29.797132,  
        longitude: -95.324029, 
        weight: 1, 
    },
    {
        latitude: 29.689696,  
        longitude: -95.556794, 
        weight: 1, 
    },
    {
        latitude: 29.729598,  
        longitude: -95.348207, 
        weight: 1, 
    },
    {
        latitude: 30.070463,  
        longitude: -95.251251, 
        weight: 1, 
    },
    {
        latitude: 29.961227,  
        longitude: -95.547306, 
        weight: 1, 
    },
    {
        latitude: 29.859029,  
        longitude: -95.40263, 
        weight: 1, 
    },
    {
        latitude: 29.723076,  
        longitude: -95.542343, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.699087,  
        longitude: -95.557459, 
        weight: 1, 
    },
    {
        latitude: 29.752172,  
        longitude: -95.366149, 
        weight: 1, 
    },
    {
        latitude: 29.938045,  
        longitude: -95.174133, 
        weight: 1, 
    },
    {
        latitude: 29.702517,  
        longitude: -95.355731, 
        weight: 1, 
    },
    {
        latitude: 29.594456,  
        longitude: -95.498913, 
        weight: 1, 
    },
    {
        latitude: 29.583454,  
        longitude: -95.180235, 
        weight: 1, 
    },
    {
        latitude: 29.691857,  
        longitude: -95.283465, 
        weight: 1, 
    },
    {
        latitude: 30.051834,  
        longitude: -95.247638, 
        weight: 1, 
    },
    {
        latitude: 29.863447,  
        longitude: -95.459861, 
        weight: 1, 
    },
    {
        latitude: 29.77934,  
        longitude: -95.218572, 
        weight: 1, 
    },
    {
        latitude: 29.743826,  
        longitude: -95.603645, 
        weight: 1, 
    },
    {
        latitude: 29.772259,  
        longitude: -95.397333, 
        weight: 1, 
    },
    {
        latitude: 29.848728,  
        longitude: -95.51498, 
        weight: 1, 
    },
    {
        latitude: 29.744423,  
        longitude: -95.469137, 
        weight: 1, 
    },
    {
        latitude: 29.96199,  
        longitude: -95.5571, 
        weight: 1, 
    },
    {
        latitude: 29.607173,  
        longitude: -95.212084, 
        weight: 1, 
    },
    {
        latitude: 29.731796,  
        longitude: -95.488962, 
        weight: 1, 
    },
    {
        latitude: 29.845577,  
        longitude: -95.377644, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.94812,  
        longitude: -95.395027, 
        weight: 1, 
    },
    {
        latitude: 29.694053,  
        longitude: -95.60702, 
        weight: 1, 
    },
    {
        latitude: 29.77765,  
        longitude: -95.323653, 
        weight: 1, 
    },
    {
        latitude: 29.77765,  
        longitude: -95.323653, 
        weight: 1, 
    },
    {
        latitude: 29.758291,  
        longitude: -95.359762, 
        weight: 1, 
    },
    {
        latitude: 29.689022,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.847647,  
        longitude: -95.308724, 
        weight: 1, 
    },
    {
        latitude: 29.75509,  
        longitude: -95.365511, 
        weight: 1, 
    },
    {
        latitude: 29.7385,  
        longitude: -95.61383, 
        weight: 1, 
    },
    {
        latitude: 30.022232,  
        longitude: -95.113461, 
        weight: 1, 
    },
    {
        latitude: 29.725994,  
        longitude: -95.495351, 
        weight: 1, 
    },
    {
        latitude: 29.81555,  
        longitude: -95.2698, 
        weight: 1, 
    },
    {
        latitude: 29.641208,  
        longitude: -95.242952, 
        weight: 1, 
    },
    {
        latitude: 29.716671,  
        longitude: -95.317164, 
        weight: 1, 
    },
    {
        latitude: 29.753809,  
        longitude: -95.381303, 
        weight: 1, 
    },
    {
        latitude: 29.659744,  
        longitude: -95.589083, 
        weight: 1, 
    },
    {
        latitude: 29.710144,  
        longitude: -95.307241, 
        weight: 1, 
    },
    {
        latitude: 29.75333,  
        longitude: -95.458568, 
        weight: 1, 
    },
    {
        latitude: 30.051827,  
        longitude: -95.247599, 
        weight: 1, 
    },
    {
        latitude: 29.570956,  
        longitude: -95.110204, 
        weight: 1, 
    },
    {
        latitude: 29.740082,  
        longitude: -95.419387, 
        weight: 1, 
    },
    {
        latitude: 29.642388,  
        longitude: -95.238868, 
        weight: 1, 
    },
    {
        latitude: 29.661896,  
        longitude: -95.425308, 
        weight: 1, 
    },
    {
        latitude: 29.756374,  
        longitude: -95.625274, 
        weight: 1, 
    },
    {
        latitude: 29.756374,  
        longitude: -95.625274, 
        weight: 1, 
    },
    {
        latitude: 29.658437,  
        longitude: -95.255728, 
        weight: 1, 
    },
    {
        latitude: 29.743801,  
        longitude: -95.395025, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.77101,  
        longitude: -95.185574, 
        weight: 1, 
    },
    {
        latitude: 29.750512,  
        longitude: -95.61941, 
        weight: 1, 
    },
    {
        latitude: 29.748167,  
        longitude: -95.350349, 
        weight: 1, 
    },
    {
        latitude: 29.802843,  
        longitude: -95.47922, 
        weight: 1, 
    },
    {
        latitude: 29.734254,  
        longitude: -95.406338, 
        weight: 1, 
    },
    {
        latitude: 29.757276,  
        longitude: -95.358037, 
        weight: 1, 
    },
    {
        latitude: 29.657925,  
        longitude: -95.383763, 
        weight: 1, 
    },
    {
        latitude: 29.769941,  
        longitude: -95.326423, 
        weight: 1, 
    },
    {
        latitude: 29.725234,  
        longitude: -95.374465, 
        weight: 1, 
    },
    {
        latitude: 29.845317,  
        longitude: -95.332994, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.750165,  
        longitude: -95.461304, 
        weight: 1, 
    },
    {
        latitude: 30.046888,  
        longitude: -95.172223, 
        weight: 1, 
    },
    {
        latitude: 29.849817,  
        longitude: -95.27851, 
        weight: 1, 
    },
    {
        latitude: 30.035744,  
        longitude: -95.172629, 
        weight: 1, 
    },
    {
        latitude: 29.666379,  
        longitude: -95.334404, 
        weight: 1, 
    },
    {
        latitude: 29.853496,  
        longitude: -95.395026, 
        weight: 1, 
    },
    {
        latitude: 29.775548,  
        longitude: -95.315203, 
        weight: 1, 
    },
    {
        latitude: 29.874762,  
        longitude: -95.294061, 
        weight: 1, 
    },
    {
        latitude: 29.679799,  
        longitude: -95.35588, 
        weight: 1, 
    },
    {
        latitude: 29.831413,  
        longitude: -95.27429, 
        weight: 1, 
    },
    {
        latitude: 29.6483,  
        longitude: -95.508342, 
        weight: 1, 
    },
    {
        latitude: 29.668281,  
        longitude: -95.261333, 
        weight: 1, 
    },
    {
        latitude: 29.834913,  
        longitude: -95.29767, 
        weight: 1, 
    },
    {
        latitude: 29.708043,  
        longitude: -95.60632, 
        weight: 1, 
    },
    {
        latitude: 29.89898,  
        longitude: -95.412636, 
        weight: 1, 
    },
    {
        latitude: 29.698442,  
        longitude: -95.552247, 
        weight: 1, 
    },
    {
        latitude: 29.83889,  
        longitude: -95.429033, 
        weight: 1, 
    },
    {
        latitude: 29.549595,  
        longitude: -95.105658, 
        weight: 1, 
    },
    {
        latitude: 29.720067,  
        longitude: -95.48429, 
        weight: 1, 
    },
    {
        latitude: 29.720067,  
        longitude: -95.48429, 
        weight: 1, 
    },
    {
        latitude: 29.80129,  
        longitude: -95.267795, 
        weight: 1, 
    },
    {
        latitude: 29.756374,  
        longitude: -95.625274, 
        weight: 1, 
    },
    {
        latitude: 29.737453,  
        longitude: -95.507777, 
        weight: 1, 
    },
    {
        latitude: 29.820169,  
        longitude: -95.365608, 
        weight: 1, 
    },
    {
        latitude: 29.766242,  
        longitude: -95.409398, 
        weight: 1, 
    },
    {
        latitude: 29.723454,  
        longitude: -95.495541, 
        weight: 1, 
    },
    {
        latitude: 29.6794,  
        longitude: -95.556007, 
        weight: 1, 
    },
    {
        latitude: 29.769931,  
        longitude: -95.358256, 
        weight: 1, 
    },
    {
        latitude: 29.825626,  
        longitude: -95.396317, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.78075,  
        longitude: -95.590187, 
        weight: 1, 
    },
    {
        latitude: 29.674936,  
        longitude: -95.582512, 
        weight: 1, 
    },
    {
        latitude: 29.674936,  
        longitude: -95.582512, 
        weight: 1, 
    },
    {
        latitude: 29.674936,  
        longitude: -95.582512, 
        weight: 1, 
    },
    {
        latitude: 29.649141,  
        longitude: -95.370583, 
        weight: 1, 
    },
    {
        latitude: 29.859127,  
        longitude: -95.42198, 
        weight: 1, 
    },
    {
        latitude: 29.689131,  
        longitude: -95.464106, 
        weight: 1, 
    },
    {
        latitude: 29.785899,  
        longitude: -95.366551, 
        weight: 1, 
    },
    {
        latitude: 29.676413,  
        longitude: -95.269169, 
        weight: 1, 
    },
    {
        latitude: 29.829361,  
        longitude: -95.502914, 
        weight: 1, 
    },
    {
        latitude: 29.841981,  
        longitude: -95.376828, 
        weight: 1, 
    },
    {
        latitude: 29.754355,  
        longitude: -95.360603, 
        weight: 1, 
    },
    {
        latitude: 29.828285,  
        longitude: -95.429618, 
        weight: 1, 
    },
    {
        latitude: 29.699468,  
        longitude: -95.354604, 
        weight: 1, 
    },
    {
        latitude: 29.946207,  
        longitude: -95.422401, 
        weight: 1, 
    },
    {
        latitude: 29.856282,  
        longitude: -95.373979, 
        weight: 1, 
    },
    {
        latitude: 29.702341,  
        longitude: -95.295265, 
        weight: 1, 
    },
    {
        latitude: 29.702341,  
        longitude: -95.295265, 
        weight: 1, 
    },
    {
        latitude: 29.760434,  
        longitude: -95.344437, 
        weight: 1, 
    },
    {
        latitude: 29.649275,  
        longitude: -95.527923, 
        weight: 1, 
    },
    {
        latitude: 29.649275,  
        longitude: -95.527923, 
        weight: 1, 
    },
    {
        latitude: 29.649275,  
        longitude: -95.527923, 
        weight: 1, 
    },
    {
        latitude: 29.840491,  
        longitude: -95.341497, 
        weight: 1, 
    },
    {
        latitude: 29.710635,  
        longitude: -95.321691, 
        weight: 1, 
    },
    {
        latitude: 29.780232,  
        longitude: -95.53593, 
        weight: 1, 
    },
    {
        latitude: 29.780232,  
        longitude: -95.53593, 
        weight: 1, 
    },
    {
        latitude: 29.709228,  
        longitude: -95.604583, 
        weight: 1, 
    },
    {
        latitude: 29.709228,  
        longitude: -95.604583, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.753117,  
        longitude: -95.376839, 
        weight: 1, 
    },
    {
        latitude: 29.715078,  
        longitude: -95.381409, 
        weight: 1, 
    },
    {
        latitude: 29.656998,  
        longitude: -95.499662, 
        weight: 1, 
    },
    {
        latitude: 29.67046,  
        longitude: -95.554914, 
        weight: 1, 
    },
    {
        latitude: 29.774264,  
        longitude: -95.354915, 
        weight: 1, 
    },
    {
        latitude: 29.637997,  
        longitude: -95.241893, 
        weight: 1, 
    },
    {
        latitude: 29.736656,  
        longitude: -95.466749, 
        weight: 1, 
    },
    {
        latitude: 29.742716,  
        longitude: -95.359609, 
        weight: 1, 
    },
    {
        latitude: 29.664191,  
        longitude: -95.350427, 
        weight: 1, 
    },
    {
        latitude: 29.734008,  
        longitude: -95.42643, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.776421,  
        longitude: -95.360772, 
        weight: 1, 
    },
    {
        latitude: 29.749251,  
        longitude: -95.376112, 
        weight: 1, 
    },
    {
        latitude: 29.775169,  
        longitude: -95.383137, 
        weight: 1, 
    },
    {
        latitude: 29.73902,  
        longitude: -95.613988, 
        weight: 1, 
    },
    {
        latitude: 29.842452,  
        longitude: -95.432788, 
        weight: 1, 
    },
    {
        latitude: 29.757836,  
        longitude: -95.362701, 
        weight: 1, 
    },
    {
        latitude: 29.704138,  
        longitude: -95.323047, 
        weight: 1, 
    },
    {
        latitude: 29.729115,  
        longitude: -95.501161, 
        weight: 1, 
    },
    {
        latitude: 29.785862,  
        longitude: -95.343273, 
        weight: 1, 
    },
    {
        latitude: 29.748138,  
        longitude: -95.389696, 
        weight: 1, 
    },
    {
        latitude: 29.770403,  
        longitude: -95.314618, 
        weight: 1, 
    },
    {
        latitude: 29.732265,  
        longitude: -95.543361, 
        weight: 1, 
    },
    {
        latitude: 29.748105,  
        longitude: -95.56957, 
        weight: 1, 
    },
    {
        latitude: 29.75327,  
        longitude: -95.381751, 
        weight: 1, 
    },
    {
        latitude: 29.810965,  
        longitude: -95.498638, 
        weight: 1, 
    },
    {
        latitude: 29.810965,  
        longitude: -95.498638, 
        weight: 1, 
    },
    {
        latitude: 29.707725,  
        longitude: -95.579215, 
        weight: 1, 
    },
    {
        latitude: 29.707725,  
        longitude: -95.579215, 
        weight: 1, 
    },
    {
        latitude: 29.73619,  
        longitude: -95.605397, 
        weight: 1, 
    },
    {
        latitude: 29.662294,  
        longitude: -95.437755, 
        weight: 1, 
    },
    {
        latitude: 29.757824,  
        longitude: -95.265694, 
        weight: 1, 
    },
    {
        latitude: 29.750972,  
        longitude: -95.353172, 
        weight: 1, 
    },
    {
        latitude: 29.724933,  
        longitude: -95.372536, 
        weight: 1, 
    },
    {
        latitude: 29.771938,  
        longitude: -95.409689, 
        weight: 1, 
    },
    {
        latitude: 29.840346,  
        longitude: -95.4772, 
        weight: 1, 
    },
    {
        latitude: 29.673191,  
        longitude: -95.289184, 
        weight: 1, 
    },
    {
        latitude: 29.818159,  
        longitude: -95.327304, 
        weight: 1, 
    },
    {
        latitude: 29.700458,  
        longitude: -95.552297, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.657812,  
        longitude: -95.385599, 
        weight: 1, 
    },
    {
        latitude: 29.661673,  
        longitude: -95.5085, 
        weight: 1, 
    },
    {
        latitude: 29.72383,  
        longitude: -95.378408, 
        weight: 1, 
    },
    {
        latitude: 29.859628,  
        longitude: -95.473355, 
        weight: 1, 
    },
    {
        latitude: 29.859628,  
        longitude: -95.473355, 
        weight: 1, 
    },
    {
        latitude: 29.606911,  
        longitude: -95.233063, 
        weight: 1, 
    },
    {
        latitude: 29.633791,  
        longitude: -95.350525, 
        weight: 1, 
    },
    {
        latitude: 29.700218,  
        longitude: -95.379675, 
        weight: 1, 
    },
    {
        latitude: 29.747113,  
        longitude: -95.368716, 
        weight: 1, 
    },
    {
        latitude: 29.685346,  
        longitude: -95.495902, 
        weight: 1, 
    },
    {
        latitude: 29.620416,  
        longitude: -95.22233, 
        weight: 1, 
    },
    {
        latitude: 29.709612,  
        longitude: -95.302055, 
        weight: 1, 
    },
    {
        latitude: 29.563225,  
        longitude: -95.138805, 
        weight: 1, 
    },
    {
        latitude: 29.806031,  
        longitude: -95.569863, 
        weight: 1, 
    },
    {
        latitude: 29.563225,  
        longitude: -95.138805, 
        weight: 1, 
    },
    {
        latitude: 29.751337,  
        longitude: -95.455185, 
        weight: 1, 
    },
    {
        latitude: 29.682844,  
        longitude: -95.456036, 
        weight: 1, 
    },
    {
        latitude: 29.689154,  
        longitude: -95.457482, 
        weight: 1, 
    },
    {
        latitude: 29.689154,  
        longitude: -95.457482, 
        weight: 1, 
    },
    {
        latitude: 29.751337,  
        longitude: -95.455185, 
        weight: 1, 
    },
    {
        latitude: 29.771971,  
        longitude: -95.414349, 
        weight: 1, 
    },
    {
        latitude: 29.677349,  
        longitude: -95.553518, 
        weight: 1, 
    },
    {
        latitude: 29.736608,  
        longitude: -95.54365, 
        weight: 1, 
    },
    {
        latitude: 29.883046,  
        longitude: -95.411241, 
        weight: 1, 
    },
    {
        latitude: 29.883046,  
        longitude: -95.411241, 
        weight: 1, 
    },
    {
        latitude: 29.809913,  
        longitude: -95.465185, 
        weight: 1, 
    },
    {
        latitude: 30.056045,  
        longitude: -95.225986, 
        weight: 1, 
    },
    {
        latitude: 29.73902,  
        longitude: -95.613988, 
        weight: 1, 
    },
    {
        latitude: 29.737818,  
        longitude: -95.484394, 
        weight: 1, 
    },
    {
        latitude: 29.729857,  
        longitude: -95.598892, 
        weight: 1, 
    },
    {
        latitude: 29.819695,  
        longitude: -95.328745, 
        weight: 1, 
    },
    {
        latitude: 29.831101,  
        longitude: -95.297995, 
        weight: 1, 
    },
    {
        latitude: 30.038855,  
        longitude: -95.136875, 
        weight: 1, 
    },
    {
        latitude: 29.841362,  
        longitude: -95.501877, 
        weight: 1, 
    },
    {
        latitude: 29.780767,  
        longitude: -95.296158, 
        weight: 1, 
    },
    {
        latitude: 29.709709,  
        longitude: -95.518661, 
        weight: 1, 
    },
    {
        latitude: 29.709709,  
        longitude: -95.518661, 
        weight: 1, 
    },
    {
        latitude: 29.644268,  
        longitude: -95.539988, 
        weight: 1, 
    },
    {
        latitude: 29.745822,  
        longitude: -95.355612, 
        weight: 1, 
    },
    {
        latitude: 30.085516,  
        longitude: -95.196077, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.668108,  
        longitude: -95.308731, 
        weight: 1, 
    },
    {
        latitude: 29.735908,  
        longitude: -95.644069, 
        weight: 1, 
    },
    {
        latitude: 29.735908,  
        longitude: -95.644069, 
        weight: 1, 
    },
    {
        latitude: 29.667298,  
        longitude: -95.289081, 
        weight: 1, 
    },
    {
        latitude: 29.667298,  
        longitude: -95.289081, 
        weight: 1, 
    },
    {
        latitude: 29.814773,  
        longitude: -95.382691, 
        weight: 1, 
    },
    {
        latitude: 29.814773,  
        longitude: -95.382691, 
        weight: 1, 
    },
    {
        latitude: 29.814773,  
        longitude: -95.382691, 
        weight: 1, 
    },
    {
        latitude: 29.663194,  
        longitude: -95.355547, 
        weight: 1, 
    },
    {
        latitude: 29.672953,  
        longitude: -95.420917, 
        weight: 1, 
    },
    {
        latitude: 29.735771,  
        longitude: -95.424727, 
        weight: 1, 
    },
    {
        latitude: 29.770068,  
        longitude: -95.608757, 
        weight: 1, 
    },
    {
        latitude: 29.938599,  
        longitude: -95.36581, 
        weight: 1, 
    },
    {
        latitude: 29.721993,  
        longitude: -95.55816, 
        weight: 1, 
    },
    {
        latitude: 29.757757,  
        longitude: -95.376336, 
        weight: 1, 
    },
    {
        latitude: 29.757757,  
        longitude: -95.376336, 
        weight: 1, 
    },
    {
        latitude: 29.763109,  
        longitude: -95.625363, 
        weight: 1, 
    },
    {
        latitude: 29.732898,  
        longitude: -95.33266, 
        weight: 1, 
    },
    {
        latitude: 29.732898,  
        longitude: -95.33266, 
        weight: 1, 
    },
    {
        latitude: 29.717609,  
        longitude: -95.318215, 
        weight: 1, 
    },
    {
        latitude: 29.729801,  
        longitude: -95.602784, 
        weight: 1, 
    },
    {
        latitude: 29.57548,  
        longitude: -95.201117, 
        weight: 1, 
    },
    {
        latitude: 29.661693,  
        longitude: -95.487951, 
        weight: 1, 
    },
    {
        latitude: 29.644213,  
        longitude: -95.508293, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.693049,  
        longitude: -95.319014, 
        weight: 1, 
    },
    {
        latitude: 29.670077,  
        longitude: -95.277056, 
        weight: 1, 
    },
    {
        latitude: 29.95305,  
        longitude: -95.5384, 
        weight: 1, 
    },
    {
        latitude: 29.718982,  
        longitude: -95.320376, 
        weight: 1, 
    },
    {
        latitude: 29.734298,  
        longitude: -95.403756, 
        weight: 1, 
    },
    {
        latitude: 29.689602,  
        longitude: -95.363271, 
        weight: 1, 
    },
    {
        latitude: 29.748074,  
        longitude: -95.377045, 
        weight: 1, 
    },
    {
        latitude: 29.713632,  
        longitude: -95.538932, 
        weight: 1, 
    },
    {
        latitude: 29.688789,  
        longitude: -95.293859, 
        weight: 1, 
    },
    {
        latitude: 29.812632,  
        longitude: -95.318986, 
        weight: 1, 
    },
    {
        latitude: 30.050084,  
        longitude: -95.254255, 
        weight: 1, 
    },
    {
        latitude: 29.745242,  
        longitude: -95.507621, 
        weight: 1, 
    },
    {
        latitude: 29.742681,  
        longitude: -95.501679, 
        weight: 1, 
    },
    {
        latitude: 29.741154,  
        longitude: -95.357027, 
        weight: 1, 
    },
    {
        latitude: 29.749083,  
        longitude: -95.377523, 
        weight: 1, 
    },
    {
        latitude: 29.822428,  
        longitude: -95.372804, 
        weight: 1, 
    },
    {
        latitude: 29.660393,  
        longitude: -95.253938, 
        weight: 1, 
    },
    {
        latitude: 29.716671,  
        longitude: -95.317164, 
        weight: 1, 
    },
    {
        latitude: 29.770509,  
        longitude: -95.415098, 
        weight: 1, 
    },
    {
        latitude: 29.665491,  
        longitude: -95.52068, 
        weight: 1, 
    },
    {
        latitude: 29.752713,  
        longitude: -95.35043, 
        weight: 1, 
    },
    {
        latitude: 29.736177,  
        longitude: -95.605842, 
        weight: 1, 
    },
    {
        latitude: 29.736177,  
        longitude: -95.605842, 
        weight: 1, 
    },
    {
        latitude: 29.775486,  
        longitude: -95.415832, 
        weight: 1, 
    },
    {
        latitude: 29.737783,  
        longitude: -95.487541, 
        weight: 1, 
    },
    {
        latitude: 29.818934,  
        longitude: -95.269858, 
        weight: 1, 
    },
    {
        latitude: 29.818934,  
        longitude: -95.269858, 
        weight: 1, 
    },
    {
        latitude: 29.731521,  
        longitude: -95.477842, 
        weight: 1, 
    },
    {
        latitude: 29.83259,  
        longitude: -95.405869, 
        weight: 1, 
    },
    {
        latitude: 29.745296,  
        longitude: -95.37159, 
        weight: 1, 
    },
    {
        latitude: 29.848753,  
        longitude: -95.511711, 
        weight: 1, 
    },
    {
        latitude: 29.73668,  
        longitude: -95.576316, 
        weight: 1, 
    },
    {
        latitude: 29.704876,  
        longitude: -95.549232, 
        weight: 1, 
    },
    {
        latitude: 29.747172,  
        longitude: -95.3726, 
        weight: 1, 
    },
    {
        latitude: 29.785022,  
        longitude: -95.606515, 
        weight: 1, 
    },
    {
        latitude: 29.733559,  
        longitude: -95.348234, 
        weight: 1, 
    },
    {
        latitude: 29.785259,  
        longitude: -95.596622, 
        weight: 1, 
    },
    {
        latitude: 29.813189,  
        longitude: -95.359841, 
        weight: 1, 
    },
    {
        latitude: 29.731787,  
        longitude: -95.489008, 
        weight: 1, 
    },
    {
        latitude: 29.837178,  
        longitude: -95.485386, 
        weight: 1, 
    },
    {
        latitude: 29.770462,  
        longitude: -95.410583, 
        weight: 1, 
    },
    {
        latitude: 29.702874,  
        longitude: -95.365309, 
        weight: 1, 
    },
    {
        latitude: 29.702874,  
        longitude: -95.365309, 
        weight: 1, 
    },
    {
        latitude: 29.849236,  
        longitude: -95.39502, 
        weight: 1, 
    },
    {
        latitude: 29.737054,  
        longitude: -95.548481, 
        weight: 1, 
    },
    {
        latitude: 29.822691,  
        longitude: -95.539368, 
        weight: 1, 
    },
    {
        latitude: 29.625087,  
        longitude: -95.271027, 
        weight: 1, 
    },
    {
        latitude: 29.72416,  
        longitude: -95.378278, 
        weight: 1, 
    },
    {
        latitude: 29.731795,  
        longitude: -95.488773, 
        weight: 1, 
    },
    {
        latitude: 29.7182,  
        longitude: -95.292759, 
        weight: 1, 
    },
    {
        latitude: 29.752573,  
        longitude: -95.370255, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.805943,  
        longitude: -95.496858, 
        weight: 1, 
    },
    {
        latitude: 29.848476,  
        longitude: -95.302795, 
        weight: 1, 
    },
    {
        latitude: 29.679349,  
        longitude: -95.352067, 
        weight: 1, 
    },
    {
        latitude: 29.939341,  
        longitude: -95.331756, 
        weight: 1, 
    },
    {
        latitude: 29.801706,  
        longitude: -95.569874, 
        weight: 1, 
    },
    {
        latitude: 29.821466,  
        longitude: -95.432766, 
        weight: 1, 
    },
    {
        latitude: 29.733644,  
        longitude: -95.598384, 
        weight: 1, 
    },
    {
        latitude: 29.703498,  
        longitude: -95.614872, 
        weight: 1, 
    },
    {
        latitude: 29.764666,  
        longitude: -95.391552, 
        weight: 1, 
    },
    {
        latitude: 29.737064,  
        longitude: -95.548378, 
        weight: 1, 
    },
    {
        latitude: 29.68445,  
        longitude: -95.599932, 
        weight: 1, 
    },
    {
        latitude: 29.772896,  
        longitude: -95.388473, 
        weight: 1, 
    },
    {
        latitude: 29.772896,  
        longitude: -95.388473, 
        weight: 1, 
    },
    {
        latitude: 29.643824,  
        longitude: -95.376843, 
        weight: 1, 
    },
    {
        latitude: 29.734507,  
        longitude: -95.60653, 
        weight: 1, 
    },
    {
        latitude: 29.741206,  
        longitude: -95.576226, 
        weight: 1, 
    },
    {
        latitude: 29.65393,  
        longitude: -95.563217, 
        weight: 1, 
    },
    {
        latitude: 29.941769,  
        longitude: -95.440311, 
        weight: 1, 
    },
    {
        latitude: 29.701476,  
        longitude: -95.295198, 
        weight: 1, 
    },
    {
        latitude: 29.850104,  
        longitude: -95.4195, 
        weight: 1, 
    },
    {
        latitude: 29.73698,  
        longitude: -95.387882, 
        weight: 1, 
    },
    {
        latitude: 29.767274,  
        longitude: -95.372321, 
        weight: 1, 
    },
    {
        latitude: 29.774648,  
        longitude: -95.218439, 
        weight: 1, 
    },
    {
        latitude: 29.774648,  
        longitude: -95.218439, 
        weight: 1, 
    },
    {
        latitude: 29.774648,  
        longitude: -95.218439, 
        weight: 1, 
    },
    {
        latitude: 29.719606,  
        longitude: -95.489008, 
        weight: 1, 
    },
    {
        latitude: 29.857877,  
        longitude: -95.443576, 
        weight: 1, 
    },
    {
        latitude: 29.779701,  
        longitude: -95.218579, 
        weight: 1, 
    },
    {
        latitude: 30.062657,  
        longitude: -95.195033, 
        weight: 1, 
    },
    {
        latitude: 29.669552,  
        longitude: -95.359375, 
        weight: 1, 
    },
    {
        latitude: 29.685079,  
        longitude: -95.355283, 
        weight: 1, 
    },
    {
        latitude: 29.682429,  
        longitude: -95.558425, 
        weight: 1, 
    },
    {
        latitude: 29.85437,  
        longitude: -95.399488, 
        weight: 1, 
    },
    {
        latitude: 29.85437,  
        longitude: -95.399488, 
        weight: 1, 
    },
    {
        latitude: 29.835242,  
        longitude: -95.342714, 
        weight: 1, 
    },
    {
        latitude: 29.737996,  
        longitude: -95.348367, 
        weight: 1, 
    },
    {
        latitude: 29.783899,  
        longitude: -95.533344, 
        weight: 1, 
    },
    {
        latitude: 29.771766,  
        longitude: -95.370261, 
        weight: 1, 
    },
    {
        latitude: 29.747631,  
        longitude: -95.453922, 
        weight: 1, 
    },
    {
        latitude: 30.05045,  
        longitude: -95.243122, 
        weight: 1, 
    },
    {
        latitude: 30.05045,  
        longitude: -95.243122, 
        weight: 1, 
    },
    {
        latitude: 29.751337,  
        longitude: -95.455185, 
        weight: 1, 
    },
    {
        latitude: 29.741572,  
        longitude: -95.383961, 
        weight: 1, 
    },
    {
        latitude: 29.957573,  
        longitude: -95.423172, 
        weight: 1, 
    },
    {
        latitude: 29.689487,  
        longitude: -95.353515, 
        weight: 1, 
    },
    {
        latitude: 29.7767,  
        longitude: -95.194644, 
        weight: 1, 
    },
    {
        latitude: 29.686469,  
        longitude: -95.551519, 
        weight: 1, 
    },
    {
        latitude: 29.681741,  
        longitude: -95.366322, 
        weight: 1, 
    },
    {
        latitude: 29.643575,  
        longitude: -95.386945, 
        weight: 1, 
    },
    {
        latitude: 29.737652,  
        longitude: -95.361214, 
        weight: 1, 
    },
    {
        latitude: 29.790775,  
        longitude: -95.372914, 
        weight: 1, 
    },
    {
        latitude: 29.636612,  
        longitude: -95.250277, 
        weight: 1, 
    },
    {
        latitude: 30.050104,  
        longitude: -95.24041, 
        weight: 1, 
    },
    {
        latitude: 30.049195,  
        longitude: -95.240633, 
        weight: 1, 
    },
    {
        latitude: 29.616661,  
        longitude: -95.368011, 
        weight: 1, 
    },
    {
        latitude: 29.857242,  
        longitude: -95.420808, 
        weight: 1, 
    },
    {
        latitude: 29.743704,  
        longitude: -95.377964, 
        weight: 1, 
    },
    {
        latitude: 29.72809,  
        longitude: -95.514042, 
        weight: 1, 
    },
    {
        latitude: 29.775757,  
        longitude: -95.221176, 
        weight: 1, 
    },
    {
        latitude: 29.685904,  
        longitude: -95.374725, 
        weight: 1, 
    },
    {
        latitude: 29.685774,  
        longitude: -95.374337, 
        weight: 1, 
    },
    {
        latitude: 29.685774,  
        longitude: -95.374337, 
        weight: 1, 
    },
    {
        latitude: 30.049742,  
        longitude: -95.232451, 
        weight: 1, 
    },
    {
        latitude: 29.631254,  
        longitude: -95.339345, 
        weight: 1, 
    },
    {
        latitude: 29.841164,  
        longitude: -95.375702, 
        weight: 1, 
    },
    {
        latitude: 29.839711,  
        longitude: -95.375535, 
        weight: 1, 
    },
    {
        latitude: 30.052631,  
        longitude: -95.245255, 
        weight: 1, 
    },
    {
        latitude: 30.052631,  
        longitude: -95.245255, 
        weight: 1, 
    },
    {
        latitude: 29.620656,  
        longitude: -95.285345, 
        weight: 1, 
    },
    {
        latitude: 30.062543,  
        longitude: -95.248707, 
        weight: 1, 
    },
    {
        latitude: 30.062543,  
        longitude: -95.248707, 
        weight: 1, 
    },
    {
        latitude: 29.688577,  
        longitude: -95.569221, 
        weight: 1, 
    },
    {
        latitude: 29.688577,  
        longitude: -95.569221, 
        weight: 1, 
    },
    {
        latitude: 30.04946,  
        longitude: -95.237756, 
        weight: 1, 
    },
    {
        latitude: 30.049458,  
        longitude: -95.238285, 
        weight: 1, 
    },
    {
        latitude: 30.049467,  
        longitude: -95.236252, 
        weight: 1, 
    },
    {
        latitude: 29.843403,  
        longitude: -95.342857, 
        weight: 1, 
    },
    {
        latitude: 29.880013,  
        longitude: -95.446086, 
        weight: 1, 
    },
    {
        latitude: 29.880013,  
        longitude: -95.446086, 
        weight: 1, 
    },
    {
        latitude: 30.04175,  
        longitude: -95.19729, 
        weight: 1, 
    },
    {
        latitude: 29.888238,  
        longitude: -95.429128, 
        weight: 1, 
    },
    {
        latitude: 29.736177,  
        longitude: -95.605842, 
        weight: 1, 
    },
    {
        latitude: 29.829569,  
        longitude: -95.500316, 
        weight: 1, 
    },
    {
        latitude: 29.629763,  
        longitude: -95.422366, 
        weight: 1, 
    },
    {
        latitude: 29.629763,  
        longitude: -95.422366, 
        weight: 1, 
    },
    {
        latitude: 30.062169,  
        longitude: -95.248819, 
        weight: 1, 
    },
    {
        latitude: 30.062169,  
        longitude: -95.248819, 
        weight: 1, 
    },
    {
        latitude: 29.672819,  
        longitude: -95.424804, 
        weight: 1, 
    },
    {
        latitude: 29.691152,  
        longitude: -95.528521, 
        weight: 1, 
    },
    {
        latitude: 29.641307,  
        longitude: -95.444347, 
        weight: 1, 
    },
    {
        latitude: 29.856423,  
        longitude: -95.50538, 
        weight: 1, 
    },
    {
        latitude: 29.682389,  
        longitude: -95.34869, 
        weight: 1, 
    },
    {
        latitude: 29.692488,  
        longitude: -95.270873, 
        weight: 1, 
    },
    {
        latitude: 29.658622,  
        longitude: -95.336509, 
        weight: 1, 
    },
    {
        latitude: 29.658622,  
        longitude: -95.336509, 
        weight: 1, 
    },
    {
        latitude: 29.726955,  
        longitude: -95.356788, 
        weight: 1, 
    },
    {
        latitude: 29.683694,  
        longitude: -95.367663, 
        weight: 1, 
    },
    {
        latitude: 29.700219,  
        longitude: -95.609595, 
        weight: 1, 
    },
    {
        latitude: 29.713153,  
        longitude: -95.582493, 
        weight: 1, 
    },
    {
        latitude: 29.614046,  
        longitude: -95.385956, 
        weight: 1, 
    },
    {
        latitude: 29.953944,  
        longitude: -95.422674, 
        weight: 1, 
    },
    {
        latitude: 29.679537,  
        longitude: -95.393702, 
        weight: 1, 
    },
    {
        latitude: 29.679537,  
        longitude: -95.393702, 
        weight: 1, 
    },
    {
        latitude: 29.678591,  
        longitude: -95.426713, 
        weight: 1, 
    },
    {
        latitude: 30.063016,  
        longitude: -95.252021, 
        weight: 1, 
    },
    {
        latitude: 29.74965,  
        longitude: -95.36929, 
        weight: 1, 
    },
    {
        latitude: 29.938662,  
        longitude: -95.359033, 
        weight: 1, 
    },
    {
        latitude: 29.756499,  
        longitude: -95.351338, 
        weight: 1, 
    },
    {
        latitude: 29.747941,  
        longitude: -95.574322, 
        weight: 1, 
    },
    {
        latitude: 29.848177,  
        longitude: -95.319095, 
        weight: 1, 
    },
    {
        latitude: 30.050146,  
        longitude: -95.240399, 
        weight: 1, 
    },
    {
        latitude: 30.050146,  
        longitude: -95.240399, 
        weight: 1, 
    },
    {
        latitude: 29.862768,  
        longitude: -95.506086, 
        weight: 1, 
    },
    {
        latitude: 30.049853,  
        longitude: -95.240471, 
        weight: 1, 
    },
    {
        latitude: 30.04945,  
        longitude: -95.239232, 
        weight: 1, 
    },
    {
        latitude: 30.04945,  
        longitude: -95.239232, 
        weight: 1, 
    },
    {
        latitude: 29.624598,  
        longitude: -95.390041, 
        weight: 1, 
    },
    {
        latitude: 29.950414,  
        longitude: -95.407588, 
        weight: 1, 
    },
    {
        latitude: 30.049467,  
        longitude: -95.234259, 
        weight: 1, 
    },
    {
        latitude: 29.94252,  
        longitude: -95.398308, 
        weight: 1, 
    },
    {
        latitude: 29.772048,  
        longitude: -95.226425, 
        weight: 1, 
    },
    {
        latitude: 29.772048,  
        longitude: -95.226425, 
        weight: 1, 
    },
    {
        latitude: 29.772048,  
        longitude: -95.226425, 
        weight: 1, 
    },
    {
        latitude: 29.772048,  
        longitude: -95.226425, 
        weight: 1, 
    },
    {
        latitude: 29.772048,  
        longitude: -95.226425, 
        weight: 1, 
    },
    {
        latitude: 29.67395,  
        longitude: -95.46888, 
        weight: 1, 
    },
    {
        latitude: 30.04945,  
        longitude: -95.239232, 
        weight: 1, 
    },
    {
        latitude: 30.04945,  
        longitude: -95.239232, 
        weight: 1, 
    },
    {
        latitude: 29.609056,  
        longitude: -95.473313, 
        weight: 1, 
    },
    {
        latitude: 29.583005,  
        longitude: -95.128034, 
        weight: 1, 
    },
    {
        latitude: 30.042019,  
        longitude: -95.254812, 
        weight: 1, 
    },
    {
        latitude: 29.642282,  
        longitude: -95.245016, 
        weight: 1, 
    },
    {
        latitude: 29.936459,  
        longitude: -95.274496, 
        weight: 1, 
    },
    {
        latitude: 29.700235,  
        longitude: -95.399269, 
        weight: 1, 
    },
    {
        latitude: 29.769534,  
        longitude: -95.449701, 
        weight: 1, 
    },
    {
        latitude: 29.769534,  
        longitude: -95.449701, 
        weight: 1, 
    },
    {
        latitude: 29.688574,  
        longitude: -95.569276, 
        weight: 1, 
    },
    {
        latitude: 29.736023,  
        longitude: -95.612708, 
        weight: 1, 
    },
    {
        latitude: 29.648548,  
        longitude: -95.508348, 
        weight: 1, 
    },
    {
        latitude: 29.847015,  
        longitude: -95.295538, 
        weight: 1, 
    },
    {
        latitude: 29.84151,  
        longitude: -95.262264, 
        weight: 1, 
    },
    {
        latitude: 29.736204,  
        longitude: -95.603346, 
        weight: 1, 
    },
    {
        latitude: 29.773471,  
        longitude: -95.43201, 
        weight: 1, 
    },
    {
        latitude: 29.748174,  
        longitude: -95.374421, 
        weight: 1, 
    },
    {
        latitude: 29.747968,  
        longitude: -95.37588, 
        weight: 1, 
    },
    {
        latitude: 29.795011,  
        longitude: -95.352713, 
        weight: 1, 
    },
    {
        latitude: 29.795011,  
        longitude: -95.352713, 
        weight: 1, 
    },
    {
        latitude: 29.795011,  
        longitude: -95.352713, 
        weight: 1, 
    },
    {
        latitude: 29.851873,  
        longitude: -95.300512, 
        weight: 1, 
    },
    {
        latitude: 29.611417,  
        longitude: -95.227465, 
        weight: 1, 
    },
    {
        latitude: 29.635891,  
        longitude: -95.212564, 
        weight: 1, 
    },
    {
        latitude: 29.889264,  
        longitude: -95.414356, 
        weight: 1, 
    },
    {
        latitude: 29.812326,  
        longitude: -95.426171, 
        weight: 1, 
    },
    {
        latitude: 29.649021,  
        longitude: -95.219334, 
        weight: 1, 
    },
    {
        latitude: 29.805827,  
        longitude: -95.44659, 
        weight: 1, 
    },
    {
        latitude: 29.828254,  
        longitude: -95.337717, 
        weight: 1, 
    },
    {
        latitude: 29.655701,  
        longitude: -95.526775, 
        weight: 1, 
    },
    {
        latitude: 29.61381,  
        longitude: -95.406442, 
        weight: 1, 
    },
    {
        latitude: 29.745279,  
        longitude: -95.389665, 
        weight: 1, 
    },
    {
        latitude: 29.716164,  
        longitude: -95.37523, 
        weight: 1, 
    },
    {
        latitude: 29.716164,  
        longitude: -95.37523, 
        weight: 1, 
    },
    {
        latitude: 29.716164,  
        longitude: -95.37523, 
        weight: 1, 
    },
    {
        latitude: 29.723586,  
        longitude: -95.493889, 
        weight: 1, 
    },
    {
        latitude: 29.665614,  
        longitude: -95.512417, 
        weight: 1, 
    },
    {
        latitude: 29.67912,  
        longitude: -95.484096, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.92052,  
        longitude: -95.395364, 
        weight: 1, 
    },
    {
        latitude: 29.85654,  
        longitude: -95.522967, 
        weight: 1, 
    },
    {
        latitude: 29.869859,  
        longitude: -95.40132, 
        weight: 1, 
    },
    {
        latitude: 29.709971,  
        longitude: -95.267272, 
        weight: 1, 
    },
    {
        latitude: 29.741213,  
        longitude: -95.464189, 
        weight: 1, 
    },
    {
        latitude: 29.73652,  
        longitude: -95.587584, 
        weight: 1, 
    },
    {
        latitude: 29.716168,  
        longitude: -95.49853, 
        weight: 1, 
    },
    {
        latitude: 29.611417,  
        longitude: -95.227465, 
        weight: 1, 
    },
    {
        latitude: 29.683992,  
        longitude: -95.604178, 
        weight: 1, 
    },
    {
        latitude: 29.879394,  
        longitude: -95.479072, 
        weight: 1, 
    },
    {
        latitude: 29.677952,  
        longitude: -95.477016, 
        weight: 1, 
    },
    {
        latitude: 29.677952,  
        longitude: -95.477016, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.801646,  
        longitude: -95.4269, 
        weight: 1, 
    },
    {
        latitude: 29.752346,  
        longitude: -95.377408, 
        weight: 1, 
    },
    {
        latitude: 29.676551,  
        longitude: -95.481889, 
        weight: 1, 
    },
    {
        latitude: 29.703659,  
        longitude: -95.55676, 
        weight: 1, 
    },
    {
        latitude: 29.664017,  
        longitude: -95.331237, 
        weight: 1, 
    },
    {
        latitude: 29.725277,  
        longitude: -95.295757, 
        weight: 1, 
    },
    {
        latitude: 29.73922,  
        longitude: -95.500886, 
        weight: 1, 
    },
    {
        latitude: 29.627389,  
        longitude: -95.507337, 
        weight: 1, 
    },
    {
        latitude: 29.729322,  
        longitude: -95.511461, 
        weight: 1, 
    },
    {
        latitude: 29.694039,  
        longitude: -95.266133, 
        weight: 1, 
    },
    {
        latitude: 29.786521,  
        longitude: -95.218697, 
        weight: 1, 
    },
    {
        latitude: 29.786521,  
        longitude: -95.218697, 
        weight: 1, 
    },
    {
        latitude: 29.829874,  
        longitude: -95.280311, 
        weight: 1, 
    },
    {
        latitude: 29.723103,  
        longitude: -95.378666, 
        weight: 1, 
    },
    {
        latitude: 29.759702,  
        longitude: -95.360191, 
        weight: 1, 
    },
    {
        latitude: 29.750336,  
        longitude: -95.572141, 
        weight: 1, 
    },
    {
        latitude: 29.706237,  
        longitude: -95.406879, 
        weight: 1, 
    },
    {
        latitude: 29.723409,  
        longitude: -95.387664, 
        weight: 1, 
    },
    {
        latitude: 29.770118,  
        longitude: -95.604935, 
        weight: 1, 
    },
    {
        latitude: 29.78509,  
        longitude: -95.532212, 
        weight: 1, 
    },
    {
        latitude: 29.736628,  
        longitude: -95.5812, 
        weight: 1, 
    },
    {
        latitude: 29.725962,  
        longitude: -95.418589, 
        weight: 1, 
    },
    {
        latitude: 29.812256,  
        longitude: -95.531706, 
        weight: 1, 
    },
    {
        latitude: 29.817586,  
        longitude: -95.269861, 
        weight: 1, 
    },
    {
        latitude: 29.785107,  
        longitude: -95.534012, 
        weight: 1, 
    },
    {
        latitude: 29.74249,  
        longitude: -95.592675, 
        weight: 1, 
    },
    {
        latitude: 29.733347,  
        longitude: -95.431981, 
        weight: 1, 
    },
    {
        latitude: 29.737402,  
        longitude: -95.518744, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.735422,  
        longitude: -95.466442, 
        weight: 1, 
    },
    {
        latitude: 29.755218,  
        longitude: -95.337309, 
        weight: 1, 
    },
    {
        latitude: 29.673288,  
        longitude: -95.53408, 
        weight: 1, 
    },
    {
        latitude: 29.729321,  
        longitude: -95.511789, 
        weight: 1, 
    },
    {
        latitude: 29.805926,  
        longitude: -95.446502, 
        weight: 1, 
    },
    {
        latitude: 29.758451,  
        longitude: -95.367575, 
        weight: 1, 
    },
    {
        latitude: 29.600801,  
        longitude: -95.265812, 
        weight: 1, 
    },
    {
        latitude: 29.708498,  
        longitude: -95.333377, 
        weight: 1, 
    },
    {
        latitude: 29.621512,  
        longitude: -95.397628, 
        weight: 1, 
    },
    {
        latitude: 29.870774,  
        longitude: -95.436726, 
        weight: 1, 
    },
    {
        latitude: 29.704678,  
        longitude: -95.505434, 
        weight: 1, 
    },
    {
        latitude: 29.949099,  
        longitude: -95.418513, 
        weight: 1, 
    },
    {
        latitude: 29.661547,  
        longitude: -95.351541, 
        weight: 1, 
    },
    {
        latitude: 29.613412,  
        longitude: -95.219579, 
        weight: 1, 
    },
    {
        latitude: 29.747892,  
        longitude: -95.569568, 
        weight: 1, 
    },
    {
        latitude: 29.682135,  
        longitude: -95.477008, 
        weight: 1, 
    },
    {
        latitude: 29.689805,  
        longitude: -95.507199, 
        weight: 1, 
    },
    {
        latitude: 29.689805,  
        longitude: -95.507199, 
        weight: 1, 
    },
    {
        latitude: 29.601132,  
        longitude: -95.311427, 
        weight: 1, 
    },
    {
        latitude: 29.837592,  
        longitude: -95.368042, 
        weight: 1, 
    },
    {
        latitude: 29.837592,  
        longitude: -95.368042, 
        weight: 1, 
    },
    {
        latitude: 30.063016,  
        longitude: -95.252021, 
        weight: 1, 
    },
    {
        latitude: 29.610215,  
        longitude: -95.472001, 
        weight: 1, 
    },
    {
        latitude: 29.785099,  
        longitude: -95.532315, 
        weight: 1, 
    },
    {
        latitude: 29.785099,  
        longitude: -95.532315, 
        weight: 1, 
    },
    {
        latitude: 29.70376,  
        longitude: -95.586073, 
        weight: 1, 
    },
    {
        latitude: 29.922422,  
        longitude: -95.405893, 
        weight: 1, 
    },
    {
        latitude: 29.780683,  
        longitude: -95.383071, 
        weight: 1, 
    },
    {
        latitude: 29.688988,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.67183,  
        longitude: -95.531904, 
        weight: 1, 
    },
    {
        latitude: 29.543268,  
        longitude: -95.145817, 
        weight: 1, 
    },
    {
        latitude: 29.756088,  
        longitude: -95.365311, 
        weight: 1, 
    },
    {
        latitude: 29.756088,  
        longitude: -95.365311, 
        weight: 1, 
    },
    {
        latitude: 29.702366,  
        longitude: -95.287044, 
        weight: 1, 
    },
    {
        latitude: 29.950414,  
        longitude: -95.407588, 
        weight: 1, 
    },
    {
        latitude: 29.73757,  
        longitude: -95.581249, 
        weight: 1, 
    },
    {
        latitude: 29.657728,  
        longitude: -95.562194, 
        weight: 1, 
    },
    {
        latitude: 29.735414,  
        longitude: -95.466535, 
        weight: 1, 
    },
    {
        latitude: 29.848878,  
        longitude: -95.286577, 
        weight: 1, 
    },
    {
        latitude: 29.618564,  
        longitude: -95.28528, 
        weight: 1, 
    },
    {
        latitude: 29.730623,  
        longitude: -95.568038, 
        weight: 1, 
    },
    {
        latitude: 29.781351,  
        longitude: -95.610377, 
        weight: 1, 
    },
    {
        latitude: 29.747698,  
        longitude: -95.46314, 
        weight: 1, 
    },
    {
        latitude: 29.791114,  
        longitude: -95.272045, 
        weight: 1, 
    },
    {
        latitude: 29.802851,  
        longitude: -95.478573, 
        weight: 1, 
    },
    {
        latitude: 29.802851,  
        longitude: -95.478573, 
        weight: 1, 
    },
    {
        latitude: 29.802851,  
        longitude: -95.478573, 
        weight: 1, 
    },
    {
        latitude: 29.6613,  
        longitude: -95.276808, 
        weight: 1, 
    },
    {
        latitude: 29.691003,  
        longitude: -95.535033, 
        weight: 1, 
    },
    {
        latitude: 29.776775,  
        longitude: -95.341794, 
        weight: 1, 
    },
    {
        latitude: 29.646475,  
        longitude: -95.508307, 
        weight: 1, 
    },
    {
        latitude: 29.884298,  
        longitude: -95.472986, 
        weight: 1, 
    },
    {
        latitude: 29.734526,  
        longitude: -95.559837, 
        weight: 1, 
    },
    {
        latitude: 29.801721,  
        longitude: -95.366649, 
        weight: 1, 
    },
    {
        latitude: 29.718967,  
        longitude: -95.320296, 
        weight: 1, 
    },
    {
        latitude: 29.679982,  
        longitude: -95.528248, 
        weight: 1, 
    },
    {
        latitude: 29.942547,  
        longitude: -95.398407, 
        weight: 1, 
    },
    {
        latitude: 29.774076,  
        longitude: -95.242791, 
        weight: 1, 
    },
    {
        latitude: 29.774076,  
        longitude: -95.242791, 
        weight: 1, 
    },
    {
        latitude: 29.774076,  
        longitude: -95.242791, 
        weight: 1, 
    },
    {
        latitude: 29.653154,  
        longitude: -95.264665, 
        weight: 1, 
    },
    {
        latitude: 29.863451,  
        longitude: -95.455069, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.754933,  
        longitude: -95.500062, 
        weight: 1, 
    },
    {
        latitude: 29.948698,  
        longitude: -95.410273, 
        weight: 1, 
    },
    {
        latitude: 29.772618,  
        longitude: -95.228921, 
        weight: 1, 
    },
    {
        latitude: 29.736784,  
        longitude: -95.378324, 
        weight: 1, 
    },
    {
        latitude: 29.703713,  
        longitude: -95.557773, 
        weight: 1, 
    },
    {
        latitude: 29.688479,  
        longitude: -95.56974, 
        weight: 1, 
    },
    {
        latitude: 29.797717,  
        longitude: -95.336152, 
        weight: 1, 
    },
    {
        latitude: 29.88316,  
        longitude: -95.46586, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.79491,  
        longitude: -95.484924, 
        weight: 1, 
    },
    {
        latitude: 29.679746,  
        longitude: -95.439948, 
        weight: 1, 
    },
    {
        latitude: 29.69529,  
        longitude: -95.492064, 
        weight: 1, 
    },
    {
        latitude: 29.672549,  
        longitude: -95.355089, 
        weight: 1, 
    },
    {
        latitude: 29.70453,  
        longitude: -95.478353, 
        weight: 1, 
    },
    {
        latitude: 29.756579,  
        longitude: -95.362661, 
        weight: 1, 
    },
    {
        latitude: 29.725738,  
        longitude: -95.48892, 
        weight: 1, 
    },
    {
        latitude: 29.543225,  
        longitude: -95.145893, 
        weight: 1, 
    },
    {
        latitude: 29.95341,  
        longitude: -95.538947, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.677445,  
        longitude: -95.539737, 
        weight: 1, 
    },
    {
        latitude: 29.760946,  
        longitude: -95.378893, 
        weight: 1, 
    },
    {
        latitude: 29.727719,  
        longitude: -95.393847, 
        weight: 1, 
    },
    {
        latitude: 29.840443,  
        longitude: -95.265328, 
        weight: 1, 
    },
    {
        latitude: 29.805883,  
        longitude: -95.575144, 
        weight: 1, 
    },
    {
        latitude: 29.656641,  
        longitude: -95.500994, 
        weight: 1, 
    },
    {
        latitude: 29.701689,  
        longitude: -95.488763, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.760709,  
        longitude: -95.348103, 
        weight: 1, 
    },
    {
        latitude: 29.809446,  
        longitude: -95.283937, 
        weight: 1, 
    },
    {
        latitude: 29.791951,  
        longitude: -95.264051, 
        weight: 1, 
    },
    {
        latitude: 29.851474,  
        longitude: -95.397439, 
        weight: 1, 
    },
    {
        latitude: 29.640085,  
        longitude: -95.244384, 
        weight: 1, 
    },
    {
        latitude: 29.930965,  
        longitude: -95.300271, 
        weight: 1, 
    },
    {
        latitude: 29.665468,  
        longitude: -95.276923, 
        weight: 1, 
    },
    {
        latitude: 29.770852,  
        longitude: -95.20713, 
        weight: 1, 
    },
    {
        latitude: 29.650221,  
        longitude: -95.225834, 
        weight: 1, 
    },
    {
        latitude: 29.745527,  
        longitude: -95.383161, 
        weight: 1, 
    },
    {
        latitude: 29.62531,  
        longitude: -95.285416, 
        weight: 1, 
    },
    {
        latitude: 29.683338,  
        longitude: -95.229671, 
        weight: 1, 
    },
    {
        latitude: 29.683338,  
        longitude: -95.229671, 
        weight: 1, 
    },
    {
        latitude: 29.771099,  
        longitude: -95.212718, 
        weight: 1, 
    },
    {
        latitude: 29.725638,  
        longitude: -95.361236, 
        weight: 1, 
    },
    {
        latitude: 29.725638,  
        longitude: -95.361236, 
        weight: 1, 
    },
    {
        latitude: 29.543268,  
        longitude: -95.145817, 
        weight: 1, 
    },
    {
        latitude: 29.960269,  
        longitude: -95.547529, 
        weight: 1, 
    },
    {
        latitude: 29.941379,  
        longitude: -95.299134, 
        weight: 1, 
    },
    {
        latitude: 29.649143,  
        longitude: -95.370454, 
        weight: 1, 
    },
    {
        latitude: 29.850038,  
        longitude: -95.370402, 
        weight: 1, 
    },
    {
        latitude: 29.669593,  
        longitude: -95.528171, 
        weight: 1, 
    },
    {
        latitude: 29.822606,  
        longitude: -95.410509, 
        weight: 1, 
    },
    {
        latitude: 29.709283,  
        longitude: -95.47422, 
        weight: 1, 
    },
    {
        latitude: 29.736492,  
        longitude: -95.590067, 
        weight: 1, 
    },
    {
        latitude: 29.661328,  
        longitude: -95.278598, 
        weight: 1, 
    },
    {
        latitude: 29.717852,  
        longitude: -95.530025, 
        weight: 1, 
    },
    {
        latitude: 29.746625,  
        longitude: -95.45205, 
        weight: 1, 
    },
    {
        latitude: 29.636107,  
        longitude: -95.358545, 
        weight: 1, 
    },
    {
        latitude: 29.730248,  
        longitude: -95.539216, 
        weight: 1, 
    },
    {
        latitude: 29.945177,  
        longitude: -95.415001, 
        weight: 1, 
    },
    {
        latitude: 29.73559,  
        longitude: -95.364125, 
        weight: 1, 
    },
    {
        latitude: 29.73559,  
        longitude: -95.364125, 
        weight: 1, 
    },
    {
        latitude: 29.669648,  
        longitude: -95.529736, 
        weight: 1, 
    },
    {
        latitude: 29.651633,  
        longitude: -95.367895, 
        weight: 1, 
    },
    {
        latitude: 29.677745,  
        longitude: -95.32167, 
        weight: 1, 
    },
    {
        latitude: 29.725846,  
        longitude: -95.427801, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 29.803242,  
        longitude: -95.317008, 
        weight: 1, 
    },
    {
        latitude: 29.747342,  
        longitude: -95.392823, 
        weight: 1, 
    },
    {
        latitude: 29.847016,  
        longitude: -95.430667, 
        weight: 1, 
    },
    {
        latitude: 29.776502,  
        longitude: -95.224276, 
        weight: 1, 
    },
    {
        latitude: 29.803939,  
        longitude: -95.372834, 
        weight: 1, 
    },
    {
        latitude: 29.77918,  
        longitude: -95.544478, 
        weight: 1, 
    },
    {
        latitude: 29.691002,  
        longitude: -95.417121, 
        weight: 1, 
    },
    {
        latitude: 29.685021,  
        longitude: -95.365104, 
        weight: 1, 
    },
    {
        latitude: 29.685021,  
        longitude: -95.365104, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.77341,  
        longitude: -95.243682, 
        weight: 1, 
    },
    {
        latitude: 29.717141,  
        longitude: -95.374197, 
        weight: 1, 
    },
    {
        latitude: 29.813469,  
        longitude: -95.323319, 
        weight: 1, 
    },
    {
        latitude: 29.70279,  
        longitude: -95.37834, 
        weight: 1, 
    },
    {
        latitude: 29.922794,  
        longitude: -95.411877, 
        weight: 1, 
    },
    {
        latitude: 29.71583,  
        longitude: -95.318419, 
        weight: 1, 
    },
    {
        latitude: 29.707149,  
        longitude: -95.30277, 
        weight: 1, 
    },
    {
        latitude: 29.710826,  
        longitude: -95.358935, 
        weight: 1, 
    },
    {
        latitude: 29.86238,  
        longitude: -95.384711, 
        weight: 1, 
    },
    {
        latitude: 29.806301,  
        longitude: -95.43969, 
        weight: 1, 
    },
    {
        latitude: 29.81697,  
        longitude: -95.464877, 
        weight: 1, 
    },
    {
        latitude: 29.644615,  
        longitude: -95.241185, 
        weight: 1, 
    },
    {
        latitude: 29.82764,  
        longitude: -95.458096, 
        weight: 1, 
    },
    {
        latitude: 29.82764,  
        longitude: -95.458096, 
        weight: 1, 
    },
    {
        latitude: 29.683617,  
        longitude: -95.288293, 
        weight: 1, 
    },
    {
        latitude: 29.741954,  
        longitude: -95.464223, 
        weight: 1, 
    },
    {
        latitude: 29.934374,  
        longitude: -95.313384, 
        weight: 1, 
    },
    {
        latitude: 29.751563,  
        longitude: -95.456092, 
        weight: 1, 
    },
    {
        latitude: 29.731873,  
        longitude: -95.380959, 
        weight: 1, 
    },
    {
        latitude: 29.964456,  
        longitude: -95.553079, 
        weight: 1, 
    },
    {
        latitude: 29.964456,  
        longitude: -95.553079, 
        weight: 1, 
    },
    {
        latitude: 29.821899,  
        longitude: -95.342522, 
        weight: 1, 
    },
    {
        latitude: 29.683877,  
        longitude: -95.562692, 
        weight: 1, 
    },
    {
        latitude: 29.802372,  
        longitude: -95.43831, 
        weight: 1, 
    },
    {
        latitude: 29.706527,  
        longitude: -95.493066, 
        weight: 1, 
    },
    {
        latitude: 29.868662,  
        longitude: -95.364006, 
        weight: 1, 
    },
    {
        latitude: 29.756669,  
        longitude: -95.36646, 
        weight: 1, 
    },
    {
        latitude: 29.737578,  
        longitude: -95.506145, 
        weight: 1, 
    },
    {
        latitude: 29.941934,  
        longitude: -95.388979, 
        weight: 1, 
    },
    {
        latitude: 29.941934,  
        longitude: -95.388979, 
        weight: 1, 
    },
    {
        latitude: 29.657152,  
        longitude: -95.496793, 
        weight: 1, 
    },
    {
        latitude: 29.803939,  
        longitude: -95.372834, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.827472,  
        longitude: -95.496906, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.653255,  
        longitude: -95.24923, 
        weight: 1, 
    },
    {
        latitude: 29.884667,  
        longitude: -95.293401, 
        weight: 1, 
    },
    {
        latitude: 29.785827,  
        longitude: -95.464988, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.753484,  
        longitude: -95.353714, 
        weight: 1, 
    },
    {
        latitude: 29.82336,  
        longitude: -95.41053, 
        weight: 1, 
    },
    {
        latitude: 29.803008,  
        longitude: -95.494536, 
        weight: 1, 
    },
    {
        latitude: 29.634927,  
        longitude: -95.463464, 
        weight: 1, 
    },
    {
        latitude: 29.719172,  
        longitude: -95.495842, 
        weight: 1, 
    },
    {
        latitude: 29.771404,  
        longitude: -95.404004, 
        weight: 1, 
    },
    {
        latitude: 29.785827,  
        longitude: -95.464988, 
        weight: 1, 
    },
    {
        latitude: 29.712618,  
        longitude: -95.413198, 
        weight: 1, 
    },
    {
        latitude: 29.798928,  
        longitude: -95.520306, 
        weight: 1, 
    },
    {
        latitude: 29.783838,  
        longitude: -95.521832, 
        weight: 1, 
    },
    {
        latitude: 29.783838,  
        longitude: -95.521832, 
        weight: 1, 
    },
    {
        latitude: 29.868486,  
        longitude: -95.391197, 
        weight: 1, 
    },
    {
        latitude: 29.868486,  
        longitude: -95.391197, 
        weight: 1, 
    },
    {
        latitude: 29.868486,  
        longitude: -95.391197, 
        weight: 1, 
    },
    {
        latitude: 29.677339,  
        longitude: -95.493502, 
        weight: 1, 
    },
    {
        latitude: 29.677339,  
        longitude: -95.493502, 
        weight: 1, 
    },
    {
        latitude: 29.636972,  
        longitude: -95.491478, 
        weight: 1, 
    },
    {
        latitude: 29.73669,  
        longitude: -95.576164, 
        weight: 1, 
    },
    {
        latitude: 29.828014,  
        longitude: -95.410622, 
        weight: 1, 
    },
    {
        latitude: 29.828014,  
        longitude: -95.410622, 
        weight: 1, 
    },
    {
        latitude: 29.816608,  
        longitude: -95.380842, 
        weight: 1, 
    },
    {
        latitude: 29.704632,  
        longitude: -95.554855, 
        weight: 1, 
    },
    {
        latitude: 29.65719,  
        longitude: -95.492058, 
        weight: 1, 
    },
    {
        latitude: 29.659035,  
        longitude: -95.508433, 
        weight: 1, 
    },
    {
        latitude: 29.742551,  
        longitude: -95.464235, 
        weight: 1, 
    },
    {
        latitude: 29.742551,  
        longitude: -95.464235, 
        weight: 1, 
    },
    {
        latitude: 29.947832,  
        longitude: -95.415939, 
        weight: 1, 
    },
    {
        latitude: 29.716075,  
        longitude: -95.314927, 
        weight: 1, 
    },
    {
        latitude: 29.731508,  
        longitude: -95.476432, 
        weight: 1, 
    },
    {
        latitude: 29.8515,  
        longitude: -95.50465, 
        weight: 1, 
    },
    {
        latitude: 29.744543,  
        longitude: -95.376034, 
        weight: 1, 
    },
    {
        latitude: 29.689205,  
        longitude: -95.364943, 
        weight: 1, 
    },
    {
        latitude: 29.743066,  
        longitude: -95.296537, 
        weight: 1, 
    },
    {
        latitude: 29.679227,  
        longitude: -95.249107, 
        weight: 1, 
    },
    {
        latitude: 29.715609,  
        longitude: -95.614785, 
        weight: 1, 
    },
    {
        latitude: 29.762732,  
        longitude: -95.351989, 
        weight: 1, 
    },
    {
        latitude: 29.653286,  
        longitude: -95.503461, 
        weight: 1, 
    },
    {
        latitude: 29.747333,  
        longitude: -95.377633, 
        weight: 1, 
    },
    {
        latitude: 29.747333,  
        longitude: -95.377633, 
        weight: 1, 
    },
    {
        latitude: 29.785093,  
        longitude: -95.532926, 
        weight: 1, 
    },
    {
        latitude: 29.756305,  
        longitude: -95.352714, 
        weight: 1, 
    },
    {
        latitude: 29.841475,  
        longitude: -95.4931, 
        weight: 1, 
    },
    {
        latitude: 29.841475,  
        longitude: -95.4931, 
        weight: 1, 
    },
    {
        latitude: 29.749723,  
        longitude: -95.352928, 
        weight: 1, 
    },
    {
        latitude: 29.740905,  
        longitude: -95.459902, 
        weight: 1, 
    },
    {
        latitude: 29.753449,  
        longitude: -95.385727, 
        weight: 1, 
    },
    {
        latitude: 29.713604,  
        longitude: -95.493097, 
        weight: 1, 
    },
    {
        latitude: 29.85008,  
        longitude: -95.257534, 
        weight: 1, 
    },
    {
        latitude: 29.759851,  
        longitude: -95.358594, 
        weight: 1, 
    },
    {
        latitude: 29.651728,  
        longitude: -95.54869, 
        weight: 1, 
    },
    {
        latitude: 29.651728,  
        longitude: -95.54869, 
        weight: 1, 
    },
    {
        latitude: 29.689191,  
        longitude: -95.565732, 
        weight: 1, 
    },
    {
        latitude: 30.041165,  
        longitude: -95.25338, 
        weight: 1, 
    },
    {
        latitude: 29.94798,  
        longitude: -95.395756, 
        weight: 1, 
    },
    {
        latitude: 30.055096,  
        longitude: -95.175617, 
        weight: 1, 
    },
    {
        latitude: 29.686322,  
        longitude: -95.308285, 
        weight: 1, 
    },
    {
        latitude: 29.803948,  
        longitude: -95.316534, 
        weight: 1, 
    },
    {
        latitude: 29.878576,  
        longitude: -95.451042, 
        weight: 1, 
    },
    {
        latitude: 29.617634,  
        longitude: -95.262288, 
        weight: 1, 
    },
    {
        latitude: 29.644375,  
        longitude: -95.499728, 
        weight: 1, 
    },
    {
        latitude: 29.644375,  
        longitude: -95.499728, 
        weight: 1, 
    },
    {
        latitude: 29.881922,  
        longitude: -95.467066, 
        weight: 1, 
    },
    {
        latitude: 29.63693,  
        longitude: -95.339385, 
        weight: 1, 
    },
    {
        latitude: 29.731236,  
        longitude: -95.636475, 
        weight: 1, 
    },
    {
        latitude: 29.784678,  
        longitude: -95.33659, 
        weight: 1, 
    },
    {
        latitude: 29.750972,  
        longitude: -95.302411, 
        weight: 1, 
    },
    {
        latitude: 29.750972,  
        longitude: -95.302411, 
        weight: 1, 
    },
    {
        latitude: 29.642457,  
        longitude: -95.515084, 
        weight: 1, 
    },
    {
        latitude: 29.733009,  
        longitude: -95.36113, 
        weight: 1, 
    },
    {
        latitude: 29.733009,  
        longitude: -95.36113, 
        weight: 1, 
    },
    {
        latitude: 29.733009,  
        longitude: -95.36113, 
        weight: 1, 
    },
    {
        latitude: 29.725846,  
        longitude: -95.427801, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.604677,  
        longitude: -95.285303, 
        weight: 1, 
    },
    {
        latitude: 29.774073,  
        longitude: -95.242708, 
        weight: 1, 
    },
    {
        latitude: 29.638654,  
        longitude: -95.250773, 
        weight: 1, 
    },
    {
        latitude: 29.563225,  
        longitude: -95.138805, 
        weight: 1, 
    },
    {
        latitude: 29.77009,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.77009,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.757613,  
        longitude: -95.35676, 
        weight: 1, 
    },
    {
        latitude: 29.812355,  
        longitude: -95.429307, 
        weight: 1, 
    },
    {
        latitude: 29.748938,  
        longitude: -95.371179, 
        weight: 1, 
    },
    {
        latitude: 29.691152,  
        longitude: -95.528521, 
        weight: 1, 
    },
    {
        latitude: 29.967081,  
        longitude: -95.334896, 
        weight: 1, 
    },
    {
        latitude: 29.740504,  
        longitude: -95.465757, 
        weight: 1, 
    },
    {
        latitude: 29.644322,  
        longitude: -95.502425, 
        weight: 1, 
    },
    {
        latitude: 29.939371,  
        longitude: -95.395969, 
        weight: 1, 
    },
    {
        latitude: 29.690572,  
        longitude: -95.412537, 
        weight: 1, 
    },
    {
        latitude: 29.739739,  
        longitude: -95.323055, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.737611,  
        longitude: -95.499532, 
        weight: 1, 
    },
    {
        latitude: 29.72691,  
        longitude: -95.592447, 
        weight: 1, 
    },
    {
        latitude: 29.546582,  
        longitude: -95.147023, 
        weight: 1, 
    },
    {
        latitude: 29.710508,  
        longitude: -95.506678, 
        weight: 1, 
    },
    {
        latitude: 29.801635,  
        longitude: -95.484823, 
        weight: 1, 
    },
    {
        latitude: 29.801874,  
        longitude: -95.371628, 
        weight: 1, 
    },
    {
        latitude: 29.695527,  
        longitude: -95.314307, 
        weight: 1, 
    },
    {
        latitude: 29.690232,  
        longitude: -95.349953, 
        weight: 1, 
    },
    {
        latitude: 29.797102,  
        longitude: -95.371324, 
        weight: 1, 
    },
    {
        latitude: 29.774549,  
        longitude: -95.217386, 
        weight: 1, 
    },
    {
        latitude: 29.840346,  
        longitude: -95.4772, 
        weight: 1, 
    },
    {
        latitude: 29.785534,  
        longitude: -95.360823, 
        weight: 1, 
    },
    {
        latitude: 29.785534,  
        longitude: -95.360823, 
        weight: 1, 
    },
    {
        latitude: 29.664341,  
        longitude: -95.599914, 
        weight: 1, 
    },
    {
        latitude: 29.742189,  
        longitude: -95.500944, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.80394,  
        longitude: -95.38023, 
        weight: 1, 
    },
    {
        latitude: 29.93175,  
        longitude: -95.404437, 
        weight: 1, 
    },
    {
        latitude: 29.703613,  
        longitude: -95.595695, 
        weight: 1, 
    },
    {
        latitude: 30.065183,  
        longitude: -95.199965, 
        weight: 1, 
    },
    {
        latitude: 29.631254,  
        longitude: -95.339345, 
        weight: 1, 
    },
    {
        latitude: 29.631254,  
        longitude: -95.339345, 
        weight: 1, 
    },
    {
        latitude: 29.591109,  
        longitude: -95.19963, 
        weight: 1, 
    },
    {
        latitude: 29.603281,  
        longitude: -95.122468, 
        weight: 1, 
    },
    {
        latitude: 29.703511,  
        longitude: -95.614677, 
        weight: 1, 
    },
    {
        latitude: 29.765325,  
        longitude: -95.366207, 
        weight: 1, 
    },
    {
        latitude: 29.693476,  
        longitude: -95.293521, 
        weight: 1, 
    },
    {
        latitude: 29.740706,  
        longitude: -95.463677, 
        weight: 1, 
    },
    {
        latitude: 29.740706,  
        longitude: -95.463677, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.615208,  
        longitude: -95.448722, 
        weight: 1, 
    },
    {
        latitude: 29.828327,  
        longitude: -95.37603, 
        weight: 1, 
    },
    {
        latitude: 29.675089,  
        longitude: -95.493631, 
        weight: 1, 
    },
    {
        latitude: 29.702366,  
        longitude: -95.287044, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.776292,  
        longitude: -95.320273, 
        weight: 1, 
    },
    {
        latitude: 29.839515,  
        longitude: -95.328963, 
        weight: 1, 
    },
    {
        latitude: 29.849542,  
        longitude: -95.342268, 
        weight: 1, 
    },
    {
        latitude: 29.764238,  
        longitude: -95.360588, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.745654,  
        longitude: -95.5822, 
        weight: 1, 
    },
    {
        latitude: 29.746814,  
        longitude: -95.455154, 
        weight: 1, 
    },
    {
        latitude: 29.613282,  
        longitude: -95.219927, 
        weight: 1, 
    },
    {
        latitude: 29.841955,  
        longitude: -95.384375, 
        weight: 1, 
    },
    {
        latitude: 29.613282,  
        longitude: -95.219927, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.754542,  
        longitude: -95.37611, 
        weight: 1, 
    },
    {
        latitude: 29.846241,  
        longitude: -95.364156, 
        weight: 1, 
    },
    {
        latitude: 29.792497,  
        longitude: -95.360889, 
        weight: 1, 
    },
    {
        latitude: 29.922245,  
        longitude: -95.402845, 
        weight: 1, 
    },
    {
        latitude: 29.584877,  
        longitude: -95.468847, 
        weight: 1, 
    },
    {
        latitude: 29.710826,  
        longitude: -95.358935, 
        weight: 1, 
    },
    {
        latitude: 29.840731,  
        longitude: -95.366691, 
        weight: 1, 
    },
    {
        latitude: 29.785625,  
        longitude: -95.360807, 
        weight: 1, 
    },
    {
        latitude: 29.7845,  
        longitude: -95.344012, 
        weight: 1, 
    },
    {
        latitude: 29.740816,  
        longitude: -95.461471, 
        weight: 1, 
    },
    {
        latitude: 29.614374,  
        longitude: -95.22488, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.747423,  
        longitude: -95.358498, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.758634,  
        longitude: -95.399054, 
        weight: 1, 
    },
    {
        latitude: 29.812663,  
        longitude: -95.539835, 
        weight: 1, 
    },
    {
        latitude: 29.743408,  
        longitude: -95.394798, 
        weight: 1, 
    },
    {
        latitude: 29.750512,  
        longitude: -95.61941, 
        weight: 1, 
    },
    {
        latitude: 29.856542,  
        longitude: -95.449938, 
        weight: 1, 
    },
    {
        latitude: 29.705177,  
        longitude: -95.516878, 
        weight: 1, 
    },
    {
        latitude: 29.739664,  
        longitude: -95.470678, 
        weight: 1, 
    },
    {
        latitude: 29.870166,  
        longitude: -95.569237, 
        weight: 1, 
    },
    {
        latitude: 29.869442,  
        longitude: -95.487043, 
        weight: 1, 
    },
    {
        latitude: 29.787773,  
        longitude: -95.33887, 
        weight: 1, 
    },
    {
        latitude: 29.73591,  
        longitude: -95.347118, 
        weight: 1, 
    },
    {
        latitude: 29.748157,  
        longitude: -95.388863, 
        weight: 1, 
    },
    {
        latitude: 29.667507,  
        longitude: -95.442239, 
        weight: 1, 
    },
    {
        latitude: 29.72004,  
        longitude: -95.485215, 
        weight: 1, 
    },
    {
        latitude: 29.849666,  
        longitude: -95.319136, 
        weight: 1, 
    },
    {
        latitude: 29.849666,  
        longitude: -95.319136, 
        weight: 1, 
    },
    {
        latitude: 29.68626,  
        longitude: -95.509741, 
        weight: 1, 
    },
    {
        latitude: 29.725927,  
        longitude: -95.495639, 
        weight: 1, 
    },
    {
        latitude: 29.646923,  
        longitude: -95.500893, 
        weight: 1, 
    },
    {
        latitude: 29.689624,  
        longitude: -95.556808, 
        weight: 1, 
    },
    {
        latitude: 29.793308,  
        longitude: -95.473228, 
        weight: 1, 
    },
    {
        latitude: 29.745553,  
        longitude: -95.331415, 
        weight: 1, 
    },
    {
        latitude: 29.900701,  
        longitude: -95.411595, 
        weight: 1, 
    },
    {
        latitude: 29.618626,  
        longitude: -95.430733, 
        weight: 1, 
    },
    {
        latitude: 29.669219,  
        longitude: -95.435779, 
        weight: 1, 
    },
    {
        latitude: 29.744673,  
        longitude: -95.391823, 
        weight: 1, 
    },
    {
        latitude: 29.71733,  
        longitude: -95.294899, 
        weight: 1, 
    },
    {
        latitude: 29.944212,  
        longitude: -95.399746, 
        weight: 1, 
    },
    {
        latitude: 29.856843,  
        longitude: -95.521546, 
        weight: 1, 
    },
    {
        latitude: 29.753903,  
        longitude: -95.357844, 
        weight: 1, 
    },
    {
        latitude: 29.898013,  
        longitude: -95.425868, 
        weight: 1, 
    },
    {
        latitude: 29.678609,  
        longitude: -95.412277, 
        weight: 1, 
    },
    {
        latitude: 29.783893,  
        longitude: -95.532907, 
        weight: 1, 
    },
    {
        latitude: 29.746581,  
        longitude: -95.620126, 
        weight: 1, 
    },
    {
        latitude: 29.729996,  
        longitude: -95.382446, 
        weight: 1, 
    },
    {
        latitude: 29.774257,  
        longitude: -95.401286, 
        weight: 1, 
    },
    {
        latitude: 29.772561,  
        longitude: -95.218393, 
        weight: 1, 
    },
    {
        latitude: 29.673795,  
        longitude: -95.577354, 
        weight: 1, 
    },
    {
        latitude: 29.710094,  
        longitude: -95.493148, 
        weight: 1, 
    },
    {
        latitude: 29.710094,  
        longitude: -95.493148, 
        weight: 1, 
    },
    {
        latitude: 29.931911,  
        longitude: -95.395372, 
        weight: 1, 
    },
    {
        latitude: 29.726064,  
        longitude: -95.377633, 
        weight: 1, 
    },
    {
        latitude: 29.683803,  
        longitude: -95.260459, 
        weight: 1, 
    },
    {
        latitude: 29.677939,  
        longitude: -95.549846, 
        weight: 1, 
    },
    {
        latitude: 29.66707,  
        longitude: -95.566753, 
        weight: 1, 
    },
    {
        latitude: 29.648093,  
        longitude: -95.288697, 
        weight: 1, 
    },
    {
        latitude: 29.850235,  
        longitude: -95.477337, 
        weight: 1, 
    },
    {
        latitude: 29.779942,  
        longitude: -95.331398, 
        weight: 1, 
    },
    {
        latitude: 29.746898,  
        longitude: -95.376558, 
        weight: 1, 
    },
    {
        latitude: 29.828699,  
        longitude: -95.350868, 
        weight: 1, 
    },
    {
        latitude: 29.645258,  
        longitude: -95.233528, 
        weight: 1, 
    },
    {
        latitude: 29.772153,  
        longitude: -95.404968, 
        weight: 1, 
    },
    {
        latitude: 29.732282,  
        longitude: -95.575654, 
        weight: 1, 
    },
    {
        latitude: 29.982751,  
        longitude: -95.281858, 
        weight: 1, 
    },
    {
        latitude: 29.75037,  
        longitude: -95.61874, 
        weight: 1, 
    },
    {
        latitude: 29.770063,  
        longitude: -95.382766, 
        weight: 1, 
    },
    {
        latitude: 29.821058,  
        longitude: -95.514853, 
        weight: 1, 
    },
    {
        latitude: 29.73622,  
        longitude: -95.387058, 
        weight: 1, 
    },
    {
        latitude: 29.730374,  
        longitude: -95.568047, 
        weight: 1, 
    },
    {
        latitude: 29.719198,  
        longitude: -95.261807, 
        weight: 1, 
    },
    {
        latitude: 29.745385,  
        longitude: -95.384804, 
        weight: 1, 
    },
    {
        latitude: 29.690929,  
        longitude: -95.344278, 
        weight: 1, 
    },
    {
        latitude: 29.67824,  
        longitude: -95.415055, 
        weight: 1, 
    },
    {
        latitude: 29.666394,  
        longitude: -95.468539, 
        weight: 1, 
    },
    {
        latitude: 29.77355,  
        longitude: -95.39059, 
        weight: 1, 
    },
    {
        latitude: 29.802006,  
        longitude: -95.524224, 
        weight: 1, 
    },
    {
        latitude: 29.761488,  
        longitude: -95.408974, 
        weight: 1, 
    },
    {
        latitude: 29.752405,  
        longitude: -95.355509, 
        weight: 1, 
    },
    {
        latitude: 29.75979,  
        longitude: -95.36779, 
        weight: 1, 
    },
    {
        latitude: 29.796161,  
        longitude: -95.541183, 
        weight: 1, 
    },
    {
        latitude: 29.834379,  
        longitude: -95.484254, 
        weight: 1, 
    },
    {
        latitude: 29.734394,  
        longitude: -95.37265, 
        weight: 1, 
    },
    {
        latitude: 29.848878,  
        longitude: -95.473297, 
        weight: 1, 
    },
    {
        latitude: 29.848878,  
        longitude: -95.473297, 
        weight: 1, 
    },
    {
        latitude: 29.848878,  
        longitude: -95.473297, 
        weight: 1, 
    },
    {
        latitude: 29.848878,  
        longitude: -95.473297, 
        weight: 1, 
    },
    {
        latitude: 29.728695,  
        longitude: -95.437499, 
        weight: 1, 
    },
    {
        latitude: 29.9308,  
        longitude: -95.409719, 
        weight: 1, 
    },
    {
        latitude: 29.619945,  
        longitude: -95.45522, 
        weight: 1, 
    },
    {
        latitude: 29.619945,  
        longitude: -95.45522, 
        weight: 1, 
    },
    {
        latitude: 29.619945,  
        longitude: -95.45522, 
        weight: 1, 
    },
    {
        latitude: 29.75662,  
        longitude: -95.579988, 
        weight: 1, 
    },
    {
        latitude: 29.679649,  
        longitude: -95.50869, 
        weight: 1, 
    },
    {
        latitude: 29.741584,  
        longitude: -95.382475, 
        weight: 1, 
    },
    {
        latitude: 29.748656,  
        longitude: -95.389663, 
        weight: 1, 
    },
    {
        latitude: 29.681739,  
        longitude: -95.606392, 
        weight: 1, 
    },
    {
        latitude: 29.641535,  
        longitude: -95.463604, 
        weight: 1, 
    },
    {
        latitude: 29.843371,  
        longitude: -95.397326, 
        weight: 1, 
    },
    {
        latitude: 29.747471,  
        longitude: -95.37114, 
        weight: 1, 
    },
    {
        latitude: 29.735366,  
        longitude: -95.488052, 
        weight: 1, 
    },
    {
        latitude: 29.711575,  
        longitude: -95.382566, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.774705,  
        longitude: -95.397386, 
        weight: 1, 
    },
    {
        latitude: 29.700458,  
        longitude: -95.552297, 
        weight: 1, 
    },
    {
        latitude: 29.735998,  
        longitude: -95.407201, 
        weight: 1, 
    },
    {
        latitude: 29.723604,  
        longitude: -95.373615, 
        weight: 1, 
    },
    {
        latitude: 29.882476,  
        longitude: -95.448536, 
        weight: 1, 
    },
    {
        latitude: 29.680566,  
        longitude: -95.508714, 
        weight: 1, 
    },
    {
        latitude: 29.674234,  
        longitude: -95.570491, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.686194,  
        longitude: -95.276581, 
        weight: 1, 
    },
    {
        latitude: 29.651657,  
        longitude: -95.366458, 
        weight: 1, 
    },
    {
        latitude: 29.801413,  
        longitude: -95.316988, 
        weight: 1, 
    },
    {
        latitude: 29.731751,  
        longitude: -95.466641, 
        weight: 1, 
    },
    {
        latitude: 29.752548,  
        longitude: -95.574745, 
        weight: 1, 
    },
    {
        latitude: 29.752548,  
        longitude: -95.574745, 
        weight: 1, 
    },
    {
        latitude: 29.755922,  
        longitude: -95.366866, 
        weight: 1, 
    },
    {
        latitude: 29.671729,  
        longitude: -95.371182, 
        weight: 1, 
    },
    {
        latitude: 29.825836,  
        longitude: -95.342591, 
        weight: 1, 
    },
    {
        latitude: 29.728404,  
        longitude: -95.476415, 
        weight: 1, 
    },
    {
        latitude: 29.713632,  
        longitude: -95.538933, 
        weight: 1, 
    },
    {
        latitude: 29.752951,  
        longitude: -95.358375, 
        weight: 1, 
    },
    {
        latitude: 29.675206,  
        longitude: -95.265351, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.733082,  
        longitude: -95.483021, 
        weight: 1, 
    },
    {
        latitude: 29.733082,  
        longitude: -95.483021, 
        weight: 1, 
    },
    {
        latitude: 29.751204,  
        longitude: -95.355404, 
        weight: 1, 
    },
    {
        latitude: 29.731902,  
        longitude: -95.643985, 
        weight: 1, 
    },
    {
        latitude: 29.657673,  
        longitude: -95.389473, 
        weight: 1, 
    },
    {
        latitude: 29.677216,  
        longitude: -95.527681, 
        weight: 1, 
    },
    {
        latitude: 29.752973,  
        longitude: -95.358352, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.750511,  
        longitude: -95.618801, 
        weight: 1, 
    },
    {
        latitude: 29.761798,  
        longitude: -95.363655, 
        weight: 1, 
    },
    {
        latitude: 29.865257,  
        longitude: -95.450929, 
        weight: 1, 
    },
    {
        latitude: 29.668194,  
        longitude: -95.328704, 
        weight: 1, 
    },
    {
        latitude: 29.705181,  
        longitude: -95.307642, 
        weight: 1, 
    },
    {
        latitude: 29.674508,  
        longitude: -95.57498, 
        weight: 1, 
    },
    {
        latitude: 29.730374,  
        longitude: -95.568047, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.74229,  
        longitude: -95.43382, 
        weight: 1, 
    },
    {
        latitude: 29.786768,  
        longitude: -95.373333, 
        weight: 1, 
    },
    {
        latitude: 29.807857,  
        longitude: -95.458884, 
        weight: 1, 
    },
    {
        latitude: 29.735737,  
        longitude: -95.632221, 
        weight: 1, 
    },
    {
        latitude: 29.652111,  
        longitude: -95.257767, 
        weight: 1, 
    },
    {
        latitude: 29.679561,  
        longitude: -95.425452, 
        weight: 1, 
    },
    {
        latitude: 29.66552,  
        longitude: -95.518986, 
        weight: 1, 
    },
    {
        latitude: 30.014719,  
        longitude: -95.36361, 
        weight: 1, 
    },
    {
        latitude: 29.665998,  
        longitude: -95.528095, 
        weight: 1, 
    },
    {
        latitude: 29.834917,  
        longitude: -95.294888, 
        weight: 1, 
    },
    {
        latitude: 29.834917,  
        longitude: -95.294888, 
        weight: 1, 
    },
    {
        latitude: 29.8656,  
        longitude: -95.378516, 
        weight: 1, 
    },
    {
        latitude: 29.770451,  
        longitude: -95.411284, 
        weight: 1, 
    },
    {
        latitude: 29.742403,  
        longitude: -95.497426, 
        weight: 1, 
    },
    {
        latitude: 29.732075,  
        longitude: -95.354023, 
        weight: 1, 
    },
    {
        latitude: 29.732075,  
        longitude: -95.354023, 
        weight: 1, 
    },
    {
        latitude: 29.732229,  
        longitude: -95.543115, 
        weight: 1, 
    },
    {
        latitude: 29.771659,  
        longitude: -95.335746, 
        weight: 1, 
    },
    {
        latitude: 29.675651,  
        longitude: -95.528224, 
        weight: 1, 
    },
    {
        latitude: 29.674499,  
        longitude: -95.562245, 
        weight: 1, 
    },
    {
        latitude: 29.737815,  
        longitude: -95.483568, 
        weight: 1, 
    },
    {
        latitude: 29.721334,  
        longitude: -95.367821, 
        weight: 1, 
    },
    {
        latitude: 29.652651,  
        longitude: -95.558733, 
        weight: 1, 
    },
    {
        latitude: 29.652651,  
        longitude: -95.558733, 
        weight: 1, 
    },
    {
        latitude: 29.652651,  
        longitude: -95.558733, 
        weight: 1, 
    },
    {
        latitude: 29.75023,  
        longitude: -95.39655, 
        weight: 1, 
    },
    {
        latitude: 29.691126,  
        longitude: -95.528401, 
        weight: 1, 
    },
    {
        latitude: 29.737287,  
        longitude: -95.529415, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.636862,  
        longitude: -95.238303, 
        weight: 1, 
    },
    {
        latitude: 29.78449,  
        longitude: -95.484436, 
        weight: 1, 
    },
    {
        latitude: 29.589132,  
        longitude: -95.181608, 
        weight: 1, 
    },
    {
        latitude: 29.675199,  
        longitude: -95.285757, 
        weight: 1, 
    },
    {
        latitude: 29.783915,  
        longitude: -95.454695, 
        weight: 1, 
    },
    {
        latitude: 29.737827,  
        longitude: -95.484291, 
        weight: 1, 
    },
    {
        latitude: 29.733721,  
        longitude: -95.300445, 
        weight: 1, 
    },
    {
        latitude: 29.777819,  
        longitude: -95.394825, 
        weight: 1, 
    },
    {
        latitude: 29.741506,  
        longitude: -95.450672, 
        weight: 1, 
    },
    {
        latitude: 29.942396,  
        longitude: -95.299025, 
        weight: 1, 
    },
    {
        latitude: 29.942396,  
        longitude: -95.299025, 
        weight: 1, 
    },
    {
        latitude: 29.848696,  
        longitude: -95.327305, 
        weight: 1, 
    },
    {
        latitude: 29.753219,  
        longitude: -95.375483, 
        weight: 1, 
    },
    {
        latitude: 29.578658,  
        longitude: -95.196607, 
        weight: 1, 
    },
    {
        latitude: 29.724308,  
        longitude: -95.380676, 
        weight: 1, 
    },
    {
        latitude: 29.74673,  
        longitude: -95.371726, 
        weight: 1, 
    },
    {
        latitude: 29.884116,  
        longitude: -95.422792, 
        weight: 1, 
    },
    {
        latitude: 29.693591,  
        longitude: -95.374978, 
        weight: 1, 
    },
    {
        latitude: 29.949116,  
        longitude: -95.417709, 
        weight: 1, 
    },
    {
        latitude: 29.730588,  
        longitude: -95.308826, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.802179,  
        longitude: -95.285545, 
        weight: 1, 
    },
    {
        latitude: 29.721557,  
        longitude: -95.379196, 
        weight: 1, 
    },
    {
        latitude: 29.752973,  
        longitude: -95.358352, 
        weight: 1, 
    },
    {
        latitude: 29.670865,  
        longitude: -95.508575, 
        weight: 1, 
    },
    {
        latitude: 29.737842,  
        longitude: -95.482379, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.777659,  
        longitude: -95.218511, 
        weight: 1, 
    },
    {
        latitude: 29.773615,  
        longitude: -95.233231, 
        weight: 1, 
    },
    {
        latitude: 29.677888,  
        longitude: -95.424502, 
        weight: 1, 
    },
    {
        latitude: 29.807807,  
        longitude: -95.303851, 
        weight: 1, 
    },
    {
        latitude: 29.622597,  
        longitude: -95.379545, 
        weight: 1, 
    },
    {
        latitude: 29.622597,  
        longitude: -95.379545, 
        weight: 1, 
    },
    {
        latitude: 29.744209,  
        longitude: -95.307484, 
        weight: 1, 
    },
    {
        latitude: 29.744209,  
        longitude: -95.307484, 
        weight: 1, 
    },
    {
        latitude: 29.7996,  
        longitude: -95.310455, 
        weight: 1, 
    },
    {
        latitude: 29.670563,  
        longitude: -95.554924, 
        weight: 1, 
    },
    {
        latitude: 29.631917,  
        longitude: -95.353738, 
        weight: 1, 
    },
    {
        latitude: 29.746395,  
        longitude: -95.373207, 
        weight: 1, 
    },
    {
        latitude: 29.731869,  
        longitude: -95.357918, 
        weight: 1, 
    },
    {
        latitude: 29.739087,  
        longitude: -95.623529, 
        weight: 1, 
    },
    {
        latitude: 29.644322,  
        longitude: -95.502425, 
        weight: 1, 
    },
    {
        latitude: 29.760562,  
        longitude: -95.398175, 
        weight: 1, 
    },
    {
        latitude: 29.760562,  
        longitude: -95.398175, 
        weight: 1, 
    },
    {
        latitude: 29.722099,  
        longitude: -95.512329, 
        weight: 1, 
    },
    {
        latitude: 29.749083,  
        longitude: -95.377523, 
        weight: 1, 
    },
    {
        latitude: 29.749083,  
        longitude: -95.377523, 
        weight: 1, 
    },
    {
        latitude: 29.749083,  
        longitude: -95.377523, 
        weight: 1, 
    },
    {
        latitude: 29.672188,  
        longitude: -95.438427, 
        weight: 1, 
    },
    {
        latitude: 29.752942,  
        longitude: -95.35836, 
        weight: 1, 
    },
    {
        latitude: 29.742108,  
        longitude: -95.376597, 
        weight: 1, 
    },
    {
        latitude: 29.702017,  
        longitude: -95.478895, 
        weight: 1, 
    },
    {
        latitude: 29.669065,  
        longitude: -95.351504, 
        weight: 1, 
    },
    {
        latitude: 29.652624,  
        longitude: -95.355342, 
        weight: 1, 
    },
    {
        latitude: 29.729359,  
        longitude: -95.390362, 
        weight: 1, 
    },
    {
        latitude: 29.732229,  
        longitude: -95.566646, 
        weight: 1, 
    },
    {
        latitude: 29.691,  
        longitude: -95.366279, 
        weight: 1, 
    },
    {
        latitude: 29.738463,  
        longitude: -95.371794, 
        weight: 1, 
    },
    {
        latitude: 29.709658,  
        longitude: -95.520205, 
        weight: 1, 
    },
    {
        latitude: 29.939052,  
        longitude: -95.385799, 
        weight: 1, 
    },
    {
        latitude: 29.835394,  
        longitude: -95.50716, 
        weight: 1, 
    },
    {
        latitude: 29.752973,  
        longitude: -95.358352, 
        weight: 1, 
    },
    {
        latitude: 29.70463,  
        longitude: -95.277961, 
        weight: 1, 
    },
    {
        latitude: 29.746161,  
        longitude: -95.370792, 
        weight: 1, 
    },
    {
        latitude: 29.76404,  
        longitude: -95.361877, 
        weight: 1, 
    },
    {
        latitude: 29.669886,  
        longitude: -95.368682, 
        weight: 1, 
    },
    {
        latitude: 29.751956,  
        longitude: -95.35115, 
        weight: 1, 
    },
    {
        latitude: 29.7262,  
        longitude: -95.484875, 
        weight: 1, 
    },
    {
        latitude: 29.671766,  
        longitude: -95.355742, 
        weight: 1, 
    },
    {
        latitude: 29.679981,  
        longitude: -95.528108, 
        weight: 1, 
    },
    {
        latitude: 29.736169,  
        longitude: -95.605853, 
        weight: 1, 
    },
    {
        latitude: 29.869552,  
        longitude: -95.412598, 
        weight: 1, 
    },
    {
        latitude: 29.721685,  
        longitude: -95.37608, 
        weight: 1, 
    },
    {
        latitude: 29.677152,  
        longitude: -95.422876, 
        weight: 1, 
    },
    {
        latitude: 29.630288,  
        longitude: -95.464139, 
        weight: 1, 
    },
    {
        latitude: 29.630288,  
        longitude: -95.464139, 
        weight: 1, 
    },
    {
        latitude: 29.787945,  
        longitude: -95.644529, 
        weight: 1, 
    },
    {
        latitude: 29.715483,  
        longitude: -95.538956, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.770585,  
        longitude: -95.210009, 
        weight: 1, 
    },
    {
        latitude: 29.65739,  
        longitude: -95.254108, 
        weight: 1, 
    },
    {
        latitude: 29.75717,  
        longitude: -95.407194, 
        weight: 1, 
    },
    {
        latitude: 29.713962,  
        longitude: -95.543534, 
        weight: 1, 
    },
    {
        latitude: 29.733283,  
        longitude: -95.633511, 
        weight: 1, 
    },
    {
        latitude: 29.86112,  
        longitude: -95.30149, 
        weight: 1, 
    },
    {
        latitude: 29.845262,  
        longitude: -95.417287, 
        weight: 1, 
    },
    {
        latitude: 29.675009,  
        longitude: -95.30198, 
        weight: 1, 
    },
    {
        latitude: 29.803951,  
        longitude: -95.317024, 
        weight: 1, 
    },
    {
        latitude: 29.830578,  
        longitude: -95.402795, 
        weight: 1, 
    },
    {
        latitude: 29.866924,  
        longitude: -95.498662, 
        weight: 1, 
    },
    {
        latitude: 29.784153,  
        longitude: -95.588429, 
        weight: 1, 
    },
    {
        latitude: 29.633704,  
        longitude: -95.36318, 
        weight: 1, 
    },
    {
        latitude: 29.752221,  
        longitude: -95.368578, 
        weight: 1, 
    },
    {
        latitude: 29.752221,  
        longitude: -95.368578, 
        weight: 1, 
    },
    {
        latitude: 29.773545,  
        longitude: -95.338618, 
        weight: 1, 
    },
    {
        latitude: 29.661187,  
        longitude: -95.557973, 
        weight: 1, 
    },
    {
        latitude: 29.714658,  
        longitude: -95.367459, 
        weight: 1, 
    },
    {
        latitude: 29.591277,  
        longitude: -95.481927, 
        weight: 1, 
    },
    {
        latitude: 29.967256,  
        longitude: -95.214972, 
        weight: 1, 
    },
    {
        latitude: 29.675869,  
        longitude: -95.484356, 
        weight: 1, 
    },
    {
        latitude: 29.749153,  
        longitude: -95.377456, 
        weight: 1, 
    },
    {
        latitude: 29.749153,  
        longitude: -95.377456, 
        weight: 1, 
    },
    {
        latitude: 29.724151,  
        longitude: -95.367923, 
        weight: 1, 
    },
    {
        latitude: 29.987335,  
        longitude: -95.346031, 
        weight: 1, 
    },
    {
        latitude: 29.851024,  
        longitude: -95.473666, 
        weight: 1, 
    },
    {
        latitude: 29.813174,  
        longitude: -95.41042, 
        weight: 1, 
    },
    {
        latitude: 29.686784,  
        longitude: -95.508743, 
        weight: 1, 
    },
    {
        latitude: 29.802192,  
        longitude: -95.334889, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.967063,  
        longitude: -95.284339, 
        weight: 1, 
    },
    {
        latitude: 29.634437,  
        longitude: -95.227916, 
        weight: 1, 
    },
    {
        latitude: 29.706754,  
        longitude: -95.253863, 
        weight: 1, 
    },
    {
        latitude: 29.848753,  
        longitude: -95.511711, 
        weight: 1, 
    },
    {
        latitude: 29.745561,  
        longitude: -95.381668, 
        weight: 1, 
    },
    {
        latitude: 29.734021,  
        longitude: -95.42252, 
        weight: 1, 
    },
    {
        latitude: 29.987347,  
        longitude: -95.35243, 
        weight: 1, 
    },
    {
        latitude: 29.695638,  
        longitude: -95.277734, 
        weight: 1, 
    },
    {
        latitude: 29.664565,  
        longitude: -95.307073, 
        weight: 1, 
    },
    {
        latitude: 29.743877,  
        longitude: -95.434558, 
        weight: 1, 
    },
    {
        latitude: 29.655988,  
        longitude: -95.51068, 
        weight: 1, 
    },
    {
        latitude: 29.772954,  
        longitude: -95.186548, 
        weight: 1, 
    },
    {
        latitude: 29.708882,  
        longitude: -95.476315, 
        weight: 1, 
    },
    {
        latitude: 29.678655,  
        longitude: -95.508659, 
        weight: 1, 
    },
    {
        latitude: 29.656003,  
        longitude: -95.557334, 
        weight: 1, 
    },
    {
        latitude: 29.785862,  
        longitude: -95.343273, 
        weight: 1, 
    },
    {
        latitude: 29.785862,  
        longitude: -95.343273, 
        weight: 1, 
    },
    {
        latitude: 29.717617,  
        longitude: -95.51835, 
        weight: 1, 
    },
    {
        latitude: 29.716075,  
        longitude: -95.314927, 
        weight: 1, 
    },
    {
        latitude: 29.675651,  
        longitude: -95.528224, 
        weight: 1, 
    },
    {
        latitude: 29.738543,  
        longitude: -95.410999, 
        weight: 1, 
    },
    {
        latitude: 29.738543,  
        longitude: -95.410999, 
        weight: 1, 
    },
    {
        latitude: 29.606939,  
        longitude: -95.340938, 
        weight: 1, 
    },
    {
        latitude: 29.679877,  
        longitude: -95.600051, 
        weight: 1, 
    },
    {
        latitude: 29.679877,  
        longitude: -95.600051, 
        weight: 1, 
    },
    {
        latitude: 29.679877,  
        longitude: -95.600051, 
        weight: 1, 
    },
    {
        latitude: 29.841866,  
        longitude: -95.384384, 
        weight: 1, 
    },
    {
        latitude: 29.648989,  
        longitude: -95.249504, 
        weight: 1, 
    },
    {
        latitude: 29.744996,  
        longitude: -95.365198, 
        weight: 1, 
    },
    {
        latitude: 29.84624,  
        longitude: -95.364266, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.683023,  
        longitude: -95.365851, 
        weight: 1, 
    },
    {
        latitude: 29.736182,  
        longitude: -95.604615, 
        weight: 1, 
    },
    {
        latitude: 29.736182,  
        longitude: -95.604615, 
        weight: 1, 
    },
    {
        latitude: 29.67413,  
        longitude: -95.568844, 
        weight: 1, 
    },
    {
        latitude: 29.672944,  
        longitude: -95.551103, 
        weight: 1, 
    },
    {
        latitude: 29.677524,  
        longitude: -95.600894, 
        weight: 1, 
    },
    {
        latitude: 29.712378,  
        longitude: -95.518058, 
        weight: 1, 
    },
    {
        latitude: 29.60683,  
        longitude: -95.44329, 
        weight: 1, 
    },
    {
        latitude: 29.706327,  
        longitude: -95.596206, 
        weight: 1, 
    },
    {
        latitude: 29.665924,  
        longitude: -95.309945, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.98644,  
        longitude: -95.295859, 
        weight: 1, 
    },
    {
        latitude: 29.731751,  
        longitude: -95.405542, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.841381,  
        longitude: -95.499259, 
        weight: 1, 
    },
    {
        latitude: 29.862594,  
        longitude: -95.44149, 
        weight: 1, 
    },
    {
        latitude: 29.772732,  
        longitude: -95.313344, 
        weight: 1, 
    },
    {
        latitude: 29.881493,  
        longitude: -95.447574, 
        weight: 1, 
    },
    {
        latitude: 29.865701,  
        longitude: -95.287733, 
        weight: 1, 
    },
    {
        latitude: 29.865701,  
        longitude: -95.287733, 
        weight: 1, 
    },
    {
        latitude: 29.805761,  
        longitude: -95.446651, 
        weight: 1, 
    },
    {
        latitude: 29.735977,  
        longitude: -95.38163, 
        weight: 1, 
    },
    {
        latitude: 29.779946,  
        longitude: -95.477689, 
        weight: 1, 
    },
    {
        latitude: 29.779946,  
        longitude: -95.477689, 
        weight: 1, 
    },
    {
        latitude: 29.865707,  
        longitude: -95.458974, 
        weight: 1, 
    },
    {
        latitude: 29.819389,  
        longitude: -95.471587, 
        weight: 1, 
    },
    {
        latitude: 29.819389,  
        longitude: -95.471587, 
        weight: 1, 
    },
    {
        latitude: 29.758951,  
        longitude: -95.363252, 
        weight: 1, 
    },
    {
        latitude: 29.738518,  
        longitude: -95.496593, 
        weight: 1, 
    },
    {
        latitude: 29.802922,  
        longitude: -95.45871, 
        weight: 1, 
    },
    {
        latitude: 29.767687,  
        longitude: -95.45276, 
        weight: 1, 
    },
    {
        latitude: 29.760789,  
        longitude: -95.398179, 
        weight: 1, 
    },
    {
        latitude: 29.741487,  
        longitude: -95.516733, 
        weight: 1, 
    },
    {
        latitude: 29.697811,  
        longitude: -95.336666, 
        weight: 1, 
    },
    {
        latitude: 29.842975,  
        longitude: -95.495643, 
        weight: 1, 
    },
    {
        latitude: 29.792837,  
        longitude: -95.290625, 
        weight: 1, 
    },
    {
        latitude: 29.747423,  
        longitude: -95.358498, 
        weight: 1, 
    },
    {
        latitude: 29.824512,  
        longitude: -95.495081, 
        weight: 1, 
    },
    {
        latitude: 29.816132,  
        longitude: -95.465699, 
        weight: 1, 
    },
    {
        latitude: 29.816132,  
        longitude: -95.465699, 
        weight: 1, 
    },
    {
        latitude: 29.631786,  
        longitude: -95.429657, 
        weight: 1, 
    },
    {
        latitude: 29.740237,  
        longitude: -95.339857, 
        weight: 1, 
    },
    {
        latitude: 29.9308,  
        longitude: -95.409719, 
        weight: 1, 
    },
    {
        latitude: 29.767019,  
        longitude: -95.218261, 
        weight: 1, 
    },
    {
        latitude: 29.752664,  
        longitude: -95.360624, 
        weight: 1, 
    },
    {
        latitude: 29.781269,  
        longitude: -95.574478, 
        weight: 1, 
    },
    {
        latitude: 29.982751,  
        longitude: -95.281858, 
        weight: 1, 
    },
    {
        latitude: 29.758951,  
        longitude: -95.363252, 
        weight: 1, 
    },
    {
        latitude: 29.657662,  
        longitude: -95.389947, 
        weight: 1, 
    },
    {
        latitude: 29.557223,  
        longitude: -95.147887, 
        weight: 1, 
    },
    {
        latitude: 29.672306,  
        longitude: -95.280858, 
        weight: 1, 
    },
    {
        latitude: 29.626435,  
        longitude: -95.397046, 
        weight: 1, 
    },
    {
        latitude: 29.788628,  
        longitude: -95.358651, 
        weight: 1, 
    },
    {
        latitude: 29.788628,  
        longitude: -95.358651, 
        weight: 1, 
    },
    {
        latitude: 29.704525,  
        longitude: -95.482517, 
        weight: 1, 
    },
    {
        latitude: 29.776159,  
        longitude: -95.395405, 
        weight: 1, 
    },
    {
        latitude: 29.619616,  
        longitude: -95.264343, 
        weight: 1, 
    },
    {
        latitude: 29.779963,  
        longitude: -95.397498, 
        weight: 1, 
    },
    {
        latitude: 29.949575,  
        longitude: -95.41662, 
        weight: 1, 
    },
    {
        latitude: 29.854898,  
        longitude: -95.396192, 
        weight: 1, 
    },
    {
        latitude: 29.794878,  
        longitude: -95.52807, 
        weight: 1, 
    },
    {
        latitude: 29.794878,  
        longitude: -95.52807, 
        weight: 1, 
    },
    {
        latitude: 29.663974,  
        longitude: -95.332339, 
        weight: 1, 
    },
    {
        latitude: 29.757361,  
        longitude: -95.392277, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.4515, 
        weight: 1, 
    },
    {
        latitude: 29.721448,  
        longitude: -95.4515, 
        weight: 1, 
    },
    {
        latitude: 29.618156,  
        longitude: -95.435554, 
        weight: 1, 
    },
    {
        latitude: 29.746452,  
        longitude: -95.373163, 
        weight: 1, 
    },
    {
        latitude: 29.746452,  
        longitude: -95.373163, 
        weight: 1, 
    },
    {
        latitude: 29.85008,  
        longitude: -95.257534, 
        weight: 1, 
    },
    {
        latitude: 29.830396,  
        longitude: -95.301998, 
        weight: 1, 
    },
    {
        latitude: 29.774069,  
        longitude: -95.241572, 
        weight: 1, 
    },
    {
        latitude: 29.938598,  
        longitude: -95.36598, 
        weight: 1, 
    },
    {
        latitude: 29.699404,  
        longitude: -95.35901, 
        weight: 1, 
    },
    {
        latitude: 29.720855,  
        longitude: -95.501015, 
        weight: 1, 
    },
    {
        latitude: 29.680448,  
        longitude: -95.421223, 
        weight: 1, 
    },
    {
        latitude: 29.65271,  
        longitude: -95.555557, 
        weight: 1, 
    },
    {
        latitude: 30.047264,  
        longitude: -95.252082, 
        weight: 1, 
    },
    {
        latitude: 29.762688,  
        longitude: -95.363293, 
        weight: 1, 
    },
    {
        latitude: 29.770034,  
        longitude: -95.430372, 
        weight: 1, 
    },
    {
        latitude: 30.042019,  
        longitude: -95.254812, 
        weight: 1, 
    },
    {
        latitude: 30.042019,  
        longitude: -95.254812, 
        weight: 1, 
    },
    {
        latitude: 29.762375,  
        longitude: -95.363179, 
        weight: 1, 
    },
    {
        latitude: 29.983938,  
        longitude: -95.298751, 
        weight: 1, 
    },
    {
        latitude: 29.657828,  
        longitude: -95.58382, 
        weight: 1, 
    },
    {
        latitude: 29.742174,  
        longitude: -95.645613, 
        weight: 1, 
    },
    {
        latitude: 29.68208,  
        longitude: -95.413756, 
        weight: 1, 
    },
    {
        latitude: 29.701207,  
        longitude: -95.607677, 
        weight: 1, 
    },
    {
        latitude: 29.796098,  
        longitude: -95.30183, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508296, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508296, 
        weight: 1, 
    },
    {
        latitude: 29.967724,  
        longitude: -95.430542, 
        weight: 1, 
    },
    {
        latitude: 29.815356,  
        longitude: -95.371918, 
        weight: 1, 
    },
    {
        latitude: 29.752387,  
        longitude: -95.392117, 
        weight: 1, 
    },
    {
        latitude: 29.798987,  
        longitude: -95.436712, 
        weight: 1, 
    },
    {
        latitude: 29.798987,  
        longitude: -95.436712, 
        weight: 1, 
    },
    {
        latitude: 30.042019,  
        longitude: -95.254812, 
        weight: 1, 
    },
    {
        latitude: 30.07199,  
        longitude: -95.175047, 
        weight: 1, 
    },
    {
        latitude: 30.041165,  
        longitude: -95.25338, 
        weight: 1, 
    },
    {
        latitude: 29.701386,  
        longitude: -95.359543, 
        weight: 1, 
    },
    {
        latitude: 29.741834,  
        longitude: -95.379442, 
        weight: 1, 
    },
    {
        latitude: 29.741834,  
        longitude: -95.379442, 
        weight: 1, 
    },
    {
        latitude: 29.6953,  
        longitude: -95.402665, 
        weight: 1, 
    },
    {
        latitude: 29.75389,  
        longitude: -95.361673, 
        weight: 1, 
    },
    {
        latitude: 29.75389,  
        longitude: -95.361673, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.833165,  
        longitude: -95.486668, 
        weight: 1, 
    },
    {
        latitude: 29.810435,  
        longitude: -95.382019, 
        weight: 1, 
    },
    {
        latitude: 29.646165,  
        longitude: -95.243348, 
        weight: 1, 
    },
    {
        latitude: 29.762846,  
        longitude: -95.360367, 
        weight: 1, 
    },
    {
        latitude: 29.717736,  
        longitude: -95.536052, 
        weight: 1, 
    },
    {
        latitude: 29.665566,  
        longitude: -95.623111, 
        weight: 1, 
    },
    {
        latitude: 29.685743,  
        longitude: -95.5875, 
        weight: 1, 
    },
    {
        latitude: 29.879793,  
        longitude: -95.462583, 
        weight: 1, 
    },
    {
        latitude: 29.667121,  
        longitude: -95.562824, 
        weight: 1, 
    },
    {
        latitude: 29.830857,  
        longitude: -95.509313, 
        weight: 1, 
    },
    {
        latitude: 29.74726,  
        longitude: -95.490977, 
        weight: 1, 
    },
    {
        latitude: 29.63897,  
        longitude: -95.223463, 
        weight: 1, 
    },
    {
        latitude: 29.728678,  
        longitude: -95.58013, 
        weight: 1, 
    },
    {
        latitude: 29.751916,  
        longitude: -95.354975, 
        weight: 1, 
    },
    {
        latitude: 29.760608,  
        longitude: -95.576304, 
        weight: 1, 
    },
    {
        latitude: 29.76403,  
        longitude: -95.213134, 
        weight: 1, 
    },
    {
        latitude: 29.588255,  
        longitude: -95.192396, 
        weight: 1, 
    },
    {
        latitude: 29.735189,  
        longitude: -95.580854, 
        weight: 1, 
    },
    {
        latitude: 29.845318,  
        longitude: -95.36266, 
        weight: 1, 
    },
    {
        latitude: 29.942709,  
        longitude: -95.436428, 
        weight: 1, 
    },
    {
        latitude: 29.543345,  
        longitude: -95.145725, 
        weight: 1, 
    },
    {
        latitude: 29.832744,  
        longitude: -95.44534, 
        weight: 1, 
    },
    {
        latitude: 29.694758,  
        longitude: -95.264318, 
        weight: 1, 
    },
    {
        latitude: 29.862768,  
        longitude: -95.506086, 
        weight: 1, 
    },
    {
        latitude: 29.850235,  
        longitude: -95.477337, 
        weight: 1, 
    },
    {
        latitude: 29.659307,  
        longitude: -95.288931, 
        weight: 1, 
    },
    {
        latitude: 29.659307,  
        longitude: -95.288931, 
        weight: 1, 
    },
    {
        latitude: 29.739274,  
        longitude: -95.332261, 
        weight: 1, 
    },
    {
        latitude: 29.739274,  
        longitude: -95.332261, 
        weight: 1, 
    },
    {
        latitude: 29.677046,  
        longitude: -95.428261, 
        weight: 1, 
    },
    {
        latitude: 29.722809,  
        longitude: -95.455173, 
        weight: 1, 
    },
    {
        latitude: 29.628328,  
        longitude: -95.426943, 
        weight: 1, 
    },
    {
        latitude: 29.748557,  
        longitude: -95.371501, 
        weight: 1, 
    },
    {
        latitude: 29.634045,  
        longitude: -95.24194, 
        weight: 1, 
    },
    {
        latitude: 29.60602,  
        longitude: -95.449161, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.688462,  
        longitude: -95.277553, 
        weight: 1, 
    },
    {
        latitude: 29.880244,  
        longitude: -95.494466, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.717425,  
        longitude: -95.314272, 
        weight: 1, 
    },
    {
        latitude: 29.733888,  
        longitude: -95.459194, 
        weight: 1, 
    },
    {
        latitude: 29.760608,  
        longitude: -95.576304, 
        weight: 1, 
    },
    {
        latitude: 29.774525,  
        longitude: -95.384045, 
        weight: 1, 
    },
    {
        latitude: 29.685741,  
        longitude: -95.362698, 
        weight: 1, 
    },
    {
        latitude: 29.685741,  
        longitude: -95.362698, 
        weight: 1, 
    },
    {
        latitude: 29.728159,  
        longitude: -95.314325, 
        weight: 1, 
    },
    {
        latitude: 29.731573,  
        longitude: -95.501171, 
        weight: 1, 
    },
    {
        latitude: 29.791166,  
        longitude: -95.372108, 
        weight: 1, 
    },
    {
        latitude: 29.791166,  
        longitude: -95.372108, 
        weight: 1, 
    },
    {
        latitude: 29.647708,  
        longitude: -95.378363, 
        weight: 1, 
    },
    {
        latitude: 29.831924,  
        longitude: -95.481621, 
        weight: 1, 
    },
    {
        latitude: 29.673034,  
        longitude: -95.265785, 
        weight: 1, 
    },
    {
        latitude: 29.730248,  
        longitude: -95.539216, 
        weight: 1, 
    },
    {
        latitude: 29.800382,  
        longitude: -95.31697, 
        weight: 1, 
    },
    {
        latitude: 29.800382,  
        longitude: -95.31697, 
        weight: 1, 
    },
    {
        latitude: 29.800382,  
        longitude: -95.31697, 
        weight: 1, 
    },
    {
        latitude: 29.550872,  
        longitude: -95.157569, 
        weight: 1, 
    },
    {
        latitude: 29.636486,  
        longitude: -95.235996, 
        weight: 1, 
    },
    {
        latitude: 29.884371,  
        longitude: -95.298311, 
        weight: 1, 
    },
    {
        latitude: 29.713116,  
        longitude: -95.358425, 
        weight: 1, 
    },
    {
        latitude: 29.729857,  
        longitude: -95.598892, 
        weight: 1, 
    },
    {
        latitude: 29.856769,  
        longitude: -95.47332, 
        weight: 1, 
    },
    {
        latitude: 29.705005,  
        longitude: -95.538082, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.741863,  
        longitude: -95.380567, 
        weight: 1, 
    },
    {
        latitude: 29.689805,  
        longitude: -95.507199, 
        weight: 1, 
    },
    {
        latitude: 29.820328,  
        longitude: -95.344332, 
        weight: 1, 
    },
    {
        latitude: 29.654102,  
        longitude: -95.537446, 
        weight: 1, 
    },
    {
        latitude: 29.855587,  
        longitude: -95.386283, 
        weight: 1, 
    },
    {
        latitude: 29.771196,  
        longitude: -95.409485, 
        weight: 1, 
    },
    {
        latitude: 29.73297,  
        longitude: -95.589273, 
        weight: 1, 
    },
    {
        latitude: 29.717049,  
        longitude: -95.484816, 
        weight: 1, 
    },
    {
        latitude: 29.935995,  
        longitude: -95.303261, 
        weight: 1, 
    },
    {
        latitude: 29.966214,  
        longitude: -95.422959, 
        weight: 1, 
    },
    {
        latitude: 29.852144,  
        longitude: -95.331894, 
        weight: 1, 
    },
    {
        latitude: 29.65619,  
        longitude: -95.508429, 
        weight: 1, 
    },
    {
        latitude: 29.793015,  
        longitude: -95.684155, 
        weight: 1, 
    },
    {
        latitude: 29.730724,  
        longitude: -95.592498, 
        weight: 1, 
    },
    {
        latitude: 29.673897,  
        longitude: -95.351299, 
        weight: 1, 
    },
    {
        latitude: 29.674858,  
        longitude: -95.516039, 
        weight: 1, 
    },
    {
        latitude: 29.716627,  
        longitude: -95.545723, 
        weight: 1, 
    },
    {
        latitude: 29.720731,  
        longitude: -95.480692, 
        weight: 1, 
    },
    {
        latitude: 29.604579,  
        longitude: -95.27111, 
        weight: 1, 
    },
    {
        latitude: 29.782537,  
        longitude: -95.363784, 
        weight: 1, 
    },
    {
        latitude: 29.732857,  
        longitude: -95.499723, 
        weight: 1, 
    },
    {
        latitude: 29.751846,  
        longitude: -95.376586, 
        weight: 1, 
    },
    {
        latitude: 29.731797,  
        longitude: -95.463734, 
        weight: 1, 
    },
    {
        latitude: 29.741956,  
        longitude: -95.381916, 
        weight: 1, 
    },
    {
        latitude: 29.741956,  
        longitude: -95.381916, 
        weight: 1, 
    },
    {
        latitude: 29.612063,  
        longitude: -95.384337, 
        weight: 1, 
    },
    {
        latitude: 29.765893,  
        longitude: -95.391117, 
        weight: 1, 
    },
    {
        latitude: 29.638154,  
        longitude: -95.409819, 
        weight: 1, 
    },
    {
        latitude: 29.867668,  
        longitude: -95.498224, 
        weight: 1, 
    },
    {
        latitude: 29.867668,  
        longitude: -95.498224, 
        weight: 1, 
    },
    {
        latitude: 29.765893,  
        longitude: -95.391117, 
        weight: 1, 
    },
    {
        latitude: 29.849177,  
        longitude: -95.384501, 
        weight: 1, 
    },
    {
        latitude: 29.957828,  
        longitude: -95.541804, 
        weight: 1, 
    },
    {
        latitude: 29.747825,  
        longitude: -95.501025, 
        weight: 1, 
    },
    {
        latitude: 29.821485,  
        longitude: -95.423433, 
        weight: 1, 
    },
    {
        latitude: 29.740082,  
        longitude: -95.419387, 
        weight: 1, 
    },
    {
        latitude: 29.753261,  
        longitude: -95.382587, 
        weight: 1, 
    },
    {
        latitude: 29.61928,  
        longitude: -95.242188, 
        weight: 1, 
    },
    {
        latitude: 29.684837,  
        longitude: -95.278904, 
        weight: 1, 
    },
    {
        latitude: 29.729135,  
        longitude: -95.643959, 
        weight: 1, 
    },
    {
        latitude: 29.737652,  
        longitude: -95.497541, 
        weight: 1, 
    },
    {
        latitude: 29.588932,  
        longitude: -95.463094, 
        weight: 1, 
    },
    {
        latitude: 29.737002,  
        longitude: -95.553722, 
        weight: 1, 
    },
    {
        latitude: 29.86635,  
        longitude: -95.563523, 
        weight: 1, 
    },
    {
        latitude: 29.770651,  
        longitude: -95.294564, 
        weight: 1, 
    },
    {
        latitude: 29.74401,  
        longitude: -95.359954, 
        weight: 1, 
    },
    {
        latitude: 29.606016,  
        longitude: -95.228358, 
        weight: 1, 
    },
    {
        latitude: 29.818167,  
        longitude: -95.467838, 
        weight: 1, 
    },
    {
        latitude: 29.820001,  
        longitude: -95.297897, 
        weight: 1, 
    },
    {
        latitude: 29.950649,  
        longitude: -95.394643, 
        weight: 1, 
    },
    {
        latitude: 29.845247,  
        longitude: -95.333002, 
        weight: 1, 
    },
    {
        latitude: 29.720937,  
        longitude: -95.501035, 
        weight: 1, 
    },
    {
        latitude: 29.636824,  
        longitude: -95.440378, 
        weight: 1, 
    },
    {
        latitude: 29.772912,  
        longitude: -95.379345, 
        weight: 1, 
    },
    {
        latitude: 29.750165,  
        longitude: -95.461304, 
        weight: 1, 
    },
    {
        latitude: 29.719726,  
        longitude: -95.499698, 
        weight: 1, 
    },
    {
        latitude: 29.745852,  
        longitude: -95.583225, 
        weight: 1, 
    },
    {
        latitude: 29.846356,  
        longitude: -95.500221, 
        weight: 1, 
    },
    {
        latitude: 29.735554,  
        longitude: -95.301658, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.830736,  
        longitude: -95.486104, 
        weight: 1, 
    },
    {
        latitude: 29.722809,  
        longitude: -95.455173, 
        weight: 1, 
    },
    {
        latitude: 29.852174,  
        longitude: -95.520405, 
        weight: 1, 
    },
    {
        latitude: 29.760055,  
        longitude: -95.625334, 
        weight: 1, 
    },
    {
        latitude: 29.722987,  
        longitude: -95.476597, 
        weight: 1, 
    },
    {
        latitude: 29.764474,  
        longitude: -95.366686, 
        weight: 1, 
    },
    {
        latitude: 29.847016,  
        longitude: -95.430667, 
        weight: 1, 
    },
    {
        latitude: 29.847016,  
        longitude: -95.430667, 
        weight: 1, 
    },
    {
        latitude: 29.866012,  
        longitude: -95.292939, 
        weight: 1, 
    },
    {
        latitude: 29.77425,  
        longitude: -95.326434, 
        weight: 1, 
    },
    {
        latitude: 29.685865,  
        longitude: -95.374631, 
        weight: 1, 
    },
    {
        latitude: 29.685865,  
        longitude: -95.374631, 
        weight: 1, 
    },
    {
        latitude: 29.685865,  
        longitude: -95.374631, 
        weight: 1, 
    },
    {
        latitude: 29.723057,  
        longitude: -95.367588, 
        weight: 1, 
    },
    {
        latitude: 29.636872,  
        longitude: -95.243791, 
        weight: 1, 
    },
    {
        latitude: 29.765354,  
        longitude: -95.215539, 
        weight: 1, 
    },
    {
        latitude: 29.656641,  
        longitude: -95.500994, 
        weight: 1, 
    },
    {
        latitude: 29.811855,  
        longitude: -95.44531, 
        weight: 1, 
    },
    {
        latitude: 29.744036,  
        longitude: -95.299591, 
        weight: 1, 
    },
    {
        latitude: 29.673151,  
        longitude: -95.289091, 
        weight: 1, 
    },
    {
        latitude: 29.838682,  
        longitude: -95.384337, 
        weight: 1, 
    },
    {
        latitude: 29.742215,  
        longitude: -95.362648, 
        weight: 1, 
    },
    {
        latitude: 29.670656,  
        longitude: -95.343166, 
        weight: 1, 
    },
    {
        latitude: 29.817352,  
        longitude: -95.372656, 
        weight: 1, 
    },
    {
        latitude: 29.886411,  
        longitude: -95.488019, 
        weight: 1, 
    },
    {
        latitude: 29.706093,  
        longitude: -95.427451, 
        weight: 1, 
    },
    {
        latitude: 29.812687,  
        longitude: -95.545212, 
        weight: 1, 
    },
    {
        latitude: 29.721111,  
        longitude: -95.476452, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.821354,  
        longitude: -95.516501, 
        weight: 1, 
    },
    {
        latitude: 29.741446,  
        longitude: -95.416385, 
        weight: 1, 
    },
    {
        latitude: 29.741446,  
        longitude: -95.416385, 
        weight: 1, 
    },
    {
        latitude: 29.809224,  
        longitude: -95.472155, 
        weight: 1, 
    },
    {
        latitude: 29.701897,  
        longitude: -95.366351, 
        weight: 1, 
    },
    {
        latitude: 29.667629,  
        longitude: -95.532385, 
        weight: 1, 
    },
    {
        latitude: 29.828831,  
        longitude: -95.509251, 
        weight: 1, 
    },
    {
        latitude: 29.543345,  
        longitude: -95.145725, 
        weight: 1, 
    },
    {
        latitude: 29.705335,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.678717,  
        longitude: -95.556144, 
        weight: 1, 
    },
    {
        latitude: 29.948734,  
        longitude: -95.331833, 
        weight: 1, 
    },
    {
        latitude: 29.948734,  
        longitude: -95.331833, 
        weight: 1, 
    },
    {
        latitude: 29.837567,  
        longitude: -95.487688, 
        weight: 1, 
    },
    {
        latitude: 29.636872,  
        longitude: -95.243791, 
        weight: 1, 
    },
    {
        latitude: 29.606355,  
        longitude: -95.20626, 
        weight: 1, 
    },
    {
        latitude: 29.742684,  
        longitude: -95.409596, 
        weight: 1, 
    },
    {
        latitude: 29.760094,  
        longitude: -95.625325, 
        weight: 1, 
    },
    {
        latitude: 29.685296,  
        longitude: -95.396043, 
        weight: 1, 
    },
    {
        latitude: 29.584546,  
        longitude: -95.186712, 
        weight: 1, 
    },
    {
        latitude: 29.728547,  
        longitude: -95.298251, 
        weight: 1, 
    },
    {
        latitude: 29.545642,  
        longitude: -95.156368, 
        weight: 1, 
    },
    {
        latitude: 29.930367,  
        longitude: -95.318739, 
        weight: 1, 
    },
    {
        latitude: 29.930367,  
        longitude: -95.318739, 
        weight: 1, 
    },
    {
        latitude: 29.798461,  
        longitude: -95.522468, 
        weight: 1, 
    },
    {
        latitude: 29.732701,  
        longitude: -95.437871, 
        weight: 1, 
    },
    {
        latitude: 29.757032,  
        longitude: -95.368698, 
        weight: 1, 
    },
    {
        latitude: 29.757032,  
        longitude: -95.368698, 
        weight: 1, 
    },
    {
        latitude: 29.621243,  
        longitude: -95.508214, 
        weight: 1, 
    },
    {
        latitude: 29.850898,  
        longitude: -95.473568, 
        weight: 1, 
    },
    {
        latitude: 29.847016,  
        longitude: -95.430667, 
        weight: 1, 
    },
    {
        latitude: 29.711554,  
        longitude: -95.49304, 
        weight: 1, 
    },
    {
        latitude: 29.537408,  
        longitude: -95.154189, 
        weight: 1, 
    },
    {
        latitude: 29.663277,  
        longitude: -95.32366, 
        weight: 1, 
    },
    {
        latitude: 29.703759,  
        longitude: -95.298747, 
        weight: 1, 
    },
    {
        latitude: 29.740087,  
        longitude: -95.418739, 
        weight: 1, 
    },
    {
        latitude: 29.728928,  
        longitude: -95.360474, 
        weight: 1, 
    },
    {
        latitude: 29.665694,  
        longitude: -95.323011, 
        weight: 1, 
    },
    {
        latitude: 29.708888,  
        longitude: -95.496937, 
        weight: 1, 
    },
    {
        latitude: 29.743208,  
        longitude: -95.47075, 
        weight: 1, 
    },
    {
        latitude: 29.728482,  
        longitude: -95.502928, 
        weight: 1, 
    },
    {
        latitude: 29.74965,  
        longitude: -95.36929, 
        weight: 1, 
    },
    {
        latitude: 29.74965,  
        longitude: -95.36929, 
        weight: 1, 
    },
    {
        latitude: 29.728899,  
        longitude: -95.528703, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.689187,  
        longitude: -95.565787, 
        weight: 1, 
    },
    {
        latitude: 29.651643,  
        longitude: -95.573009, 
        weight: 1, 
    },
    {
        latitude: 29.693846,  
        longitude: -95.494906, 
        weight: 1, 
    },
    {
        latitude: 29.693846,  
        longitude: -95.494906, 
        weight: 1, 
    },
    {
        latitude: 29.664959,  
        longitude: -95.550562, 
        weight: 1, 
    },
    {
        latitude: 29.762634,  
        longitude: -95.269376, 
        weight: 1, 
    },
    {
        latitude: 29.940883,  
        longitude: -95.321485, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.746437,  
        longitude: -95.610068, 
        weight: 1, 
    },
    {
        latitude: 29.688232,  
        longitude: -95.279898, 
        weight: 1, 
    },
    {
        latitude: 29.742217,  
        longitude: -95.358865, 
        weight: 1, 
    },
    {
        latitude: 29.723694,  
        longitude: -95.418522, 
        weight: 1, 
    },
    {
        latitude: 29.736968,  
        longitude: -95.306165, 
        weight: 1, 
    },
    {
        latitude: 29.803951,  
        longitude: -95.317024, 
        weight: 1, 
    },
    {
        latitude: 29.95102,  
        longitude: -95.41821, 
        weight: 1, 
    },
    {
        latitude: 29.747712,  
        longitude: -95.354525, 
        weight: 1, 
    },
    {
        latitude: 29.79168,  
        longitude: -95.341079, 
        weight: 1, 
    },
    {
        latitude: 29.752616,  
        longitude: -95.354393, 
        weight: 1, 
    },
    {
        latitude: 29.647116,  
        longitude: -95.207893, 
        weight: 1, 
    },
    {
        latitude: 29.691645,  
        longitude: -95.361568, 
        weight: 1, 
    },
    {
        latitude: 29.627641,  
        longitude: -95.234138, 
        weight: 1, 
    },
    {
        latitude: 29.705521,  
        longitude: -95.485581, 
        weight: 1, 
    },
    {
        latitude: 29.705521,  
        longitude: -95.485581, 
        weight: 1, 
    },
    {
        latitude: 29.705521,  
        longitude: -95.485581, 
        weight: 1, 
    },
    {
        latitude: 29.740123,  
        longitude: -95.50092, 
        weight: 1, 
    },
    {
        latitude: 29.663909,  
        longitude: -95.336077, 
        weight: 1, 
    },
    {
        latitude: 29.873785,  
        longitude: -95.460479, 
        weight: 1, 
    },
    {
        latitude: 29.682908,  
        longitude: -95.395567, 
        weight: 1, 
    },
    {
        latitude: 29.646115,  
        longitude: -95.354086, 
        weight: 1, 
    },
    {
        latitude: 29.948734,  
        longitude: -95.331833, 
        weight: 1, 
    },
    {
        latitude: 29.714323,  
        longitude: -95.600467, 
        weight: 1, 
    },
    {
        latitude: 29.780737,  
        longitude: -95.2186, 
        weight: 1, 
    },
    {
        latitude: 29.72667,  
        longitude: -95.643952, 
        weight: 1, 
    },
    {
        latitude: 29.656056,  
        longitude: -95.46933, 
        weight: 1, 
    },
    {
        latitude: 29.812412,  
        longitude: -95.414947, 
        weight: 1, 
    },
    {
        latitude: 29.642801,  
        longitude: -95.438878, 
        weight: 1, 
    },
    {
        latitude: 29.692195,  
        longitude: -95.298848, 
        weight: 1, 
    },
    {
        latitude: 29.722033,  
        longitude: -95.513947, 
        weight: 1, 
    },
    {
        latitude: 29.665738,  
        longitude: -95.346194, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508296, 
        weight: 1, 
    },
    {
        latitude: 29.781404,  
        longitude: -95.31666, 
        weight: 1, 
    },
    {
        latitude: 29.781404,  
        longitude: -95.31666, 
        weight: 1, 
    },
    {
        latitude: 29.781404,  
        longitude: -95.31666, 
        weight: 1, 
    },
    {
        latitude: 29.774556,  
        longitude: -95.457754, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.832172,  
        longitude: -95.502624, 
        weight: 1, 
    },
    {
        latitude: 29.679239,  
        longitude: -95.24912, 
        weight: 1, 
    },
    {
        latitude: 29.795392,  
        longitude: -95.337085, 
        weight: 1, 
    },
    {
        latitude: 29.678318,  
        longitude: -95.528454, 
        weight: 1, 
    },
    {
        latitude: 29.678318,  
        longitude: -95.528454, 
        weight: 1, 
    },
    {
        latitude: 29.701229,  
        longitude: -95.537941, 
        weight: 1, 
    },
    {
        latitude: 29.681421,  
        longitude: -95.254855, 
        weight: 1, 
    },
    {
        latitude: 29.681421,  
        longitude: -95.254855, 
        weight: 1, 
    },
    {
        latitude: 29.654153,  
        longitude: -95.355364, 
        weight: 1, 
    },
    {
        latitude: 29.691714,  
        longitude: -95.355418, 
        weight: 1, 
    },
    {
        latitude: 29.803968,  
        longitude: -95.316187, 
        weight: 1, 
    },
    {
        latitude: 29.785245,  
        longitude: -95.576218, 
        weight: 1, 
    },
    {
        latitude: 29.84443,  
        longitude: -95.479706, 
        weight: 1, 
    },
    {
        latitude: 29.882476,  
        longitude: -95.448536, 
        weight: 1, 
    },
    {
        latitude: 29.7361,  
        longitude: -95.438559, 
        weight: 1, 
    },
    {
        latitude: 29.765714,  
        longitude: -95.277707, 
        weight: 1, 
    },
    {
        latitude: 29.632467,  
        longitude: -95.41787, 
        weight: 1, 
    },
    {
        latitude: 29.680666,  
        longitude: -95.551847, 
        weight: 1, 
    },
    {
        latitude: 29.65096,  
        longitude: -95.454328, 
        weight: 1, 
    },
    {
        latitude: 29.715085,  
        longitude: -95.296277, 
        weight: 1, 
    },
    {
        latitude: 29.710508,  
        longitude: -95.4932, 
        weight: 1, 
    },
    {
        latitude: 29.710508,  
        longitude: -95.4932, 
        weight: 1, 
    },
    {
        latitude: 29.720067,  
        longitude: -95.48429, 
        weight: 1, 
    },
    {
        latitude: 29.692638,  
        longitude: -95.268019, 
        weight: 1, 
    },
    {
        latitude: 29.640792,  
        longitude: -95.464098, 
        weight: 1, 
    },
    {
        latitude: 29.850898,  
        longitude: -95.473568, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.735399,  
        longitude: -95.465114, 
        weight: 1, 
    },
    {
        latitude: 29.746706,  
        longitude: -95.412617, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.73922,  
        longitude: -95.500886, 
        weight: 1, 
    },
    {
        latitude: 29.841661,  
        longitude: -95.475282, 
        weight: 1, 
    },
    {
        latitude: 29.724411,  
        longitude: -95.380607, 
        weight: 1, 
    },
    {
        latitude: 29.724411,  
        longitude: -95.380607, 
        weight: 1, 
    },
    {
        latitude: 29.798276,  
        longitude: -95.426259, 
        weight: 1, 
    },
    {
        latitude: 29.623595,  
        longitude: -95.226292, 
        weight: 1, 
    },
    {
        latitude: 29.623595,  
        longitude: -95.226292, 
        weight: 1, 
    },
    {
        latitude: 29.68565,  
        longitude: -95.551436, 
        weight: 1, 
    },
    {
        latitude: 29.845585,  
        longitude: -95.376883, 
        weight: 1, 
    },
    {
        latitude: 29.632706,  
        longitude: -95.345246, 
        weight: 1, 
    },
    {
        latitude: 29.799066,  
        longitude: -95.43739, 
        weight: 1, 
    },
    {
        latitude: 29.728144,  
        longitude: -95.325256, 
        weight: 1, 
    },
    {
        latitude: 29.674223,  
        longitude: -95.513206, 
        weight: 1, 
    },
    {
        latitude: 29.85928,  
        longitude: -95.37469, 
        weight: 1, 
    },
    {
        latitude: 29.710638,  
        longitude: -95.496826, 
        weight: 1, 
    },
    {
        latitude: 29.710638,  
        longitude: -95.496826, 
        weight: 1, 
    },
    {
        latitude: 29.869859,  
        longitude: -95.40132, 
        weight: 1, 
    },
    {
        latitude: 29.730563,  
        longitude: -95.593501, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.821119,  
        longitude: -95.344288, 
        weight: 1, 
    },
    {
        latitude: 29.675587,  
        longitude: -95.546059, 
        weight: 1, 
    },
    {
        latitude: 29.768447,  
        longitude: -95.385482, 
        weight: 1, 
    },
    {
        latitude: 29.849371,  
        longitude: -95.41799, 
        weight: 1, 
    },
    {
        latitude: 29.707186,  
        longitude: -95.545311, 
        weight: 1, 
    },
    {
        latitude: 29.942694,  
        longitude: -95.330708, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.661532,  
        longitude: -95.407761, 
        weight: 1, 
    },
    {
        latitude: 29.831287,  
        longitude: -95.473057, 
        weight: 1, 
    },
    {
        latitude: 29.748875,  
        longitude: -95.305284, 
        weight: 1, 
    },
    {
        latitude: 29.735859,  
        longitude: -95.624476, 
        weight: 1, 
    },
    {
        latitude: 29.689022,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.747131,  
        longitude: -95.381576, 
        weight: 1, 
    },
    {
        latitude: 29.75717,  
        longitude: -95.407194, 
        weight: 1, 
    },
    {
        latitude: 29.848728,  
        longitude: -95.51498, 
        weight: 1, 
    },
    {
        latitude: 29.742777,  
        longitude: -95.538378, 
        weight: 1, 
    },
    {
        latitude: 29.606407,  
        longitude: -95.306838, 
        weight: 1, 
    },
    {
        latitude: 29.731793,  
        longitude: -95.488471, 
        weight: 1, 
    },
    {
        latitude: 29.735891,  
        longitude: -95.62205, 
        weight: 1, 
    },
    {
        latitude: 29.694647,  
        longitude: -95.318734, 
        weight: 1, 
    },
    {
        latitude: 29.661933,  
        longitude: -95.425213, 
        weight: 1, 
    },
    {
        latitude: 29.939371,  
        longitude: -95.395969, 
        weight: 1, 
    },
    {
        latitude: 29.746301,  
        longitude: -95.533711, 
        weight: 1, 
    },
    {
        latitude: 29.599897,  
        longitude: -95.461078, 
        weight: 1, 
    },
    {
        latitude: 29.743216,  
        longitude: -95.391228, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.754299,  
        longitude: -95.36052, 
        weight: 1, 
    },
    {
        latitude: 29.730136,  
        longitude: -95.469094, 
        weight: 1, 
    },
    {
        latitude: 29.723908,  
        longitude: -95.378375, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.733849,  
        longitude: -95.466697, 
        weight: 1, 
    },
    {
        latitude: 29.77419,  
        longitude: -95.364122, 
        weight: 1, 
    },
    {
        latitude: 29.93178,  
        longitude: -95.401566, 
        weight: 1, 
    },
    {
        latitude: 29.797676,  
        longitude: -95.270961, 
        weight: 1, 
    },
    {
        latitude: 29.737287,  
        longitude: -95.529415, 
        weight: 1, 
    },
    {
        latitude: 29.80498,  
        longitude: -95.484884, 
        weight: 1, 
    },
    {
        latitude: 29.666,  
        longitude: -95.528095, 
        weight: 1, 
    },
    {
        latitude: 29.802637,  
        longitude: -95.576649, 
        weight: 1, 
    },
    {
        latitude: 29.731777,  
        longitude: -95.490549, 
        weight: 1, 
    },
    {
        latitude: 29.6613,  
        longitude: -95.276808, 
        weight: 1, 
    },
    {
        latitude: 29.942547,  
        longitude: -95.398407, 
        weight: 1, 
    },
    {
        latitude: 29.720041,  
        longitude: -95.485083, 
        weight: 1, 
    },
    {
        latitude: 29.783545,  
        longitude: -95.446369, 
        weight: 1, 
    },
    {
        latitude: 29.618251,  
        longitude: -95.344105, 
        weight: 1, 
    },
    {
        latitude: 29.689809,  
        longitude: -95.380846, 
        weight: 1, 
    },
    {
        latitude: 29.74718,  
        longitude: -95.497626, 
        weight: 1, 
    },
    {
        latitude: 29.770435,  
        longitude: -95.412594, 
        weight: 1, 
    },
    {
        latitude: 29.704565,  
        longitude: -95.556251, 
        weight: 1, 
    },
    {
        latitude: 29.594427,  
        longitude: -95.171162, 
        weight: 1, 
    },
    {
        latitude: 29.594427,  
        longitude: -95.171162, 
        weight: 1, 
    },
    {
        latitude: 30.060443,  
        longitude: -95.153589, 
        weight: 1, 
    },
    {
        latitude: 29.7972,  
        longitude: -95.501794, 
        weight: 1, 
    },
    {
        latitude: 29.931856,  
        longitude: -95.402133, 
        weight: 1, 
    },
    {
        latitude: 29.732351,  
        longitude: -95.53926, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.689036,  
        longitude: -95.548004, 
        weight: 1, 
    },
    {
        latitude: 29.709922,  
        longitude: -95.545865, 
        weight: 1, 
    },
    {
        latitude: 29.773918,  
        longitude: -95.186546, 
        weight: 1, 
    },
    {
        latitude: 29.683816,  
        longitude: -95.422888, 
        weight: 1, 
    },
    {
        latitude: 29.732747,  
        longitude: -95.520524, 
        weight: 1, 
    },
    {
        latitude: 29.732747,  
        longitude: -95.520524, 
        weight: 1, 
    },
    {
        latitude: 29.818273,  
        longitude: -95.279131, 
        weight: 1, 
    },
    {
        latitude: 29.818273,  
        longitude: -95.279131, 
        weight: 1, 
    },
    {
        latitude: 29.754284,  
        longitude: -95.479616, 
        weight: 1, 
    },
    {
        latitude: 29.869017,  
        longitude: -95.412586, 
        weight: 1, 
    },
    {
        latitude: 29.905145,  
        longitude: -95.412765, 
        weight: 1, 
    },
    {
        latitude: 29.679128,  
        longitude: -95.484199, 
        weight: 1, 
    },
    {
        latitude: 29.770778,  
        longitude: -95.299798, 
        weight: 1, 
    },
    {
        latitude: 29.700932,  
        longitude: -95.552285, 
        weight: 1, 
    },
    {
        latitude: 29.700932,  
        longitude: -95.552285, 
        weight: 1, 
    },
    {
        latitude: 29.827343,  
        longitude: -95.327942, 
        weight: 1, 
    },
    {
        latitude: 29.747362,  
        longitude: -95.38648, 
        weight: 1, 
    },
    {
        latitude: 29.694816,  
        longitude: -95.334245, 
        weight: 1, 
    },
    {
        latitude: 29.866304,  
        longitude: -95.43868, 
        weight: 1, 
    },
    {
        latitude: 29.866304,  
        longitude: -95.43868, 
        weight: 1, 
    },
    {
        latitude: 29.831599,  
        longitude: -95.463259, 
        weight: 1, 
    },
    {
        latitude: 29.96311,  
        longitude: -95.158737, 
        weight: 1, 
    },
    {
        latitude: 29.819799,  
        longitude: -95.312394, 
        weight: 1, 
    },
    {
        latitude: 29.681764,  
        longitude: -95.605159, 
        weight: 1, 
    },
    {
        latitude: 29.646726,  
        longitude: -95.501347, 
        weight: 1, 
    },
    {
        latitude: 29.736625,  
        longitude: -95.582029, 
        weight: 1, 
    },
    {
        latitude: 29.819499,  
        longitude: -95.46634, 
        weight: 1, 
    },
    {
        latitude: 29.850353,  
        longitude: -95.384513, 
        weight: 1, 
    },
    {
        latitude: 29.688746,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.688746,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.655598,  
        longitude: -95.521609, 
        weight: 1, 
    },
    {
        latitude: 29.845527,  
        longitude: -95.385738, 
        weight: 1, 
    },
    {
        latitude: 29.682988,  
        longitude: -95.527956, 
        weight: 1, 
    },
    {
        latitude: 29.748122,  
        longitude: -95.389846, 
        weight: 1, 
    },
    {
        latitude: 29.684382,  
        longitude: -95.528559, 
        weight: 1, 
    },
    {
        latitude: 29.827269,  
        longitude: -95.517682, 
        weight: 1, 
    },
    {
        latitude: 29.586253,  
        longitude: -95.518819, 
        weight: 1, 
    },
    {
        latitude: 29.739051,  
        longitude: -95.482482, 
        weight: 1, 
    },
    {
        latitude: 29.735359,  
        longitude: -95.48794, 
        weight: 1, 
    },
    {
        latitude: 29.831329,  
        longitude: -95.284362, 
        weight: 1, 
    },
    {
        latitude: 29.66922,  
        longitude: -95.43576, 
        weight: 1, 
    },
    {
        latitude: 30.037959,  
        longitude: -95.261338, 
        weight: 1, 
    },
    {
        latitude: 29.707379,  
        longitude: -95.48267, 
        weight: 1, 
    },
    {
        latitude: 29.770444,  
        longitude: -95.411641, 
        weight: 1, 
    },
    {
        latitude: 29.770444,  
        longitude: -95.411625, 
        weight: 1, 
    },
    {
        latitude: 29.770852,  
        longitude: -95.20713, 
        weight: 1, 
    },
    {
        latitude: 29.718804,  
        longitude: -95.360174, 
        weight: 1, 
    },
    {
        latitude: 29.718804,  
        longitude: -95.360174, 
        weight: 1, 
    },
    {
        latitude: 29.933136,  
        longitude: -95.414853, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.611555,  
        longitude: -95.266587, 
        weight: 1, 
    },
    {
        latitude: 29.726942,  
        longitude: -95.370964, 
        weight: 1, 
    },
    {
        latitude: 29.726942,  
        longitude: -95.370964, 
        weight: 1, 
    },
    {
        latitude: 29.651655,  
        longitude: -95.364646, 
        weight: 1, 
    },
    {
        latitude: 29.986061,  
        longitude: -95.352425, 
        weight: 1, 
    },
    {
        latitude: 29.752508,  
        longitude: -95.378629, 
        weight: 1, 
    },
    {
        latitude: 29.752508,  
        longitude: -95.378629, 
        weight: 1, 
    },
    {
        latitude: 29.942927,  
        longitude: -95.332782, 
        weight: 1, 
    },
    {
        latitude: 29.942927,  
        longitude: -95.332782, 
        weight: 1, 
    },
    {
        latitude: 29.675928,  
        longitude: -95.41874, 
        weight: 1, 
    },
    {
        latitude: 29.738947,  
        longitude: -95.484474, 
        weight: 1, 
    },
    {
        latitude: 29.649021,  
        longitude: -95.219334, 
        weight: 1, 
    },
    {
        latitude: 29.805229,  
        longitude: -95.374769, 
        weight: 1, 
    },
    {
        latitude: 29.65353,  
        longitude: -95.56444, 
        weight: 1, 
    },
    {
        latitude: 29.770444,  
        longitude: -95.411641, 
        weight: 1, 
    },
    {
        latitude: 29.737997,  
        longitude: -95.474251, 
        weight: 1, 
    },
    {
        latitude: 29.715748,  
        longitude: -95.257573, 
        weight: 1, 
    },
    {
        latitude: 29.805782,  
        longitude: -95.41476, 
        weight: 1, 
    },
    {
        latitude: 29.805782,  
        longitude: -95.41476, 
        weight: 1, 
    },
    {
        latitude: 29.805782,  
        longitude: -95.41476, 
        weight: 1, 
    },
    {
        latitude: 29.804321,  
        longitude: -95.361074, 
        weight: 1, 
    },
    {
        latitude: 29.804321,  
        longitude: -95.361074, 
        weight: 1, 
    },
    {
        latitude: 29.770852,  
        longitude: -95.20713, 
        weight: 1, 
    },
    {
        latitude: 29.705546,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.705546,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.729217,  
        longitude: -95.635765, 
        weight: 1, 
    },
    {
        latitude: 29.794661,  
        longitude: -95.6884, 
        weight: 1, 
    },
    {
        latitude: 29.651614,  
        longitude: -95.568547, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.359111, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.359111, 
        weight: 1, 
    },
    {
        latitude: 29.675712,  
        longitude: -95.321088, 
        weight: 1, 
    },
    {
        latitude: 29.734288,  
        longitude: -95.478615, 
        weight: 1, 
    },
    {
        latitude: 29.877649,  
        longitude: -95.301237, 
        weight: 1, 
    },
    {
        latitude: 29.785899,  
        longitude: -95.366551, 
        weight: 1, 
    },
    {
        latitude: 29.691512,  
        longitude: -95.520552, 
        weight: 1, 
    },
    {
        latitude: 29.667124,  
        longitude: -95.564091, 
        weight: 1, 
    },
    {
        latitude: 29.737997,  
        longitude: -95.474251, 
        weight: 1, 
    },
    {
        latitude: 29.695619,  
        longitude: -95.596023, 
        weight: 1, 
    },
    {
        latitude: 29.727306,  
        longitude: -95.520584, 
        weight: 1, 
    },
    {
        latitude: 29.851713,  
        longitude: -95.396788, 
        weight: 1, 
    },
    {
        latitude: 29.828448,  
        longitude: -95.378575, 
        weight: 1, 
    },
    {
        latitude: 29.80108,  
        longitude: -95.496584, 
        weight: 1, 
    },
    {
        latitude: 29.817926,  
        longitude: -95.382373, 
        weight: 1, 
    },
    {
        latitude: 29.598907,  
        longitude: -95.492527, 
        weight: 1, 
    },
    {
        latitude: 29.713946,  
        longitude: -95.543527, 
        weight: 1, 
    },
    {
        latitude: 29.703712,  
        longitude: -95.364183, 
        weight: 1, 
    },
    {
        latitude: 29.635097,  
        longitude: -95.463189, 
        weight: 1, 
    },
    {
        latitude: 29.732767,  
        longitude: -95.344963, 
        weight: 1, 
    },
    {
        latitude: 29.732767,  
        longitude: -95.344963, 
        weight: 1, 
    },
    {
        latitude: 29.595018,  
        longitude: -95.457287, 
        weight: 1, 
    },
    {
        latitude: 29.613347,  
        longitude: -95.285457, 
        weight: 1, 
    },
    {
        latitude: 29.703448,  
        longitude: -95.60778, 
        weight: 1, 
    },
    {
        latitude: 29.703448,  
        longitude: -95.60778, 
        weight: 1, 
    },
    {
        latitude: 29.681216,  
        longitude: -95.559464, 
        weight: 1, 
    },
    {
        latitude: 29.640878,  
        longitude: -95.234284, 
        weight: 1, 
    },
    {
        latitude: 29.746772,  
        longitude: -95.598741, 
        weight: 1, 
    },
    {
        latitude: 29.755027,  
        longitude: -95.36008, 
        weight: 1, 
    },
    {
        latitude: 29.75457,  
        longitude: -95.362834, 
        weight: 1, 
    },
    {
        latitude: 29.822708,  
        longitude: -95.545257, 
        weight: 1, 
    },
    {
        latitude: 29.624854,  
        longitude: -95.34159, 
        weight: 1, 
    },
    {
        latitude: 29.6794,  
        longitude: -95.556007, 
        weight: 1, 
    },
    {
        latitude: 29.82269,  
        longitude: -95.539219, 
        weight: 1, 
    },
    {
        latitude: 29.72673,  
        longitude: -95.647854, 
        weight: 1, 
    },
    {
        latitude: 29.657644,  
        longitude: -95.508417, 
        weight: 1, 
    },
    {
        latitude: 29.71382,  
        longitude: -95.571376, 
        weight: 1, 
    },
    {
        latitude: 29.742077,  
        longitude: -95.470738, 
        weight: 1, 
    },
    {
        latitude: 29.775761,  
        longitude: -95.220355, 
        weight: 1, 
    },
    {
        latitude: 29.723976,  
        longitude: -95.530403, 
        weight: 1, 
    },
    {
        latitude: 29.674677,  
        longitude: -95.450842, 
        weight: 1, 
    },
    {
        latitude: 29.746225,  
        longitude: -95.614495, 
        weight: 1, 
    },
    {
        latitude: 29.779701,  
        longitude: -95.218579, 
        weight: 1, 
    },
    {
        latitude: 29.64388,  
        longitude: -95.336898, 
        weight: 1, 
    },
    {
        latitude: 29.648111,  
        longitude: -95.248944, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.840542,  
        longitude: -95.318835, 
        weight: 1, 
    },
    {
        latitude: 29.840542,  
        longitude: -95.318835, 
        weight: 1, 
    },
    {
        latitude: 29.840542,  
        longitude: -95.318835, 
        weight: 1, 
    },
    {
        latitude: 29.6551,  
        longitude: -95.252608, 
        weight: 1, 
    },
    {
        latitude: 29.61214,  
        longitude: -95.223115, 
        weight: 1, 
    },
    {
        latitude: 29.822055,  
        longitude: -95.338405, 
        weight: 1, 
    },
    {
        latitude: 29.744511,  
        longitude: -95.387229, 
        weight: 1, 
    },
    {
        latitude: 29.744511,  
        longitude: -95.387229, 
        weight: 1, 
    },
    {
        latitude: 29.741393,  
        longitude: -95.410729, 
        weight: 1, 
    },
    {
        latitude: 29.741831,  
        longitude: -95.410737, 
        weight: 1, 
    },
    {
        latitude: 29.742003,  
        longitude: -95.410741, 
        weight: 1, 
    },
    {
        latitude: 29.742224,  
        longitude: -95.391209, 
        weight: 1, 
    },
    {
        latitude: 29.802714,  
        longitude: -95.218902, 
        weight: 1, 
    },
    {
        latitude: 29.673365,  
        longitude: -95.399773, 
        weight: 1, 
    },
    {
        latitude: 29.673365,  
        longitude: -95.399773, 
        weight: 1, 
    },
    {
        latitude: 29.863129,  
        longitude: -95.421804, 
        weight: 1, 
    },
    {
        latitude: 29.863129,  
        longitude: -95.421804, 
        weight: 1, 
    },
    {
        latitude: 29.773665,  
        longitude: -95.214532, 
        weight: 1, 
    },
    {
        latitude: 29.740515,  
        longitude: -95.410722, 
        weight: 1, 
    },
    {
        latitude: 29.840542,  
        longitude: -95.318835, 
        weight: 1, 
    },
    {
        latitude: 29.728898,  
        longitude: -95.528684, 
        weight: 1, 
    },
    {
        latitude: 29.555697,  
        longitude: -95.150377, 
        weight: 1, 
    },
    {
        latitude: 29.685336,  
        longitude: -95.356102, 
        weight: 1, 
    },
    {
        latitude: 29.812648,  
        longitude: -95.460611, 
        weight: 1, 
    },
    {
        latitude: 29.733644,  
        longitude: -95.598384, 
        weight: 1, 
    },
    {
        latitude: 29.659916,  
        longitude: -95.368045, 
        weight: 1, 
    },
    {
        latitude: 29.680828,  
        longitude: -95.559543, 
        weight: 1, 
    },
    {
        latitude: 29.648989,  
        longitude: -95.249504, 
        weight: 1, 
    },
    {
        latitude: 29.784118,  
        longitude: -95.579463, 
        weight: 1, 
    },
    {
        latitude: 29.784118,  
        longitude: -95.579463, 
        weight: 1, 
    },
    {
        latitude: 29.679309,  
        longitude: -95.367118, 
        weight: 1, 
    },
    {
        latitude: 29.679309,  
        longitude: -95.367118, 
        weight: 1, 
    },
    {
        latitude: 29.824453,  
        longitude: -95.31237, 
        weight: 1, 
    },
    {
        latitude: 29.616625,  
        longitude: -95.358814, 
        weight: 1, 
    },
    {
        latitude: 29.867396,  
        longitude: -95.300556, 
        weight: 1, 
    },
    {
        latitude: 29.703696,  
        longitude: -95.40281, 
        weight: 1, 
    },
    {
        latitude: 29.694738,  
        longitude: -95.493001, 
        weight: 1, 
    },
    {
        latitude: 29.71489,  
        longitude: -95.604669, 
        weight: 1, 
    },
    {
        latitude: 29.698829,  
        longitude: -95.27644, 
        weight: 1, 
    },
    {
        latitude: 29.717881,  
        longitude: -95.529142, 
        weight: 1, 
    },
    {
        latitude: 29.717881,  
        longitude: -95.529142, 
        weight: 1, 
    },
    {
        latitude: 29.637906,  
        longitude: -95.397068, 
        weight: 1, 
    },
    {
        latitude: 29.847944,  
        longitude: -95.457445, 
        weight: 1, 
    },
    {
        latitude: 29.802714,  
        longitude: -95.218902, 
        weight: 1, 
    },
    {
        latitude: 29.802714,  
        longitude: -95.218902, 
        weight: 1, 
    },
    {
        latitude: 29.806568,  
        longitude: -95.52603, 
        weight: 1, 
    },
    {
        latitude: 29.778959,  
        longitude: -95.617933, 
        weight: 1, 
    },
    {
        latitude: 29.677061,  
        longitude: -95.46822, 
        weight: 1, 
    },
    {
        latitude: 29.793238,  
        longitude: -95.322878, 
        weight: 1, 
    },
    {
        latitude: 29.946187,  
        longitude: -95.427084, 
        weight: 1, 
    },
    {
        latitude: 29.673066,  
        longitude: -95.376636, 
        weight: 1, 
    },
    {
        latitude: 29.827313,  
        longitude: -95.481943, 
        weight: 1, 
    },
    {
        latitude: 29.742229,  
        longitude: -95.305881, 
        weight: 1, 
    },
    {
        latitude: 29.654007,  
        longitude: -95.479888, 
        weight: 1, 
    },
    {
        latitude: 29.950629,  
        longitude: -95.395134, 
        weight: 1, 
    },
    {
        latitude: 29.734681,  
        longitude: -95.418692, 
        weight: 1, 
    },
    {
        latitude: 29.682908,  
        longitude: -95.395567, 
        weight: 1, 
    },
    {
        latitude: 29.7374,  
        longitude: -95.521275, 
        weight: 1, 
    },
    {
        latitude: 29.801006,  
        longitude: -95.569846, 
        weight: 1, 
    },
    {
        latitude: 29.684704,  
        longitude: -95.562711, 
        weight: 1, 
    },
    {
        latitude: 29.704506,  
        longitude: -95.480439, 
        weight: 1, 
    },
    {
        latitude: 29.84527,  
        longitude: -95.258103, 
        weight: 1, 
    },
    {
        latitude: 29.617906,  
        longitude: -95.219666, 
        weight: 1, 
    },
    {
        latitude: 29.703759,  
        longitude: -95.298747, 
        weight: 1, 
    },
    {
        latitude: 29.757648,  
        longitude: -95.362429, 
        weight: 1, 
    },
    {
        latitude: 29.818344,  
        longitude: -95.436648, 
        weight: 1, 
    },
    {
        latitude: 29.818344,  
        longitude: -95.436648, 
        weight: 1, 
    },
    {
        latitude: 29.693438,  
        longitude: -95.48572, 
        weight: 1, 
    },
    {
        latitude: 29.701767,  
        longitude: -95.416674, 
        weight: 1, 
    },
    {
        latitude: 29.668812,  
        longitude: -95.623208, 
        weight: 1, 
    },
    {
        latitude: 29.851918,  
        longitude: -95.377876, 
        weight: 1, 
    },
    {
        latitude: 29.953272,  
        longitude: -95.559787, 
        weight: 1, 
    },
    {
        latitude: 29.841887,  
        longitude: -95.383578, 
        weight: 1, 
    },
    {
        latitude: 29.754919,  
        longitude: -95.452012, 
        weight: 1, 
    },
    {
        latitude: 29.755872,  
        longitude: -95.639688, 
        weight: 1, 
    },
    {
        latitude: 29.829526,  
        longitude: -95.485006, 
        weight: 1, 
    },
    {
        latitude: 29.656998,  
        longitude: -95.499662, 
        weight: 1, 
    },
    {
        latitude: 29.778435,  
        longitude: -95.315117, 
        weight: 1, 
    },
    {
        latitude: 29.839683,  
        longitude: -95.455357, 
        weight: 1, 
    },
    {
        latitude: 29.732229,  
        longitude: -95.543115, 
        weight: 1, 
    },
    {
        latitude: 29.731848,  
        longitude: -95.434513, 
        weight: 1, 
    },
    {
        latitude: 29.682233,  
        longitude: -95.485394, 
        weight: 1, 
    },
    {
        latitude: 29.801562,  
        longitude: -95.446631, 
        weight: 1, 
    },
    {
        latitude: 29.589347,  
        longitude: -95.479083, 
        weight: 1, 
    },
    {
        latitude: 29.708331,  
        longitude: -95.509204, 
        weight: 1, 
    },
    {
        latitude: 29.797158,  
        longitude: -95.320489, 
        weight: 1, 
    },
    {
        latitude: 29.868097,  
        longitude: -95.288815, 
        weight: 1, 
    },
    {
        latitude: 29.640463,  
        longitude: -95.463578, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.706467,  
        longitude: -95.488815, 
        weight: 1, 
    },
    {
        latitude: 29.939008,  
        longitude: -95.311873, 
        weight: 1, 
    },
    {
        latitude: 29.78743,  
        longitude: -95.352023, 
        weight: 1, 
    },
    {
        latitude: 29.78743,  
        longitude: -95.352023, 
        weight: 1, 
    },
    {
        latitude: 29.850872,  
        longitude: -95.252211, 
        weight: 1, 
    },
    {
        latitude: 29.764952,  
        longitude: -95.371162, 
        weight: 1, 
    },
    {
        latitude: 29.793015,  
        longitude: -95.315353, 
        weight: 1, 
    },
    {
        latitude: 29.793015,  
        longitude: -95.315353, 
        weight: 1, 
    },
    {
        latitude: 29.793015,  
        longitude: -95.315353, 
        weight: 1, 
    },
    {
        latitude: 29.761556,  
        longitude: -95.422845, 
        weight: 1, 
    },
    {
        latitude: 29.850898,  
        longitude: -95.473568, 
        weight: 1, 
    },
    {
        latitude: 29.828549,  
        longitude: -95.3916, 
        weight: 1, 
    },
    {
        latitude: 29.737611,  
        longitude: -95.499532, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.700045,  
        longitude: -95.298057, 
        weight: 1, 
    },
    {
        latitude: 29.782879,  
        longitude: -95.586368, 
        weight: 1, 
    },
    {
        latitude: 29.750977,  
        longitude: -95.364538, 
        weight: 1, 
    },
    {
        latitude: 29.672073,  
        longitude: -95.582991, 
        weight: 1, 
    },
    {
        latitude: 29.767856,  
        longitude: -95.200096, 
        weight: 1, 
    },
    {
        latitude: 29.830966,  
        longitude: -95.443601, 
        weight: 1, 
    },
    {
        latitude: 29.735907,  
        longitude: -95.619586, 
        weight: 1, 
    },
    {
        latitude: 29.668965,  
        longitude: -95.504318, 
        weight: 1, 
    },
    {
        latitude: 29.664084,  
        longitude: -95.281232, 
        weight: 1, 
    },
    {
        latitude: 29.829027,  
        longitude: -95.429634, 
        weight: 1, 
    },
    {
        latitude: 29.858092,  
        longitude: -95.473333, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495186, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495186, 
        weight: 1, 
    },
    {
        latitude: 29.596091,  
        longitude: -95.487142, 
        weight: 1, 
    },
    {
        latitude: 29.675328,  
        longitude: -95.589062, 
        weight: 1, 
    },
    {
        latitude: 29.675328,  
        longitude: -95.589062, 
        weight: 1, 
    },
    {
        latitude: 29.748563,  
        longitude: -95.367458, 
        weight: 1, 
    },
    {
        latitude: 29.710826,  
        longitude: -95.358935, 
        weight: 1, 
    },
    {
        latitude: 29.835171,  
        longitude: -95.384366, 
        weight: 1, 
    },
    {
        latitude: 29.691512,  
        longitude: -95.520552, 
        weight: 1, 
    },
    {
        latitude: 29.815485,  
        longitude: -95.545189, 
        weight: 1, 
    },
    {
        latitude: 29.812068,  
        longitude: -95.380903, 
        weight: 1, 
    },
    {
        latitude: 29.643085,  
        longitude: -95.50831, 
        weight: 1, 
    },
    {
        latitude: 29.68033,  
        longitude: -95.293152, 
        weight: 1, 
    },
    {
        latitude: 29.547667,  
        longitude: -95.100922, 
        weight: 1, 
    },
    {
        latitude: 29.754447,  
        longitude: -95.618541, 
        weight: 1, 
    },
    {
        latitude: 29.754447,  
        longitude: -95.618541, 
        weight: 1, 
    },
    {
        latitude: 29.6157,  
        longitude: -95.306009, 
        weight: 1, 
    },
    {
        latitude: 29.672129,  
        longitude: -95.424778, 
        weight: 1, 
    },
    {
        latitude: 29.873968,  
        longitude: -95.29563, 
        weight: 1, 
    },
    {
        latitude: 29.855511,  
        longitude: -95.416651, 
        weight: 1, 
    },
    {
        latitude: 29.735532,  
        longitude: -95.647398, 
        weight: 1, 
    },
    {
        latitude: 29.801413,  
        longitude: -95.316988, 
        weight: 1, 
    },
    {
        latitude: 29.729052,  
        longitude: -95.335976, 
        weight: 1, 
    },
    {
        latitude: 29.774471,  
        longitude: -95.191575, 
        weight: 1, 
    },
    {
        latitude: 29.774471,  
        longitude: -95.191575, 
        weight: 1, 
    },
    {
        latitude: 29.618223,  
        longitude: -95.234567, 
        weight: 1, 
    },
    {
        latitude: 29.598907,  
        longitude: -95.492527, 
        weight: 1, 
    },
    {
        latitude: 29.598907,  
        longitude: -95.492527, 
        weight: 1, 
    },
    {
        latitude: 29.757361,  
        longitude: -95.392277, 
        weight: 1, 
    },
    {
        latitude: 29.731465,  
        longitude: -95.320853, 
        weight: 1, 
    },
    {
        latitude: 29.866387,  
        longitude: -95.417793, 
        weight: 1, 
    },
    {
        latitude: 29.809914,  
        longitude: -95.317126, 
        weight: 1, 
    },
    {
        latitude: 29.679598,  
        longitude: -95.228851, 
        weight: 1, 
    },
    {
        latitude: 29.727748,  
        longitude: -95.570048, 
        weight: 1, 
    },
    {
        latitude: 29.727748,  
        longitude: -95.570048, 
        weight: 1, 
    },
    {
        latitude: 29.73585,  
        longitude: -95.644087, 
        weight: 1, 
    },
    {
        latitude: 29.701853,  
        longitude: -95.295697, 
        weight: 1, 
    },
    {
        latitude: 29.86176,  
        longitude: -95.505434, 
        weight: 1, 
    },
    {
        latitude: 29.652094,  
        longitude: -95.231308, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.67348,  
        longitude: -95.508605, 
        weight: 1, 
    },
    {
        latitude: 29.720003,  
        longitude: -95.489005, 
        weight: 1, 
    },
    {
        latitude: 29.675217,  
        longitude: -95.58728, 
        weight: 1, 
    },
    {
        latitude: 29.689005,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.704895,  
        longitude: -95.514885, 
        weight: 1, 
    },
    {
        latitude: 29.785984,  
        longitude: -95.409767, 
        weight: 1, 
    },
    {
        latitude: 29.829627,  
        longitude: -95.473195, 
        weight: 1, 
    },
    {
        latitude: 29.736656,  
        longitude: -95.466749, 
        weight: 1, 
    },
    {
        latitude: 29.688914,  
        longitude: -95.585958, 
        weight: 1, 
    },
    {
        latitude: 29.678433,  
        longitude: -95.463646, 
        weight: 1, 
    },
    {
        latitude: 29.715723,  
        longitude: -95.548397, 
        weight: 1, 
    },
    {
        latitude: 29.701195,  
        longitude: -95.279062, 
        weight: 1, 
    },
    {
        latitude: 29.801081,  
        longitude: -95.377246, 
        weight: 1, 
    },
    {
        latitude: 29.780785,  
        longitude: -95.547743, 
        weight: 1, 
    },
    {
        latitude: 29.74108,  
        longitude: -95.623585, 
        weight: 1, 
    },
    {
        latitude: 29.763109,  
        longitude: -95.625363, 
        weight: 1, 
    },
    {
        latitude: 29.70489,  
        longitude: -95.508918, 
        weight: 1, 
    },
    {
        latitude: 29.642801,  
        longitude: -95.438878, 
        weight: 1, 
    },
    {
        latitude: 29.720739,  
        longitude: -95.284387, 
        weight: 1, 
    },
    {
        latitude: 29.923202,  
        longitude: -95.395059, 
        weight: 1, 
    },
    {
        latitude: 29.923202,  
        longitude: -95.395059, 
        weight: 1, 
    },
    {
        latitude: 29.923202,  
        longitude: -95.395059, 
        weight: 1, 
    },
    {
        latitude: 29.923202,  
        longitude: -95.395059, 
        weight: 1, 
    },
    {
        latitude: 29.923202,  
        longitude: -95.395059, 
        weight: 1, 
    },
    {
        latitude: 29.731573,  
        longitude: -95.466783, 
        weight: 1, 
    },
    {
        latitude: 29.731573,  
        longitude: -95.466783, 
        weight: 1, 
    },
    {
        latitude: 29.735508,  
        longitude: -95.588625, 
        weight: 1, 
    },
    {
        latitude: 29.800803,  
        longitude: -95.480731, 
        weight: 1, 
    },
    {
        latitude: 29.841974,  
        longitude: -95.479738, 
        weight: 1, 
    },
    {
        latitude: 29.760278,  
        longitude: -95.351905, 
        weight: 1, 
    },
    {
        latitude: 29.679476,  
        longitude: -95.538655, 
        weight: 1, 
    },
    {
        latitude: 29.719347,  
        longitude: -95.282, 
        weight: 1, 
    },
    {
        latitude: 29.937568,  
        longitude: -95.39766, 
        weight: 1, 
    },
    {
        latitude: 29.674449,  
        longitude: -95.546041, 
        weight: 1, 
    },
    {
        latitude: 29.809787,  
        longitude: -95.524475, 
        weight: 1, 
    },
    {
        latitude: 29.543296,  
        longitude: -95.143887, 
        weight: 1, 
    },
    {
        latitude: 29.699916,  
        longitude: -95.381221, 
        weight: 1, 
    },
    {
        latitude: 29.622667,  
        longitude: -95.382341, 
        weight: 1, 
    },
    {
        latitude: 29.622667,  
        longitude: -95.382341, 
        weight: 1, 
    },
    {
        latitude: 29.738755,  
        longitude: -95.507832, 
        weight: 1, 
    },
    {
        latitude: 29.866087,  
        longitude: -95.53802, 
        weight: 1, 
    },
    {
        latitude: 29.649021,  
        longitude: -95.219334, 
        weight: 1, 
    },
    {
        latitude: 29.837567,  
        longitude: -95.487688, 
        weight: 1, 
    },
    {
        latitude: 29.734668,  
        longitude: -95.598068, 
        weight: 1, 
    },
    {
        latitude: 29.644558,  
        longitude: -95.244, 
        weight: 1, 
    },
    {
        latitude: 29.959743,  
        longitude: -95.556408, 
        weight: 1, 
    },
    {
        latitude: 29.697494,  
        longitude: -95.242917, 
        weight: 1, 
    },
    {
        latitude: 29.811429,  
        longitude: -95.434001, 
        weight: 1, 
    },
    {
        latitude: 29.728899,  
        longitude: -95.528703, 
        weight: 1, 
    },
    {
        latitude: 29.801105,  
        longitude: -95.526695, 
        weight: 1, 
    },
    {
        latitude: 29.842453,  
        longitude: -95.432297, 
        weight: 1, 
    },
    {
        latitude: 29.967237,  
        longitude: -95.326345, 
        weight: 1, 
    },
    {
        latitude: 29.741487,  
        longitude: -95.516733, 
        weight: 1, 
    },
    {
        latitude: 29.861818,  
        longitude: -95.505541, 
        weight: 1, 
    },
    {
        latitude: 29.65215,  
        longitude: -95.258325, 
        weight: 1, 
    },
    {
        latitude: 29.65215,  
        longitude: -95.258325, 
        weight: 1, 
    },
    {
        latitude: 29.712353,  
        longitude: -95.518049, 
        weight: 1, 
    },
    {
        latitude: 29.685342,  
        longitude: -95.484977, 
        weight: 1, 
    },
    {
        latitude: 29.855709,  
        longitude: -95.253938, 
        weight: 1, 
    },
    {
        latitude: 29.866306,  
        longitude: -95.397771, 
        weight: 1, 
    },
    {
        latitude: 29.538704,  
        longitude: -95.146732, 
        weight: 1, 
    },
    {
        latitude: 29.852576,  
        longitude: -95.277308, 
        weight: 1, 
    },
    {
        latitude: 29.843703,  
        longitude: -95.471636, 
        weight: 1, 
    },
    {
        latitude: 29.714,  
        longitude: -95.567431, 
        weight: 1, 
    },
    {
        latitude: 29.66443,  
        longitude: -95.340725, 
        weight: 1, 
    },
    {
        latitude: 29.940066,  
        longitude: -95.331277, 
        weight: 1, 
    },
    {
        latitude: 29.66996,  
        longitude: -95.528174, 
        weight: 1, 
    },
    {
        latitude: 29.841827,  
        longitude: -95.311761, 
        weight: 1, 
    },
    {
        latitude: 29.719899,  
        longitude: -95.363755, 
        weight: 1, 
    },
    {
        latitude: 29.625,  
        longitude: -95.220901, 
        weight: 1, 
    },
    {
        latitude: 29.752343,  
        longitude: -95.623896, 
        weight: 1, 
    },
    {
        latitude: 29.57916,  
        longitude: -95.142264, 
        weight: 1, 
    },
    {
        latitude: 29.81791,  
        longitude: -95.569922, 
        weight: 1, 
    },
    {
        latitude: 29.840344,  
        longitude: -95.4772, 
        weight: 1, 
    },
    {
        latitude: 29.814386,  
        longitude: -95.545194, 
        weight: 1, 
    },
    {
        latitude: 29.802342,  
        longitude: -95.361071, 
        weight: 1, 
    },
    {
        latitude: 29.705147,  
        longitude: -95.521309, 
        weight: 1, 
    },
    {
        latitude: 29.685909,  
        longitude: -95.253886, 
        weight: 1, 
    },
    {
        latitude: 29.841334,  
        longitude: -95.503533, 
        weight: 1, 
    },
    {
        latitude: 29.771814,  
        longitude: -95.214387, 
        weight: 1, 
    },
    {
        latitude: 29.644558,  
        longitude: -95.244, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.987335,  
        longitude: -95.346031, 
        weight: 1, 
    },
    {
        latitude: 29.741719,  
        longitude: -95.442012, 
        weight: 1, 
    },
    {
        latitude: 29.664156,  
        longitude: -95.464016, 
        weight: 1, 
    },
    {
        latitude: 29.755999,  
        longitude: -95.366974, 
        weight: 1, 
    },
    {
        latitude: 29.755999,  
        longitude: -95.366974, 
        weight: 1, 
    },
    {
        latitude: 29.73672,  
        longitude: -95.573851, 
        weight: 1, 
    },
    {
        latitude: 29.6578,  
        longitude: -95.385809, 
        weight: 1, 
    },
    {
        latitude: 29.764429,  
        longitude: -95.277699, 
        weight: 1, 
    },
    {
        latitude: 29.602264,  
        longitude: -95.213055, 
        weight: 1, 
    },
    {
        latitude: 29.72492,  
        longitude: -95.46818, 
        weight: 1, 
    },
    {
        latitude: 29.70247,  
        longitude: -95.346803, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.723477,  
        longitude: -95.480699, 
        weight: 1, 
    },
    {
        latitude: 29.669988,  
        longitude: -95.277035, 
        weight: 1, 
    },
    {
        latitude: 29.685511,  
        longitude: -95.384155, 
        weight: 1, 
    },
    {
        latitude: 29.781811,  
        longitude: -95.230025, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.68913,  
        longitude: -95.461624, 
        weight: 1, 
    },
    {
        latitude: 29.962952,  
        longitude: -95.54495, 
        weight: 1, 
    },
    {
        latitude: 29.736697,  
        longitude: -95.576268, 
        weight: 1, 
    },
    {
        latitude: 29.743157,  
        longitude: -95.625425, 
        weight: 1, 
    },
    {
        latitude: 29.728955,  
        longitude: -95.43004, 
        weight: 1, 
    },
    {
        latitude: 29.784182,  
        longitude: -95.592933, 
        weight: 1, 
    },
    {
        latitude: 29.704817,  
        longitude: -95.551598, 
        weight: 1, 
    },
    {
        latitude: 29.733999,  
        longitude: -95.427001, 
        weight: 1, 
    },
    {
        latitude: 29.649144,  
        longitude: -95.370411, 
        weight: 1, 
    },
    {
        latitude: 29.778839,  
        longitude: -95.195627, 
        weight: 1, 
    },
    {
        latitude: 29.789263,  
        longitude: -95.471289, 
        weight: 1, 
    },
    {
        latitude: 29.649402,  
        longitude: -95.241576, 
        weight: 1, 
    },
    {
        latitude: 29.864342,  
        longitude: -95.394687, 
        weight: 1, 
    },
    {
        latitude: 29.605823,  
        longitude: -95.462725, 
        weight: 1, 
    },
    {
        latitude: 29.605823,  
        longitude: -95.462725, 
        weight: 1, 
    },
    {
        latitude: 29.82051,  
        longitude: -95.444491, 
        weight: 1, 
    },
    {
        latitude: 29.73236,  
        longitude: -95.619649, 
        weight: 1, 
    },
    {
        latitude: 29.626775,  
        longitude: -95.328106, 
        weight: 1, 
    },
    {
        latitude: 29.584036,  
        longitude: -95.51702, 
        weight: 1, 
    },
    {
        latitude: 29.728725,  
        longitude: -95.288853, 
        weight: 1, 
    },
    {
        latitude: 29.803271,  
        longitude: -95.403627, 
        weight: 1, 
    },
    {
        latitude: 29.95756,  
        longitude: -95.544377, 
        weight: 1, 
    },
    {
        latitude: 29.827803,  
        longitude: -95.392061, 
        weight: 1, 
    },
    {
        latitude: 29.85654,  
        longitude: -95.522967, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.942148,  
        longitude: -95.438655, 
        weight: 1, 
    },
    {
        latitude: 29.77368,  
        longitude: -95.202541, 
        weight: 1, 
    },
    {
        latitude: 29.659562,  
        longitude: -95.256478, 
        weight: 1, 
    },
    {
        latitude: 29.845749,  
        longitude: -95.501926, 
        weight: 1, 
    },
    {
        latitude: 29.765598,  
        longitude: -95.334648, 
        weight: 1, 
    },
    {
        latitude: 29.677349,  
        longitude: -95.553518, 
        weight: 1, 
    },
    {
        latitude: 29.609688,  
        longitude: -95.227987, 
        weight: 1, 
    },
    {
        latitude: 29.609688,  
        longitude: -95.227987, 
        weight: 1, 
    },
    {
        latitude: 29.835171,  
        longitude: -95.384366, 
        weight: 1, 
    },
    {
        latitude: 29.675032,  
        longitude: -95.587286, 
        weight: 1, 
    },
    {
        latitude: 29.725831,  
        longitude: -95.369159, 
        weight: 1, 
    },
    {
        latitude: 29.939766,  
        longitude: -95.284169, 
        weight: 1, 
    },
    {
        latitude: 29.939766,  
        longitude: -95.284169, 
        weight: 1, 
    },
    {
        latitude: 29.961373,  
        longitude: -95.424678, 
        weight: 1, 
    },
    {
        latitude: 29.720422,  
        longitude: -95.370847, 
        weight: 1, 
    },
    {
        latitude: 29.728691,  
        longitude: -95.345429, 
        weight: 1, 
    },
    {
        latitude: 29.6651,  
        longitude: -95.52058, 
        weight: 1, 
    },
    {
        latitude: 29.703162,  
        longitude: -95.366245, 
        weight: 1, 
    },
    {
        latitude: 29.803004,  
        longitude: -95.501091, 
        weight: 1, 
    },
    {
        latitude: 29.703946,  
        longitude: -95.368816, 
        weight: 1, 
    },
    {
        latitude: 29.75126,  
        longitude: -95.366859, 
        weight: 1, 
    },
    {
        latitude: 29.75126,  
        longitude: -95.366859, 
        weight: 1, 
    },
    {
        latitude: 29.644095,  
        longitude: -95.509971, 
        weight: 1, 
    },
    {
        latitude: 29.806679,  
        longitude: -95.424405, 
        weight: 1, 
    },
    {
        latitude: 29.631254,  
        longitude: -95.339345, 
        weight: 1, 
    },
    {
        latitude: 29.675009,  
        longitude: -95.30198, 
        weight: 1, 
    },
    {
        latitude: 29.644587,  
        longitude: -95.241089, 
        weight: 1, 
    },
    {
        latitude: 29.63446,  
        longitude: -95.452672, 
        weight: 1, 
    },
    {
        latitude: 29.843513,  
        longitude: -95.342869, 
        weight: 1, 
    },
    {
        latitude: 29.690344,  
        longitude: -95.366391, 
        weight: 1, 
    },
    {
        latitude: 29.851122,  
        longitude: -95.378366, 
        weight: 1, 
    },
    {
        latitude: 29.848118,  
        longitude: -95.322706, 
        weight: 1, 
    },
    {
        latitude: 29.848118,  
        longitude: -95.322706, 
        weight: 1, 
    },
    {
        latitude: 29.654153,  
        longitude: -95.355364, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.606495,  
        longitude: -95.411151, 
        weight: 1, 
    },
    {
        latitude: 29.672953,  
        longitude: -95.420917, 
        weight: 1, 
    },
    {
        latitude: 29.870786,  
        longitude: -95.361199, 
        weight: 1, 
    },
    {
        latitude: 29.705416,  
        longitude: -95.499019, 
        weight: 1, 
    },
    {
        latitude: 29.655815,  
        longitude: -95.288848, 
        weight: 1, 
    },
    {
        latitude: 29.771105,  
        longitude: -95.187641, 
        weight: 1, 
    },
    {
        latitude: 29.666285,  
        longitude: -95.339409, 
        weight: 1, 
    },
    {
        latitude: 29.945052,  
        longitude: -95.331779, 
        weight: 1, 
    },
    {
        latitude: 29.542659,  
        longitude: -95.143232, 
        weight: 1, 
    },
    {
        latitude: 29.684287,  
        longitude: -95.604182, 
        weight: 1, 
    },
    {
        latitude: 29.684287,  
        longitude: -95.604182, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.757252,  
        longitude: -95.342505, 
        weight: 1, 
    },
    {
        latitude: 29.785093,  
        longitude: -95.532926, 
        weight: 1, 
    },
    {
        latitude: 29.75069,  
        longitude: -95.371183, 
        weight: 1, 
    },
    {
        latitude: 29.77135,  
        longitude: -95.22326, 
        weight: 1, 
    },
    {
        latitude: 29.759925,  
        longitude: -95.401756, 
        weight: 1, 
    },
    {
        latitude: 29.785552,  
        longitude: -95.352838, 
        weight: 1, 
    },
    {
        latitude: 29.784233,  
        longitude: -95.602145, 
        weight: 1, 
    },
    {
        latitude: 29.784233,  
        longitude: -95.602145, 
        weight: 1, 
    },
    {
        latitude: 29.599826,  
        longitude: -95.26811, 
        weight: 1, 
    },
    {
        latitude: 29.654153,  
        longitude: -95.355364, 
        weight: 1, 
    },
    {
        latitude: 29.654153,  
        longitude: -95.355364, 
        weight: 1, 
    },
    {
        latitude: 29.654153,  
        longitude: -95.355364, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.729054,  
        longitude: -95.365218, 
        weight: 1, 
    },
    {
        latitude: 29.560379,  
        longitude: -95.143017, 
        weight: 1, 
    },
    {
        latitude: 29.646203,  
        longitude: -95.241154, 
        weight: 1, 
    },
    {
        latitude: 29.824093,  
        longitude: -95.362522, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.538996,  
        longitude: -95.145203, 
        weight: 1, 
    },
    {
        latitude: 29.658437,  
        longitude: -95.255728, 
        weight: 1, 
    },
    {
        latitude: 29.772621,  
        longitude: -95.560775, 
        weight: 1, 
    },
    {
        latitude: 29.636872,  
        longitude: -95.243791, 
        weight: 1, 
    },
    {
        latitude: 29.869918,  
        longitude: -95.397682, 
        weight: 1, 
    },
    {
        latitude: 29.864201,  
        longitude: -95.408943, 
        weight: 1, 
    },
    {
        latitude: 29.603432,  
        longitude: -95.507545, 
        weight: 1, 
    },
    {
        latitude: 29.660813,  
        longitude: -95.257305, 
        weight: 1, 
    },
    {
        latitude: 29.848743,  
        longitude: -95.284896, 
        weight: 1, 
    },
    {
        latitude: 29.810067,  
        longitude: -95.399737, 
        weight: 1, 
    },
    {
        latitude: 29.68962,  
        longitude: -95.51137, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.653956,  
        longitude: -95.355369, 
        weight: 1, 
    },
    {
        latitude: 29.791908,  
        longitude: -95.521772, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.695288,  
        longitude: -95.326947, 
        weight: 1, 
    },
    {
        latitude: 29.695288,  
        longitude: -95.326947, 
        weight: 1, 
    },
    {
        latitude: 29.695288,  
        longitude: -95.326947, 
        weight: 1, 
    },
    {
        latitude: 29.627604,  
        longitude: -95.237852, 
        weight: 1, 
    },
    {
        latitude: 29.665606,  
        longitude: -95.328341, 
        weight: 1, 
    },
    {
        latitude: 29.713649,  
        longitude: -95.484781, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.748162,  
        longitude: -95.618436, 
        weight: 1, 
    },
    {
        latitude: 29.823991,  
        longitude: -95.462981, 
        weight: 1, 
    },
    {
        latitude: 29.823991,  
        longitude: -95.462981, 
        weight: 1, 
    },
    {
        latitude: 29.801904,  
        longitude: -95.263266, 
        weight: 1, 
    },
    {
        latitude: 29.845533,  
        longitude: -95.39241, 
        weight: 1, 
    },
    {
        latitude: 29.722636,  
        longitude: -95.441302, 
        weight: 1, 
    },
    {
        latitude: 29.780995,  
        longitude: -95.536007, 
        weight: 1, 
    },
    {
        latitude: 29.733069,  
        longitude: -95.559784, 
        weight: 1, 
    },
    {
        latitude: 29.852576,  
        longitude: -95.277308, 
        weight: 1, 
    },
    {
        latitude: 29.885322,  
        longitude: -95.456646, 
        weight: 1, 
    },
    {
        latitude: 29.743751,  
        longitude: -95.576292, 
        weight: 1, 
    },
    {
        latitude: 29.715539,  
        longitude: -95.522919, 
        weight: 1, 
    },
    {
        latitude: 29.715539,  
        longitude: -95.522919, 
        weight: 1, 
    },
    {
        latitude: 29.797669,  
        longitude: -95.514354, 
        weight: 1, 
    },
    {
        latitude: 29.648989,  
        longitude: -95.249504, 
        weight: 1, 
    },
    {
        latitude: 29.648989,  
        longitude: -95.249504, 
        weight: 1, 
    },
    {
        latitude: 29.822385,  
        longitude: -95.394694, 
        weight: 1, 
    },
    {
        latitude: 29.700413,  
        longitude: -95.286943, 
        weight: 1, 
    },
    {
        latitude: 29.870763,  
        longitude: -95.331381, 
        weight: 1, 
    },
    {
        latitude: 29.805,  
        longitude: -95.429176, 
        weight: 1, 
    },
    {
        latitude: 29.805,  
        longitude: -95.429176, 
        weight: 1, 
    },
    {
        latitude: 29.731728,  
        longitude: -95.56498, 
        weight: 1, 
    },
    {
        latitude: 29.757252,  
        longitude: -95.342505, 
        weight: 1, 
    },
    {
        latitude: 29.787259,  
        longitude: -95.31466, 
        weight: 1, 
    },
    {
        latitude: 29.714617,  
        longitude: -95.527049, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.828401,  
        longitude: -95.372927, 
        weight: 1, 
    },
    {
        latitude: 29.636598,  
        longitude: -95.428849, 
        weight: 1, 
    },
    {
        latitude: 29.770273,  
        longitude: -95.385558, 
        weight: 1, 
    },
    {
        latitude: 29.804267,  
        longitude: -95.524313, 
        weight: 1, 
    },
    {
        latitude: 29.661493,  
        longitude: -95.354234, 
        weight: 1, 
    },
    {
        latitude: 29.594427,  
        longitude: -95.171162, 
        weight: 1, 
    },
    {
        latitude: 29.723976,  
        longitude: -95.530403, 
        weight: 1, 
    },
    {
        latitude: 29.685909,  
        longitude: -95.253886, 
        weight: 1, 
    },
    {
        latitude: 29.652128,  
        longitude: -95.256149, 
        weight: 1, 
    },
    {
        latitude: 29.781396,  
        longitude: -95.409174, 
        weight: 1, 
    },
    {
        latitude: 29.781396,  
        longitude: -95.409174, 
        weight: 1, 
    },
    {
        latitude: 29.637412,  
        longitude: -95.352745, 
        weight: 1, 
    },
    {
        latitude: 29.691058,  
        longitude: -95.535123, 
        weight: 1, 
    },
    {
        latitude: 29.744653,  
        longitude: -95.368293, 
        weight: 1, 
    },
    {
        latitude: 30.001531,  
        longitude: -95.281432, 
        weight: 1, 
    },
    {
        latitude: 30.001531,  
        longitude: -95.281432, 
        weight: 1, 
    },
    {
        latitude: 29.720607,  
        longitude: -95.261967, 
        weight: 1, 
    },
    {
        latitude: 29.962952,  
        longitude: -95.54495, 
        weight: 1, 
    },
    {
        latitude: 29.737259,  
        longitude: -95.533173, 
        weight: 1, 
    },
    {
        latitude: 29.675496,  
        longitude: -95.546066, 
        weight: 1, 
    },
    {
        latitude: 29.73655,  
        longitude: -95.586346, 
        weight: 1, 
    },
    {
        latitude: 29.939371,  
        longitude: -95.395969, 
        weight: 1, 
    },
    {
        latitude: 29.9633,  
        longitude: -95.544285, 
        weight: 1, 
    },
    {
        latitude: 29.748972,  
        longitude: -95.356036, 
        weight: 1, 
    },
    {
        latitude: 29.748972,  
        longitude: -95.356036, 
        weight: 1, 
    },
    {
        latitude: 29.547579,  
        longitude: -95.101179, 
        weight: 1, 
    },
    {
        latitude: 29.547667,  
        longitude: -95.100922, 
        weight: 1, 
    },
    {
        latitude: 29.642689,  
        longitude: -95.54488, 
        weight: 1, 
    },
    {
        latitude: 29.642689,  
        longitude: -95.54488, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.85247,  
        longitude: -95.504642, 
        weight: 1, 
    },
    {
        latitude: 29.637644,  
        longitude: -95.397074, 
        weight: 1, 
    },
    {
        latitude: 29.685296,  
        longitude: -95.396043, 
        weight: 1, 
    },
    {
        latitude: 29.729287,  
        longitude: -95.650956, 
        weight: 1, 
    },
    {
        latitude: 29.699994,  
        longitude: -95.492979, 
        weight: 1, 
    },
    {
        latitude: 29.647706,  
        longitude: -95.219097, 
        weight: 1, 
    },
    {
        latitude: 29.790595,  
        longitude: -95.404509, 
        weight: 1, 
    },
    {
        latitude: 29.65739,  
        longitude: -95.254108, 
        weight: 1, 
    },
    {
        latitude: 29.778608,  
        longitude: -95.351341, 
        weight: 1, 
    },
    {
        latitude: 29.736071,  
        longitude: -95.610927, 
        weight: 1, 
    },
    {
        latitude: 29.736071,  
        longitude: -95.610927, 
        weight: 1, 
    },
    {
        latitude: 29.884598,  
        longitude: -95.412388, 
        weight: 1, 
    },
    {
        latitude: 29.743332,  
        longitude: -95.320699, 
        weight: 1, 
    },
    {
        latitude: 29.682161,  
        longitude: -95.417374, 
        weight: 1, 
    },
    {
        latitude: 29.682161,  
        longitude: -95.417374, 
        weight: 1, 
    },
    {
        latitude: 29.748968,  
        longitude: -95.392028, 
        weight: 1, 
    },
    {
        latitude: 29.61948,  
        longitude: -95.24206, 
        weight: 1, 
    },
    {
        latitude: 29.74505,  
        longitude: -95.324638, 
        weight: 1, 
    },
    {
        latitude: 29.844176,  
        longitude: -95.299481, 
        weight: 1, 
    },
    {
        latitude: 29.735859,  
        longitude: -95.624476, 
        weight: 1, 
    },
    {
        latitude: 29.851873,  
        longitude: -95.300512, 
        weight: 1, 
    },
    {
        latitude: 29.679506,  
        longitude: -95.285099, 
        weight: 1, 
    },
    {
        latitude: 29.602702,  
        longitude: -95.248517, 
        weight: 1, 
    },
    {
        latitude: 29.711562,  
        longitude: -95.493596, 
        weight: 1, 
    },
    {
        latitude: 29.850836,  
        longitude: -95.272523, 
        weight: 1, 
    },
    {
        latitude: 29.671438,  
        longitude: -95.554941, 
        weight: 1, 
    },
    {
        latitude: 29.7813,  
        longitude: -95.35958, 
        weight: 1, 
    },
    {
        latitude: 29.602702,  
        longitude: -95.248517, 
        weight: 1, 
    },
    {
        latitude: 29.768914,  
        longitude: -95.333823, 
        weight: 1, 
    },
    {
        latitude: 29.941149,  
        longitude: -95.408341, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.793318,  
        longitude: -95.579585, 
        weight: 1, 
    },
    {
        latitude: 29.87282,  
        longitude: -95.496404, 
        weight: 1, 
    },
    {
        latitude: 29.627608,  
        longitude: -95.23752, 
        weight: 1, 
    },
    {
        latitude: 29.672944,  
        longitude: -95.551103, 
        weight: 1, 
    },
    {
        latitude: 29.672944,  
        longitude: -95.551103, 
        weight: 1, 
    },
    {
        latitude: 29.957485,  
        longitude: -95.541999, 
        weight: 1, 
    },
    {
        latitude: 29.711776,  
        longitude: -95.556272, 
        weight: 1, 
    },
    {
        latitude: 29.711776,  
        longitude: -95.556272, 
        weight: 1, 
    },
    {
        latitude: 29.795538,  
        longitude: -95.428536, 
        weight: 1, 
    },
    {
        latitude: 29.756142,  
        longitude: -95.457696, 
        weight: 1, 
    },
    {
        latitude: 29.867104,  
        longitude: -95.445012, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.722131,  
        longitude: -95.391692, 
        weight: 1, 
    },
    {
        latitude: 29.722131,  
        longitude: -95.391692, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.819273,  
        longitude: -95.477249, 
        weight: 1, 
    },
    {
        latitude: 29.689022,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.946082,  
        longitude: -95.439826, 
        weight: 1, 
    },
    {
        latitude: 29.659183,  
        longitude: -95.510273, 
        weight: 1, 
    },
    {
        latitude: 29.659183,  
        longitude: -95.510273, 
        weight: 1, 
    },
    {
        latitude: 29.7324,  
        longitude: -95.360165, 
        weight: 1, 
    },
    {
        latitude: 29.678591,  
        longitude: -95.426713, 
        weight: 1, 
    },
    {
        latitude: 29.688923,  
        longitude: -95.584931, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.735221,  
        longitude: -95.548631, 
        weight: 1, 
    },
    {
        latitude: 29.688923,  
        longitude: -95.584931, 
        weight: 1, 
    },
    {
        latitude: 30.084642,  
        longitude: -95.179927, 
        weight: 1, 
    },
    {
        latitude: 29.780264,  
        longitude: -95.477663, 
        weight: 1, 
    },
    {
        latitude: 29.794264,  
        longitude: -95.541757, 
        weight: 1, 
    },
    {
        latitude: 29.781661,  
        longitude: -95.345794, 
        weight: 1, 
    },
    {
        latitude: 29.779833,  
        longitude: -95.64497, 
        weight: 1, 
    },
    {
        latitude: 29.833834,  
        longitude: -95.333673, 
        weight: 1, 
    },
    {
        latitude: 29.64736,  
        longitude: -95.22175, 
        weight: 1, 
    },
    {
        latitude: 29.794997,  
        longitude: -95.342102, 
        weight: 1, 
    },
    {
        latitude: 29.716627,  
        longitude: -95.545723, 
        weight: 1, 
    },
    {
        latitude: 29.696466,  
        longitude: -95.359881, 
        weight: 1, 
    },
    {
        latitude: 29.69984,  
        longitude: -95.574895, 
        weight: 1, 
    },
    {
        latitude: 29.6797,  
        longitude: -95.600762, 
        weight: 1, 
    },
    {
        latitude: 29.798276,  
        longitude: -95.426259, 
        weight: 1, 
    },
    {
        latitude: 29.723915,  
        longitude: -95.311468, 
        weight: 1, 
    },
    {
        latitude: 29.82858,  
        longitude: -95.379729, 
        weight: 1, 
    },
    {
        latitude: 29.671715,  
        longitude: -95.277094, 
        weight: 1, 
    },
    {
        latitude: 29.696217,  
        longitude: -95.353343, 
        weight: 1, 
    },
    {
        latitude: 29.696217,  
        longitude: -95.353343, 
        weight: 1, 
    },
    {
        latitude: 29.654384,  
        longitude: -95.567179, 
        weight: 1, 
    },
    {
        latitude: 29.677952,  
        longitude: -95.477016, 
        weight: 1, 
    },
    {
        latitude: 29.697952,  
        longitude: -95.486895, 
        weight: 1, 
    },
    {
        latitude: 29.829739,  
        longitude: -95.425984, 
        weight: 1, 
    },
    {
        latitude: 29.743345,  
        longitude: -95.309386, 
        weight: 1, 
    },
    {
        latitude: 29.73824,  
        longitude: -95.592698, 
        weight: 1, 
    },
    {
        latitude: 29.695288,  
        longitude: -95.326947, 
        weight: 1, 
    },
    {
        latitude: 29.777605,  
        longitude: -95.357542, 
        weight: 1, 
    },
    {
        latitude: 29.628688,  
        longitude: -95.186911, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.715521,  
        longitude: -95.501089, 
        weight: 1, 
    },
    {
        latitude: 29.688923,  
        longitude: -95.584931, 
        weight: 1, 
    },
    {
        latitude: 29.750683,  
        longitude: -95.354494, 
        weight: 1, 
    },
    {
        latitude: 29.750683,  
        longitude: -95.354494, 
        weight: 1, 
    },
    {
        latitude: 29.767804,  
        longitude: -95.397105, 
        weight: 1, 
    },
    {
        latitude: 29.750009,  
        longitude: -95.355209, 
        weight: 1, 
    },
    {
        latitude: 29.676343,  
        longitude: -95.449463, 
        weight: 1, 
    },
    {
        latitude: 29.923765,  
        longitude: -95.411809, 
        weight: 1, 
    },
    {
        latitude: 29.615988,  
        longitude: -95.445926, 
        weight: 1, 
    },
    {
        latitude: 29.685741,  
        longitude: -95.362698, 
        weight: 1, 
    },
    {
        latitude: 29.742912,  
        longitude: -95.396855, 
        weight: 1, 
    },
    {
        latitude: 29.742912,  
        longitude: -95.396855, 
        weight: 1, 
    },
    {
        latitude: 29.785063,  
        longitude: -95.549659, 
        weight: 1, 
    },
    {
        latitude: 29.659585,  
        longitude: -95.264151, 
        weight: 1, 
    },
    {
        latitude: 29.788141,  
        longitude: -95.483565, 
        weight: 1, 
    },
    {
        latitude: 29.747606,  
        longitude: -95.569379, 
        weight: 1, 
    },
    {
        latitude: 29.743286,  
        longitude: -95.374458, 
        weight: 1, 
    },
    {
        latitude: 29.680442,  
        longitude: -95.42098, 
        weight: 1, 
    },
    {
        latitude: 29.648588,  
        longitude: -95.225155, 
        weight: 1, 
    },
    {
        latitude: 29.67744,  
        longitude: -95.59953, 
        weight: 1, 
    },
    {
        latitude: 29.931742,  
        longitude: -95.404541, 
        weight: 1, 
    },
    {
        latitude: 29.748938,  
        longitude: -95.371179, 
        weight: 1, 
    },
    {
        latitude: 29.849135,  
        longitude: -95.262374, 
        weight: 1, 
    },
    {
        latitude: 29.849135,  
        longitude: -95.262374, 
        weight: 1, 
    },
    {
        latitude: 29.849135,  
        longitude: -95.262374, 
        weight: 1, 
    },
    {
        latitude: 29.824098,  
        longitude: -95.522642, 
        weight: 1, 
    },
    {
        latitude: 29.874115,  
        longitude: -95.42137, 
        weight: 1, 
    },
    {
        latitude: 29.67541,  
        longitude: -95.590317, 
        weight: 1, 
    },
    {
        latitude: 29.776388,  
        longitude: -95.218448, 
        weight: 1, 
    },
    {
        latitude: 29.781085,  
        longitude: -95.45358, 
        weight: 1, 
    },
    {
        latitude: 29.757307,  
        longitude: -95.27399, 
        weight: 1, 
    },
    {
        latitude: 29.774194,  
        longitude: -95.409552, 
        weight: 1, 
    },
    {
        latitude: 29.774194,  
        longitude: -95.409552, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.844355,  
        longitude: -95.473227, 
        weight: 1, 
    },
    {
        latitude: 29.673288,  
        longitude: -95.53408, 
        weight: 1, 
    },
    {
        latitude: 29.792216,  
        longitude: -95.382823, 
        weight: 1, 
    },
    {
        latitude: 29.743751,  
        longitude: -95.576292, 
        weight: 1, 
    },
    {
        latitude: 29.818159,  
        longitude: -95.396113, 
        weight: 1, 
    },
    {
        latitude: 29.806775,  
        longitude: -95.414844, 
        weight: 1, 
    },
    {
        latitude: 29.806775,  
        longitude: -95.414844, 
        weight: 1, 
    },
    {
        latitude: 29.737674,  
        longitude: -95.484275, 
        weight: 1, 
    },
    {
        latitude: 29.737674,  
        longitude: -95.484275, 
        weight: 1, 
    },
    {
        latitude: 29.60602,  
        longitude: -95.449161, 
        weight: 1, 
    },
    {
        latitude: 29.672188,  
        longitude: -95.438427, 
        weight: 1, 
    },
    {
        latitude: 29.801556,  
        longitude: -95.446662, 
        weight: 1, 
    },
    {
        latitude: 29.704253,  
        longitude: -95.474506, 
        weight: 1, 
    },
    {
        latitude: 29.960164,  
        longitude: -95.423961, 
        weight: 1, 
    },
    {
        latitude: 29.791589,  
        longitude: -95.544609, 
        weight: 1, 
    },
    {
        latitude: 29.848221,  
        longitude: -95.503555, 
        weight: 1, 
    },
    {
        latitude: 29.808185,  
        longitude: -95.388159, 
        weight: 1, 
    },
    {
        latitude: 29.730538,  
        longitude: -95.346782, 
        weight: 1, 
    },
    {
        latitude: 29.833837,  
        longitude: -95.384392, 
        weight: 1, 
    },
    {
        latitude: 29.700213,  
        longitude: -95.609589, 
        weight: 1, 
    },
    {
        latitude: 29.675459,  
        longitude: -95.548525, 
        weight: 1, 
    },
    {
        latitude: 29.675459,  
        longitude: -95.548525, 
        weight: 1, 
    },
    {
        latitude: 29.73668,  
        longitude: -95.576316, 
        weight: 1, 
    },
    {
        latitude: 29.709724,  
        longitude: -95.518013, 
        weight: 1, 
    },
    {
        latitude: 29.69118,  
        longitude: -95.504898, 
        weight: 1, 
    },
    {
        latitude: 29.784177,  
        longitude: -95.593346, 
        weight: 1, 
    },
    {
        latitude: 29.703032,  
        longitude: -95.371216, 
        weight: 1, 
    },
    {
        latitude: 29.703032,  
        longitude: -95.371216, 
        weight: 1, 
    },
    {
        latitude: 29.761158,  
        longitude: -95.358914, 
        weight: 1, 
    },
    {
        latitude: 29.676734,  
        longitude: -95.269474, 
        weight: 1, 
    },
    {
        latitude: 29.772928,  
        longitude: -95.380455, 
        weight: 1, 
    },
    {
        latitude: 29.821929,  
        longitude: -95.361183, 
        weight: 1, 
    },
    {
        latitude: 29.746962,  
        longitude: -95.586865, 
        weight: 1, 
    },
    {
        latitude: 29.987347,  
        longitude: -95.35243, 
        weight: 1, 
    },
    {
        latitude: 29.747538,  
        longitude: -95.383926, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.621236,  
        longitude: -95.477296, 
        weight: 1, 
    },
    {
        latitude: 29.703954,  
        longitude: -95.568695, 
        weight: 1, 
    },
    {
        latitude: 29.737406,  
        longitude: -95.518955, 
        weight: 1, 
    },
    {
        latitude: 29.737406,  
        longitude: -95.518955, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.951392,  
        longitude: -95.42223, 
        weight: 1, 
    },
    {
        latitude: 29.854881,  
        longitude: -95.39764, 
        weight: 1, 
    },
    {
        latitude: 29.688611,  
        longitude: -95.419107, 
        weight: 1, 
    },
    {
        latitude: 29.770097,  
        longitude: -95.606722, 
        weight: 1, 
    },
    {
        latitude: 29.670478,  
        longitude: -95.462135, 
        weight: 1, 
    },
    {
        latitude: 29.660064,  
        longitude: -95.272368, 
        weight: 1, 
    },
    {
        latitude: 29.740695,  
        longitude: -95.538351, 
        weight: 1, 
    },
    {
        latitude: 29.602474,  
        longitude: -95.202129, 
        weight: 1, 
    },
    {
        latitude: 29.602474,  
        longitude: -95.202129, 
        weight: 1, 
    },
    {
        latitude: 29.828898,  
        longitude: -95.362461, 
        weight: 1, 
    },
    {
        latitude: 29.700456,  
        longitude: -95.565091, 
        weight: 1, 
    },
    {
        latitude: 30.032881,  
        longitude: -95.172409, 
        weight: 1, 
    },
    {
        latitude: 29.782178,  
        longitude: -95.330992, 
        weight: 1, 
    },
    {
        latitude: 29.7487,  
        longitude: -95.371551, 
        weight: 1, 
    },
    {
        latitude: 29.728384,  
        longitude: -95.544187, 
        weight: 1, 
    },
    {
        latitude: 29.883382,  
        longitude: -95.423935, 
        weight: 1, 
    },
    {
        latitude: 29.709287,  
        longitude: -95.401043, 
        weight: 1, 
    },
    {
        latitude: 29.749073,  
        longitude: -95.360993, 
        weight: 1, 
    },
    {
        latitude: 29.818636,  
        longitude: -95.209882, 
        weight: 1, 
    },
    {
        latitude: 29.781575,  
        longitude: -95.390865, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.714583,  
        longitude: -95.528799, 
        weight: 1, 
    },
    {
        latitude: 29.726823,  
        longitude: -95.371046, 
        weight: 1, 
    },
    {
        latitude: 29.746346,  
        longitude: -95.390644, 
        weight: 1, 
    },
    {
        latitude: 29.947832,  
        longitude: -95.406184, 
        weight: 1, 
    },
    {
        latitude: 29.695127,  
        longitude: -95.366657, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.471073, 
        weight: 1, 
    },
    {
        latitude: 29.658437,  
        longitude: -95.255728, 
        weight: 1, 
    },
    {
        latitude: 29.70666,  
        longitude: -95.505043, 
        weight: 1, 
    },
    {
        latitude: 29.729404,  
        longitude: -95.428591, 
        weight: 1, 
    },
    {
        latitude: 29.689022,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.689022,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.740082,  
        longitude: -95.419387, 
        weight: 1, 
    },
    {
        latitude: 29.734021,  
        longitude: -95.42252, 
        weight: 1, 
    },
    {
        latitude: 29.67458,  
        longitude: -95.576631, 
        weight: 1, 
    },
    {
        latitude: 29.637545,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.725374,  
        longitude: -95.424938, 
        weight: 1, 
    },
    {
        latitude: 29.640607,  
        longitude: -95.495408, 
        weight: 1, 
    },
    {
        latitude: 29.687219,  
        longitude: -95.284259, 
        weight: 1, 
    },
    {
        latitude: 29.669593,  
        longitude: -95.528152, 
        weight: 1, 
    },
    {
        latitude: 29.669593,  
        longitude: -95.528152, 
        weight: 1, 
    },
    {
        latitude: 29.624848,  
        longitude: -95.515513, 
        weight: 1, 
    },
    {
        latitude: 29.619375,  
        longitude: -95.402842, 
        weight: 1, 
    },
    {
        latitude: 29.805897,  
        longitude: -95.502401, 
        weight: 1, 
    },
    {
        latitude: 29.68159,  
        longitude: -95.399788, 
        weight: 1, 
    },
    {
        latitude: 29.68159,  
        longitude: -95.399788, 
        weight: 1, 
    },
    {
        latitude: 29.73486,  
        longitude: -95.358025, 
        weight: 1, 
    },
    {
        latitude: 29.618564,  
        longitude: -95.28528, 
        weight: 1, 
    },
    {
        latitude: 29.659996,  
        longitude: -95.316393, 
        weight: 1, 
    },
    {
        latitude: 29.674909,  
        longitude: -95.582115, 
        weight: 1, 
    },
    {
        latitude: 29.695684,  
        longitude: -95.596024, 
        weight: 1, 
    },
    {
        latitude: 29.641714,  
        longitude: -95.231381, 
        weight: 1, 
    },
    {
        latitude: 29.746805,  
        longitude: -95.501005, 
        weight: 1, 
    },
    {
        latitude: 29.874829,  
        longitude: -95.391284, 
        weight: 1, 
    },
    {
        latitude: 29.613439,  
        longitude: -95.438534, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.883105,  
        longitude: -95.465401, 
        weight: 1, 
    },
    {
        latitude: 29.705996,  
        longitude: -95.593357, 
        weight: 1, 
    },
    {
        latitude: 29.685362,  
        longitude: -95.392394, 
        weight: 1, 
    },
    {
        latitude: 29.688923,  
        longitude: -95.584931, 
        weight: 1, 
    },
    {
        latitude: 29.724305,  
        longitude: -95.38708, 
        weight: 1, 
    },
    {
        latitude: 29.724305,  
        longitude: -95.38708, 
        weight: 1, 
    },
    {
        latitude: 29.724305,  
        longitude: -95.38708, 
        weight: 1, 
    },
    {
        latitude: 29.727221,  
        longitude: -95.327281, 
        weight: 1, 
    },
    {
        latitude: 29.859614,  
        longitude: -95.401648, 
        weight: 1, 
    },
    {
        latitude: 29.859614,  
        longitude: -95.401648, 
        weight: 1, 
    },
    {
        latitude: 29.662162,  
        longitude: -95.588302, 
        weight: 1, 
    },
    {
        latitude: 29.806461,  
        longitude: -95.359747, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.619379,  
        longitude: -95.424462, 
        weight: 1, 
    },
    {
        latitude: 29.737386,  
        longitude: -95.520055, 
        weight: 1, 
    },
    {
        latitude: 29.737386,  
        longitude: -95.520055, 
        weight: 1, 
    },
    {
        latitude: 29.6753,  
        longitude: -95.603663, 
        weight: 1, 
    },
    {
        latitude: 29.741071,  
        longitude: -95.322931, 
        weight: 1, 
    },
    {
        latitude: 29.741071,  
        longitude: -95.322931, 
        weight: 1, 
    },
    {
        latitude: 29.860791,  
        longitude: -95.312642, 
        weight: 1, 
    },
    {
        latitude: 29.717633,  
        longitude: -95.382877, 
        weight: 1, 
    },
    {
        latitude: 29.675712,  
        longitude: -95.528238, 
        weight: 1, 
    },
    {
        latitude: 29.675712,  
        longitude: -95.528238, 
        weight: 1, 
    },
    {
        latitude: 29.610843,  
        longitude: -95.274275, 
        weight: 1, 
    },
    {
        latitude: 29.632949,  
        longitude: -95.456071, 
        weight: 1, 
    },
    {
        latitude: 29.678717,  
        longitude: -95.556144, 
        weight: 1, 
    },
    {
        latitude: 29.689166,  
        longitude: -95.454178, 
        weight: 1, 
    },
    {
        latitude: 29.805,  
        longitude: -95.429176, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.574659,  
        longitude: -95.514974, 
        weight: 1, 
    },
    {
        latitude: 29.761368,  
        longitude: -95.357601, 
        weight: 1, 
    },
    {
        latitude: 29.673469,  
        longitude: -95.508586, 
        weight: 1, 
    },
    {
        latitude: 29.676329,  
        longitude: -95.532596, 
        weight: 1, 
    },
    {
        latitude: 29.750197,  
        longitude: -95.370373, 
        weight: 1, 
    },
    {
        latitude: 29.717739,  
        longitude: -95.512738, 
        weight: 1, 
    },
    {
        latitude: 29.61191,  
        longitude: -95.196936, 
        weight: 1, 
    },
    {
        latitude: 29.737478,  
        longitude: -95.512824, 
        weight: 1, 
    },
    {
        latitude: 29.694289,  
        longitude: -95.529296, 
        weight: 1, 
    },
    {
        latitude: 29.767951,  
        longitude: -95.318767, 
        weight: 1, 
    },
    {
        latitude: 30.065185,  
        longitude: -95.193542, 
        weight: 1, 
    },
    {
        latitude: 29.603224,  
        longitude: -95.193317, 
        weight: 1, 
    },
    {
        latitude: 29.72449,  
        longitude: -95.592127, 
        weight: 1, 
    },
    {
        latitude: 29.70975,  
        longitude: -95.515828, 
        weight: 1, 
    },
    {
        latitude: 29.834033,  
        longitude: -95.481919, 
        weight: 1, 
    },
    {
        latitude: 29.702319,  
        longitude: -95.295233, 
        weight: 1, 
    },
    {
        latitude: 29.875395,  
        longitude: -95.450563, 
        weight: 1, 
    },
    {
        latitude: 29.691016,  
        longitude: -95.484815, 
        weight: 1, 
    },
    {
        latitude: 29.825802,  
        longitude: -95.49503, 
        weight: 1, 
    },
    {
        latitude: 29.696089,  
        longitude: -95.331507, 
        weight: 1, 
    },
    {
        latitude: 29.660883,  
        longitude: -95.257332, 
        weight: 1, 
    },
    {
        latitude: 29.648784,  
        longitude: -95.522597, 
        weight: 1, 
    },
    {
        latitude: 29.666982,  
        longitude: -95.43624, 
        weight: 1, 
    },
    {
        latitude: 29.666982,  
        longitude: -95.43624, 
        weight: 1, 
    },
    {
        latitude: 29.649794,  
        longitude: -95.217073, 
        weight: 1, 
    },
    {
        latitude: 29.705194,  
        longitude: -95.518318, 
        weight: 1, 
    },
    {
        latitude: 29.705194,  
        longitude: -95.518318, 
        weight: 1, 
    },
    {
        latitude: 29.705194,  
        longitude: -95.518318, 
        weight: 1, 
    },
    {
        latitude: 29.744842,  
        longitude: -95.39499, 
        weight: 1, 
    },
    {
        latitude: 29.731829,  
        longitude: -95.54332, 
        weight: 1, 
    },
    {
        latitude: 29.712074,  
        longitude: -95.283352, 
        weight: 1, 
    },
    {
        latitude: 29.609688,  
        longitude: -95.227987, 
        weight: 1, 
    },
    {
        latitude: 29.609688,  
        longitude: -95.227987, 
        weight: 1, 
    },
    {
        latitude: 29.863182,  
        longitude: -95.427717, 
        weight: 1, 
    },
    {
        latitude: 29.834379,  
        longitude: -95.484254, 
        weight: 1, 
    },
    {
        latitude: 29.61928,  
        longitude: -95.242188, 
        weight: 1, 
    },
    {
        latitude: 29.688269,  
        longitude: -95.570729, 
        weight: 1, 
    },
    {
        latitude: 29.648762,  
        longitude: -95.522645, 
        weight: 1, 
    },
    {
        latitude: 29.856769,  
        longitude: -95.47332, 
        weight: 1, 
    },
    {
        latitude: 29.869883,  
        longitude: -95.399253, 
        weight: 1, 
    },
    {
        latitude: 29.70463,  
        longitude: -95.409214, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.531441, 
        weight: 1, 
    },
    {
        latitude: 29.840547,  
        longitude: -95.318008, 
        weight: 1, 
    },
    {
        latitude: 29.691094,  
        longitude: -95.535405, 
        weight: 1, 
    },
    {
        latitude: 29.691094,  
        longitude: -95.535405, 
        weight: 1, 
    },
    {
        latitude: 29.703495,  
        longitude: -95.614677, 
        weight: 1, 
    },
    {
        latitude: 29.737414,  
        longitude: -95.517418, 
        weight: 1, 
    },
    {
        latitude: 29.883919,  
        longitude: -95.440494, 
        weight: 1, 
    },
    {
        latitude: 29.790144,  
        longitude: -95.468068, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.777662,  
        longitude: -95.218511, 
        weight: 1, 
    },
    {
        latitude: 29.728786,  
        longitude: -95.460412, 
        weight: 1, 
    },
    {
        latitude: 29.728786,  
        longitude: -95.460412, 
        weight: 1, 
    },
    {
        latitude: 29.677349,  
        longitude: -95.553518, 
        weight: 1, 
    },
    {
        latitude: 29.692126,  
        longitude: -95.493892, 
        weight: 1, 
    },
    {
        latitude: 29.830054,  
        longitude: -95.361052, 
        weight: 1, 
    },
    {
        latitude: 29.811898,  
        longitude: -95.382005, 
        weight: 1, 
    },
    {
        latitude: 29.749544,  
        longitude: -95.386497, 
        weight: 1, 
    },
    {
        latitude: 29.626679,  
        longitude: -95.346525, 
        weight: 1, 
    },
    {
        latitude: 29.80603,  
        longitude: -95.317072, 
        weight: 1, 
    },
    {
        latitude: 29.819569,  
        longitude: -95.463269, 
        weight: 1, 
    },
    {
        latitude: 29.677854,  
        longitude: -95.532522, 
        weight: 1, 
    },
    {
        latitude: 29.817926,  
        longitude: -95.382373, 
        weight: 1, 
    },
    {
        latitude: 29.730337,  
        longitude: -95.35699, 
        weight: 1, 
    },
    {
        latitude: 29.853598,  
        longitude: -95.513079, 
        weight: 1, 
    },
    {
        latitude: 29.627672,  
        longitude: -95.396697, 
        weight: 1, 
    },
    {
        latitude: 29.717339,  
        longitude: -95.498975, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.635023,  
        longitude: -95.44628, 
        weight: 1, 
    },
    {
        latitude: 29.620802,  
        longitude: -95.221778, 
        weight: 1, 
    },
    {
        latitude: 29.827446,  
        longitude: -95.334776, 
        weight: 1, 
    },
    {
        latitude: 29.725482,  
        longitude: -95.535682, 
        weight: 1, 
    },
    {
        latitude: 29.850348,  
        longitude: -95.53207, 
        weight: 1, 
    },
    {
        latitude: 29.782762,  
        longitude: -95.300026, 
        weight: 1, 
    },
    {
        latitude: 29.803922,  
        longitude: -95.318629, 
        weight: 1, 
    },
    {
        latitude: 29.745257,  
        longitude: -95.506384, 
        weight: 1, 
    },
    {
        latitude: 29.745257,  
        longitude: -95.506384, 
        weight: 1, 
    },
    {
        latitude: 29.745257,  
        longitude: -95.506384, 
        weight: 1, 
    },
    {
        latitude: 29.675068,  
        longitude: -95.570418, 
        weight: 1, 
    },
    {
        latitude: 29.675068,  
        longitude: -95.570418, 
        weight: 1, 
    },
    {
        latitude: 29.689737,  
        longitude: -95.570634, 
        weight: 1, 
    },
    {
        latitude: 29.859614,  
        longitude: -95.401648, 
        weight: 1, 
    },
    {
        latitude: 29.762335,  
        longitude: -95.405243, 
        weight: 1, 
    },
    {
        latitude: 29.708796,  
        longitude: -95.279453, 
        weight: 1, 
    },
    {
        latitude: 29.708796,  
        longitude: -95.279453, 
        weight: 1, 
    },
    {
        latitude: 29.851469,  
        longitude: -95.397447, 
        weight: 1, 
    },
    {
        latitude: 29.702403,  
        longitude: -95.357597, 
        weight: 1, 
    },
    {
        latitude: 29.932467,  
        longitude: -95.299674, 
        weight: 1, 
    },
    {
        latitude: 29.724756,  
        longitude: -95.489118, 
        weight: 1, 
    },
    {
        latitude: 29.779946,  
        longitude: -95.477689, 
        weight: 1, 
    },
    {
        latitude: 29.720178,  
        longitude: -95.62271, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.774623,  
        longitude: -95.397392, 
        weight: 1, 
    },
    {
        latitude: 29.679799,  
        longitude: -95.35588, 
        weight: 1, 
    },
    {
        latitude: 29.814129,  
        longitude: -95.447102, 
        weight: 1, 
    },
    {
        latitude: 29.618193,  
        longitude: -95.422446, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.883224,  
        longitude: -95.289996, 
        weight: 1, 
    },
    {
        latitude: 29.761268,  
        longitude: -95.362793, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.751876,  
        longitude: -95.363823, 
        weight: 1, 
    },
    {
        latitude: 29.938599,  
        longitude: -95.36581, 
        weight: 1, 
    },
    {
        latitude: 29.816921,  
        longitude: -95.553092, 
        weight: 1, 
    },
    {
        latitude: 29.960028,  
        longitude: -95.372091, 
        weight: 1, 
    },
    {
        latitude: 29.835963,  
        longitude: -95.516, 
        weight: 1, 
    },
    {
        latitude: 29.835963,  
        longitude: -95.516, 
        weight: 1, 
    },
    {
        latitude: 29.719546,  
        longitude: -95.610525, 
        weight: 1, 
    },
    {
        latitude: 29.784182,  
        longitude: -95.592933, 
        weight: 1, 
    },
    {
        latitude: 29.782847,  
        longitude: -95.334116, 
        weight: 1, 
    },
    {
        latitude: 29.73793,  
        longitude: -95.475706, 
        weight: 1, 
    },
    {
        latitude: 29.821218,  
        longitude: -95.530849, 
        weight: 1, 
    },
    {
        latitude: 29.821218,  
        longitude: -95.530849, 
        weight: 1, 
    },
    {
        latitude: 29.829389,  
        longitude: -95.38101, 
        weight: 1, 
    },
    {
        latitude: 29.829389,  
        longitude: -95.38101, 
        weight: 1, 
    },
    {
        latitude: 29.672316,  
        longitude: -95.277098, 
        weight: 1, 
    },
    {
        latitude: 29.656619,  
        longitude: -95.528044, 
        weight: 1, 
    },
    {
        latitude: 29.803011,  
        longitude: -95.377269, 
        weight: 1, 
    },
    {
        latitude: 29.63472,  
        longitude: -95.411171, 
        weight: 1, 
    },
    {
        latitude: 29.63472,  
        longitude: -95.411171, 
        weight: 1, 
    },
    {
        latitude: 29.736656,  
        longitude: -95.466749, 
        weight: 1, 
    },
    {
        latitude: 29.9308,  
        longitude: -95.409719, 
        weight: 1, 
    },
    {
        latitude: 29.677935,  
        longitude: -95.423303, 
        weight: 1, 
    },
    {
        latitude: 29.732945,  
        longitude: -95.466697, 
        weight: 1, 
    },
    {
        latitude: 29.950961,  
        longitude: -95.422222, 
        weight: 1, 
    },
    {
        latitude: 29.688923,  
        longitude: -95.584931, 
        weight: 1, 
    },
    {
        latitude: 29.819508,  
        longitude: -95.466023, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.853743,  
        longitude: -95.513328, 
        weight: 1, 
    },
    {
        latitude: 29.864624,  
        longitude: -95.282234, 
        weight: 1, 
    },
    {
        latitude: 29.651135,  
        longitude: -95.505724, 
        weight: 1, 
    },
    {
        latitude: 29.691081,  
        longitude: -95.403032, 
        weight: 1, 
    },
    {
        latitude: 29.688914,  
        longitude: -95.585958, 
        weight: 1, 
    },
    {
        latitude: 29.732706,  
        longitude: -95.41173, 
        weight: 1, 
    },
    {
        latitude: 29.663803,  
        longitude: -95.289022, 
        weight: 1, 
    },
    {
        latitude: 29.706907,  
        longitude: -95.305122, 
        weight: 1, 
    },
    {
        latitude: 29.839461,  
        longitude: -95.522169, 
        weight: 1, 
    },
    {
        latitude: 29.939008,  
        longitude: -95.311873, 
        weight: 1, 
    },
    {
        latitude: 29.835613,  
        longitude: -95.413634, 
        weight: 1, 
    },
    {
        latitude: 29.740998,  
        longitude: -95.51831, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.934874,  
        longitude: -95.411531, 
        weight: 1, 
    },
    {
        latitude: 29.783892,  
        longitude: -95.534082, 
        weight: 1, 
    },
    {
        latitude: 29.848457,  
        longitude: -95.303312, 
        weight: 1, 
    },
    {
        latitude: 29.708023,  
        longitude: -95.346772, 
        weight: 1, 
    },
    {
        latitude: 29.723666,  
        longitude: -95.330627, 
        weight: 1, 
    },
    {
        latitude: 29.855822,  
        longitude: -95.500578, 
        weight: 1, 
    },
    {
        latitude: 29.699491,  
        longitude: -95.441482, 
        weight: 1, 
    },
    {
        latitude: 29.850572,  
        longitude: -95.489693, 
        weight: 1, 
    },
    {
        latitude: 29.615196,  
        longitude: -95.493727, 
        weight: 1, 
    },
    {
        latitude: 29.678294,  
        longitude: -95.510826, 
        weight: 1, 
    },
    {
        latitude: 29.678294,  
        longitude: -95.510826, 
        weight: 1, 
    },
    {
        latitude: 29.682828,  
        longitude: -95.456106, 
        weight: 1, 
    },
    {
        latitude: 29.682828,  
        longitude: -95.456106, 
        weight: 1, 
    },
    {
        latitude: 30.037731,  
        longitude: -95.13699, 
        weight: 1, 
    },
    {
        latitude: 29.854876,  
        longitude: -95.404834, 
        weight: 1, 
    },
    {
        latitude: 29.802766,  
        longitude: -95.563956, 
        weight: 1, 
    },
    {
        latitude: 29.811278,  
        longitude: -95.44529, 
        weight: 1, 
    },
    {
        latitude: 30.001497,  
        longitude: -95.284574, 
        weight: 1, 
    },
    {
        latitude: 29.803098,  
        longitude: -95.317001, 
        weight: 1, 
    },
    {
        latitude: 29.731573,  
        longitude: -95.466783, 
        weight: 1, 
    },
    {
        latitude: 29.701195,  
        longitude: -95.279062, 
        weight: 1, 
    },
    {
        latitude: 29.680641,  
        longitude: -95.29504, 
        weight: 1, 
    },
    {
        latitude: 29.746634,  
        longitude: -95.47308, 
        weight: 1, 
    },
    {
        latitude: 29.687719,  
        longitude: -95.526007, 
        weight: 1, 
    },
    {
        latitude: 29.679797,  
        longitude: -95.342452, 
        weight: 1, 
    },
    {
        latitude: 29.690789,  
        longitude: -95.574654, 
        weight: 1, 
    },
    {
        latitude: 29.737298,  
        longitude: -95.526265, 
        weight: 1, 
    },
    {
        latitude: 29.737298,  
        longitude: -95.526265, 
        weight: 1, 
    },
    {
        latitude: 29.844199,  
        longitude: -95.358952, 
        weight: 1, 
    },
    {
        latitude: 29.665924,  
        longitude: -95.309945, 
        weight: 1, 
    },
    {
        latitude: 29.728902,  
        longitude: -95.528685, 
        weight: 1, 
    },
    {
        latitude: 29.655817,  
        longitude: -95.355403, 
        weight: 1, 
    },
    {
        latitude: 29.882815,  
        longitude: -95.419518, 
        weight: 1, 
    },
    {
        latitude: 29.737335,  
        longitude: -95.524887, 
        weight: 1, 
    },
    {
        latitude: 29.823093,  
        longitude: -95.459329, 
        weight: 1, 
    },
    {
        latitude: 29.727637,  
        longitude: -95.539163, 
        weight: 1, 
    },
    {
        latitude: 29.603667,  
        longitude: -95.254218, 
        weight: 1, 
    },
    {
        latitude: 29.74575,  
        longitude: -95.29798, 
        weight: 1, 
    },
    {
        latitude: 29.607493,  
        longitude: -95.503289, 
        weight: 1, 
    },
    {
        latitude: 29.708732,  
        longitude: -95.51049, 
        weight: 1, 
    },
    {
        latitude: 29.8476,  
        longitude: -95.467499, 
        weight: 1, 
    },
    {
        latitude: 29.725224,  
        longitude: -95.374449, 
        weight: 1, 
    },
    {
        latitude: 29.828377,  
        longitude: -95.378166, 
        weight: 1, 
    },
    {
        latitude: 29.630436,  
        longitude: -95.339348, 
        weight: 1, 
    },
    {
        latitude: 29.665337,  
        longitude: -95.525161, 
        weight: 1, 
    },
    {
        latitude: 29.67208,  
        longitude: -95.577391, 
        weight: 1, 
    },
    {
        latitude: 29.733031,  
        longitude: -95.286921, 
        weight: 1, 
    },
    {
        latitude: 29.741032,  
        longitude: -95.423814, 
        weight: 1, 
    },
    {
        latitude: 29.828831,  
        longitude: -95.509251, 
        weight: 1, 
    },
    {
        latitude: 29.676275,  
        longitude: -95.459108, 
        weight: 1, 
    },
    {
        latitude: 29.863378,  
        longitude: -95.542721, 
        weight: 1, 
    },
    {
        latitude: 29.551203,  
        longitude: -95.157452, 
        weight: 1, 
    },
    {
        latitude: 29.957766,  
        longitude: -95.541661, 
        weight: 1, 
    },
    {
        latitude: 29.843936,  
        longitude: -95.256579, 
        weight: 1, 
    },
    {
        latitude: 29.848868,  
        longitude: -95.494858, 
        weight: 1, 
    },
    {
        latitude: 29.742592,  
        longitude: -95.410514, 
        weight: 1, 
    },
    {
        latitude: 29.781949,  
        longitude: -95.556747, 
        weight: 1, 
    },
    {
        latitude: 29.748052,  
        longitude: -95.403831, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.840999,  
        longitude: -95.420384, 
        weight: 1, 
    },
    {
        latitude: 29.72691,  
        longitude: -95.592447, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.754431,  
        longitude: -95.620989, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.668805,  
        longitude: -95.286326, 
        weight: 1, 
    },
    {
        latitude: 29.621697,  
        longitude: -95.449216, 
        weight: 1, 
    },
    {
        latitude: 29.669648,  
        longitude: -95.529736, 
        weight: 1, 
    },
    {
        latitude: 29.828975,  
        longitude: -95.380824, 
        weight: 1, 
    },
    {
        latitude: 29.74321,  
        longitude: -95.466994, 
        weight: 1, 
    },
    {
        latitude: 29.74321,  
        longitude: -95.466994, 
        weight: 1, 
    },
    {
        latitude: 29.824902,  
        longitude: -95.379634, 
        weight: 1, 
    },
    {
        latitude: 29.684618,  
        longitude: -95.276134, 
        weight: 1, 
    },
    {
        latitude: 29.684618,  
        longitude: -95.276134, 
        weight: 1, 
    },
    {
        latitude: 29.796664,  
        longitude: -95.371327, 
        weight: 1, 
    },
    {
        latitude: 29.698918,  
        longitude: -95.365344, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.658422,  
        longitude: -95.355445, 
        weight: 1, 
    },
    {
        latitude: 29.729219,  
        longitude: -95.359014, 
        weight: 1, 
    },
    {
        latitude: 29.848309,  
        longitude: -95.429078, 
        weight: 1, 
    },
    {
        latitude: 29.675068,  
        longitude: -95.570418, 
        weight: 1, 
    },
    {
        latitude: 29.843076,  
        longitude: -95.494448, 
        weight: 1, 
    },
    {
        latitude: 29.843076,  
        longitude: -95.494448, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.709861,  
        longitude: -95.310419, 
        weight: 1, 
    },
    {
        latitude: 29.785827,  
        longitude: -95.464988, 
        weight: 1, 
    },
    {
        latitude: 29.642112,  
        longitude: -95.24488, 
        weight: 1, 
    },
    {
        latitude: 30.02785,  
        longitude: -95.114136, 
        weight: 1, 
    },
    {
        latitude: 29.688929,  
        longitude: -95.400062, 
        weight: 1, 
    },
    {
        latitude: 29.81093,  
        longitude: -95.502507, 
        weight: 1, 
    },
    {
        latitude: 29.85955,  
        longitude: -95.40213, 
        weight: 1, 
    },
    {
        latitude: 29.678591,  
        longitude: -95.426713, 
        weight: 1, 
    },
    {
        latitude: 29.640802,  
        longitude: -95.52984, 
        weight: 1, 
    },
    {
        latitude: 29.839166,  
        longitude: -95.319932, 
        weight: 1, 
    },
    {
        latitude: 29.687049,  
        longitude: -95.420442, 
        weight: 1, 
    },
    {
        latitude: 29.687049,  
        longitude: -95.420442, 
        weight: 1, 
    },
    {
        latitude: 29.942279,  
        longitude: -95.437976, 
        weight: 1, 
    },
    {
        latitude: 29.808719,  
        longitude: -95.423081, 
        weight: 1, 
    },
    {
        latitude: 29.858054,  
        longitude: -95.421734, 
        weight: 1, 
    },
    {
        latitude: 29.858054,  
        longitude: -95.421734, 
        weight: 1, 
    },
    {
        latitude: 29.729936,  
        longitude: -95.347004, 
        weight: 1, 
    },
    {
        latitude: 29.729936,  
        longitude: -95.347004, 
        weight: 1, 
    },
    {
        latitude: 29.806653,  
        longitude: -95.428077, 
        weight: 1, 
    },
    {
        latitude: 29.584499,  
        longitude: -95.186779, 
        weight: 1, 
    },
    {
        latitude: 29.875532,  
        longitude: -95.29256, 
        weight: 1, 
    },
    {
        latitude: 30.049456,  
        longitude: -95.235113, 
        weight: 1, 
    },
    {
        latitude: 29.778117,  
        longitude: -95.360706, 
        weight: 1, 
    },
    {
        latitude: 29.732809,  
        longitude: -95.358738, 
        weight: 1, 
    },
    {
        latitude: 29.68668,  
        longitude: -95.305004, 
        weight: 1, 
    },
    {
        latitude: 29.715862,  
        longitude: -95.416656, 
        weight: 1, 
    },
    {
        latitude: 29.715862,  
        longitude: -95.416656, 
        weight: 1, 
    },
    {
        latitude: 29.729294,  
        longitude: -95.514779, 
        weight: 1, 
    },
    {
        latitude: 29.737649,  
        longitude: -95.497081, 
        weight: 1, 
    },
    {
        latitude: 29.699753,  
        longitude: -95.535351, 
        weight: 1, 
    },
    {
        latitude: 29.813963,  
        longitude: -95.524546, 
        weight: 1, 
    },
    {
        latitude: 29.9633,  
        longitude: -95.544285, 
        weight: 1, 
    },
    {
        latitude: 29.69143,  
        longitude: -95.528244, 
        weight: 1, 
    },
    {
        latitude: 29.784439,  
        longitude: -95.652515, 
        weight: 1, 
    },
    {
        latitude: 29.733375,  
        longitude: -95.41866, 
        weight: 1, 
    },
    {
        latitude: 29.559343,  
        longitude: -95.144571, 
        weight: 1, 
    },
    {
        latitude: 29.70232,  
        longitude: -95.476209, 
        weight: 1, 
    },
    {
        latitude: 29.70232,  
        longitude: -95.476209, 
        weight: 1, 
    },
    {
        latitude: 29.669799,  
        longitude: -95.569825, 
        weight: 1, 
    },
    {
        latitude: 29.737251,  
        longitude: -95.53479, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.776867,  
        longitude: -95.580568, 
        weight: 1, 
    },
    {
        latitude: 29.817249,  
        longitude: -95.432967, 
        weight: 1, 
    },
    {
        latitude: 29.909068,  
        longitude: -95.410247, 
        weight: 1, 
    },
    {
        latitude: 29.7762,  
        longitude: -95.618528, 
        weight: 1, 
    },
    {
        latitude: 29.845455,  
        longitude: -95.397215, 
        weight: 1, 
    },
    {
        latitude: 29.673795,  
        longitude: -95.577354, 
        weight: 1, 
    },
    {
        latitude: 29.554487,  
        longitude: -95.154601, 
        weight: 1, 
    },
    {
        latitude: 29.688284,  
        longitude: -95.570243, 
        weight: 1, 
    },
    {
        latitude: 29.688284,  
        longitude: -95.570243, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508296, 
        weight: 1, 
    },
    {
        latitude: 29.601402,  
        longitude: -95.465062, 
        weight: 1, 
    },
    {
        latitude: 29.601402,  
        longitude: -95.465062, 
        weight: 1, 
    },
    {
        latitude: 29.707126,  
        longitude: -95.55259, 
        weight: 1, 
    },
    {
        latitude: 29.784362,  
        longitude: -95.649626, 
        weight: 1, 
    },
    {
        latitude: 29.870763,  
        longitude: -95.331381, 
        weight: 1, 
    },
    {
        latitude: 29.870763,  
        longitude: -95.331381, 
        weight: 1, 
    },
    {
        latitude: 29.732246,  
        longitude: -95.559766, 
        weight: 1, 
    },
    {
        latitude: 29.63694,  
        longitude: -95.491575, 
        weight: 1, 
    },
    {
        latitude: 29.63694,  
        longitude: -95.491575, 
        weight: 1, 
    },
    {
        latitude: 29.652584,  
        longitude: -95.502067, 
        weight: 1, 
    },
    {
        latitude: 29.863462,  
        longitude: -95.457856, 
        weight: 1, 
    },
    {
        latitude: 29.72665,  
        longitude: -95.46817, 
        weight: 1, 
    },
    {
        latitude: 29.737935,  
        longitude: -95.461869, 
        weight: 1, 
    },
    {
        latitude: 29.797115,  
        longitude: -95.316902, 
        weight: 1, 
    },
    {
        latitude: 29.649198,  
        longitude: -95.56614, 
        weight: 1, 
    },
    {
        latitude: 29.671912,  
        longitude: -95.277095, 
        weight: 1, 
    },
    {
        latitude: 29.75069,  
        longitude: -95.371183, 
        weight: 1, 
    },
    {
        latitude: 29.771547,  
        longitude: -95.227431, 
        weight: 1, 
    },
    {
        latitude: 29.703225,  
        longitude: -95.418337, 
        weight: 1, 
    },
    {
        latitude: 29.708588,  
        longitude: -95.56035, 
        weight: 1, 
    },
    {
        latitude: 29.888997,  
        longitude: -95.487918, 
        weight: 1, 
    },
    {
        latitude: 29.888997,  
        longitude: -95.487918, 
        weight: 1, 
    },
    {
        latitude: 29.928741,  
        longitude: -95.325587, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.930965,  
        longitude: -95.300271, 
        weight: 1, 
    },
    {
        latitude: 29.930965,  
        longitude: -95.300271, 
        weight: 1, 
    },
    {
        latitude: 29.726186,  
        longitude: -95.385473, 
        weight: 1, 
    },
    {
        latitude: 29.679537,  
        longitude: -95.393702, 
        weight: 1, 
    },
    {
        latitude: 29.775135,  
        longitude: -95.299648, 
        weight: 1, 
    },
    {
        latitude: 29.775135,  
        longitude: -95.299648, 
        weight: 1, 
    },
    {
        latitude: 29.946384,  
        longitude: -95.404789, 
        weight: 1, 
    },
    {
        latitude: 29.855525,  
        longitude: -95.260902, 
        weight: 1, 
    },
    {
        latitude: 29.768471,  
        longitude: -95.391903, 
        weight: 1, 
    },
    {
        latitude: 29.742592,  
        longitude: -95.410514, 
        weight: 1, 
    },
    {
        latitude: 29.845086,  
        longitude: -95.563366, 
        weight: 1, 
    },
    {
        latitude: 29.720051,  
        longitude: -95.484848, 
        weight: 1, 
    },
    {
        latitude: 29.848933,  
        longitude: -95.47686, 
        weight: 1, 
    },
    {
        latitude: 29.773861,  
        longitude: -95.315575, 
        weight: 1, 
    },
    {
        latitude: 29.711599,  
        longitude: -95.56741, 
        weight: 1, 
    },
    {
        latitude: 29.776192,  
        longitude: -95.621331, 
        weight: 1, 
    },
    {
        latitude: 29.699728,  
        longitude: -95.296785, 
        weight: 1, 
    },
    {
        latitude: 29.651183,  
        longitude: -95.463846, 
        weight: 1, 
    },
    {
        latitude: 29.829347,  
        longitude: -95.334626, 
        weight: 1, 
    },
    {
        latitude: 29.724305,  
        longitude: -95.38708, 
        weight: 1, 
    },
    {
        latitude: 29.802831,  
        longitude: -95.406485, 
        weight: 1, 
    },
    {
        latitude: 29.704089,  
        longitude: -95.565419, 
        weight: 1, 
    },
    {
        latitude: 29.615158,  
        longitude: -95.37722, 
        weight: 1, 
    },
    {
        latitude: 29.848902,  
        longitude: -95.50888, 
        weight: 1, 
    },
    {
        latitude: 29.739549,  
        longitude: -95.577865, 
        weight: 1, 
    },
    {
        latitude: 29.835772,  
        longitude: -95.34816, 
        weight: 1, 
    },
    {
        latitude: 29.82473,  
        longitude: -95.342568, 
        weight: 1, 
    },
    {
        latitude: 29.81262,  
        longitude: -95.322513, 
        weight: 1, 
    },
    {
        latitude: 29.717722,  
        longitude: -95.522707, 
        weight: 1, 
    },
    {
        latitude: 29.645333,  
        longitude: -95.355851, 
        weight: 1, 
    },
    {
        latitude: 29.72416,  
        longitude: -95.378278, 
        weight: 1, 
    },
    {
        latitude: 29.847027,  
        longitude: -95.506253, 
        weight: 1, 
    },
    {
        latitude: 29.848902,  
        longitude: -95.50888, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.831609,  
        longitude: -95.464726, 
        weight: 1, 
    },
    {
        latitude: 29.689005,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.687795,  
        longitude: -95.349156, 
        weight: 1, 
    },
    {
        latitude: 29.743379,  
        longitude: -95.50517, 
        weight: 1, 
    },
    {
        latitude: 29.763877,  
        longitude: -95.459787, 
        weight: 1, 
    },
    {
        latitude: 29.727773,  
        longitude: -95.643953, 
        weight: 1, 
    },
    {
        latitude: 29.731573,  
        longitude: -95.466783, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.647041,  
        longitude: -95.288662, 
        weight: 1, 
    },
    {
        latitude: 29.961022,  
        longitude: -95.29807, 
        weight: 1, 
    },
    {
        latitude: 29.831003,  
        longitude: -95.318743, 
        weight: 1, 
    },
    {
        latitude: 29.831003,  
        longitude: -95.318743, 
        weight: 1, 
    },
    {
        latitude: 29.853055,  
        longitude: -95.26238, 
        weight: 1, 
    },
    {
        latitude: 29.815357,  
        longitude: -95.542106, 
        weight: 1, 
    },
    {
        latitude: 29.815357,  
        longitude: -95.542106, 
        weight: 1, 
    },
    {
        latitude: 29.797177,  
        longitude: -95.367745, 
        weight: 1, 
    },
    {
        latitude: 29.646958,  
        longitude: -95.212558, 
        weight: 1, 
    },
    {
        latitude: 29.619055,  
        longitude: -95.503421, 
        weight: 1, 
    },
    {
        latitude: 29.759564,  
        longitude: -95.398148, 
        weight: 1, 
    },
    {
        latitude: 29.950592,  
        longitude: -95.399125, 
        weight: 1, 
    },
    {
        latitude: 29.850872,  
        longitude: -95.252211, 
        weight: 1, 
    },
    {
        latitude: 29.850872,  
        longitude: -95.252211, 
        weight: 1, 
    },
    {
        latitude: 29.754932,  
        longitude: -95.334869, 
        weight: 1, 
    },
    {
        latitude: 29.715215,  
        longitude: -95.575687, 
        weight: 1, 
    },
    {
        latitude: 29.853055,  
        longitude: -95.26238, 
        weight: 1, 
    },
    {
        latitude: 29.738542,  
        longitude: -95.579306, 
        weight: 1, 
    },
    {
        latitude: 29.725921,  
        longitude: -95.504373, 
        weight: 1, 
    },
    {
        latitude: 29.701482,  
        longitude: -95.359552, 
        weight: 1, 
    },
    {
        latitude: 29.735505,  
        longitude: -95.357525, 
        weight: 1, 
    },
    {
        latitude: 29.735505,  
        longitude: -95.357525, 
        weight: 1, 
    },
    {
        latitude: 29.86238,  
        longitude: -95.384711, 
        weight: 1, 
    },
    {
        latitude: 29.737555,  
        longitude: -95.5045, 
        weight: 1, 
    },
    {
        latitude: 29.748699,  
        longitude: -95.60602, 
        weight: 1, 
    },
    {
        latitude: 29.810103,  
        longitude: -95.278323, 
        weight: 1, 
    },
    {
        latitude: 29.775728,  
        longitude: -95.222537, 
        weight: 1, 
    },
    {
        latitude: 29.775728,  
        longitude: -95.222537, 
        weight: 1, 
    },
    {
        latitude: 29.753105,  
        longitude: -95.405378, 
        weight: 1, 
    },
    {
        latitude: 29.782201,  
        longitude: -95.303011, 
        weight: 1, 
    },
    {
        latitude: 30.064486,  
        longitude: -95.248119, 
        weight: 1, 
    },
    {
        latitude: 29.869887,  
        longitude: -95.408983, 
        weight: 1, 
    },
    {
        latitude: 29.67345,  
        longitude: -95.343944, 
        weight: 1, 
    },
    {
        latitude: 29.870192,  
        longitude: -95.372971, 
        weight: 1, 
    },
    {
        latitude: 29.698436,  
        longitude: -95.287101, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.813257,  
        longitude: -95.403816, 
        weight: 1, 
    },
    {
        latitude: 29.737867,  
        longitude: -95.481395, 
        weight: 1, 
    },
    {
        latitude: 29.728898,  
        longitude: -95.528684, 
        weight: 1, 
    },
    {
        latitude: 29.821558,  
        longitude: -95.390355, 
        weight: 1, 
    },
    {
        latitude: 29.821558,  
        longitude: -95.390355, 
        weight: 1, 
    },
    {
        latitude: 29.80321,  
        longitude: -95.433125, 
        weight: 1, 
    },
    {
        latitude: 29.663055,  
        longitude: -95.502892, 
        weight: 1, 
    },
    {
        latitude: 29.703552,  
        longitude: -95.289473, 
        weight: 1, 
    },
    {
        latitude: 29.771193,  
        longitude: -95.225846, 
        weight: 1, 
    },
    {
        latitude: 29.667692,  
        longitude: -95.557046, 
        weight: 1, 
    },
    {
        latitude: 29.770845,  
        longitude: -95.419435, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.753898,  
        longitude: -95.381286, 
        weight: 1, 
    },
    {
        latitude: 29.764091,  
        longitude: -95.270027, 
        weight: 1, 
    },
    {
        latitude: 29.703395,  
        longitude: -95.372386, 
        weight: 1, 
    },
    {
        latitude: 29.782532,  
        longitude: -95.426624, 
        weight: 1, 
    },
    {
        latitude: 29.854243,  
        longitude: -95.258585, 
        weight: 1, 
    },
    {
        latitude: 29.689671,  
        longitude: -95.559533, 
        weight: 1, 
    },
    {
        latitude: 29.682597,  
        longitude: -95.574566, 
        weight: 1, 
    },
    {
        latitude: 29.655444,  
        longitude: -95.26375, 
        weight: 1, 
    },
    {
        latitude: 29.770702,  
        longitude: -95.218149, 
        weight: 1, 
    },
    {
        latitude: 29.859086,  
        longitude: -95.551627, 
        weight: 1, 
    },
    {
        latitude: 29.793854,  
        longitude: -95.363968, 
        weight: 1, 
    },
    {
        latitude: 29.982595,  
        longitude: -95.280228, 
        weight: 1, 
    },
    {
        latitude: 29.673795,  
        longitude: -95.577354, 
        weight: 1, 
    },
    {
        latitude: 29.713151,  
        longitude: -95.34341, 
        weight: 1, 
    },
    {
        latitude: 29.771099,  
        longitude: -95.212718, 
        weight: 1, 
    },
    {
        latitude: 29.771099,  
        longitude: -95.212718, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.681855,  
        longitude: -95.250264, 
        weight: 1, 
    },
    {
        latitude: 30.02348,  
        longitude: -95.102566, 
        weight: 1, 
    },
    {
        latitude: 29.7264,  
        longitude: -95.416555, 
        weight: 1, 
    },
    {
        latitude: 29.812847,  
        longitude: -95.485114, 
        weight: 1, 
    },
    {
        latitude: 29.756108,  
        longitude: -95.365508, 
        weight: 1, 
    },
    {
        latitude: 29.745264,  
        longitude: -95.461069, 
        weight: 1, 
    },
    {
        latitude: 29.841595,  
        longitude: -95.290028, 
        weight: 1, 
    },
    {
        latitude: 30.078599,  
        longitude: -95.190033, 
        weight: 1, 
    },
    {
        latitude: 29.799299,  
        longitude: -95.518257, 
        weight: 1, 
    },
    {
        latitude: 29.799299,  
        longitude: -95.518257, 
        weight: 1, 
    },
    {
        latitude: 29.773181,  
        longitude: -95.393197, 
        weight: 1, 
    },
    {
        latitude: 29.773181,  
        longitude: -95.393197, 
        weight: 1, 
    },
    {
        latitude: 29.765621,  
        longitude: -95.36865, 
        weight: 1, 
    },
    {
        latitude: 29.621347,  
        longitude: -95.473984, 
        weight: 1, 
    },
    {
        latitude: 29.711669,  
        longitude: -95.315326, 
        weight: 1, 
    },
    {
        latitude: 29.646878,  
        longitude: -95.353946, 
        weight: 1, 
    },
    {
        latitude: 29.808428,  
        longitude: -95.336112, 
        weight: 1, 
    },
    {
        latitude: 29.725335,  
        longitude: -95.468167, 
        weight: 1, 
    },
    {
        latitude: 29.725335,  
        longitude: -95.468167, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.737153,  
        longitude: -95.514184, 
        weight: 1, 
    },
    {
        latitude: 29.737153,  
        longitude: -95.514184, 
        weight: 1, 
    },
    {
        latitude: 29.737153,  
        longitude: -95.514184, 
        weight: 1, 
    },
    {
        latitude: 29.728553,  
        longitude: -95.439783, 
        weight: 1, 
    },
    {
        latitude: 29.783894,  
        longitude: -95.556923, 
        weight: 1, 
    },
    {
        latitude: 29.795851,  
        longitude: -95.238072, 
        weight: 1, 
    },
    {
        latitude: 29.756942,  
        longitude: -95.351892, 
        weight: 1, 
    },
    {
        latitude: 29.669675,  
        longitude: -95.47137, 
        weight: 1, 
    },
    {
        latitude: 29.783348,  
        longitude: -95.355777, 
        weight: 1, 
    },
    {
        latitude: 29.761397,  
        longitude: -95.421533, 
        weight: 1, 
    },
    {
        latitude: 29.702195,  
        longitude: -95.349987, 
        weight: 1, 
    },
    {
        latitude: 29.647686,  
        longitude: -95.356201, 
        weight: 1, 
    },
    {
        latitude: 29.901315,  
        longitude: -95.411897, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.970472,  
        longitude: -95.529826, 
        weight: 1, 
    },
    {
        latitude: 29.65393,  
        longitude: -95.49199, 
        weight: 1, 
    },
    {
        latitude: 29.964456,  
        longitude: -95.553079, 
        weight: 1, 
    },
    {
        latitude: 29.741213,  
        longitude: -95.464189, 
        weight: 1, 
    },
    {
        latitude: 29.677958,  
        longitude: -95.587359, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.684382,  
        longitude: -95.587463, 
        weight: 1, 
    },
    {
        latitude: 29.69331,  
        longitude: -95.355292, 
        weight: 1, 
    },
    {
        latitude: 29.69331,  
        longitude: -95.355292, 
        weight: 1, 
    },
    {
        latitude: 29.727707,  
        longitude: -95.377077, 
        weight: 1, 
    },
    {
        latitude: 29.860585,  
        longitude: -95.27573, 
        weight: 1, 
    },
    {
        latitude: 29.589132,  
        longitude: -95.181608, 
        weight: 1, 
    },
    {
        latitude: 29.847139,  
        longitude: -95.366472, 
        weight: 1, 
    },
    {
        latitude: 29.86073,  
        longitude: -95.436686, 
        weight: 1, 
    },
    {
        latitude: 29.649576,  
        longitude: -95.531082, 
        weight: 1, 
    },
    {
        latitude: 29.786186,  
        longitude: -95.188201, 
        weight: 1, 
    },
    {
        latitude: 29.786186,  
        longitude: -95.188201, 
        weight: 1, 
    },
    {
        latitude: 29.641208,  
        longitude: -95.242952, 
        weight: 1, 
    },
    {
        latitude: 29.688934,  
        longitude: -95.39448, 
        weight: 1, 
    },
    {
        latitude: 29.784844,  
        longitude: -95.361052, 
        weight: 1, 
    },
    {
        latitude: 29.756236,  
        longitude: -95.352781, 
        weight: 1, 
    },
    {
        latitude: 29.662097,  
        longitude: -95.364112, 
        weight: 1, 
    },
    {
        latitude: 29.619337,  
        longitude: -95.135958, 
        weight: 1, 
    },
    {
        latitude: 29.733481,  
        longitude: -95.460569, 
        weight: 1, 
    },
    {
        latitude: 29.83282,  
        longitude: -95.487321, 
        weight: 1, 
    },
    {
        latitude: 29.727528,  
        longitude: -95.480545, 
        weight: 1, 
    },
    {
        latitude: 29.683338,  
        longitude: -95.229671, 
        weight: 1, 
    },
    {
        latitude: 29.637913,  
        longitude: -95.226434, 
        weight: 1, 
    },
    {
        latitude: 29.620909,  
        longitude: -95.477113, 
        weight: 1, 
    },
    {
        latitude: 29.720739,  
        longitude: -95.284387, 
        weight: 1, 
    },
    {
        latitude: 29.785245,  
        longitude: -95.576218, 
        weight: 1, 
    },
    {
        latitude: 29.746023,  
        longitude: -95.485143, 
        weight: 1, 
    },
    {
        latitude: 29.754513,  
        longitude: -95.380578, 
        weight: 1, 
    },
    {
        latitude: 29.763011,  
        longitude: -95.479878, 
        weight: 1, 
    },
    {
        latitude: 29.713604,  
        longitude: -95.493097, 
        weight: 1, 
    },
    {
        latitude: 29.737997,  
        longitude: -95.380055, 
        weight: 1, 
    },
    {
        latitude: 29.93037,  
        longitude: -95.31874, 
        weight: 1, 
    },
    {
        latitude: 29.645417,  
        longitude: -95.207838, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.682762,  
        longitude: -95.287845, 
        weight: 1, 
    },
    {
        latitude: 29.796653,  
        longitude: -95.333507, 
        weight: 1, 
    },
    {
        latitude: 29.644232,  
        longitude: -95.508293, 
        weight: 1, 
    },
    {
        latitude: 29.703578,  
        longitude: -95.60758, 
        weight: 1, 
    },
    {
        latitude: 29.697406,  
        longitude: -95.240168, 
        weight: 1, 
    },
    {
        latitude: 29.744524,  
        longitude: -95.387534, 
        weight: 1, 
    },
    {
        latitude: 29.744524,  
        longitude: -95.387534, 
        weight: 1, 
    },
    {
        latitude: 29.938763,  
        longitude: -95.345484, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.676041,  
        longitude: -95.267349, 
        weight: 1, 
    },
    {
        latitude: 29.73562,  
        longitude: -95.364102, 
        weight: 1, 
    },
    {
        latitude: 29.740804,  
        longitude: -95.461528, 
        weight: 1, 
    },
    {
        latitude: 29.869059,  
        longitude: -95.472448, 
        weight: 1, 
    },
    {
        latitude: 29.753908,  
        longitude: -95.38229, 
        weight: 1, 
    },
    {
        latitude: 29.732645,  
        longitude: -95.441474, 
        weight: 1, 
    },
    {
        latitude: 29.851512,  
        longitude: -95.283666, 
        weight: 1, 
    },
    {
        latitude: 29.750123,  
        longitude: -95.497645, 
        weight: 1, 
    },
    {
        latitude: 29.675072,  
        longitude: -95.424646, 
        weight: 1, 
    },
    {
        latitude: 29.698201,  
        longitude: -95.411422, 
        weight: 1, 
    },
    {
        latitude: 29.783897,  
        longitude: -95.554027, 
        weight: 1, 
    },
    {
        latitude: 29.746023,  
        longitude: -95.485143, 
        weight: 1, 
    },
    {
        latitude: 29.719634,  
        longitude: -95.51261, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.633666,  
        longitude: -95.472673, 
        weight: 1, 
    },
    {
        latitude: 29.939479,  
        longitude: -95.389085, 
        weight: 1, 
    },
    {
        latitude: 29.783895,  
        longitude: -95.556613, 
        weight: 1, 
    },
    {
        latitude: 29.854455,  
        longitude: -95.399559, 
        weight: 1, 
    },
    {
        latitude: 29.713049,  
        longitude: -95.515716, 
        weight: 1, 
    },
    {
        latitude: 29.820668,  
        longitude: -95.333364, 
        weight: 1, 
    },
    {
        latitude: 29.685285,  
        longitude: -95.399636, 
        weight: 1, 
    },
    {
        latitude: 29.656928,  
        longitude: -95.337813, 
        weight: 1, 
    },
    {
        latitude: 29.665128,  
        longitude: -95.344441, 
        weight: 1, 
    },
    {
        latitude: 29.686041,  
        longitude: -95.557687, 
        weight: 1, 
    },
    {
        latitude: 29.739164,  
        longitude: -95.410687, 
        weight: 1, 
    },
    {
        latitude: 29.703866,  
        longitude: -95.575698, 
        weight: 1, 
    },
    {
        latitude: 29.68156,  
        longitude: -95.550524, 
        weight: 1, 
    },
    {
        latitude: 29.831762,  
        longitude: -95.511619, 
        weight: 1, 
    },
    {
        latitude: 29.96334,  
        longitude: -95.544217, 
        weight: 1, 
    },
    {
        latitude: 29.705116,  
        longitude: -95.525246, 
        weight: 1, 
    },
    {
        latitude: 29.665441,  
        longitude: -95.336303, 
        weight: 1, 
    },
    {
        latitude: 29.82269,  
        longitude: -95.539219, 
        weight: 1, 
    },
    {
        latitude: 29.804515,  
        longitude: -95.545417, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.697467,  
        longitude: -95.331513, 
        weight: 1, 
    },
    {
        latitude: 29.684204,  
        longitude: -95.528558, 
        weight: 1, 
    },
    {
        latitude: 29.802811,  
        longitude: -95.408362, 
        weight: 1, 
    },
    {
        latitude: 29.771339,  
        longitude: -95.191716, 
        weight: 1, 
    },
    {
        latitude: 29.793737,  
        longitude: -95.341975, 
        weight: 1, 
    },
    {
        latitude: 29.730242,  
        longitude: -95.314791, 
        weight: 1, 
    },
    {
        latitude: 29.707119,  
        longitude: -95.552963, 
        weight: 1, 
    },
    {
        latitude: 29.720105,  
        longitude: -95.480755, 
        weight: 1, 
    },
    {
        latitude: 29.731905,  
        longitude: -95.462574, 
        weight: 1, 
    },
    {
        latitude: 29.753261,  
        longitude: -95.382587, 
        weight: 1, 
    },
    {
        latitude: 29.753261,  
        longitude: -95.382587, 
        weight: 1, 
    },
    {
        latitude: 29.960646,  
        longitude: -95.424253, 
        weight: 1, 
    },
    {
        latitude: 29.785907,  
        longitude: -95.622155, 
        weight: 1, 
    },
    {
        latitude: 29.742436,  
        longitude: -95.384489, 
        weight: 1, 
    },
    {
        latitude: 29.822363,  
        longitude: -95.468786, 
        weight: 1, 
    },
    {
        latitude: 29.697467,  
        longitude: -95.331513, 
        weight: 1, 
    },
    {
        latitude: 29.740178,  
        longitude: -95.500921, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.637234,  
        longitude: -95.336713, 
        weight: 1, 
    },
    {
        latitude: 29.657152,  
        longitude: -95.496793, 
        weight: 1, 
    },
    {
        latitude: 29.853182,  
        longitude: -95.250726, 
        weight: 1, 
    },
    {
        latitude: 29.729207,  
        longitude: -95.645492, 
        weight: 1, 
    },
    {
        latitude: 29.767248,  
        longitude: -95.213264, 
        weight: 1, 
    },
    {
        latitude: 29.767248,  
        longitude: -95.213264, 
        weight: 1, 
    },
    {
        latitude: 29.946013,  
        longitude: -95.445389, 
        weight: 1, 
    },
    {
        latitude: 29.736938,  
        longitude: -95.558395, 
        weight: 1, 
    },
    {
        latitude: 29.85763,  
        longitude: -95.300055, 
        weight: 1, 
    },
    {
        latitude: 29.850872,  
        longitude: -95.252211, 
        weight: 1, 
    },
    {
        latitude: 29.939619,  
        longitude: -95.432622, 
        weight: 1, 
    },
    {
        latitude: 29.939619,  
        longitude: -95.432622, 
        weight: 1, 
    },
    {
        latitude: 29.947259,  
        longitude: -95.546776, 
        weight: 1, 
    },
    {
        latitude: 29.947259,  
        longitude: -95.546776, 
        weight: 1, 
    },
    {
        latitude: 29.646862,  
        longitude: -95.353921, 
        weight: 1, 
    },
    {
        latitude: 29.733552,  
        longitude: -95.605797, 
        weight: 1, 
    },
    {
        latitude: 29.721827,  
        longitude: -95.354268, 
        weight: 1, 
    },
    {
        latitude: 29.725929,  
        longitude: -95.545235, 
        weight: 1, 
    },
    {
        latitude: 29.705147,  
        longitude: -95.521309, 
        weight: 1, 
    },
    {
        latitude: 29.753308,  
        longitude: -95.351355, 
        weight: 1, 
    },
    {
        latitude: 29.892189,  
        longitude: -95.423979, 
        weight: 1, 
    },
    {
        latitude: 29.761342,  
        longitude: -95.385669, 
        weight: 1, 
    },
    {
        latitude: 29.804851,  
        longitude: -95.408154, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.742777,  
        longitude: -95.538378, 
        weight: 1, 
    },
    {
        latitude: 29.749178,  
        longitude: -95.355711, 
        weight: 1, 
    },
    {
        latitude: 30.019056,  
        longitude: -95.108977, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.746023,  
        longitude: -95.485143, 
        weight: 1, 
    },
    {
        latitude: 29.733481,  
        longitude: -95.460569, 
        weight: 1, 
    },
    {
        latitude: 29.676524,  
        longitude: -95.594003, 
        weight: 1, 
    },
    {
        latitude: 29.800354,  
        longitude: -95.320413, 
        weight: 1, 
    },
    {
        latitude: 29.81513,  
        longitude: -95.398978, 
        weight: 1, 
    },
    {
        latitude: 29.81513,  
        longitude: -95.398978, 
        weight: 1, 
    },
    {
        latitude: 29.70975,  
        longitude: -95.515848, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.750213,  
        longitude: -95.456328, 
        weight: 1, 
    },
    {
        latitude: 29.757607,  
        longitude: -95.356749, 
        weight: 1, 
    },
    {
        latitude: 29.732991,  
        longitude: -95.563825, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.666469,  
        longitude: -95.508547, 
        weight: 1, 
    },
    {
        latitude: 29.666469,  
        longitude: -95.508547, 
        weight: 1, 
    },
    {
        latitude: 29.779882,  
        longitude: -95.218582, 
        weight: 1, 
    },
    {
        latitude: 29.843972,  
        longitude: -95.552581, 
        weight: 1, 
    },
    {
        latitude: 29.843972,  
        longitude: -95.552581, 
        weight: 1, 
    },
    {
        latitude: 29.882337,  
        longitude: -95.425874, 
        weight: 1, 
    },
    {
        latitude: 29.609671,  
        longitude: -95.250951, 
        weight: 1, 
    },
    {
        latitude: 29.609671,  
        longitude: -95.250951, 
        weight: 1, 
    },
    {
        latitude: 29.705513,  
        longitude: -95.488911, 
        weight: 1, 
    },
    {
        latitude: 29.67,  
        longitude: -95.343617, 
        weight: 1, 
    },
    {
        latitude: 29.701987,  
        longitude: -95.36475, 
        weight: 1, 
    },
    {
        latitude: 29.701987,  
        longitude: -95.36475, 
        weight: 1, 
    },
    {
        latitude: 29.775757,  
        longitude: -95.221176, 
        weight: 1, 
    },
    {
        latitude: 29.720119,  
        longitude: -95.375522, 
        weight: 1, 
    },
    {
        latitude: 29.843801,  
        longitude: -95.319031, 
        weight: 1, 
    },
    {
        latitude: 29.843801,  
        longitude: -95.319031, 
        weight: 1, 
    },
    {
        latitude: 29.843801,  
        longitude: -95.319031, 
        weight: 1, 
    },
    {
        latitude: 29.703952,  
        longitude: -95.568773, 
        weight: 1, 
    },
    {
        latitude: 29.707496,  
        longitude: -95.404891, 
        weight: 1, 
    },
    {
        latitude: 29.731767,  
        longitude: -95.652403, 
        weight: 1, 
    },
    {
        latitude: 29.72763,  
        longitude: -95.557836, 
        weight: 1, 
    },
    {
        latitude: 29.81369,  
        longitude: -95.38239, 
        weight: 1, 
    },
    {
        latitude: 29.81369,  
        longitude: -95.38239, 
        weight: 1, 
    },
    {
        latitude: 29.794956,  
        longitude: -95.360931, 
        weight: 1, 
    },
    {
        latitude: 30.00595,  
        longitude: -95.315387, 
        weight: 1, 
    },
    {
        latitude: 29.938598,  
        longitude: -95.36598, 
        weight: 1, 
    },
    {
        latitude: 29.938598,  
        longitude: -95.36598, 
        weight: 1, 
    },
    {
        latitude: 29.746832,  
        longitude: -95.385771, 
        weight: 1, 
    },
    {
        latitude: 29.939008,  
        longitude: -95.311873, 
        weight: 1, 
    },
    {
        latitude: 29.739479,  
        longitude: -95.349785, 
        weight: 1, 
    },
    {
        latitude: 29.751563,  
        longitude: -95.456092, 
        weight: 1, 
    },
    {
        latitude: 29.80469,  
        longitude: -95.418891, 
        weight: 1, 
    },
    {
        latitude: 29.735419,  
        longitude: -95.46543, 
        weight: 1, 
    },
    {
        latitude: 29.705466,  
        longitude: -95.515001, 
        weight: 1, 
    },
    {
        latitude: 29.721772,  
        longitude: -95.355143, 
        weight: 1, 
    },
    {
        latitude: 29.824102,  
        longitude: -95.545259, 
        weight: 1, 
    },
    {
        latitude: 29.693945,  
        longitude: -95.361495, 
        weight: 1, 
    },
    {
        latitude: 29.693945,  
        longitude: -95.361495, 
        weight: 1, 
    },
    {
        latitude: 29.627147,  
        longitude: -95.248752, 
        weight: 1, 
    },
    {
        latitude: 29.735187,  
        longitude: -95.375457, 
        weight: 1, 
    },
    {
        latitude: 29.620445,  
        longitude: -95.221405, 
        weight: 1, 
    },
    {
        latitude: 29.674589,  
        longitude: -95.295762, 
        weight: 1, 
    },
    {
        latitude: 29.716434,  
        longitude: -95.380966, 
        weight: 1, 
    },
    {
        latitude: 29.749396,  
        longitude: -95.374727, 
        weight: 1, 
    },
    {
        latitude: 29.682747,  
        longitude: -95.334344, 
        weight: 1, 
    },
    {
        latitude: 29.678334,  
        longitude: -95.362936, 
        weight: 1, 
    },
    {
        latitude: 29.689278,  
        longitude: -95.441478, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.595484,  
        longitude: -95.223024, 
        weight: 1, 
    },
    {
        latitude: 29.595484,  
        longitude: -95.223024, 
        weight: 1, 
    },
    {
        latitude: 29.959976,  
        longitude: -95.547866, 
        weight: 1, 
    },
    {
        latitude: 29.71542,  
        longitude: -95.497698, 
        weight: 1, 
    },
    {
        latitude: 29.735207,  
        longitude: -95.306957, 
        weight: 1, 
    },
    {
        latitude: 29.705959,  
        longitude: -95.348495, 
        weight: 1, 
    },
    {
        latitude: 29.705959,  
        longitude: -95.348495, 
        weight: 1, 
    },
    {
        latitude: 29.68916,  
        longitude: -95.56599, 
        weight: 1, 
    },
    {
        latitude: 29.793791,  
        longitude: -95.341148, 
        weight: 1, 
    },
    {
        latitude: 29.793791,  
        longitude: -95.341148, 
        weight: 1, 
    },
    {
        latitude: 29.646467,  
        longitude: -95.510595, 
        weight: 1, 
    },
    {
        latitude: 29.807695,  
        longitude: -95.427645, 
        weight: 1, 
    },
    {
        latitude: 29.856769,  
        longitude: -95.47332, 
        weight: 1, 
    },
    {
        latitude: 29.688858,  
        longitude: -95.291722, 
        weight: 1, 
    },
    {
        latitude: 29.752697,  
        longitude: -95.354215, 
        weight: 1, 
    },
    {
        latitude: 29.628847,  
        longitude: -95.464908, 
        weight: 1, 
    },
    {
        latitude: 29.765439,  
        longitude: -95.342775, 
        weight: 1, 
    },
    {
        latitude: 29.693593,  
        longitude: -95.374952, 
        weight: 1, 
    },
    {
        latitude: 29.831584,  
        longitude: -95.297982, 
        weight: 1, 
    },
    {
        latitude: 29.63917,  
        longitude: -95.346703, 
        weight: 1, 
    },
    {
        latitude: 29.633994,  
        longitude: -95.422518, 
        weight: 1, 
    },
    {
        latitude: 29.670087,  
        longitude: -95.347235, 
        weight: 1, 
    },
    {
        latitude: 29.602068,  
        longitude: -95.248199, 
        weight: 1, 
    },
    {
        latitude: 29.661411,  
        longitude: -95.274814, 
        weight: 1, 
    },
    {
        latitude: 29.701705,  
        longitude: -95.349434, 
        weight: 1, 
    },
    {
        latitude: 29.74465,  
        longitude: -95.393215, 
        weight: 1, 
    },
    {
        latitude: 29.747606,  
        longitude: -95.569379, 
        weight: 1, 
    },
    {
        latitude: 29.91549,  
        longitude: -95.404593, 
        weight: 1, 
    },
    {
        latitude: 29.772909,  
        longitude: -95.456559, 
        weight: 1, 
    },
    {
        latitude: 29.741087,  
        longitude: -95.456834, 
        weight: 1, 
    },
    {
        latitude: 29.741087,  
        longitude: -95.456834, 
        weight: 1, 
    },
    {
        latitude: 29.772473,  
        longitude: -95.339398, 
        weight: 1, 
    },
    {
        latitude: 29.965513,  
        longitude: -95.429613, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.931751,  
        longitude: -95.411112, 
        weight: 1, 
    },
    {
        latitude: 29.690517,  
        longitude: -95.549526, 
        weight: 1, 
    },
    {
        latitude: 29.690517,  
        longitude: -95.549526, 
        weight: 1, 
    },
    {
        latitude: 29.85384,  
        longitude: -95.515845, 
        weight: 1, 
    },
    {
        latitude: 29.689274,  
        longitude: -95.365164, 
        weight: 1, 
    },
    {
        latitude: 29.689274,  
        longitude: -95.365164, 
        weight: 1, 
    },
    {
        latitude: 29.80913,  
        longitude: -95.489319, 
        weight: 1, 
    },
    {
        latitude: 29.771923,  
        longitude: -95.410614, 
        weight: 1, 
    },
    {
        latitude: 29.650984,  
        longitude: -95.355881, 
        weight: 1, 
    },
    {
        latitude: 29.650984,  
        longitude: -95.355881, 
        weight: 1, 
    },
    {
        latitude: 29.732903,  
        longitude: -95.555324, 
        weight: 1, 
    },
    {
        latitude: 29.740998,  
        longitude: -95.36855, 
        weight: 1, 
    },
    {
        latitude: 29.559718,  
        longitude: -95.146259, 
        weight: 1, 
    },
    {
        latitude: 29.736548,  
        longitude: -95.584859, 
        weight: 1, 
    },
    {
        latitude: 29.882476,  
        longitude: -95.448536, 
        weight: 1, 
    },
    {
        latitude: 29.735981,  
        longitude: -95.616122, 
        weight: 1, 
    },
    {
        latitude: 29.615253,  
        longitude: -95.125139, 
        weight: 1, 
    },
    {
        latitude: 29.754707,  
        longitude: -95.344918, 
        weight: 1, 
    },
    {
        latitude: 29.72492,  
        longitude: -95.46818, 
        weight: 1, 
    },
    {
        latitude: 29.804349,  
        longitude: -95.37055, 
        weight: 1, 
    },
    {
        latitude: 29.875303,  
        longitude: -95.312761, 
        weight: 1, 
    },
    {
        latitude: 29.744327,  
        longitude: -95.457828, 
        weight: 1, 
    },
    {
        latitude: 29.744327,  
        longitude: -95.457828, 
        weight: 1, 
    },
    {
        latitude: 29.773981,  
        longitude: -95.420227, 
        weight: 1, 
    },
    {
        latitude: 29.676641,  
        longitude: -95.446102, 
        weight: 1, 
    },
    {
        latitude: 29.731512,  
        longitude: -95.484423, 
        weight: 1, 
    },
    {
        latitude: 29.644578,  
        longitude: -95.246612, 
        weight: 1, 
    },
    {
        latitude: 29.931741,  
        longitude: -95.410836, 
        weight: 1, 
    },
    {
        latitude: 29.713621,  
        longitude: -95.539068, 
        weight: 1, 
    },
    {
        latitude: 29.846872,  
        longitude: -95.342926, 
        weight: 1, 
    },
    {
        latitude: 29.846872,  
        longitude: -95.342926, 
        weight: 1, 
    },
    {
        latitude: 29.638818,  
        longitude: -95.335513, 
        weight: 1, 
    },
    {
        latitude: 29.741708,  
        longitude: -95.457544, 
        weight: 1, 
    },
    {
        latitude: 29.846979,  
        longitude: -95.32164, 
        weight: 1, 
    },
    {
        latitude: 29.888386,  
        longitude: -95.425251, 
        weight: 1, 
    },
    {
        latitude: 29.888386,  
        longitude: -95.425251, 
        weight: 1, 
    },
    {
        latitude: 29.663733,  
        longitude: -95.370394, 
        weight: 1, 
    },
    {
        latitude: 29.770444,  
        longitude: -95.411641, 
        weight: 1, 
    },
    {
        latitude: 29.712237,  
        longitude: -95.545719, 
        weight: 1, 
    },
    {
        latitude: 29.746023,  
        longitude: -95.485143, 
        weight: 1, 
    },
    {
        latitude: 29.69287,  
        longitude: -95.267676, 
        weight: 1, 
    },
    {
        latitude: 29.780105,  
        longitude: -95.477666, 
        weight: 1, 
    },
    {
        latitude: 29.837549,  
        longitude: -95.377578, 
        weight: 1, 
    },
    {
        latitude: 29.944269,  
        longitude: -95.293132, 
        weight: 1, 
    },
    {
        latitude: 29.953944,  
        longitude: -95.422674, 
        weight: 1, 
    },
    {
        latitude: 29.732661,  
        longitude: -95.440608, 
        weight: 1, 
    },
    {
        latitude: 29.735907,  
        longitude: -95.619586, 
        weight: 1, 
    },
    {
        latitude: 29.749913,  
        longitude: -95.496604, 
        weight: 1, 
    },
    {
        latitude: 29.724708,  
        longitude: -95.490223, 
        weight: 1, 
    },
    {
        latitude: 29.736737,  
        longitude: -95.571907, 
        weight: 1, 
    },
    {
        latitude: 29.6794,  
        longitude: -95.556007, 
        weight: 1, 
    },
    {
        latitude: 29.6794,  
        longitude: -95.556007, 
        weight: 1, 
    },
    {
        latitude: 29.757238,  
        longitude: -95.358005, 
        weight: 1, 
    },
    {
        latitude: 29.596906,  
        longitude: -95.200347, 
        weight: 1, 
    },
    {
        latitude: 29.742745,  
        longitude: -95.40857, 
        weight: 1, 
    },
    {
        latitude: 29.656657,  
        longitude: -95.501, 
        weight: 1, 
    },
    {
        latitude: 29.792023,  
        longitude: -95.275889, 
        weight: 1, 
    },
    {
        latitude: 29.615643,  
        longitude: -95.355324, 
        weight: 1, 
    },
    {
        latitude: 29.717688,  
        longitude: -95.538963, 
        weight: 1, 
    },
    {
        latitude: 29.848698,  
        longitude: -95.272842, 
        weight: 1, 
    },
    {
        latitude: 29.731764,  
        longitude: -95.493233, 
        weight: 1, 
    },
    {
        latitude: 29.731764,  
        longitude: -95.493233, 
        weight: 1, 
    },
    {
        latitude: 29.650984,  
        longitude: -95.355881, 
        weight: 1, 
    },
    {
        latitude: 29.862345,  
        longitude: -95.370997, 
        weight: 1, 
    },
    {
        latitude: 29.633645,  
        longitude: -95.221986, 
        weight: 1, 
    },
    {
        latitude: 29.746014,  
        longitude: -95.485209, 
        weight: 1, 
    },
    {
        latitude: 30.073964,  
        longitude: -95.209121, 
        weight: 1, 
    },
    {
        latitude: 29.627297,  
        longitude: -95.467411, 
        weight: 1, 
    },
    {
        latitude: 29.794291,  
        longitude: -95.344048, 
        weight: 1, 
    },
    {
        latitude: 29.743357,  
        longitude: -95.458083, 
        weight: 1, 
    },
    {
        latitude: 29.725852,  
        longitude: -95.545288, 
        weight: 1, 
    },
    {
        latitude: 29.829653,  
        longitude: -95.293693, 
        weight: 1, 
    },
    {
        latitude: 29.775761,  
        longitude: -95.220355, 
        weight: 1, 
    },
    {
        latitude: 29.669946,  
        longitude: -95.304395, 
        weight: 1, 
    },
    {
        latitude: 29.793038,  
        longitude: -95.342062, 
        weight: 1, 
    },
    {
        latitude: 29.943762,  
        longitude: -95.397986, 
        weight: 1, 
    },
    {
        latitude: 29.804515,  
        longitude: -95.545875, 
        weight: 1, 
    },
    {
        latitude: 29.819572,  
        longitude: -95.444464, 
        weight: 1, 
    },
    {
        latitude: 29.675072,  
        longitude: -95.424646, 
        weight: 1, 
    },
    {
        latitude: 29.675072,  
        longitude: -95.424646, 
        weight: 1, 
    },
    {
        latitude: 29.792497,  
        longitude: -95.360889, 
        weight: 1, 
    },
    {
        latitude: 29.883228,  
        longitude: -95.466251, 
        weight: 1, 
    },
    {
        latitude: 29.946293,  
        longitude: -95.331337, 
        weight: 1, 
    },
    {
        latitude: 29.861818,  
        longitude: -95.505541, 
        weight: 1, 
    },
    {
        latitude: 29.752405,  
        longitude: -95.355509, 
        weight: 1, 
    },
    {
        latitude: 29.702399,  
        longitude: -95.358036, 
        weight: 1, 
    },
    {
        latitude: 29.831958,  
        longitude: -95.562059, 
        weight: 1, 
    },
    {
        latitude: 29.831958,  
        longitude: -95.562059, 
        weight: 1, 
    },
    {
        latitude: 29.62053,  
        longitude: -95.136865, 
        weight: 1, 
    },
    {
        latitude: 29.62053,  
        longitude: -95.136865, 
        weight: 1, 
    },
    {
        latitude: 29.747982,  
        longitude: -95.448626, 
        weight: 1, 
    },
    {
        latitude: 29.728173,  
        longitude: -95.543422, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.789659,  
        longitude: -95.331085, 
        weight: 1, 
    },
    {
        latitude: 29.789659,  
        longitude: -95.331085, 
        weight: 1, 
    },
    {
        latitude: 29.775761,  
        longitude: -95.220355, 
        weight: 1, 
    },
    {
        latitude: 29.755879,  
        longitude: -95.366796, 
        weight: 1, 
    },
    {
        latitude: 29.748948,  
        longitude: -95.369979, 
        weight: 1, 
    },
    {
        latitude: 29.760663,  
        longitude: -95.345762, 
        weight: 1, 
    },
    {
        latitude: 29.782372,  
        longitude: -95.353667, 
        weight: 1, 
    },
    {
        latitude: 29.950183,  
        longitude: -95.399325, 
        weight: 1, 
    },
    {
        latitude: 29.950183,  
        longitude: -95.399325, 
        weight: 1, 
    },
    {
        latitude: 29.742207,  
        longitude: -95.576253, 
        weight: 1, 
    },
    {
        latitude: 29.649416,  
        longitude: -95.21825, 
        weight: 1, 
    },
    {
        latitude: 30.057364,  
        longitude: -95.219169, 
        weight: 1, 
    },
    {
        latitude: 29.740961,  
        longitude: -95.58518, 
        weight: 1, 
    },
    {
        latitude: 29.726061,  
        longitude: -95.493664, 
        weight: 1, 
    },
    {
        latitude: 29.77662,  
        longitude: -95.272113, 
        weight: 1, 
    },
    {
        latitude: 29.853495,  
        longitude: -95.509446, 
        weight: 1, 
    },
    {
        latitude: 29.674644,  
        longitude: -95.419501, 
        weight: 1, 
    },
    {
        latitude: 29.750074,  
        longitude: -95.497507, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.738543,  
        longitude: -95.410999, 
        weight: 1, 
    },
    {
        latitude: 29.737394,  
        longitude: -95.520073, 
        weight: 1, 
    },
    {
        latitude: 29.737394,  
        longitude: -95.520073, 
        weight: 1, 
    },
    {
        latitude: 29.70295,  
        longitude: -95.511529, 
        weight: 1, 
    },
    {
        latitude: 29.836596,  
        longitude: -95.328477, 
        weight: 1, 
    },
    {
        latitude: 29.820652,  
        longitude: -95.375372, 
        weight: 1, 
    },
    {
        latitude: 29.702315,  
        longitude: -95.359262, 
        weight: 1, 
    },
    {
        latitude: 29.754523,  
        longitude: -95.453888, 
        weight: 1, 
    },
    {
        latitude: 29.742724,  
        longitude: -95.477113, 
        weight: 1, 
    },
    {
        latitude: 29.681365,  
        longitude: -95.387443, 
        weight: 1, 
    },
    {
        latitude: 29.862827,  
        longitude: -95.487716, 
        weight: 1, 
    },
    {
        latitude: 29.695801,  
        longitude: -95.404867, 
        weight: 1, 
    },
    {
        latitude: 29.822798,  
        longitude: -95.545266, 
        weight: 1, 
    },
    {
        latitude: 29.736554,  
        longitude: -95.58592, 
        weight: 1, 
    },
    {
        latitude: 29.736554,  
        longitude: -95.58592, 
        weight: 1, 
    },
    {
        latitude: 29.736554,  
        longitude: -95.58592, 
        weight: 1, 
    },
    {
        latitude: 29.651165,  
        longitude: -95.470257, 
        weight: 1, 
    },
    {
        latitude: 29.851523,  
        longitude: -95.283651, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.670107,  
        longitude: -95.277045, 
        weight: 1, 
    },
    {
        latitude: 29.70363,  
        longitude: -95.595696, 
        weight: 1, 
    },
    {
        latitude: 29.70363,  
        longitude: -95.595696, 
        weight: 1, 
    },
    {
        latitude: 29.70363,  
        longitude: -95.595696, 
        weight: 1, 
    },
    {
        latitude: 29.71814,  
        longitude: -95.616507, 
        weight: 1, 
    },
    {
        latitude: 29.811448,  
        longitude: -95.392246, 
        weight: 1, 
    },
    {
        latitude: 29.797039,  
        longitude: -95.52672, 
        weight: 1, 
    },
    {
        latitude: 29.731793,  
        longitude: -95.490615, 
        weight: 1, 
    },
    {
        latitude: 29.757535,  
        longitude: -95.358477, 
        weight: 1, 
    },
    {
        latitude: 29.69512,  
        longitude: -95.250727, 
        weight: 1, 
    },
    {
        latitude: 29.776143,  
        longitude: -95.396186, 
        weight: 1, 
    },
    {
        latitude: 29.778227,  
        longitude: -95.545757, 
        weight: 1, 
    },
    {
        latitude: 29.729857,  
        longitude: -95.598892, 
        weight: 1, 
    },
    {
        latitude: 29.852192,  
        longitude: -95.535464, 
        weight: 1, 
    },
    {
        latitude: 29.64297,  
        longitude: -95.304677, 
        weight: 1, 
    },
    {
        latitude: 29.749689,  
        longitude: -95.396474, 
        weight: 1, 
    },
    {
        latitude: 29.749689,  
        longitude: -95.396474, 
        weight: 1, 
    },
    {
        latitude: 29.685437,  
        longitude: -95.384957, 
        weight: 1, 
    },
    {
        latitude: 29.825003,  
        longitude: -95.472908, 
        weight: 1, 
    },
    {
        latitude: 29.925146,  
        longitude: -95.407062, 
        weight: 1, 
    },
    {
        latitude: 29.701195,  
        longitude: -95.279062, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495186, 
        weight: 1, 
    },
    {
        latitude: 29.776535,  
        longitude: -95.31576, 
        weight: 1, 
    },
    {
        latitude: 29.842054,  
        longitude: -95.390896, 
        weight: 1, 
    },
    {
        latitude: 29.761159,  
        longitude: -95.283699, 
        weight: 1, 
    },
    {
        latitude: 29.645504,  
        longitude: -95.236369, 
        weight: 1, 
    },
    {
        latitude: 29.706244,  
        longitude: -95.406156, 
        weight: 1, 
    },
    {
        latitude: 29.763224,  
        longitude: -95.362538, 
        weight: 1, 
    },
    {
        latitude: 29.801815,  
        longitude: -95.306627, 
        weight: 1, 
    },
    {
        latitude: 29.71956,  
        longitude: -95.500975, 
        weight: 1, 
    },
    {
        latitude: 29.862768,  
        longitude: -95.506086, 
        weight: 1, 
    },
    {
        latitude: 29.682786,  
        longitude: -95.296862, 
        weight: 1, 
    },
    {
        latitude: 29.692684,  
        longitude: -95.415801, 
        weight: 1, 
    },
    {
        latitude: 30.017276,  
        longitude: -95.118269, 
        weight: 1, 
    },
    {
        latitude: 29.738254,  
        longitude: -95.358223, 
        weight: 1, 
    },
    {
        latitude: 29.709581,  
        longitude: -95.319586, 
        weight: 1, 
    },
    {
        latitude: 29.739034,  
        longitude: -95.62351, 
        weight: 1, 
    },
    {
        latitude: 29.682908,  
        longitude: -95.395567, 
        weight: 1, 
    },
    {
        latitude: 29.750281,  
        longitude: -95.368935, 
        weight: 1, 
    },
    {
        latitude: 29.841416,  
        longitude: -95.261389, 
        weight: 1, 
    },
    {
        latitude: 29.557223,  
        longitude: -95.147887, 
        weight: 1, 
    },
    {
        latitude: 29.791249,  
        longitude: -95.21869, 
        weight: 1, 
    },
    {
        latitude: 29.776909,  
        longitude: -95.360136, 
        weight: 1, 
    },
    {
        latitude: 29.776909,  
        longitude: -95.360136, 
        weight: 1, 
    },
    {
        latitude: 29.731171,  
        longitude: -95.346561, 
        weight: 1, 
    },
    {
        latitude: 29.731171,  
        longitude: -95.346561, 
        weight: 1, 
    },
    {
        latitude: 29.742435,  
        longitude: -95.381515, 
        weight: 1, 
    },
    {
        latitude: 29.821461,  
        longitude: -95.396149, 
        weight: 1, 
    },
    {
        latitude: 29.64822,  
        longitude: -95.461121, 
        weight: 1, 
    },
    {
        latitude: 29.687893,  
        longitude: -95.353387, 
        weight: 1, 
    },
    {
        latitude: 29.797177,  
        longitude: -95.367745, 
        weight: 1, 
    },
    {
        latitude: 29.797177,  
        longitude: -95.367745, 
        weight: 1, 
    },
    {
        latitude: 29.867431,  
        longitude: -95.397783, 
        weight: 1, 
    },
    {
        latitude: 29.982595,  
        longitude: -95.280228, 
        weight: 1, 
    },
    {
        latitude: 29.783539,  
        longitude: -95.341648, 
        weight: 1, 
    },
    {
        latitude: 29.674245,  
        longitude: -95.570664, 
        weight: 1, 
    },
    {
        latitude: 29.624424,  
        longitude: -95.430818, 
        weight: 1, 
    },
    {
        latitude: 29.708634,  
        longitude: -95.575477, 
        weight: 1, 
    },
    {
        latitude: 29.688971,  
        longitude: -95.567325, 
        weight: 1, 
    },
    {
        latitude: 29.801646,  
        longitude: -95.4269, 
        weight: 1, 
    },
    {
        latitude: 29.744327,  
        longitude: -95.457828, 
        weight: 1, 
    },
    {
        latitude: 29.799605,  
        longitude: -95.339282, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.834797,  
        longitude: -95.518017, 
        weight: 1, 
    },
    {
        latitude: 29.741548,  
        longitude: -95.516601, 
        weight: 1, 
    },
    {
        latitude: 29.67997,  
        longitude: -95.528293, 
        weight: 1, 
    },
    {
        latitude: 29.793963,  
        longitude: -95.314669, 
        weight: 1, 
    },
    {
        latitude: 29.817101,  
        longitude: -95.481522, 
        weight: 1, 
    },
    {
        latitude: 29.951392,  
        longitude: -95.42223, 
        weight: 1, 
    },
    {
        latitude: 29.723113,  
        longitude: -95.542515, 
        weight: 1, 
    },
    {
        latitude: 29.78797,  
        longitude: -95.289686, 
        weight: 1, 
    },
    {
        latitude: 29.648299,  
        longitude: -95.50836, 
        weight: 1, 
    },
    {
        latitude: 29.677407,  
        longitude: -95.416459, 
        weight: 1, 
    },
    {
        latitude: 29.776812,  
        longitude: -95.634673, 
        weight: 1, 
    },
    {
        latitude: 29.776812,  
        longitude: -95.634673, 
        weight: 1, 
    },
    {
        latitude: 29.677952,  
        longitude: -95.477016, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.851523,  
        longitude: -95.283651, 
        weight: 1, 
    },
    {
        latitude: 29.947656,  
        longitude: -95.331818, 
        weight: 1, 
    },
    {
        latitude: 29.812271,  
        longitude: -95.430289, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.780513,  
        longitude: -95.347445, 
        weight: 1, 
    },
    {
        latitude: 29.736222,  
        longitude: -95.514181, 
        weight: 1, 
    },
    {
        latitude: 29.687332,  
        longitude: -95.367843, 
        weight: 1, 
    },
    {
        latitude: 29.663368,  
        longitude: -95.326296, 
        weight: 1, 
    },
    {
        latitude: 29.668218,  
        longitude: -95.504323, 
        weight: 1, 
    },
    {
        latitude: 30.0802,  
        longitude: -95.195755, 
        weight: 1, 
    },
    {
        latitude: 29.753261,  
        longitude: -95.482669, 
        weight: 1, 
    },
    {
        latitude: 29.736132,  
        longitude: -95.466756, 
        weight: 1, 
    },
    {
        latitude: 29.86915,  
        longitude: -95.336641, 
        weight: 1, 
    },
    {
        latitude: 29.795417,  
        longitude: -95.30661, 
        weight: 1, 
    },
    {
        latitude: 29.657014,  
        longitude: -95.499667, 
        weight: 1, 
    },
    {
        latitude: 29.652563,  
        longitude: -95.259839, 
        weight: 1, 
    },
    {
        latitude: 29.658171,  
        longitude: -95.368026, 
        weight: 1, 
    },
    {
        latitude: 29.661091,  
        longitude: -95.404897, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.670612,  
        longitude: -95.570066, 
        weight: 1, 
    },
    {
        latitude: 29.670612,  
        longitude: -95.570066, 
        weight: 1, 
    },
    {
        latitude: 29.781938,  
        longitude: -95.425016, 
        weight: 1, 
    },
    {
        latitude: 29.581292,  
        longitude: -95.178396, 
        weight: 1, 
    },
    {
        latitude: 29.732686,  
        longitude: -95.43955, 
        weight: 1, 
    },
    {
        latitude: 29.607701,  
        longitude: -95.332444, 
        weight: 1, 
    },
    {
        latitude: 29.701195,  
        longitude: -95.279062, 
        weight: 1, 
    },
    {
        latitude: 29.64323,  
        longitude: -95.239157, 
        weight: 1, 
    },
    {
        latitude: 29.674702,  
        longitude: -95.277169, 
        weight: 1, 
    },
    {
        latitude: 29.630345,  
        longitude: -95.339355, 
        weight: 1, 
    },
    {
        latitude: 29.796032,  
        longitude: -95.409996, 
        weight: 1, 
    },
    {
        latitude: 29.833296,  
        longitude: -95.318851, 
        weight: 1, 
    },
    {
        latitude: 29.798881,  
        longitude: -95.312988, 
        weight: 1, 
    },
    {
        latitude: 29.833248,  
        longitude: -95.286924, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.687631,  
        longitude: -95.356938, 
        weight: 1, 
    },
    {
        latitude: 29.95337,  
        longitude: -95.538812, 
        weight: 1, 
    },
    {
        latitude: 29.597403,  
        longitude: -95.499673, 
        weight: 1, 
    },
    {
        latitude: 29.70341,  
        longitude: -95.514726, 
        weight: 1, 
    },
    {
        latitude: 29.680387,  
        longitude: -95.559626, 
        weight: 1, 
    },
    {
        latitude: 29.756447,  
        longitude: -95.468969, 
        weight: 1, 
    },
    {
        latitude: 29.58544,  
        longitude: -95.182318, 
        weight: 1, 
    },
    {
        latitude: 29.58544,  
        longitude: -95.182318, 
        weight: 1, 
    },
    {
        latitude: 29.778118,  
        longitude: -95.560617, 
        weight: 1, 
    },
    {
        latitude: 29.668112,  
        longitude: -95.361434, 
        weight: 1, 
    },
    {
        latitude: 29.843607,  
        longitude: -95.494442, 
        weight: 1, 
    },
    {
        latitude: 29.658001,  
        longitude: -95.510927, 
        weight: 1, 
    },
    {
        latitude: 29.774264,  
        longitude: -95.354915, 
        weight: 1, 
    },
    {
        latitude: 29.696038,  
        longitude: -95.305624, 
        weight: 1, 
    },
    {
        latitude: 29.731221,  
        longitude: -95.380172, 
        weight: 1, 
    },
    {
        latitude: 29.732265,  
        longitude: -95.543361, 
        weight: 1, 
    },
    {
        latitude: 29.731793,  
        longitude: -95.490615, 
        weight: 1, 
    },
    {
        latitude: 29.716953,  
        longitude: -95.387143, 
        weight: 1, 
    },
    {
        latitude: 29.675651,  
        longitude: -95.528224, 
        weight: 1, 
    },
    {
        latitude: 29.729874,  
        longitude: -95.351363, 
        weight: 1, 
    },
    {
        latitude: 29.824007,  
        longitude: -95.462212, 
        weight: 1, 
    },
    {
        latitude: 29.808736,  
        longitude: -95.475227, 
        weight: 1, 
    },
    {
        latitude: 29.83845,  
        longitude: -95.335878, 
        weight: 1, 
    },
    {
        latitude: 29.691002,  
        longitude: -95.417121, 
        weight: 1, 
    },
    {
        latitude: 29.707254,  
        longitude: -95.509323, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.761417,  
        longitude: -95.395758, 
        weight: 1, 
    },
    {
        latitude: 29.761417,  
        longitude: -95.395758, 
        weight: 1, 
    },
    {
        latitude: 29.77107,  
        longitude: -95.1865, 
        weight: 1, 
    },
    {
        latitude: 29.694696,  
        longitude: -95.287374, 
        weight: 1, 
    },
    {
        latitude: 29.78054,  
        longitude: -95.346479, 
        weight: 1, 
    },
    {
        latitude: 29.69965,  
        longitude: -95.418259, 
        weight: 1, 
    },
    {
        latitude: 29.848211,  
        longitude: -95.317214, 
        weight: 1, 
    },
    {
        latitude: 29.950591,  
        longitude: -95.547041, 
        weight: 1, 
    },
    {
        latitude: 29.719998,  
        longitude: -95.490302, 
        weight: 1, 
    },
    {
        latitude: 29.674887,  
        longitude: -95.581768, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.879986,  
        longitude: -95.446107, 
        weight: 1, 
    },
    {
        latitude: 30.054669,  
        longitude: -95.223247, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.737288,  
        longitude: -95.529324, 
        weight: 1, 
    },
    {
        latitude: 29.694588,  
        longitude: -95.285199, 
        weight: 1, 
    },
    {
        latitude: 29.694588,  
        longitude: -95.285199, 
        weight: 1, 
    },
    {
        latitude: 29.752664,  
        longitude: -95.360624, 
        weight: 1, 
    },
    {
        latitude: 29.987427,  
        longitude: -95.33944, 
        weight: 1, 
    },
    {
        latitude: 29.751926,  
        longitude: -95.410695, 
        weight: 1, 
    },
    {
        latitude: 29.73699,  
        longitude: -95.306267, 
        weight: 1, 
    },
    {
        latitude: 29.73699,  
        longitude: -95.306267, 
        weight: 1, 
    },
    {
        latitude: 29.73699,  
        longitude: -95.306267, 
        weight: 1, 
    },
    {
        latitude: 29.596125,  
        longitude: -95.198428, 
        weight: 1, 
    },
    {
        latitude: 29.663103,  
        longitude: -95.58618, 
        weight: 1, 
    },
    {
        latitude: 29.663103,  
        longitude: -95.58618, 
        weight: 1, 
    },
    {
        latitude: 29.628097,  
        longitude: -95.465032, 
        weight: 1, 
    },
    {
        latitude: 29.822691,  
        longitude: -95.539368, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.95341,  
        longitude: -95.538947, 
        weight: 1, 
    },
    {
        latitude: 29.966978,  
        longitude: -95.545658, 
        weight: 1, 
    },
    {
        latitude: 29.78938,  
        longitude: -95.468053, 
        weight: 1, 
    },
    {
        latitude: 29.757681,  
        longitude: -95.383175, 
        weight: 1, 
    },
    {
        latitude: 29.757681,  
        longitude: -95.383175, 
        weight: 1, 
    },
    {
        latitude: 29.749457,  
        longitude: -95.370778, 
        weight: 1, 
    },
    {
        latitude: 29.821165,  
        longitude: -95.530866, 
        weight: 1, 
    },
    {
        latitude: 29.82824,  
        longitude: -95.433583, 
        weight: 1, 
    },
    {
        latitude: 29.851569,  
        longitude: -95.433905, 
        weight: 1, 
    },
    {
        latitude: 29.966778,  
        longitude: -95.536709, 
        weight: 1, 
    },
    {
        latitude: 29.691066,  
        longitude: -95.417133, 
        weight: 1, 
    },
    {
        latitude: 29.785099,  
        longitude: -95.532315, 
        weight: 1, 
    },
    {
        latitude: 29.759389,  
        longitude: -95.317902, 
        weight: 1, 
    },
    {
        latitude: 29.740853,  
        longitude: -95.458721, 
        weight: 1, 
    },
    {
        latitude: 29.667219,  
        longitude: -95.312218, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.558114, 
        weight: 1, 
    },
    {
        latitude: 29.96626,  
        longitude: -95.547937, 
        weight: 1, 
    },
    {
        latitude: 29.788923,  
        longitude: -95.393014, 
        weight: 1, 
    },
    {
        latitude: 29.785918,  
        longitude: -95.463587, 
        weight: 1, 
    },
    {
        latitude: 29.741206,  
        longitude: -95.576226, 
        weight: 1, 
    },
    {
        latitude: 29.650984,  
        longitude: -95.355881, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.690721,  
        longitude: -95.27058, 
        weight: 1, 
    },
    {
        latitude: 29.812315,  
        longitude: -95.427938, 
        weight: 1, 
    },
    {
        latitude: 29.93841,  
        longitude: -95.385351, 
        weight: 1, 
    },
    {
        latitude: 29.72004,  
        longitude: -95.485215, 
        weight: 1, 
    },
    {
        latitude: 29.72004,  
        longitude: -95.485215, 
        weight: 1, 
    },
    {
        latitude: 29.72004,  
        longitude: -95.485215, 
        weight: 1, 
    },
    {
        latitude: 29.72004,  
        longitude: -95.485215, 
        weight: 1, 
    },
    {
        latitude: 29.790554,  
        longitude: -95.407013, 
        weight: 1, 
    },
    {
        latitude: 29.729913,  
        longitude: -95.596302, 
        weight: 1, 
    },
    {
        latitude: 29.81975,  
        longitude: -95.459464, 
        weight: 1, 
    },
    {
        latitude: 29.767962,  
        longitude: -95.340707, 
        weight: 1, 
    },
    {
        latitude: 29.648042,  
        longitude: -95.219302, 
        weight: 1, 
    },
    {
        latitude: 29.94464,  
        longitude: -95.546768, 
        weight: 1, 
    },
    {
        latitude: 29.785289,  
        longitude: -95.46956, 
        weight: 1, 
    },
    {
        latitude: 29.785289,  
        longitude: -95.46956, 
        weight: 1, 
    },
    {
        latitude: 29.785289,  
        longitude: -95.46956, 
        weight: 1, 
    },
    {
        latitude: 29.703712,  
        longitude: -95.364183, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.703775,  
        longitude: -95.581203, 
        weight: 1, 
    },
    {
        latitude: 29.851207,  
        longitude: -95.510231, 
        weight: 1, 
    },
    {
        latitude: 29.673744,  
        longitude: -95.554999, 
        weight: 1, 
    },
    {
        latitude: 29.673744,  
        longitude: -95.554999, 
        weight: 1, 
    },
    {
        latitude: 29.673744,  
        longitude: -95.554999, 
        weight: 1, 
    },
    {
        latitude: 29.944631,  
        longitude: -95.399855, 
        weight: 1, 
    },
    {
        latitude: 29.822885,  
        longitude: -95.547276, 
        weight: 1, 
    },
    {
        latitude: 29.854493,  
        longitude: -95.467544, 
        weight: 1, 
    },
    {
        latitude: 29.727016,  
        longitude: -95.418611, 
        weight: 1, 
    },
    {
        latitude: 29.839723,  
        longitude: -95.279212, 
        weight: 1, 
    },
    {
        latitude: 29.73271,  
        longitude: -95.436379, 
        weight: 1, 
    },
    {
        latitude: 29.822851,  
        longitude: -95.546982, 
        weight: 1, 
    },
    {
        latitude: 29.854495,  
        longitude: -95.469075, 
        weight: 1, 
    },
    {
        latitude: 29.735414,  
        longitude: -95.466535, 
        weight: 1, 
    },
    {
        latitude: 29.684236,  
        longitude: -95.383525, 
        weight: 1, 
    },
    {
        latitude: 29.664308,  
        longitude: -95.361477, 
        weight: 1, 
    },
    {
        latitude: 29.789453,  
        longitude: -95.688335, 
        weight: 1, 
    },
    {
        latitude: 29.68784,  
        longitude: -95.558185, 
        weight: 1, 
    },
    {
        latitude: 29.757075,  
        longitude: -95.375286, 
        weight: 1, 
    },
    {
        latitude: 29.669664,  
        longitude: -95.529735, 
        weight: 1, 
    },
    {
        latitude: 29.740751,  
        longitude: -95.460882, 
        weight: 1, 
    },
    {
        latitude: 29.740751,  
        longitude: -95.460882, 
        weight: 1, 
    },
    {
        latitude: 29.747452,  
        longitude: -95.366074, 
        weight: 1, 
    },
    {
        latitude: 29.747452,  
        longitude: -95.366074, 
        weight: 1, 
    },
    {
        latitude: 29.67208,  
        longitude: -95.577391, 
        weight: 1, 
    },
    {
        latitude: 29.717532,  
        longitude: -95.52, 
        weight: 1, 
    },
    {
        latitude: 29.685195,  
        longitude: -95.419458, 
        weight: 1, 
    },
    {
        latitude: 29.934668,  
        longitude: -95.410624, 
        weight: 1, 
    },
    {
        latitude: 29.761184,  
        longitude: -95.348897, 
        weight: 1, 
    },
    {
        latitude: 29.761184,  
        longitude: -95.348897, 
        weight: 1, 
    },
    {
        latitude: 29.663495,  
        longitude: -95.508523, 
        weight: 1, 
    },
    {
        latitude: 29.663495,  
        longitude: -95.508523, 
        weight: 1, 
    },
    {
        latitude: 29.949013,  
        longitude: -95.355934, 
        weight: 1, 
    },
    {
        latitude: 29.758451,  
        longitude: -95.367575, 
        weight: 1, 
    },
    {
        latitude: 29.85763,  
        longitude: -95.300055, 
        weight: 1, 
    },
    {
        latitude: 29.593278,  
        longitude: -95.17009, 
        weight: 1, 
    },
    {
        latitude: 29.794414,  
        longitude: -95.342095, 
        weight: 1, 
    },
    {
        latitude: 29.785621,  
        longitude: -95.36066, 
        weight: 1, 
    },
    {
        latitude: 30.044599,  
        longitude: -95.243683, 
        weight: 1, 
    },
    {
        latitude: 29.825913,  
        longitude: -95.342583, 
        weight: 1, 
    },
    {
        latitude: 29.818764,  
        longitude: -95.47374, 
        weight: 1, 
    },
    {
        latitude: 29.758476,  
        longitude: -95.377035, 
        weight: 1, 
    },
    {
        latitude: 29.629193,  
        longitude: -95.266531, 
        weight: 1, 
    },
    {
        latitude: 29.629193,  
        longitude: -95.266531, 
        weight: 1, 
    },
    {
        latitude: 29.697467,  
        longitude: -95.331513, 
        weight: 1, 
    },
    {
        latitude: 29.756663,  
        longitude: -95.366453, 
        weight: 1, 
    },
    {
        latitude: 29.784345,  
        longitude: -95.479439, 
        weight: 1, 
    },
    {
        latitude: 29.784345,  
        longitude: -95.479439, 
        weight: 1, 
    },
    {
        latitude: 29.986569,  
        longitude: -95.349352, 
        weight: 1, 
    },
    {
        latitude: 29.705002,  
        longitude: -95.538262, 
        weight: 1, 
    },
    {
        latitude: 29.639336,  
        longitude: -95.344518, 
        weight: 1, 
    },
    {
        latitude: 29.689185,  
        longitude: -95.565701, 
        weight: 1, 
    },
    {
        latitude: 29.74242,  
        longitude: -95.464213, 
        weight: 1, 
    },
    {
        latitude: 29.809087,  
        longitude: -95.452109, 
        weight: 1, 
    },
    {
        latitude: 29.948963,  
        longitude: -95.416374, 
        weight: 1, 
    },
    {
        latitude: 29.732229,  
        longitude: -95.543115, 
        weight: 1, 
    },
    {
        latitude: 29.661615,  
        longitude: -95.407676, 
        weight: 1, 
    },
    {
        latitude: 29.737103,  
        longitude: -95.545197, 
        weight: 1, 
    },
    {
        latitude: 29.748056,  
        longitude: -95.37067, 
        weight: 1, 
    },
    {
        latitude: 29.831837,  
        longitude: -95.567123, 
        weight: 1, 
    },
    {
        latitude: 30.043946,  
        longitude: -95.193201, 
        weight: 1, 
    },
    {
        latitude: 29.682517,  
        longitude: -95.574584, 
        weight: 1, 
    },
    {
        latitude: 29.737238,  
        longitude: -95.53274, 
        weight: 1, 
    },
    {
        latitude: 29.828448,  
        longitude: -95.378575, 
        weight: 1, 
    },
    {
        latitude: 29.770518,  
        longitude: -95.415124, 
        weight: 1, 
    },
    {
        latitude: 29.94609,  
        longitude: -95.43923, 
        weight: 1, 
    },
    {
        latitude: 29.666488,  
        longitude: -95.400619, 
        weight: 1, 
    },
    {
        latitude: 29.666488,  
        longitude: -95.400619, 
        weight: 1, 
    },
    {
        latitude: 29.826737,  
        longitude: -95.312368, 
        weight: 1, 
    },
    {
        latitude: 29.735981,  
        longitude: -95.616122, 
        weight: 1, 
    },
    {
        latitude: 29.715355,  
        longitude: -95.548172, 
        weight: 1, 
    },
    {
        latitude: 29.742601,  
        longitude: -95.410503, 
        weight: 1, 
    },
    {
        latitude: 29.742601,  
        longitude: -95.410503, 
        weight: 1, 
    },
    {
        latitude: 29.737815,  
        longitude: -95.483446, 
        weight: 1, 
    },
    {
        latitude: 29.715231,  
        longitude: -95.575293, 
        weight: 1, 
    },
    {
        latitude: 29.631375,  
        longitude: -95.44433, 
        weight: 1, 
    },
    {
        latitude: 29.801561,  
        longitude: -95.443711, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.738017,  
        longitude: -95.418728, 
        weight: 1, 
    },
    {
        latitude: 29.733446,  
        longitude: -95.353472, 
        weight: 1, 
    },
    {
        latitude: 29.699635,  
        longitude: -95.382732, 
        weight: 1, 
    },
    {
        latitude: 29.801105,  
        longitude: -95.526695, 
        weight: 1, 
    },
    {
        latitude: 29.801105,  
        longitude: -95.526695, 
        weight: 1, 
    },
    {
        latitude: 29.809735,  
        longitude: -95.424337, 
        weight: 1, 
    },
    {
        latitude: 29.690553,  
        longitude: -95.329489, 
        weight: 1, 
    },
    {
        latitude: 29.766246,  
        longitude: -95.551242, 
        weight: 1, 
    },
    {
        latitude: 29.750643,  
        longitude: -95.38081, 
        weight: 1, 
    },
    {
        latitude: 29.750643,  
        longitude: -95.38081, 
        weight: 1, 
    },
    {
        latitude: 29.673744,  
        longitude: -95.291505, 
        weight: 1, 
    },
    {
        latitude: 29.938599,  
        longitude: -95.36581, 
        weight: 1, 
    },
    {
        latitude: 29.85934,  
        longitude: -95.402793, 
        weight: 1, 
    },
    {
        latitude: 29.666944,  
        longitude: -95.276994, 
        weight: 1, 
    },
    {
        latitude: 29.666944,  
        longitude: -95.276994, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.835643,  
        longitude: -95.264704, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.843856,  
        longitude: -95.499144, 
        weight: 1, 
    },
    {
        latitude: 29.637561,  
        longitude: -95.327629, 
        weight: 1, 
    },
    {
        latitude: 29.617841,  
        longitude: -95.201195, 
        weight: 1, 
    },
    {
        latitude: 29.94117,  
        longitude: -95.414394, 
        weight: 1, 
    },
    {
        latitude: 29.688577,  
        longitude: -95.569261, 
        weight: 1, 
    },
    {
        latitude: 29.688577,  
        longitude: -95.569261, 
        weight: 1, 
    },
    {
        latitude: 29.600622,  
        longitude: -95.176971, 
        weight: 1, 
    },
    {
        latitude: 29.738862,  
        longitude: -95.531524, 
        weight: 1, 
    },
    {
        latitude: 29.738862,  
        longitude: -95.531524, 
        weight: 1, 
    },
    {
        latitude: 29.635798,  
        longitude: -95.230634, 
        weight: 1, 
    },
    {
        latitude: 30.045205,  
        longitude: -95.234811, 
        weight: 1, 
    },
    {
        latitude: 29.843703,  
        longitude: -95.343814, 
        weight: 1, 
    },
    {
        latitude: 29.657699,  
        longitude: -95.387946, 
        weight: 1, 
    },
    {
        latitude: 29.8077,  
        longitude: -95.42606, 
        weight: 1, 
    },
    {
        latitude: 29.868572,  
        longitude: -95.340274, 
        weight: 1, 
    },
    {
        latitude: 29.736038,  
        longitude: -95.612141, 
        weight: 1, 
    },
    {
        latitude: 29.642629,  
        longitude: -95.327131, 
        weight: 1, 
    },
    {
        latitude: 29.770034,  
        longitude: -95.430372, 
        weight: 1, 
    },
    {
        latitude: 29.770034,  
        longitude: -95.430372, 
        weight: 1, 
    },
    {
        latitude: 29.721148,  
        longitude: -95.476472, 
        weight: 1, 
    },
    {
        latitude: 29.734413,  
        longitude: -95.40007, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.846316,  
        longitude: -95.386921, 
        weight: 1, 
    },
    {
        latitude: 29.807765,  
        longitude: -95.416818, 
        weight: 1, 
    },
    {
        latitude: 29.651289,  
        longitude: -95.288762, 
        weight: 1, 
    },
    {
        latitude: 29.727548,  
        longitude: -95.418617, 
        weight: 1, 
    },
    {
        latitude: 29.779594,  
        longitude: -95.560614, 
        weight: 1, 
    },
    {
        latitude: 29.779594,  
        longitude: -95.560614, 
        weight: 1, 
    },
    {
        latitude: 29.796668,  
        longitude: -95.410018, 
        weight: 1, 
    },
    {
        latitude: 29.770665,  
        longitude: -95.381677, 
        weight: 1, 
    },
    {
        latitude: 29.662932,  
        longitude: -95.55511, 
        weight: 1, 
    },
    {
        latitude: 29.865763,  
        longitude: -95.484477, 
        weight: 1, 
    },
    {
        latitude: 29.713162,  
        longitude: -95.343565, 
        weight: 1, 
    },
    {
        latitude: 29.713162,  
        longitude: -95.343565, 
        weight: 1, 
    },
    {
        latitude: 29.785082,  
        longitude: -95.558072, 
        weight: 1, 
    },
    {
        latitude: 29.772621,  
        longitude: -95.560775, 
        weight: 1, 
    },
    {
        latitude: 29.838859,  
        longitude: -95.420282, 
        weight: 1, 
    },
    {
        latitude: 29.74362,  
        longitude: -95.353977, 
        weight: 1, 
    },
    {
        latitude: 29.637269,  
        longitude: -95.253946, 
        weight: 1, 
    },
    {
        latitude: 29.769421,  
        longitude: -95.299643, 
        weight: 1, 
    },
    {
        latitude: 29.952961,  
        longitude: -95.389025, 
        weight: 1, 
    },
    {
        latitude: 29.688319,  
        longitude: -95.330133, 
        weight: 1, 
    },
    {
        latitude: 29.659667,  
        longitude: -95.344292, 
        weight: 1, 
    },
    {
        latitude: 29.689152,  
        longitude: -95.455965, 
        weight: 1, 
    },
    {
        latitude: 29.716172,  
        longitude: -95.50591, 
        weight: 1, 
    },
    {
        latitude: 29.714515,  
        longitude: -95.536366, 
        weight: 1, 
    },
    {
        latitude: 29.675331,  
        longitude: -95.268304, 
        weight: 1, 
    },
    {
        latitude: 29.63383,  
        longitude: -95.350402, 
        weight: 1, 
    },
    {
        latitude: 29.719991,  
        longitude: -95.489308, 
        weight: 1, 
    },
    {
        latitude: 29.818565,  
        longitude: -95.284477, 
        weight: 1, 
    },
    {
        latitude: 29.701638,  
        longitude: -95.583374, 
        weight: 1, 
    },
    {
        latitude: 29.819572,  
        longitude: -95.240638, 
        weight: 1, 
    },
    {
        latitude: 29.86056,  
        longitude: -95.527336, 
        weight: 1, 
    },
    {
        latitude: 29.72193,  
        longitude: -95.295954, 
        weight: 1, 
    },
    {
        latitude: 29.806009,  
        longitude: -95.545143, 
        weight: 1, 
    },
    {
        latitude: 29.736848,  
        longitude: -95.564487, 
        weight: 1, 
    },
    {
        latitude: 29.663536,  
        longitude: -95.259048, 
        weight: 1, 
    },
    {
        latitude: 29.707072,  
        longitude: -95.493086, 
        weight: 1, 
    },
    {
        latitude: 29.783315,  
        longitude: -95.467678, 
        weight: 1, 
    },
    {
        latitude: 29.783315,  
        longitude: -95.467678, 
        weight: 1, 
    },
    {
        latitude: 29.857689,  
        longitude: -95.304337, 
        weight: 1, 
    },
    {
        latitude: 29.871719,  
        longitude: -95.281448, 
        weight: 1, 
    },
    {
        latitude: 29.957766,  
        longitude: -95.541661, 
        weight: 1, 
    },
    {
        latitude: 29.733466,  
        longitude: -95.360481, 
        weight: 1, 
    },
    {
        latitude: 29.665893,  
        longitude: -95.341815, 
        weight: 1, 
    },
    {
        latitude: 29.750021,  
        longitude: -95.366569, 
        weight: 1, 
    },
    {
        latitude: 29.599829,  
        longitude: -95.464914, 
        weight: 1, 
    },
    {
        latitude: 29.713056,  
        longitude: -95.51582, 
        weight: 1, 
    },
    {
        latitude: 29.717662,  
        longitude: -95.519999, 
        weight: 1, 
    },
    {
        latitude: 29.692263,  
        longitude: -95.497991, 
        weight: 1, 
    },
    {
        latitude: 29.747535,  
        longitude: -95.572067, 
        weight: 1, 
    },
    {
        latitude: 30.068716,  
        longitude: -95.162002, 
        weight: 1, 
    },
    {
        latitude: 29.826788,  
        longitude: -95.454601, 
        weight: 1, 
    },
    {
        latitude: 29.711021,  
        longitude: -95.506126, 
        weight: 1, 
    },
    {
        latitude: 29.776411,  
        longitude: -95.409556, 
        weight: 1, 
    },
    {
        latitude: 29.605191,  
        longitude: -95.244388, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.726807,  
        longitude: -95.372309, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.712748,  
        longitude: -95.490237, 
        weight: 1, 
    },
    {
        latitude: 29.616602,  
        longitude: -95.381621, 
        weight: 1, 
    },
    {
        latitude: 29.600551,  
        longitude: -95.345847, 
        weight: 1, 
    },
    {
        latitude: 29.600551,  
        longitude: -95.345847, 
        weight: 1, 
    },
    {
        latitude: 29.836082,  
        longitude: -95.506319, 
        weight: 1, 
    },
    {
        latitude: 29.859566,  
        longitude: -95.473354, 
        weight: 1, 
    },
    {
        latitude: 29.775191,  
        longitude: -95.427266, 
        weight: 1, 
    },
    {
        latitude: 29.933136,  
        longitude: -95.414853, 
        weight: 1, 
    },
    {
        latitude: 29.77029,  
        longitude: -95.186539, 
        weight: 1, 
    },
    {
        latitude: 29.782258,  
        longitude: -95.606463, 
        weight: 1, 
    },
    {
        latitude: 29.793576,  
        longitude: -95.684048, 
        weight: 1, 
    },
    {
        latitude: 29.793576,  
        longitude: -95.684048, 
        weight: 1, 
    },
    {
        latitude: 29.78444,  
        longitude: -95.652817, 
        weight: 1, 
    },
    {
        latitude: 29.728173,  
        longitude: -95.543422, 
        weight: 1, 
    },
    {
        latitude: 29.543268,  
        longitude: -95.145817, 
        weight: 1, 
    },
    {
        latitude: 29.785101,  
        longitude: -95.532814, 
        weight: 1, 
    },
    {
        latitude: 29.776198,  
        longitude: -95.393966, 
        weight: 1, 
    },
    {
        latitude: 29.959917,  
        longitude: -95.429085, 
        weight: 1, 
    },
    {
        latitude: 29.700217,  
        longitude: -95.609593, 
        weight: 1, 
    },
    {
        latitude: 29.700217,  
        longitude: -95.609593, 
        weight: 1, 
    },
    {
        latitude: 29.812572,  
        longitude: -95.383639, 
        weight: 1, 
    },
    {
        latitude: 29.870987,  
        longitude: -95.351537, 
        weight: 1, 
    },
    {
        latitude: 29.950591,  
        longitude: -95.547041, 
        weight: 1, 
    },
    {
        latitude: 29.687876,  
        longitude: -95.51044, 
        weight: 1, 
    },
    {
        latitude: 29.687876,  
        longitude: -95.51044, 
        weight: 1, 
    },
    {
        latitude: 29.687876,  
        longitude: -95.51044, 
        weight: 1, 
    },
    {
        latitude: 29.687876,  
        longitude: -95.51044, 
        weight: 1, 
    },
    {
        latitude: 29.749735,  
        longitude: -95.45639, 
        weight: 1, 
    },
    {
        latitude: 29.831151,  
        longitude: -95.373694, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.673922,  
        longitude: -95.285774, 
        weight: 1, 
    },
    {
        latitude: 29.828601,  
        longitude: -95.509256, 
        weight: 1, 
    },
    {
        latitude: 29.649665,  
        longitude: -95.249978, 
        weight: 1, 
    },
    {
        latitude: 29.836546,  
        longitude: -95.473054, 
        weight: 1, 
    },
    {
        latitude: 29.725675,  
        longitude: -95.356257, 
        weight: 1, 
    },
    {
        latitude: 29.725675,  
        longitude: -95.356257, 
        weight: 1, 
    },
    {
        latitude: 29.669306,  
        longitude: -95.532547, 
        weight: 1, 
    },
    {
        latitude: 29.555751,  
        longitude: -95.150305, 
        weight: 1, 
    },
    {
        latitude: 30.007064,  
        longitude: -95.318282, 
        weight: 1, 
    },
    {
        latitude: 29.950459,  
        longitude: -95.403971, 
        weight: 1, 
    },
    {
        latitude: 29.711021,  
        longitude: -95.506126, 
        weight: 1, 
    },
    {
        latitude: 29.729038,  
        longitude: -95.521881, 
        weight: 1, 
    },
    {
        latitude: 29.729,  
        longitude: -95.41863, 
        weight: 1, 
    },
    {
        latitude: 29.729,  
        longitude: -95.41863, 
        weight: 1, 
    },
    {
        latitude: 29.736079,  
        longitude: -95.399423, 
        weight: 1, 
    },
    {
        latitude: 29.784439,  
        longitude: -95.652515, 
        weight: 1, 
    },
    {
        latitude: 29.735907,  
        longitude: -95.619586, 
        weight: 1, 
    },
    {
        latitude: 29.686662,  
        longitude: -95.403251, 
        weight: 1, 
    },
    {
        latitude: 29.845678,  
        longitude: -95.371763, 
        weight: 1, 
    },
    {
        latitude: 29.810631,  
        longitude: -95.38203, 
        weight: 1, 
    },
    {
        latitude: 29.764326,  
        longitude: -95.401771, 
        weight: 1, 
    },
    {
        latitude: 29.788906,  
        longitude: -95.688628, 
        weight: 1, 
    },
    {
        latitude: 29.764326,  
        longitude: -95.401771, 
        weight: 1, 
    },
    {
        latitude: 29.813789,  
        longitude: -95.514084, 
        weight: 1, 
    },
    {
        latitude: 29.699245,  
        longitude: -95.369829, 
        weight: 1, 
    },
    {
        latitude: 29.559528,  
        longitude: -95.144311, 
        weight: 1, 
    },
    {
        latitude: 29.559528,  
        longitude: -95.144311, 
        weight: 1, 
    },
    {
        latitude: 29.688611,  
        longitude: -95.419107, 
        weight: 1, 
    },
    {
        latitude: 29.848239,  
        longitude: -95.339268, 
        weight: 1, 
    },
    {
        latitude: 29.73707,  
        longitude: -95.547122, 
        weight: 1, 
    },
    {
        latitude: 29.762335,  
        longitude: -95.405243, 
        weight: 1, 
    },
    {
        latitude: 29.853742,  
        longitude: -95.513328, 
        weight: 1, 
    },
    {
        latitude: 29.887799,  
        longitude: -95.422604, 
        weight: 1, 
    },
    {
        latitude: 29.812675,  
        longitude: -95.539797, 
        weight: 1, 
    },
    {
        latitude: 29.812675,  
        longitude: -95.539797, 
        weight: 1, 
    },
    {
        latitude: 29.691599,  
        longitude: -95.294265, 
        weight: 1, 
    },
    {
        latitude: 29.691599,  
        longitude: -95.294265, 
        weight: 1, 
    },
    {
        latitude: 29.667093,  
        longitude: -95.565113, 
        weight: 1, 
    },
    {
        latitude: 29.669357,  
        longitude: -95.532631, 
        weight: 1, 
    },
    {
        latitude: 29.669357,  
        longitude: -95.532631, 
        weight: 1, 
    },
    {
        latitude: 29.860975,  
        longitude: -95.39288, 
        weight: 1, 
    },
    {
        latitude: 29.732261,  
        longitude: -95.356953, 
        weight: 1, 
    },
    {
        latitude: 29.824089,  
        longitude: -95.464889, 
        weight: 1, 
    },
    {
        latitude: 29.853055,  
        longitude: -95.26238, 
        weight: 1, 
    },
    {
        latitude: 29.850924,  
        longitude: -95.515418, 
        weight: 1, 
    },
    {
        latitude: 29.633242,  
        longitude: -95.422503, 
        weight: 1, 
    },
    {
        latitude: 29.728696,  
        longitude: -95.444259, 
        weight: 1, 
    },
    {
        latitude: 29.824144,  
        longitude: -95.320611, 
        weight: 1, 
    },
    {
        latitude: 29.824144,  
        longitude: -95.320611, 
        weight: 1, 
    },
    {
        latitude: 29.841437,  
        longitude: -95.256216, 
        weight: 1, 
    },
    {
        latitude: 29.687357,  
        longitude: -95.575485, 
        weight: 1, 
    },
    {
        latitude: 29.664487,  
        longitude: -95.503568, 
        weight: 1, 
    },
    {
        latitude: 29.731527,  
        longitude: -95.479274, 
        weight: 1, 
    },
    {
        latitude: 29.731526,  
        longitude: -95.479152, 
        weight: 1, 
    },
    {
        latitude: 29.731526,  
        longitude: -95.479152, 
        weight: 1, 
    },
    {
        latitude: 29.736656,  
        longitude: -95.466749, 
        weight: 1, 
    },
    {
        latitude: 29.741446,  
        longitude: -95.416385, 
        weight: 1, 
    },
    {
        latitude: 29.940748,  
        longitude: -95.428285, 
        weight: 1, 
    },
    {
        latitude: 29.825768,  
        longitude: -95.33768, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.784428,  
        longitude: -95.650886, 
        weight: 1, 
    },
    {
        latitude: 29.935429,  
        longitude: -95.327167, 
        weight: 1, 
    },
    {
        latitude: 29.689005,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.648205,  
        longitude: -95.249012, 
        weight: 1, 
    },
    {
        latitude: 29.732991,  
        longitude: -95.563825, 
        weight: 1, 
    },
    {
        latitude: 29.861376,  
        longitude: -95.473367, 
        weight: 1, 
    },
    {
        latitude: 29.861376,  
        longitude: -95.473367, 
        weight: 1, 
    },
    {
        latitude: 29.675188,  
        longitude: -95.586846, 
        weight: 1, 
    },
    {
        latitude: 29.862863,  
        longitude: -95.3977, 
        weight: 1, 
    },
    {
        latitude: 29.84955,  
        longitude: -95.298818, 
        weight: 1, 
    },
    {
        latitude: 29.805055,  
        longitude: -95.408063, 
        weight: 1, 
    },
    {
        latitude: 29.805055,  
        longitude: -95.408063, 
        weight: 1, 
    },
    {
        latitude: 29.747889,  
        longitude: -95.372187, 
        weight: 1, 
    },
    {
        latitude: 29.950592,  
        longitude: -95.399187, 
        weight: 1, 
    },
    {
        latitude: 29.731709,  
        longitude: -95.498258, 
        weight: 1, 
    },
    {
        latitude: 29.822672,  
        longitude: -95.539012, 
        weight: 1, 
    },
    {
        latitude: 29.689343,  
        longitude: -95.365385, 
        weight: 1, 
    },
    {
        latitude: 29.735508,  
        longitude: -95.588625, 
        weight: 1, 
    },
    {
        latitude: 29.95056,  
        longitude: -95.400683, 
        weight: 1, 
    },
    {
        latitude: 29.95056,  
        longitude: -95.400683, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.67912,  
        longitude: -95.484096, 
        weight: 1, 
    },
    {
        latitude: 29.670876,  
        longitude: -95.542507, 
        weight: 1, 
    },
    {
        latitude: 29.670876,  
        longitude: -95.542507, 
        weight: 1, 
    },
    {
        latitude: 29.666738,  
        longitude: -95.591804, 
        weight: 1, 
    },
    {
        latitude: 29.666738,  
        longitude: -95.591804, 
        weight: 1, 
    },
    {
        latitude: 29.834913,  
        longitude: -95.29767, 
        weight: 1, 
    },
    {
        latitude: 29.809339,  
        longitude: -95.470823, 
        weight: 1, 
    },
    {
        latitude: 29.735195,  
        longitude: -95.476537, 
        weight: 1, 
    },
    {
        latitude: 29.735195,  
        longitude: -95.476537, 
        weight: 1, 
    },
    {
        latitude: 29.749859,  
        longitude: -95.376892, 
        weight: 1, 
    },
    {
        latitude: 29.728912,  
        longitude: -95.600325, 
        weight: 1, 
    },
    {
        latitude: 29.752781,  
        longitude: -95.378126, 
        weight: 1, 
    },
    {
        latitude: 29.665492,  
        longitude: -95.520856, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.784246,  
        longitude: -95.606488, 
        weight: 1, 
    },
    {
        latitude: 29.779885,  
        longitude: -95.544502, 
        weight: 1, 
    },
    {
        latitude: 29.738283,  
        longitude: -95.434693, 
        weight: 1, 
    },
    {
        latitude: 29.778784,  
        longitude: -95.558077, 
        weight: 1, 
    },
    {
        latitude: 29.792199,  
        longitude: -95.688366, 
        weight: 1, 
    },
    {
        latitude: 29.71453,  
        longitude: -95.278207, 
        weight: 1, 
    },
    {
        latitude: 29.71453,  
        longitude: -95.278207, 
        weight: 1, 
    },
    {
        latitude: 29.602757,  
        longitude: -95.211839, 
        weight: 1, 
    },
    {
        latitude: 29.849823,  
        longitude: -95.277871, 
        weight: 1, 
    },
    {
        latitude: 29.849823,  
        longitude: -95.277871, 
        weight: 1, 
    },
    {
        latitude: 29.867498,  
        longitude: -95.397795, 
        weight: 1, 
    },
    {
        latitude: 29.867498,  
        longitude: -95.397795, 
        weight: 1, 
    },
    {
        latitude: 29.867498,  
        longitude: -95.397795, 
        weight: 1, 
    },
    {
        latitude: 29.867498,  
        longitude: -95.397795, 
        weight: 1, 
    },
    {
        latitude: 29.693618,  
        longitude: -95.322921, 
        weight: 1, 
    },
    {
        latitude: 29.601797,  
        longitude: -95.481252, 
        weight: 1, 
    },
    {
        latitude: 29.674734,  
        longitude: -95.419487, 
        weight: 1, 
    },
    {
        latitude: 29.690469,  
        longitude: -95.346429, 
        weight: 1, 
    },
    {
        latitude: 29.796887,  
        longitude: -95.327744, 
        weight: 1, 
    },
    {
        latitude: 30.043203,  
        longitude: -95.221426, 
        weight: 1, 
    },
    {
        latitude: 29.766935,  
        longitude: -95.381769, 
        weight: 1, 
    },
    {
        latitude: 29.850348,  
        longitude: -95.53207, 
        weight: 1, 
    },
    {
        latitude: 29.850348,  
        longitude: -95.53207, 
        weight: 1, 
    },
    {
        latitude: 29.771491,  
        longitude: -95.39862, 
        weight: 1, 
    },
    {
        latitude: 29.771491,  
        longitude: -95.39862, 
        weight: 1, 
    },
    {
        latitude: 29.774652,  
        longitude: -95.317424, 
        weight: 1, 
    },
    {
        latitude: 29.695534,  
        longitude: -95.388058, 
        weight: 1, 
    },
    {
        latitude: 29.81632,  
        longitude: -95.368209, 
        weight: 1, 
    },
    {
        latitude: 29.562414,  
        longitude: -95.114752, 
        weight: 1, 
    },
    {
        latitude: 29.702376,  
        longitude: -95.286284, 
        weight: 1, 
    },
    {
        latitude: 29.739068,  
        longitude: -95.441624, 
        weight: 1, 
    },
    {
        latitude: 30.05499,  
        longitude: -95.250952, 
        weight: 1, 
    },
    {
        latitude: 29.757372,  
        longitude: -95.609888, 
        weight: 1, 
    },
    {
        latitude: 29.757372,  
        longitude: -95.609888, 
        weight: 1, 
    },
    {
        latitude: 29.62795,  
        longitude: -95.422939, 
        weight: 1, 
    },
    {
        latitude: 29.784246,  
        longitude: -95.606488, 
        weight: 1, 
    },
    {
        latitude: 29.784246,  
        longitude: -95.606488, 
        weight: 1, 
    },
    {
        latitude: 29.665492,  
        longitude: -95.520856, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.709825,  
        longitude: -95.382107, 
        weight: 1, 
    },
    {
        latitude: 29.619337,  
        longitude: -95.479879, 
        weight: 1, 
    },
    {
        latitude: 29.702649,  
        longitude: -95.493026, 
        weight: 1, 
    },
    {
        latitude: 29.694577,  
        longitude: -95.318887, 
        weight: 1, 
    },
    {
        latitude: 29.778524,  
        longitude: -95.407756, 
        weight: 1, 
    },
    {
        latitude: 29.938599,  
        longitude: -95.36581, 
        weight: 1, 
    },
    {
        latitude: 29.793154,  
        longitude: -95.692624, 
        weight: 1, 
    },
    {
        latitude: 29.785252,  
        longitude: -95.595003, 
        weight: 1, 
    },
    {
        latitude: 29.65096,  
        longitude: -95.454328, 
        weight: 1, 
    },
    {
        latitude: 29.822532,  
        longitude: -95.472574, 
        weight: 1, 
    },
    {
        latitude: 29.778823,  
        longitude: -95.196001, 
        weight: 1, 
    },
    {
        latitude: 29.763725,  
        longitude: -95.359504, 
        weight: 1, 
    },
    {
        latitude: 29.965403,  
        longitude: -95.429567, 
        weight: 1, 
    },
    {
        latitude: 29.737311,  
        longitude: -95.526867, 
        weight: 1, 
    },
    {
        latitude: 29.689005,  
        longitude: -95.393539, 
        weight: 1, 
    },
    {
        latitude: 29.652749,  
        longitude: -95.550025, 
        weight: 1, 
    },
    {
        latitude: 29.689957,  
        longitude: -95.556752, 
        weight: 1, 
    },
    {
        latitude: 29.793405,  
        longitude: -95.413465, 
        weight: 1, 
    },
    {
        latitude: 29.954866,  
        longitude: -95.535466, 
        weight: 1, 
    },
    {
        latitude: 29.954866,  
        longitude: -95.535466, 
        weight: 1, 
    },
    {
        latitude: 29.84612,  
        longitude: -95.40323, 
        weight: 1, 
    },
    {
        latitude: 29.690594,  
        longitude: -95.543085, 
        weight: 1, 
    },
    {
        latitude: 29.741658,  
        longitude: -95.354053, 
        weight: 1, 
    },
    {
        latitude: 29.741658,  
        longitude: -95.354053, 
        weight: 1, 
    },
    {
        latitude: 29.751957,  
        longitude: -95.351151, 
        weight: 1, 
    },
    {
        latitude: 29.960646,  
        longitude: -95.424253, 
        weight: 1, 
    },
    {
        latitude: 29.728662,  
        longitude: -95.424198, 
        weight: 1, 
    },
    {
        latitude: 29.738198,  
        longitude: -95.442843, 
        weight: 1, 
    },
    {
        latitude: 29.65739,  
        longitude: -95.254108, 
        weight: 1, 
    },
    {
        latitude: 29.71924,  
        longitude: -95.372002, 
        weight: 1, 
    },
    {
        latitude: 29.648704,  
        longitude: -95.543951, 
        weight: 1, 
    },
    {
        latitude: 29.562414,  
        longitude: -95.114752, 
        weight: 1, 
    },
    {
        latitude: 29.816565,  
        longitude: -95.382801, 
        weight: 1, 
    },
    {
        latitude: 29.729816,  
        longitude: -95.351507, 
        weight: 1, 
    },
    {
        latitude: 29.734074,  
        longitude: -95.282411, 
        weight: 1, 
    },
    {
        latitude: 29.734074,  
        longitude: -95.282411, 
        weight: 1, 
    },
    {
        latitude: 29.734074,  
        longitude: -95.282411, 
        weight: 1, 
    },
    {
        latitude: 29.93992,  
        longitude: -95.410955, 
        weight: 1, 
    },
    {
        latitude: 29.757068,  
        longitude: -95.37706, 
        weight: 1, 
    },
    {
        latitude: 29.677301,  
        longitude: -95.329818, 
        weight: 1, 
    },
    {
        latitude: 29.675496,  
        longitude: -95.546066, 
        weight: 1, 
    },
    {
        latitude: 29.675496,  
        longitude: -95.546066, 
        weight: 1, 
    },
    {
        latitude: 29.675496,  
        longitude: -95.546066, 
        weight: 1, 
    },
    {
        latitude: 29.836828,  
        longitude: -95.486872, 
        weight: 1, 
    },
    {
        latitude: 29.699656,  
        longitude: -95.422969, 
        weight: 1, 
    },
    {
        latitude: 29.785183,  
        longitude: -95.719061, 
        weight: 1, 
    },
    {
        latitude: 29.743704,  
        longitude: -95.377964, 
        weight: 1, 
    },
    {
        latitude: 29.636292,  
        longitude: -95.349143, 
        weight: 1, 
    },
    {
        latitude: 29.680446,  
        longitude: -95.355878, 
        weight: 1, 
    },
    {
        latitude: 29.739706,  
        longitude: -95.364616, 
        weight: 1, 
    },
    {
        latitude: 29.575333,  
        longitude: -95.513507, 
        weight: 1, 
    },
    {
        latitude: 29.575333,  
        longitude: -95.513507, 
        weight: 1, 
    },
    {
        latitude: 29.812335,  
        longitude: -95.366341, 
        weight: 1, 
    },
    {
        latitude: 29.823093,  
        longitude: -95.459329, 
        weight: 1, 
    },
    {
        latitude: 29.828331,  
        longitude: -95.375433, 
        weight: 1, 
    },
    {
        latitude: 29.734255,  
        longitude: -95.406462, 
        weight: 1, 
    },
    {
        latitude: 29.704091,  
        longitude: -95.364037, 
        weight: 1, 
    },
    {
        latitude: 29.749575,  
        longitude: -95.378361, 
        weight: 1, 
    },
    {
        latitude: 29.670077,  
        longitude: -95.277056, 
        weight: 1, 
    },
    {
        latitude: 29.593313,  
        longitude: -95.179905, 
        weight: 1, 
    },
    {
        latitude: 29.858,  
        longitude: -95.425151, 
        weight: 1, 
    },
    {
        latitude: 29.858,  
        longitude: -95.425151, 
        weight: 1, 
    },
    {
        latitude: 29.695711,  
        longitude: -95.341858, 
        weight: 1, 
    },
    {
        latitude: 29.701909,  
        longitude: -95.479102, 
        weight: 1, 
    },
    {
        latitude: 29.730691,  
        longitude: -95.390273, 
        weight: 1, 
    },
    {
        latitude: 29.64282,  
        longitude: -95.402059, 
        weight: 1, 
    },
    {
        latitude: 29.714577,  
        longitude: -95.532856, 
        weight: 1, 
    },
    {
        latitude: 29.736842,  
        longitude: -95.436565, 
        weight: 1, 
    },
    {
        latitude: 29.675555,  
        longitude: -95.542852, 
        weight: 1, 
    },
    {
        latitude: 29.65801,  
        longitude: -95.376311, 
        weight: 1, 
    },
    {
        latitude: 29.65801,  
        longitude: -95.376311, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.837295,  
        longitude: -95.450391, 
        weight: 1, 
    },
    {
        latitude: 29.779922,  
        longitude: -95.623188, 
        weight: 1, 
    },
    {
        latitude: 29.67537,  
        longitude: -95.53656, 
        weight: 1, 
    },
    {
        latitude: 29.67537,  
        longitude: -95.53656, 
        weight: 1, 
    },
    {
        latitude: 29.769968,  
        longitude: -95.326324, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.81371,  
        longitude: -95.380295, 
        weight: 1, 
    },
    {
        latitude: 29.81371,  
        longitude: -95.380295, 
        weight: 1, 
    },
    {
        latitude: 29.728384,  
        longitude: -95.544187, 
        weight: 1, 
    },
    {
        latitude: 29.835668,  
        longitude: -95.397389, 
        weight: 1, 
    },
    {
        latitude: 29.835668,  
        longitude: -95.397389, 
        weight: 1, 
    },
    {
        latitude: 29.577218,  
        longitude: -95.125085, 
        weight: 1, 
    },
    {
        latitude: 29.848227,  
        longitude: -95.339085, 
        weight: 1, 
    },
    {
        latitude: 29.72449,  
        longitude: -95.592127, 
        weight: 1, 
    },
    {
        latitude: 29.854577,  
        longitude: -95.441868, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.786135,  
        longitude: -95.583562, 
        weight: 1, 
    },
    {
        latitude: 29.768454,  
        longitude: -95.397119, 
        weight: 1, 
    },
    {
        latitude: 29.880249,  
        longitude: -95.295374, 
        weight: 1, 
    },
    {
        latitude: 29.72289,  
        longitude: -95.476483, 
        weight: 1, 
    },
    {
        latitude: 29.627517,  
        longitude: -95.402202, 
        weight: 1, 
    },
    {
        latitude: 29.745013,  
        longitude: -95.365485, 
        weight: 1, 
    },
    {
        latitude: 29.659296,  
        longitude: -95.476707, 
        weight: 1, 
    },
    {
        latitude: 29.781152,  
        longitude: -95.409182, 
        weight: 1, 
    },
    {
        latitude: 29.763011,  
        longitude: -95.479878, 
        weight: 1, 
    },
    {
        latitude: 29.72759,  
        longitude: -95.362853, 
        weight: 1, 
    },
    {
        latitude: 29.91516,  
        longitude: -95.408886, 
        weight: 1, 
    },
    {
        latitude: 29.91516,  
        longitude: -95.408886, 
        weight: 1, 
    },
    {
        latitude: 29.91516,  
        longitude: -95.408886, 
        weight: 1, 
    },
    {
        latitude: 29.855291,  
        longitude: -95.251556, 
        weight: 1, 
    },
    {
        latitude: 29.855291,  
        longitude: -95.251556, 
        weight: 1, 
    },
    {
        latitude: 29.772294,  
        longitude: -95.22753, 
        weight: 1, 
    },
    {
        latitude: 29.772294,  
        longitude: -95.22753, 
        weight: 1, 
    },
    {
        latitude: 29.649061,  
        longitude: -95.372811, 
        weight: 1, 
    },
    {
        latitude: 29.931731,  
        longitude: -95.406322, 
        weight: 1, 
    },
    {
        latitude: 29.731771,  
        longitude: -95.493336, 
        weight: 1, 
    },
    {
        latitude: 29.731771,  
        longitude: -95.493336, 
        weight: 1, 
    },
    {
        latitude: 29.864398,  
        longitude: -95.282251, 
        weight: 1, 
    },
    {
        latitude: 29.734475,  
        longitude: -95.632445, 
        weight: 1, 
    },
    {
        latitude: 29.784182,  
        longitude: -95.592933, 
        weight: 1, 
    },
    {
        latitude: 29.798684,  
        longitude: -95.416062, 
        weight: 1, 
    },
    {
        latitude: 29.848902,  
        longitude: -95.471654, 
        weight: 1, 
    },
    {
        latitude: 29.69461,  
        longitude: -95.308398, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.945134,  
        longitude: -95.399832, 
        weight: 1, 
    },
    {
        latitude: 29.865207,  
        longitude: -95.280624, 
        weight: 1, 
    },
    {
        latitude: 29.667121,  
        longitude: -95.562824, 
        weight: 1, 
    },
    {
        latitude: 29.737411,  
        longitude: -95.379112, 
        weight: 1, 
    },
    {
        latitude: 29.740518,  
        longitude: -95.467052, 
        weight: 1, 
    },
    {
        latitude: 29.805139,  
        longitude: -95.238069, 
        weight: 1, 
    },
    {
        latitude: 29.745083,  
        longitude: -95.457628, 
        weight: 1, 
    },
    {
        latitude: 29.782996,  
        longitude: -95.651735, 
        weight: 1, 
    },
    {
        latitude: 29.782996,  
        longitude: -95.651735, 
        weight: 1, 
    },
    {
        latitude: 29.815106,  
        longitude: -95.559936, 
        weight: 1, 
    },
    {
        latitude: 29.815106,  
        longitude: -95.559936, 
        weight: 1, 
    },
    {
        latitude: 29.986284,  
        longitude: -95.118459, 
        weight: 1, 
    },
    {
        latitude: 29.654175,  
        longitude: -95.481032, 
        weight: 1, 
    },
    {
        latitude: 29.728673,  
        longitude: -95.410679, 
        weight: 1, 
    },
    {
        latitude: 30.047264,  
        longitude: -95.252082, 
        weight: 1, 
    },
    {
        latitude: 29.78303,  
        longitude: -95.283638, 
        weight: 1, 
    },
    {
        latitude: 29.722222,  
        longitude: -95.539444, 
        weight: 1, 
    },
    {
        latitude: 29.675084,  
        longitude: -95.553754, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.961981,  
        longitude: -95.556263, 
        weight: 1, 
    },
    {
        latitude: 29.841887,  
        longitude: -95.383578, 
        weight: 1, 
    },
    {
        latitude: 29.841887,  
        longitude: -95.383578, 
        weight: 1, 
    },
    {
        latitude: 29.67989,  
        longitude: -95.355873, 
        weight: 1, 
    },
    {
        latitude: 29.684226,  
        longitude: -95.319683, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.624554,  
        longitude: -95.238167, 
        weight: 1, 
    },
    {
        latitude: 29.722809,  
        longitude: -95.455173, 
        weight: 1, 
    },
    {
        latitude: 29.776205,  
        longitude: -95.333088, 
        weight: 1, 
    },
    {
        latitude: 29.771416,  
        longitude: -95.600458, 
        weight: 1, 
    },
    {
        latitude: 29.78444,  
        longitude: -95.652817, 
        weight: 1, 
    },
    {
        latitude: 29.830602,  
        longitude: -95.645644, 
        weight: 1, 
    },
    {
        latitude: 29.784482,  
        longitude: -95.66277, 
        weight: 1, 
    },
    {
        latitude: 29.755879,  
        longitude: -95.366796, 
        weight: 1, 
    },
    {
        latitude: 29.728988,  
        longitude: -95.527629, 
        weight: 1, 
    },
    {
        latitude: 29.73669,  
        longitude: -95.576164, 
        weight: 1, 
    },
    {
        latitude: 29.81957,  
        longitude: -95.208054, 
        weight: 1, 
    },
    {
        latitude: 29.666893,  
        longitude: -95.261276, 
        weight: 1, 
    },
    {
        latitude: 29.666893,  
        longitude: -95.261276, 
        weight: 1, 
    },
    {
        latitude: 29.666893,  
        longitude: -95.261276, 
        weight: 1, 
    },
    {
        latitude: 29.798616,  
        longitude: -95.383444, 
        weight: 1, 
    },
    {
        latitude: 29.785476,  
        longitude: -95.680677, 
        weight: 1, 
    },
    {
        latitude: 29.690501,  
        longitude: -95.346406, 
        weight: 1, 
    },
    {
        latitude: 29.747944,  
        longitude: -95.392773, 
        weight: 1, 
    },
    {
        latitude: 29.803948,  
        longitude: -95.316534, 
        weight: 1, 
    },
    {
        latitude: 29.905145,  
        longitude: -95.412765, 
        weight: 1, 
    },
    {
        latitude: 29.905145,  
        longitude: -95.412765, 
        weight: 1, 
    },
    {
        latitude: 29.905145,  
        longitude: -95.412765, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.828831,  
        longitude: -95.509251, 
        weight: 1, 
    },
    {
        latitude: 29.798279,  
        longitude: -95.408438, 
        weight: 1, 
    },
    {
        latitude: 29.794197,  
        longitude: -95.322122, 
        weight: 1, 
    },
    {
        latitude: 29.794197,  
        longitude: -95.322122, 
        weight: 1, 
    },
    {
        latitude: 29.794197,  
        longitude: -95.322122, 
        weight: 1, 
    },
    {
        latitude: 29.823093,  
        longitude: -95.459329, 
        weight: 1, 
    },
    {
        latitude: 29.668806,  
        longitude: -95.359352, 
        weight: 1, 
    },
    {
        latitude: 29.812684,  
        longitude: -95.556561, 
        weight: 1, 
    },
    {
        latitude: 29.746632,  
        longitude: -95.449008, 
        weight: 1, 
    },
    {
        latitude: 29.727773,  
        longitude: -95.643953, 
        weight: 1, 
    },
    {
        latitude: 29.75457,  
        longitude: -95.362834, 
        weight: 1, 
    },
    {
        latitude: 29.743208,  
        longitude: -95.47075, 
        weight: 1, 
    },
    {
        latitude: 29.71723,  
        longitude: -95.546054, 
        weight: 1, 
    },
    {
        latitude: 29.804065,  
        longitude: -95.39921, 
        weight: 1, 
    },
    {
        latitude: 29.784439,  
        longitude: -95.652515, 
        weight: 1, 
    },
    {
        latitude: 29.672894,  
        longitude: -95.461318, 
        weight: 1, 
    },
    {
        latitude: 29.739933,  
        longitude: -95.377085, 
        weight: 1, 
    },
    {
        latitude: 30.059989,  
        longitude: -95.225174, 
        weight: 1, 
    },
    {
        latitude: 29.772866,  
        longitude: -95.3073, 
        weight: 1, 
    },
    {
        latitude: 29.65937,  
        longitude: -95.569671, 
        weight: 1, 
    },
    {
        latitude: 29.710538,  
        longitude: -95.27812, 
        weight: 1, 
    },
    {
        latitude: 29.804806,  
        longitude: -95.530824, 
        weight: 1, 
    },
    {
        latitude: 29.758291,  
        longitude: -95.359762, 
        weight: 1, 
    },
    {
        latitude: 29.758291,  
        longitude: -95.359762, 
        weight: 1, 
    },
    {
        latitude: 29.678967,  
        longitude: -95.482122, 
        weight: 1, 
    },
    {
        latitude: 29.835348,  
        longitude: -95.433612, 
        weight: 1, 
    },
    {
        latitude: 29.835348,  
        longitude: -95.433612, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.780785,  
        longitude: -95.547743, 
        weight: 1, 
    },
    {
        latitude: 29.792242,  
        longitude: -95.374918, 
        weight: 1, 
    },
    {
        latitude: 29.825964,  
        longitude: -95.304607, 
        weight: 1, 
    },
    {
        latitude: 29.665445,  
        longitude: -95.26032, 
        weight: 1, 
    },
    {
        latitude: 29.67564,  
        longitude: -95.5073, 
        weight: 1, 
    },
    {
        latitude: 29.733999,  
        longitude: -95.427001, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.959976,  
        longitude: -95.547866, 
        weight: 1, 
    },
    {
        latitude: 29.827133,  
        longitude: -95.526327, 
        weight: 1, 
    },
    {
        latitude: 29.734024,  
        longitude: -95.423319, 
        weight: 1, 
    },
    {
        latitude: 29.725551,  
        longitude: -95.361194, 
        weight: 1, 
    },
    {
        latitude: 29.987347,  
        longitude: -95.35243, 
        weight: 1, 
    },
    {
        latitude: 29.686633,  
        longitude: -95.508734, 
        weight: 1, 
    },
    {
        latitude: 29.834806,  
        longitude: -95.427197, 
        weight: 1, 
    },
    {
        latitude: 29.737453,  
        longitude: -95.507777, 
        weight: 1, 
    },
    {
        latitude: 29.737453,  
        longitude: -95.507777, 
        weight: 1, 
    },
    {
        latitude: 29.613412,  
        longitude: -95.219579, 
        weight: 1, 
    },
    {
        latitude: 29.763011,  
        longitude: -95.479878, 
        weight: 1, 
    },
    {
        latitude: 29.79709,  
        longitude: -95.327055, 
        weight: 1, 
    },
    {
        latitude: 29.786341,  
        longitude: -95.305018, 
        weight: 1, 
    },
    {
        latitude: 29.67912,  
        longitude: -95.484096, 
        weight: 1, 
    },
    {
        latitude: 29.818833,  
        longitude: -95.468547, 
        weight: 1, 
    },
    {
        latitude: 29.763979,  
        longitude: -95.361757, 
        weight: 1, 
    },
    {
        latitude: 29.667562,  
        longitude: -95.28877, 
        weight: 1, 
    },
    {
        latitude: 29.582444,  
        longitude: -95.152685, 
        weight: 1, 
    },
    {
        latitude: 29.730248,  
        longitude: -95.539216, 
        weight: 1, 
    },
    {
        latitude: 29.679966,  
        longitude: -95.528008, 
        weight: 1, 
    },
    {
        latitude: 29.766938,  
        longitude: -95.219815, 
        weight: 1, 
    },
    {
        latitude: 29.798987,  
        longitude: -95.436712, 
        weight: 1, 
    },
    {
        latitude: 29.814386,  
        longitude: -95.545194, 
        weight: 1, 
    },
    {
        latitude: 29.775085,  
        longitude: -95.30112, 
        weight: 1, 
    },
    {
        latitude: 29.772759,  
        longitude: -95.298743, 
        weight: 1, 
    },
    {
        latitude: 29.611557,  
        longitude: -95.285611, 
        weight: 1, 
    },
    {
        latitude: 29.7183,  
        longitude: -95.497927, 
        weight: 1, 
    },
    {
        latitude: 29.7183,  
        longitude: -95.497927, 
        weight: 1, 
    },
    {
        latitude: 29.578939,  
        longitude: -95.136722, 
        weight: 1, 
    },
    {
        latitude: 29.821489,  
        longitude: -95.391052, 
        weight: 1, 
    },
    {
        latitude: 29.666023,  
        longitude: -95.355502, 
        weight: 1, 
    },
    {
        latitude: 29.782508,  
        longitude: -95.353046, 
        weight: 1, 
    },
    {
        latitude: 29.78788,  
        longitude: -95.360524, 
        weight: 1, 
    },
    {
        latitude: 29.950629,  
        longitude: -95.395134, 
        weight: 1, 
    },
    {
        latitude: 29.741956,  
        longitude: -95.381916, 
        weight: 1, 
    },
    {
        latitude: 29.741956,  
        longitude: -95.381916, 
        weight: 1, 
    },
    {
        latitude: 29.77159,  
        longitude: -95.339403, 
        weight: 1, 
    },
    {
        latitude: 29.704565,  
        longitude: -95.556251, 
        weight: 1, 
    },
    {
        latitude: 29.688882,  
        longitude: -95.59054, 
        weight: 1, 
    },
    {
        latitude: 29.688882,  
        longitude: -95.59054, 
        weight: 1, 
    },
    {
        latitude: 30.026136,  
        longitude: -95.107718, 
        weight: 1, 
    },
    {
        latitude: 29.732779,  
        longitude: -95.384119, 
        weight: 1, 
    },
    {
        latitude: 29.801721,  
        longitude: -95.366649, 
        weight: 1, 
    },
    {
        latitude: 29.733039,  
        longitude: -95.54637, 
        weight: 1, 
    },
    {
        latitude: 29.681702,  
        longitude: -95.342482, 
        weight: 1, 
    },
    {
        latitude: 29.855211,  
        longitude: -95.410178, 
        weight: 1, 
    },
    {
        latitude: 29.843966,  
        longitude: -95.349319, 
        weight: 1, 
    },
    {
        latitude: 29.734479,  
        longitude: -95.566854, 
        weight: 1, 
    },
    {
        latitude: 29.730184,  
        longitude: -95.482804, 
        weight: 1, 
    },
    {
        latitude: 29.677048,  
        longitude: -95.269791, 
        weight: 1, 
    },
    {
        latitude: 29.817131,  
        longitude: -95.305651, 
        weight: 1, 
    },
    {
        latitude: 29.703458,  
        longitude: -95.606025, 
        weight: 1, 
    },
    {
        latitude: 29.665689,  
        longitude: -95.32333, 
        weight: 1, 
    },
    {
        latitude: 29.731986,  
        longitude: -95.356334, 
        weight: 1, 
    },
    {
        latitude: 29.737311,  
        longitude: -95.526867, 
        weight: 1, 
    },
    {
        latitude: 29.707795,  
        longitude: -95.551491, 
        weight: 1, 
    },
    {
        latitude: 29.685296,  
        longitude: -95.396043, 
        weight: 1, 
    },
    {
        latitude: 29.7893,  
        longitude: -95.521786, 
        weight: 1, 
    },
    {
        latitude: 29.827205,  
        longitude: -95.538648, 
        weight: 1, 
    },
    {
        latitude: 29.738804,  
        longitude: -95.381876, 
        weight: 1, 
    },
    {
        latitude: 29.790107,  
        longitude: -95.277549, 
        weight: 1, 
    },
    {
        latitude: 29.645673,  
        longitude: -95.500381, 
        weight: 1, 
    },
    {
        latitude: 29.737611,  
        longitude: -95.499532, 
        weight: 1, 
    },
    {
        latitude: 29.803941,  
        longitude: -95.400014, 
        weight: 1, 
    },
    {
        latitude: 29.657843,  
        longitude: -95.278595, 
        weight: 1, 
    },
    {
        latitude: 29.657843,  
        longitude: -95.278595, 
        weight: 1, 
    },
    {
        latitude: 29.814107,  
        longitude: -95.456254, 
        weight: 1, 
    },
    {
        latitude: 29.785077,  
        longitude: -95.558384, 
        weight: 1, 
    },
    {
        latitude: 29.785077,  
        longitude: -95.558384, 
        weight: 1, 
    },
    {
        latitude: 29.850947,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.735642,  
        longitude: -95.631999, 
        weight: 1, 
    },
    {
        latitude: 29.806901,  
        longitude: -95.422429, 
        weight: 1, 
    },
    {
        latitude: 29.714369,  
        longitude: -95.538923, 
        weight: 1, 
    },
    {
        latitude: 29.686615,  
        longitude: -95.482584, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.742786,  
        longitude: -95.398479, 
        weight: 1, 
    },
    {
        latitude: 29.676641,  
        longitude: -95.446102, 
        weight: 1, 
    },
    {
        latitude: 29.644558,  
        longitude: -95.244, 
        weight: 1, 
    },
    {
        latitude: 29.8183,  
        longitude: -95.38657, 
        weight: 1, 
    },
    {
        latitude: 29.8183,  
        longitude: -95.38657, 
        weight: 1, 
    },
    {
        latitude: 29.743476,  
        longitude: -95.485414, 
        weight: 1, 
    },
    {
        latitude: 29.834344,  
        longitude: -95.388581, 
        weight: 1, 
    },
    {
        latitude: 29.834344,  
        longitude: -95.388581, 
        weight: 1, 
    },
    {
        latitude: 29.688735,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.78506,  
        longitude: -95.552165, 
        weight: 1, 
    },
    {
        latitude: 29.803374,  
        longitude: -95.368503, 
        weight: 1, 
    },
    {
        latitude: 29.677048,  
        longitude: -95.269791, 
        weight: 1, 
    },
    {
        latitude: 29.624598,  
        longitude: -95.390041, 
        weight: 1, 
    },
    {
        latitude: 29.849519,  
        longitude: -95.321423, 
        weight: 1, 
    },
    {
        latitude: 29.688574,  
        longitude: -95.569276, 
        weight: 1, 
    },
    {
        latitude: 29.793649,  
        longitude: -95.316761, 
        weight: 1, 
    },
    {
        latitude: 29.707999,  
        longitude: -95.478425, 
        weight: 1, 
    },
    {
        latitude: 29.654153,  
        longitude: -95.355364, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 29.787825,  
        longitude: -95.328687, 
        weight: 1, 
    },
    {
        latitude: 29.738181,  
        longitude: -95.600832, 
        weight: 1, 
    },
    {
        latitude: 29.737664,  
        longitude: -95.493803, 
        weight: 1, 
    },
    {
        latitude: 29.769774,  
        longitude: -95.266638, 
        weight: 1, 
    },
    {
        latitude: 29.747333,  
        longitude: -95.377633, 
        weight: 1, 
    },
    {
        latitude: 29.847649,  
        longitude: -95.476138, 
        weight: 1, 
    },
    {
        latitude: 29.710859,  
        longitude: -95.357181, 
        weight: 1, 
    },
    {
        latitude: 29.929348,  
        longitude: -95.411453, 
        weight: 1, 
    },
    {
        latitude: 29.929348,  
        longitude: -95.411453, 
        weight: 1, 
    },
    {
        latitude: 29.689467,  
        longitude: -95.53306, 
        weight: 1, 
    },
    {
        latitude: 29.854314,  
        longitude: -95.35289, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.987335,  
        longitude: -95.346031, 
        weight: 1, 
    },
    {
        latitude: 29.720488,  
        longitude: -95.384903, 
        weight: 1, 
    },
    {
        latitude: 29.720488,  
        longitude: -95.384903, 
        weight: 1, 
    },
    {
        latitude: 29.62203,  
        longitude: -95.22311, 
        weight: 1, 
    },
    {
        latitude: 29.637578,  
        longitude: -95.339381, 
        weight: 1, 
    },
    {
        latitude: 29.703621,  
        longitude: -95.596257, 
        weight: 1, 
    },
    {
        latitude: 29.627447,  
        longitude: -95.393976, 
        weight: 1, 
    },
    {
        latitude: 29.800901,  
        longitude: -95.399162, 
        weight: 1, 
    },
    {
        latitude: 29.746052,  
        longitude: -95.638372, 
        weight: 1, 
    },
    {
        latitude: 29.789384,  
        longitude: -95.568032, 
        weight: 1, 
    },
    {
        latitude: 29.658437,  
        longitude: -95.255728, 
        weight: 1, 
    },
    {
        latitude: 29.955567,  
        longitude: -95.418826, 
        weight: 1, 
    },
    {
        latitude: 29.801612,  
        longitude: -95.367449, 
        weight: 1, 
    },
    {
        latitude: 29.853149,  
        longitude: -95.473299, 
        weight: 1, 
    },
    {
        latitude: 29.729305,  
        longitude: -95.429194, 
        weight: 1, 
    },
    {
        latitude: 29.934374,  
        longitude: -95.313384, 
        weight: 1, 
    },
    {
        latitude: 29.731696,  
        longitude: -95.498867, 
        weight: 1, 
    },
    {
        latitude: 29.783909,  
        longitude: -95.335822, 
        weight: 1, 
    },
    {
        latitude: 29.67632,  
        longitude: -95.428493, 
        weight: 1, 
    },
    {
        latitude: 29.801706,  
        longitude: -95.367998, 
        weight: 1, 
    },
    {
        latitude: 29.801706,  
        longitude: -95.367998, 
        weight: 1, 
    },
    {
        latitude: 29.731827,  
        longitude: -95.55976, 
        weight: 1, 
    },
    {
        latitude: 29.870115,  
        longitude: -95.314881, 
        weight: 1, 
    },
    {
        latitude: 29.732609,  
        longitude: -95.568389, 
        weight: 1, 
    },
    {
        latitude: 29.775934,  
        longitude: -95.336803, 
        weight: 1, 
    },
    {
        latitude: 29.659791,  
        longitude: -95.367291, 
        weight: 1, 
    },
    {
        latitude: 29.659791,  
        longitude: -95.367291, 
        weight: 1, 
    },
    {
        latitude: 29.737171,  
        longitude: -95.539325, 
        weight: 1, 
    },
    {
        latitude: 29.859483,  
        longitude: -95.344357, 
        weight: 1, 
    },
    {
        latitude: 29.814106,  
        longitude: -95.454697, 
        weight: 1, 
    },
    {
        latitude: 29.812321,  
        longitude: -95.426897, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.704626,  
        longitude: -95.554826, 
        weight: 1, 
    },
    {
        latitude: 29.729088,  
        longitude: -95.471652, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.721698,  
        longitude: -95.440394, 
        weight: 1, 
    },
    {
        latitude: 29.6696,  
        longitude: -95.468657, 
        weight: 1, 
    },
    {
        latitude: 29.746267,  
        longitude: -95.454916, 
        weight: 1, 
    },
    {
        latitude: 29.691003,  
        longitude: -95.535033, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.658393,  
        longitude: -95.353862, 
        weight: 1, 
    },
    {
        latitude: 29.708932,  
        longitude: -95.495218, 
        weight: 1, 
    },
    {
        latitude: 29.666597,  
        longitude: -95.289055, 
        weight: 1, 
    },
    {
        latitude: 29.750758,  
        longitude: -95.332472, 
        weight: 1, 
    },
    {
        latitude: 29.840703,  
        longitude: -95.389989, 
        weight: 1, 
    },
    {
        latitude: 29.608242,  
        longitude: -95.274543, 
        weight: 1, 
    },
    {
        latitude: 29.934355,  
        longitude: -95.412501, 
        weight: 1, 
    },
    {
        latitude: 29.665467,  
        longitude: -95.276904, 
        weight: 1, 
    },
    {
        latitude: 29.794263,  
        longitude: -95.697043, 
        weight: 1, 
    },
    {
        latitude: 29.755929,  
        longitude: -95.367041, 
        weight: 1, 
    },
    {
        latitude: 29.944603,  
        longitude: -95.546758, 
        weight: 1, 
    },
    {
        latitude: 29.940717,  
        longitude: -95.4344, 
        weight: 1, 
    },
    {
        latitude: 29.774257,  
        longitude: -95.401286, 
        weight: 1, 
    },
    {
        latitude: 29.706181,  
        longitude: -95.414772, 
        weight: 1, 
    },
    {
        latitude: 29.725332,  
        longitude: -95.447209, 
        weight: 1, 
    },
    {
        latitude: 29.725332,  
        longitude: -95.447209, 
        weight: 1, 
    },
    {
        latitude: 29.760424,  
        longitude: -95.363274, 
        weight: 1, 
    },
    {
        latitude: 29.658401,  
        longitude: -95.357171, 
        weight: 1, 
    },
    {
        latitude: 29.848154,  
        longitude: -95.320095, 
        weight: 1, 
    },
    {
        latitude: 29.854243,  
        longitude: -95.258585, 
        weight: 1, 
    },
    {
        latitude: 29.682691,  
        longitude: -95.352957, 
        weight: 1, 
    },
    {
        latitude: 29.674644,  
        longitude: -95.419501, 
        weight: 1, 
    },
    {
        latitude: 29.670205,  
        longitude: -95.603986, 
        weight: 1, 
    },
    {
        latitude: 29.734445,  
        longitude: -95.395048, 
        weight: 1, 
    },
    {
        latitude: 29.728013,  
        longitude: -95.484193, 
        weight: 1, 
    },
    {
        latitude: 29.878549,  
        longitude: -95.295734, 
        weight: 1, 
    },
    {
        latitude: 29.77575,  
        longitude: -95.221072, 
        weight: 1, 
    },
    {
        latitude: 29.614834,  
        longitude: -95.215182, 
        weight: 1, 
    },
    {
        latitude: 29.812145,  
        longitude: -95.434427, 
        weight: 1, 
    },
    {
        latitude: 29.655646,  
        longitude: -95.508409, 
        weight: 1, 
    },
    {
        latitude: 29.773383,  
        longitude: -95.229271, 
        weight: 1, 
    },
    {
        latitude: 29.877911,  
        longitude: -95.444958, 
        weight: 1, 
    },
    {
        latitude: 29.81641,  
        longitude: -95.410445, 
        weight: 1, 
    },
    {
        latitude: 29.7651,  
        longitude: -95.307381, 
        weight: 1, 
    },
    {
        latitude: 29.609345,  
        longitude: -95.209884, 
        weight: 1, 
    },
    {
        latitude: 29.843703,  
        longitude: -95.471504, 
        weight: 1, 
    },
    {
        latitude: 29.839713,  
        longitude: -95.322591, 
        weight: 1, 
    },
    {
        latitude: 29.754539,  
        longitude: -95.394708, 
        weight: 1, 
    },
    {
        latitude: 29.733856,  
        longitude: -95.501219, 
        weight: 1, 
    },
    {
        latitude: 29.643406,  
        longitude: -95.234632, 
        weight: 1, 
    },
    {
        latitude: 29.67824,  
        longitude: -95.415055, 
        weight: 1, 
    },
    {
        latitude: 29.67549,  
        longitude: -95.54797, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.72201,  
        longitude: -95.557976, 
        weight: 1, 
    },
    {
        latitude: 29.966421,  
        longitude: -95.537602, 
        weight: 1, 
    },
    {
        latitude: 30.001429,  
        longitude: -95.290306, 
        weight: 1, 
    },
    {
        latitude: 29.731771,  
        longitude: -95.493336, 
        weight: 1, 
    },
    {
        latitude: 29.717328,  
        longitude: -95.484824, 
        weight: 1, 
    },
    {
        latitude: 29.700713,  
        longitude: -95.293777, 
        weight: 1, 
    },
    {
        latitude: 29.948811,  
        longitude: -95.428368, 
        weight: 1, 
    },
    {
        latitude: 29.784446,  
        longitude: -95.598295, 
        weight: 1, 
    },
    {
        latitude: 29.740883,  
        longitude: -95.532771, 
        weight: 1, 
    },
    {
        latitude: 29.70152,  
        longitude: -95.37244, 
        weight: 1, 
    },
    {
        latitude: 29.676329,  
        longitude: -95.532596, 
        weight: 1, 
    },
    {
        latitude: 29.64413,  
        longitude: -95.508287, 
        weight: 1, 
    },
    {
        latitude: 29.62748,  
        longitude: -95.420049, 
        weight: 1, 
    },
    {
        latitude: 29.818764,  
        longitude: -95.47374, 
        weight: 1, 
    },
    {
        latitude: 29.744081,  
        longitude: -95.394529, 
        weight: 1, 
    },
    {
        latitude: 29.744081,  
        longitude: -95.394529, 
        weight: 1, 
    },
    {
        latitude: 29.736219,  
        longitude: -95.308586, 
        weight: 1, 
    },
    {
        latitude: 29.657843,  
        longitude: -95.278595, 
        weight: 1, 
    },
    {
        latitude: 29.947259,  
        longitude: -95.546776, 
        weight: 1, 
    },
    {
        latitude: 29.85654,  
        longitude: -95.522967, 
        weight: 1, 
    },
    {
        latitude: 29.85654,  
        longitude: -95.522967, 
        weight: 1, 
    },
    {
        latitude: 29.848149,  
        longitude: -95.32038, 
        weight: 1, 
    },
    {
        latitude: 29.848149,  
        longitude: -95.32038, 
        weight: 1, 
    },
    {
        latitude: 29.650955,  
        longitude: -95.567932, 
        weight: 1, 
    },
    {
        latitude: 29.829034,  
        longitude: -95.38085, 
        weight: 1, 
    },
    {
        latitude: 29.781966,  
        longitude: -95.360586, 
        weight: 1, 
    },
    {
        latitude: 29.772627,  
        longitude: -95.194857, 
        weight: 1, 
    },
    {
        latitude: 29.985985,  
        longitude: -95.335762, 
        weight: 1, 
    },
    {
        latitude: 29.613545,  
        longitude: -95.430805, 
        weight: 1, 
    },
    {
        latitude: 29.65619,  
        longitude: -95.508429, 
        weight: 1, 
    },
    {
        latitude: 29.686731,  
        longitude: -95.508827, 
        weight: 1, 
    },
    {
        latitude: 29.785122,  
        longitude: -95.471526, 
        weight: 1, 
    },
    {
        latitude: 29.744675,  
        longitude: -95.391926, 
        weight: 1, 
    },
    {
        latitude: 29.732078,  
        longitude: -95.641019, 
        weight: 1, 
    },
    {
        latitude: 29.739833,  
        longitude: -95.534839, 
        weight: 1, 
    },
    {
        latitude: 30.04175,  
        longitude: -95.19729, 
        weight: 1, 
    },
    {
        latitude: 30.04175,  
        longitude: -95.19729, 
        weight: 1, 
    },
    {
        latitude: 29.741643,  
        longitude: -95.256253, 
        weight: 1, 
    },
    {
        latitude: 29.807581,  
        longitude: -95.480962, 
        weight: 1, 
    },
    {
        latitude: 29.807581,  
        longitude: -95.480962, 
        weight: 1, 
    },
    {
        latitude: 29.739008,  
        longitude: -95.266565, 
        weight: 1, 
    },
    {
        latitude: 29.704424,  
        longitude: -95.358597, 
        weight: 1, 
    },
    {
        latitude: 29.840961,  
        longitude: -95.487043, 
        weight: 1, 
    },
    {
        latitude: 29.941735,  
        longitude: -95.440467, 
        weight: 1, 
    },
    {
        latitude: 29.627575,  
        longitude: -95.238628, 
        weight: 1, 
    },
    {
        latitude: 29.845906,  
        longitude: -95.390829, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.825374,  
        longitude: -95.328843, 
        weight: 1, 
    },
    {
        latitude: 30.020523,  
        longitude: -95.099877, 
        weight: 1, 
    },
    {
        latitude: 29.613282,  
        longitude: -95.219927, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.69718,  
        longitude: -95.290464, 
        weight: 1, 
    },
    {
        latitude: 29.595824,  
        longitude: -95.197508, 
        weight: 1, 
    },
    {
        latitude: 29.882476,  
        longitude: -95.448536, 
        weight: 1, 
    },
    {
        latitude: 29.691831,  
        longitude: -95.352553, 
        weight: 1, 
    },
    {
        latitude: 29.691831,  
        longitude: -95.352553, 
        weight: 1, 
    },
    {
        latitude: 29.780696,  
        longitude: -95.248713, 
        weight: 1, 
    },
    {
        latitude: 29.673932,  
        longitude: -95.284785, 
        weight: 1, 
    },
    {
        latitude: 29.644602,  
        longitude: -95.370054, 
        weight: 1, 
    },
    {
        latitude: 29.848269,  
        longitude: -95.342874, 
        weight: 1, 
    },
    {
        latitude: 29.817166,  
        longitude: -95.516344, 
        weight: 1, 
    },
    {
        latitude: 29.797016,  
        longitude: -95.331244, 
        weight: 1, 
    },
    {
        latitude: 29.797016,  
        longitude: -95.331244, 
        weight: 1, 
    },
    {
        latitude: 29.75389,  
        longitude: -95.604424, 
        weight: 1, 
    },
    {
        latitude: 29.830054,  
        longitude: -95.361052, 
        weight: 1, 
    },
    {
        latitude: 29.550003,  
        longitude: -95.151306, 
        weight: 1, 
    },
    {
        latitude: 29.967235,  
        longitude: -95.43479, 
        weight: 1, 
    },
    {
        latitude: 29.757961,  
        longitude: -95.346579, 
        weight: 1, 
    },
    {
        latitude: 29.805073,  
        longitude: -95.432415, 
        weight: 1, 
    },
    {
        latitude: 29.664216,  
        longitude: -95.463993, 
        weight: 1, 
    },
    {
        latitude: 29.730907,  
        longitude: -95.321503, 
        weight: 1, 
    },
    {
        latitude: 29.727834,  
        longitude: -95.284391, 
        weight: 1, 
    },
    {
        latitude: 29.727977,  
        longitude: -95.284946, 
        weight: 1, 
    },
    {
        latitude: 29.582329,  
        longitude: -95.210127, 
        weight: 1, 
    },
    {
        latitude: 29.755156,  
        longitude: -95.378807, 
        weight: 1, 
    },
    {
        latitude: 29.694966,  
        longitude: -95.373343, 
        weight: 1, 
    },
    {
        latitude: 29.733347,  
        longitude: -95.431981, 
        weight: 1, 
    },
    {
        latitude: 29.775257,  
        longitude: -95.296805, 
        weight: 1, 
    },
    {
        latitude: 29.82824,  
        longitude: -95.433617, 
        weight: 1, 
    },
    {
        latitude: 29.82824,  
        longitude: -95.433617, 
        weight: 1, 
    },
    {
        latitude: 29.830569,  
        longitude: -95.380736, 
        weight: 1, 
    },
    {
        latitude: 29.685045,  
        longitude: -95.355306, 
        weight: 1, 
    },
    {
        latitude: 29.987347,  
        longitude: -95.35243, 
        weight: 1, 
    },
    {
        latitude: 29.6691,  
        longitude: -95.351601, 
        weight: 1, 
    },
    {
        latitude: 29.6691,  
        longitude: -95.351601, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.838096,  
        longitude: -95.384355, 
        weight: 1, 
    },
    {
        latitude: 29.655906,  
        longitude: -95.530269, 
        weight: 1, 
    },
    {
        latitude: 29.700259,  
        longitude: -95.411232, 
        weight: 1, 
    },
    {
        latitude: 29.859367,  
        longitude: -95.332115, 
        weight: 1, 
    },
    {
        latitude: 29.805411,  
        longitude: -95.216989, 
        weight: 1, 
    },
    {
        latitude: 29.803177,  
        longitude: -95.317002, 
        weight: 1, 
    },
    {
        latitude: 29.736524,  
        longitude: -95.586935, 
        weight: 1, 
    },
    {
        latitude: 29.790459,  
        longitude: -95.339172, 
        weight: 1, 
    },
    {
        latitude: 29.791166,  
        longitude: -95.372108, 
        weight: 1, 
    },
    {
        latitude: 29.749885,  
        longitude: -95.485547, 
        weight: 1, 
    },
    {
        latitude: 29.689671,  
        longitude: -95.559533, 
        weight: 1, 
    },
    {
        latitude: 29.801413,  
        longitude: -95.316988, 
        weight: 1, 
    },
    {
        latitude: 29.668144,  
        longitude: -95.308635, 
        weight: 1, 
    },
    {
        latitude: 29.851436,  
        longitude: -95.440667, 
        weight: 1, 
    },
    {
        latitude: 29.85763,  
        longitude: -95.300055, 
        weight: 1, 
    },
    {
        latitude: 29.602954,  
        longitude: -95.317846, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.613855,  
        longitude: -95.402607, 
        weight: 1, 
    },
    {
        latitude: 29.613855,  
        longitude: -95.402607, 
        weight: 1, 
    },
    {
        latitude: 29.972266,  
        longitude: -95.427166, 
        weight: 1, 
    },
    {
        latitude: 29.668734,  
        longitude: -95.462352, 
        weight: 1, 
    },
    {
        latitude: 29.599768,  
        longitude: -95.286419, 
        weight: 1, 
    },
    {
        latitude: 29.73906,  
        longitude: -95.644137, 
        weight: 1, 
    },
    {
        latitude: 29.639342,  
        longitude: -95.469595, 
        weight: 1, 
    },
    {
        latitude: 29.688746,  
        longitude: -95.461624, 
        weight: 1, 
    },
    {
        latitude: 29.733347,  
        longitude: -95.431981, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.669532,  
        longitude: -95.305099, 
        weight: 1, 
    },
    {
        latitude: 29.748179,  
        longitude: -95.494112, 
        weight: 1, 
    },
    {
        latitude: 29.716466,  
        longitude: -95.482422, 
        weight: 1, 
    },
    {
        latitude: 29.638138,  
        longitude: -95.529932, 
        weight: 1, 
    },
    {
        latitude: 29.68543,  
        longitude: -95.334536, 
        weight: 1, 
    },
    {
        latitude: 29.858108,  
        longitude: -95.424359, 
        weight: 1, 
    },
    {
        latitude: 29.717613,  
        longitude: -95.3829, 
        weight: 1, 
    },
    {
        latitude: 29.847215,  
        longitude: -95.408125, 
        weight: 1, 
    },
    {
        latitude: 29.689463,  
        longitude: -95.561334, 
        weight: 1, 
    },
    {
        latitude: 29.585283,  
        longitude: -95.458533, 
        weight: 1, 
    },
    {
        latitude: 29.585283,  
        longitude: -95.458533, 
        weight: 1, 
    },
    {
        latitude: 29.779882,  
        longitude: -95.218582, 
        weight: 1, 
    },
    {
        latitude: 29.779882,  
        longitude: -95.218582, 
        weight: 1, 
    },
    {
        latitude: 29.791302,  
        longitude: -95.521768, 
        weight: 1, 
    },
    {
        latitude: 29.676236,  
        longitude: -95.334142, 
        weight: 1, 
    },
    {
        latitude: 29.833834,  
        longitude: -95.333673, 
        weight: 1, 
    },
    {
        latitude: 29.646361,  
        longitude: -95.518735, 
        weight: 1, 
    },
    {
        latitude: 29.703903,  
        longitude: -95.355618, 
        weight: 1, 
    },
    {
        latitude: 29.837592,  
        longitude: -95.368042, 
        weight: 1, 
    },
    {
        latitude: 29.845766,  
        longitude: -95.473265, 
        weight: 1, 
    },
    {
        latitude: 29.677402,  
        longitude: -95.416622, 
        weight: 1, 
    },
    {
        latitude: 29.93885,  
        longitude: -95.315667, 
        weight: 1, 
    },
    {
        latitude: 29.617906,  
        longitude: -95.219666, 
        weight: 1, 
    },
    {
        latitude: 29.721996,  
        longitude: -95.378604, 
        weight: 1, 
    },
    {
        latitude: 29.642608,  
        longitude: -95.493141, 
        weight: 1, 
    },
    {
        latitude: 29.719648,  
        longitude: -95.500999, 
        weight: 1, 
    },
    {
        latitude: 29.769539,  
        longitude: -95.264809, 
        weight: 1, 
    },
    {
        latitude: 29.779451,  
        longitude: -95.535913, 
        weight: 1, 
    },
    {
        latitude: 29.738602,  
        longitude: -95.496603, 
        weight: 1, 
    },
    {
        latitude: 29.785951,  
        longitude: -95.651178, 
        weight: 1, 
    },
    {
        latitude: 29.785951,  
        longitude: -95.651178, 
        weight: 1, 
    },
    {
        latitude: 29.779451,  
        longitude: -95.535913, 
        weight: 1, 
    },
    {
        latitude: 29.737547,  
        longitude: -95.505146, 
        weight: 1, 
    },
    {
        latitude: 29.841009,  
        longitude: -95.463469, 
        weight: 1, 
    },
    {
        latitude: 29.854877,  
        longitude: -95.406406, 
        weight: 1, 
    },
    {
        latitude: 29.688611,  
        longitude: -95.419107, 
        weight: 1, 
    },
    {
        latitude: 29.783278,  
        longitude: -95.422576, 
        weight: 1, 
    },
    {
        latitude: 29.809401,  
        longitude: -95.489336, 
        weight: 1, 
    },
    {
        latitude: 29.710463,  
        longitude: -95.403204, 
        weight: 1, 
    },
    {
        latitude: 29.857451,  
        longitude: -95.412376, 
        weight: 1, 
    },
    {
        latitude: 29.960164,  
        longitude: -95.423961, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.276991, 
        weight: 1, 
    },
    {
        latitude: 29.737316,  
        longitude: -95.525944, 
        weight: 1, 
    },
    {
        latitude: 29.94876,  
        longitude: -95.295262, 
        weight: 1, 
    },
    {
        latitude: 29.940066,  
        longitude: -95.331277, 
        weight: 1, 
    },
    {
        latitude: 29.822381,  
        longitude: -95.468633, 
        weight: 1, 
    },
    {
        latitude: 29.717472,  
        longitude: -95.413086, 
        weight: 1, 
    },
    {
        latitude: 29.717472,  
        longitude: -95.413086, 
        weight: 1, 
    },
    {
        latitude: 29.849073,  
        longitude: -95.340419, 
        weight: 1, 
    },
    {
        latitude: 29.78613,  
        longitude: -95.360581, 
        weight: 1, 
    },
    {
        latitude: 29.786207,  
        longitude: -95.360558, 
        weight: 1, 
    },
    {
        latitude: 29.714092,  
        longitude: -95.381749, 
        weight: 1, 
    },
    {
        latitude: 29.634487,  
        longitude: -95.411275, 
        weight: 1, 
    },
    {
        latitude: 29.713606,  
        longitude: -95.37786, 
        weight: 1, 
    },
    {
        latitude: 29.774134,  
        longitude: -95.407603, 
        weight: 1, 
    },
    {
        latitude: 29.716259,  
        longitude: -95.488967, 
        weight: 1, 
    },
    {
        latitude: 29.721525,  
        longitude: -95.520215, 
        weight: 1, 
    },
    {
        latitude: 29.689947,  
        longitude: -95.369613, 
        weight: 1, 
    },
    {
        latitude: 29.821456,  
        longitude: -95.429534, 
        weight: 1, 
    },
    {
        latitude: 29.650072,  
        longitude: -95.528239, 
        weight: 1, 
    },
    {
        latitude: 29.741251,  
        longitude: -95.585243, 
        weight: 1, 
    },
    {
        latitude: 29.741251,  
        longitude: -95.585243, 
        weight: 1, 
    },
    {
        latitude: 29.741251,  
        longitude: -95.585243, 
        weight: 1, 
    },
    {
        latitude: 29.785787,  
        longitude: -95.55927, 
        weight: 1, 
    },
    {
        latitude: 29.712378,  
        longitude: -95.518058, 
        weight: 1, 
    },
    {
        latitude: 29.695534,  
        longitude: -95.388058, 
        weight: 1, 
    },
    {
        latitude: 29.83898,  
        longitude: -95.256672, 
        weight: 1, 
    },
    {
        latitude: 29.681594,  
        longitude: -95.399504, 
        weight: 1, 
    },
    {
        latitude: 29.686613,  
        longitude: -95.420673, 
        weight: 1, 
    },
    {
        latitude: 29.749879,  
        longitude: -95.375637, 
        weight: 1, 
    },
    {
        latitude: 29.825784,  
        longitude: -95.337681, 
        weight: 1, 
    },
    {
        latitude: 29.635147,  
        longitude: -95.259568, 
        weight: 1, 
    },
    {
        latitude: 29.656036,  
        longitude: -95.505237, 
        weight: 1, 
    },
    {
        latitude: 29.683506,  
        longitude: -95.281637, 
        weight: 1, 
    },
    {
        latitude: 29.719789,  
        longitude: -95.381668, 
        weight: 1, 
    },
    {
        latitude: 29.745242,  
        longitude: -95.507621, 
        weight: 1, 
    },
    {
        latitude: 29.67628,  
        longitude: -95.428536, 
        weight: 1, 
    },
    {
        latitude: 29.66352,  
        longitude: -95.259038, 
        weight: 1, 
    },
    {
        latitude: 29.733347,  
        longitude: -95.431981, 
        weight: 1, 
    },
    {
        latitude: 29.684411,  
        longitude: -95.604099, 
        weight: 1, 
    },
    {
        latitude: 29.710921,  
        longitude: -95.396742, 
        weight: 1, 
    },
    {
        latitude: 30.065441,  
        longitude: -95.15318, 
        weight: 1, 
    },
    {
        latitude: 29.957828,  
        longitude: -95.541804, 
        weight: 1, 
    },
    {
        latitude: 29.748302,  
        longitude: -95.365222, 
        weight: 1, 
    },
    {
        latitude: 29.624824,  
        longitude: -95.347363, 
        weight: 1, 
    },
    {
        latitude: 29.770635,  
        longitude: -95.416933, 
        weight: 1, 
    },
    {
        latitude: 29.949208,  
        longitude: -95.413735, 
        weight: 1, 
    },
    {
        latitude: 29.949208,  
        longitude: -95.413735, 
        weight: 1, 
    },
    {
        latitude: 29.707035,  
        longitude: -95.495176, 
        weight: 1, 
    },
    {
        latitude: 29.836594,  
        longitude: -95.263288, 
        weight: 1, 
    },
    {
        latitude: 29.84874,  
        longitude: -95.329091, 
        weight: 1, 
    },
    {
        latitude: 29.829685,  
        longitude: -95.367695, 
        weight: 1, 
    },
    {
        latitude: 29.721264,  
        longitude: -95.567583, 
        weight: 1, 
    },
    {
        latitude: 29.627466,  
        longitude: -95.241012, 
        weight: 1, 
    },
    {
        latitude: 29.627466,  
        longitude: -95.241012, 
        weight: 1, 
    },
    {
        latitude: 29.701362,  
        longitude: -95.6096, 
        weight: 1, 
    },
    {
        latitude: 29.678258,  
        longitude: -95.414638, 
        weight: 1, 
    },
    {
        latitude: 29.678258,  
        longitude: -95.414638, 
        weight: 1, 
    },
    {
        latitude: 29.740553,  
        longitude: -95.464853, 
        weight: 1, 
    },
    {
        latitude: 29.688475,  
        longitude: -95.569762, 
        weight: 1, 
    },
    {
        latitude: 29.638701,  
        longitude: -95.479879, 
        weight: 1, 
    },
    {
        latitude: 29.862581,  
        longitude: -95.442283, 
        weight: 1, 
    },
    {
        latitude: 29.748245,  
        longitude: -95.365475, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.850543,  
        longitude: -95.481389, 
        weight: 1, 
    },
    {
        latitude: 29.82817,  
        longitude: -95.342616, 
        weight: 1, 
    },
    {
        latitude: 29.773471,  
        longitude: -95.43201, 
        weight: 1, 
    },
    {
        latitude: 29.784507,  
        longitude: -95.66887, 
        weight: 1, 
    },
    {
        latitude: 29.737054,  
        longitude: -95.548481, 
        weight: 1, 
    },
    {
        latitude: 29.866104,  
        longitude: -95.429548, 
        weight: 1, 
    },
    {
        latitude: 29.751656,  
        longitude: -95.365295, 
        weight: 1, 
    },
    {
        latitude: 29.921166,  
        longitude: -95.398064, 
        weight: 1, 
    },
    {
        latitude: 29.631168,  
        longitude: -95.234312, 
        weight: 1, 
    },
    {
        latitude: 29.64015,  
        longitude: -95.334462, 
        weight: 1, 
    },
    {
        latitude: 29.865632,  
        longitude: -95.538748, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.735601,  
        longitude: -95.295296, 
        weight: 1, 
    },
    {
        latitude: 29.691077,  
        longitude: -95.517383, 
        weight: 1, 
    },
    {
        latitude: 29.740794,  
        longitude: -95.418775, 
        weight: 1, 
    },
    {
        latitude: 29.770355,  
        longitude: -95.188168, 
        weight: 1, 
    },
    {
        latitude: 29.678609,  
        longitude: -95.412277, 
        weight: 1, 
    },
    {
        latitude: 29.776516,  
        longitude: -95.312611, 
        weight: 1, 
    },
    {
        latitude: 29.844061,  
        longitude: -95.43411, 
        weight: 1, 
    },
    {
        latitude: 29.737163,  
        longitude: -95.540178, 
        weight: 1, 
    },
    {
        latitude: 29.737163,  
        longitude: -95.540178, 
        weight: 1, 
    },
    {
        latitude: 29.723312,  
        longitude: -95.383959, 
        weight: 1, 
    },
    {
        latitude: 29.740695,  
        longitude: -95.538351, 
        weight: 1, 
    },
    {
        latitude: 29.640599,  
        longitude: -95.430007, 
        weight: 1, 
    },
    {
        latitude: 29.710313,  
        longitude: -95.50402, 
        weight: 1, 
    },
    {
        latitude: 29.772827,  
        longitude: -95.220535, 
        weight: 1, 
    },
    {
        latitude: 29.733283,  
        longitude: -95.350314, 
        weight: 1, 
    },
    {
        latitude: 29.658422,  
        longitude: -95.355445, 
        weight: 1, 
    },
    {
        latitude: 29.698534,  
        longitude: -95.369227, 
        weight: 1, 
    },
    {
        latitude: 29.728455,  
        longitude: -95.359611, 
        weight: 1, 
    },
    {
        latitude: 29.728455,  
        longitude: -95.359611, 
        weight: 1, 
    },
    {
        latitude: 29.728455,  
        longitude: -95.359611, 
        weight: 1, 
    },
    {
        latitude: 29.964074,  
        longitude: -95.542925, 
        weight: 1, 
    },
    {
        latitude: 29.592353,  
        longitude: -95.169232, 
        weight: 1, 
    },
    {
        latitude: 29.661256,  
        longitude: -95.36026, 
        weight: 1, 
    },
    {
        latitude: 29.735925,  
        longitude: -95.346853, 
        weight: 1, 
    },
    {
        latitude: 29.676332,  
        longitude: -95.334318, 
        weight: 1, 
    },
    {
        latitude: 29.863494,  
        longitude: -95.438818, 
        weight: 1, 
    },
    {
        latitude: 29.844222,  
        longitude: -95.519596, 
        weight: 1, 
    },
    {
        latitude: 29.832333,  
        longitude: -95.321288, 
        weight: 1, 
    },
    {
        latitude: 29.832333,  
        longitude: -95.321288, 
        weight: 1, 
    },
    {
        latitude: 29.5638,  
        longitude: -95.131715, 
        weight: 1, 
    },
    {
        latitude: 29.5638,  
        longitude: -95.131715, 
        weight: 1, 
    },
    {
        latitude: 29.835171,  
        longitude: -95.384366, 
        weight: 1, 
    },
    {
        latitude: 29.719546,  
        longitude: -95.610525, 
        weight: 1, 
    },
    {
        latitude: 29.611894,  
        longitude: -95.1969, 
        weight: 1, 
    },
    {
        latitude: 29.672944,  
        longitude: -95.551103, 
        weight: 1, 
    },
    {
        latitude: 29.672944,  
        longitude: -95.551103, 
        weight: 1, 
    },
    {
        latitude: 29.781337,  
        longitude: -95.53517, 
        weight: 1, 
    },
    {
        latitude: 29.866014,  
        longitude: -95.429558, 
        weight: 1, 
    },
    {
        latitude: 29.647919,  
        longitude: -95.251688, 
        weight: 1, 
    },
    {
        latitude: 29.833165,  
        longitude: -95.486668, 
        weight: 1, 
    },
    {
        latitude: 29.841347,  
        longitude: -95.504422, 
        weight: 1, 
    },
    {
        latitude: 29.686064,  
        longitude: -95.569614, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.650482,  
        longitude: -95.207987, 
        weight: 1, 
    },
    {
        latitude: 29.543405,  
        longitude: -95.145625, 
        weight: 1, 
    },
    {
        latitude: 29.733055,  
        longitude: -95.546367, 
        weight: 1, 
    },
    {
        latitude: 29.869846,  
        longitude: -95.403072, 
        weight: 1, 
    },
    {
        latitude: 29.66811,  
        longitude: -95.334969, 
        weight: 1, 
    },
    {
        latitude: 29.732476,  
        longitude: -95.342337, 
        weight: 1, 
    },
    {
        latitude: 29.755367,  
        longitude: -95.626472, 
        weight: 1, 
    },
    {
        latitude: 29.669783,  
        longitude: -95.326693, 
        weight: 1, 
    },
    {
        latitude: 29.624109,  
        longitude: -95.240219, 
        weight: 1, 
    },
    {
        latitude: 29.696091,  
        longitude: -95.331508, 
        weight: 1, 
    },
    {
        latitude: 29.696091,  
        longitude: -95.331508, 
        weight: 1, 
    },
    {
        latitude: 29.696091,  
        longitude: -95.331508, 
        weight: 1, 
    },
    {
        latitude: 29.827337,  
        longitude: -95.482177, 
        weight: 1, 
    },
    {
        latitude: 29.643145,  
        longitude: -95.23933, 
        weight: 1, 
    },
    {
        latitude: 29.736182,  
        longitude: -95.604615, 
        weight: 1, 
    },
    {
        latitude: 29.754909,  
        longitude: -95.625259, 
        weight: 1, 
    },
    {
        latitude: 29.742767,  
        longitude: -95.402885, 
        weight: 1, 
    },
    {
        latitude: 29.621534,  
        longitude: -95.398798, 
        weight: 1, 
    },
    {
        latitude: 29.671008,  
        longitude: -95.550818, 
        weight: 1, 
    },
    {
        latitude: 29.671008,  
        longitude: -95.550818, 
        weight: 1, 
    },
    {
        latitude: 29.671008,  
        longitude: -95.550818, 
        weight: 1, 
    },
    {
        latitude: 29.622863,  
        longitude: -95.240225, 
        weight: 1, 
    },
    {
        latitude: 29.622863,  
        longitude: -95.240225, 
        weight: 1, 
    },
    {
        latitude: 29.737063,  
        longitude: -95.531448, 
        weight: 1, 
    },
    {
        latitude: 29.737063,  
        longitude: -95.531448, 
        weight: 1, 
    },
    {
        latitude: 29.680992,  
        longitude: -95.605244, 
        weight: 1, 
    },
    {
        latitude: 29.743751,  
        longitude: -95.576292, 
        weight: 1, 
    },
    {
        latitude: 29.741639,  
        longitude: -95.513462, 
        weight: 1, 
    },
    {
        latitude: 29.76436,  
        longitude: -95.42012, 
        weight: 1, 
    },
    {
        latitude: 29.784231,  
        longitude: -95.603054, 
        weight: 1, 
    },
    {
        latitude: 29.65739,  
        longitude: -95.254108, 
        weight: 1, 
    },
    {
        latitude: 29.65739,  
        longitude: -95.254108, 
        weight: 1, 
    },
    {
        latitude: 29.6761,  
        longitude: -95.3949, 
        weight: 1, 
    },
    {
        latitude: 29.744751,  
        longitude: -95.380932, 
        weight: 1, 
    },
    {
        latitude: 29.882476,  
        longitude: -95.448536, 
        weight: 1, 
    },
    {
        latitude: 29.612132,  
        longitude: -95.223138, 
        weight: 1, 
    },
    {
        latitude: 29.69496,  
        longitude: -95.52564, 
        weight: 1, 
    },
    {
        latitude: 29.603126,  
        longitude: -95.216248, 
        weight: 1, 
    },
    {
        latitude: 29.664955,  
        longitude: -95.594136, 
        weight: 1, 
    },
    {
        latitude: 29.774665,  
        longitude: -95.373611, 
        weight: 1, 
    },
    {
        latitude: 29.752343,  
        longitude: -95.623896, 
        weight: 1, 
    },
    {
        latitude: 29.724784,  
        longitude: -95.397103, 
        weight: 1, 
    },
    {
        latitude: 29.556178,  
        longitude: -95.123338, 
        weight: 1, 
    },
    {
        latitude: 29.987325,  
        longitude: -95.342156, 
        weight: 1, 
    },
    {
        latitude: 29.746069,  
        longitude: -95.572036, 
        weight: 1, 
    },
    {
        latitude: 29.812718,  
        longitude: -95.562864, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.675347,  
        longitude: -95.550259, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.859451,  
        longitude: -95.348312, 
        weight: 1, 
    },
    {
        latitude: 29.859451,  
        longitude: -95.348312, 
        weight: 1, 
    },
    {
        latitude: 29.775085,  
        longitude: -95.30112, 
        weight: 1, 
    },
    {
        latitude: 29.744452,  
        longitude: -95.315995, 
        weight: 1, 
    },
    {
        latitude: 29.752305,  
        longitude: -95.364555, 
        weight: 1, 
    },
    {
        latitude: 29.858027,  
        longitude: -95.53901, 
        weight: 1, 
    },
    {
        latitude: 29.74423,  
        longitude: -95.381317, 
        weight: 1, 
    },
    {
        latitude: 29.70432,  
        longitude: -95.512961, 
        weight: 1, 
    },
    {
        latitude: 29.71295,  
        longitude: -95.509824, 
        weight: 1, 
    },
    {
        latitude: 29.570304,  
        longitude: -95.141384, 
        weight: 1, 
    },
    {
        latitude: 29.714653,  
        longitude: -95.396855, 
        weight: 1, 
    },
    {
        latitude: 29.714653,  
        longitude: -95.396855, 
        weight: 1, 
    },
    {
        latitude: 29.732592,  
        longitude: -95.361946, 
        weight: 1, 
    },
    {
        latitude: 29.732592,  
        longitude: -95.361946, 
        weight: 1, 
    },
    {
        latitude: 29.685741,  
        longitude: -95.362698, 
        weight: 1, 
    },
    {
        latitude: 29.675291,  
        longitude: -95.488792, 
        weight: 1, 
    },
    {
        latitude: 29.661163,  
        longitude: -95.276803, 
        weight: 1, 
    },
    {
        latitude: 29.661163,  
        longitude: -95.276803, 
        weight: 1, 
    },
    {
        latitude: 29.967063,  
        longitude: -95.284339, 
        weight: 1, 
    },
    {
        latitude: 29.827048,  
        longitude: -95.467322, 
        weight: 1, 
    },
    {
        latitude: 29.622876,  
        longitude: -95.351563, 
        weight: 1, 
    },
    {
        latitude: 29.784151,  
        longitude: -95.582377, 
        weight: 1, 
    },
    {
        latitude: 29.622934,  
        longitude: -95.240231, 
        weight: 1, 
    },
    {
        latitude: 29.800459,  
        longitude: -95.435071, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.741381,  
        longitude: -95.378552, 
        weight: 1, 
    },
    {
        latitude: 29.806434,  
        longitude: -95.47552, 
        weight: 1, 
    },
    {
        latitude: 29.703017,  
        longitude: -95.297604, 
        weight: 1, 
    },
    {
        latitude: 29.793308,  
        longitude: -95.473228, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.70975,  
        longitude: -95.515848, 
        weight: 1, 
    },
    {
        latitude: 29.64282,  
        longitude: -95.402059, 
        weight: 1, 
    },
    {
        latitude: 29.741732,  
        longitude: -95.44243, 
        weight: 1, 
    },
    {
        latitude: 29.801731,  
        longitude: -95.430038, 
        weight: 1, 
    },
    {
        latitude: 29.688611,  
        longitude: -95.419107, 
        weight: 1, 
    },
    {
        latitude: 29.739349,  
        longitude: -95.46994, 
        weight: 1, 
    },
    {
        latitude: 29.753521,  
        longitude: -95.33477, 
        weight: 1, 
    },
    {
        latitude: 29.724397,  
        longitude: -95.567161, 
        weight: 1, 
    },
    {
        latitude: 29.733347,  
        longitude: -95.431981, 
        weight: 1, 
    },
    {
        latitude: 29.801585,  
        longitude: -95.4421, 
        weight: 1, 
    },
    {
        latitude: 29.636517,  
        longitude: -95.472049, 
        weight: 1, 
    },
    {
        latitude: 29.841347,  
        longitude: -95.504422, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.67541,  
        longitude: -95.590317, 
        weight: 1, 
    },
    {
        latitude: 29.677753,  
        longitude: -95.493721, 
        weight: 1, 
    },
    {
        latitude: 29.652151,  
        longitude: -95.258306, 
        weight: 1, 
    },
    {
        latitude: 29.731522,  
        longitude: -95.482668, 
        weight: 1, 
    },
    {
        latitude: 29.770267,  
        longitude: -95.213282, 
        weight: 1, 
    },
    {
        latitude: 29.747219,  
        longitude: -95.580558, 
        weight: 1, 
    },
    {
        latitude: 29.747219,  
        longitude: -95.580558, 
        weight: 1, 
    },
    {
        latitude: 29.736578,  
        longitude: -95.475582, 
        weight: 1, 
    },
    {
        latitude: 29.747435,  
        longitude: -95.625165, 
        weight: 1, 
    },
    {
        latitude: 29.841938,  
        longitude: -95.3784, 
        weight: 1, 
    },
    {
        latitude: 29.680666,  
        longitude: -95.551847, 
        weight: 1, 
    },
    {
        latitude: 29.784139,  
        longitude: -95.581141, 
        weight: 1, 
    },
    {
        latitude: 29.784139,  
        longitude: -95.581141, 
        weight: 1, 
    },
    {
        latitude: 29.636486,  
        longitude: -95.235996, 
        weight: 1, 
    },
    {
        latitude: 29.715631,  
        longitude: -95.37539, 
        weight: 1, 
    },
    {
        latitude: 29.715631,  
        longitude: -95.37539, 
        weight: 1, 
    },
    {
        latitude: 29.845081,  
        longitude: -95.300278, 
        weight: 1, 
    },
    {
        latitude: 29.740614,  
        longitude: -95.45402, 
        weight: 1, 
    },
    {
        latitude: 29.740614,  
        longitude: -95.45402, 
        weight: 1, 
    },
    {
        latitude: 29.745449,  
        longitude: -95.38617, 
        weight: 1, 
    },
    {
        latitude: 29.75338,  
        longitude: -95.362648, 
        weight: 1, 
    },
    {
        latitude: 29.747926,  
        longitude: -95.570982, 
        weight: 1, 
    },
    {
        latitude: 29.712426,  
        longitude: -95.589286, 
        weight: 1, 
    },
    {
        latitude: 29.69965,  
        longitude: -95.418259, 
        weight: 1, 
    },
    {
        latitude: 29.753658,  
        longitude: -95.36496, 
        weight: 1, 
    },
    {
        latitude: 29.735419,  
        longitude: -95.46543, 
        weight: 1, 
    },
    {
        latitude: 29.681784,  
        longitude: -95.60489, 
        weight: 1, 
    },
    {
        latitude: 29.690797,  
        longitude: -95.595931, 
        weight: 1, 
    },
    {
        latitude: 29.669994,  
        longitude: -95.273325, 
        weight: 1, 
    },
    {
        latitude: 29.812041,  
        longitude: -95.382163, 
        weight: 1, 
    },
    {
        latitude: 29.693541,  
        longitude: -95.415095, 
        weight: 1, 
    },
    {
        latitude: 29.710463,  
        longitude: -95.403204, 
        weight: 1, 
    },
    {
        latitude: 29.734087,  
        longitude: -95.341134, 
        weight: 1, 
    },
    {
        latitude: 29.803304,  
        longitude: -95.502431, 
        weight: 1, 
    },
    {
        latitude: 29.737649,  
        longitude: -95.497081, 
        weight: 1, 
    },
    {
        latitude: 29.732125,  
        longitude: -95.290715, 
        weight: 1, 
    },
    {
        latitude: 29.732125,  
        longitude: -95.290715, 
        weight: 1, 
    },
    {
        latitude: 29.952166,  
        longitude: -95.302266, 
        weight: 1, 
    },
    {
        latitude: 29.883968,  
        longitude: -95.418362, 
        weight: 1, 
    },
    {
        latitude: 29.883968,  
        longitude: -95.418362, 
        weight: 1, 
    },
    {
        latitude: 29.819869,  
        longitude: -95.448769, 
        weight: 1, 
    },
    {
        latitude: 29.786662,  
        longitude: -95.361424, 
        weight: 1, 
    },
    {
        latitude: 29.786662,  
        longitude: -95.361424, 
        weight: 1, 
    },
    {
        latitude: 29.653207,  
        longitude: -95.261038, 
        weight: 1, 
    },
    {
        latitude: 29.765073,  
        longitude: -95.211874, 
        weight: 1, 
    },
    {
        latitude: 29.716712,  
        longitude: -95.346231, 
        weight: 1, 
    },
    {
        latitude: 29.80702,  
        longitude: -95.478491, 
        weight: 1, 
    },
    {
        latitude: 29.612158,  
        longitude: -95.464941, 
        weight: 1, 
    },
    {
        latitude: 29.860223,  
        longitude: -95.527346, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.732427,  
        longitude: -95.653266, 
        weight: 1, 
    },
    {
        latitude: 29.694548,  
        longitude: -95.282397, 
        weight: 1, 
    },
    {
        latitude: 29.763109,  
        longitude: -95.625363, 
        weight: 1, 
    },
    {
        latitude: 29.763109,  
        longitude: -95.625363, 
        weight: 1, 
    },
    {
        latitude: 29.949621,  
        longitude: -95.303911, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.558114, 
        weight: 1, 
    },
    {
        latitude: 29.730131,  
        longitude: -95.558114, 
        weight: 1, 
    },
    {
        latitude: 29.684075,  
        longitude: -95.574589, 
        weight: 1, 
    },
    {
        latitude: 29.858616,  
        longitude: -95.50498, 
        weight: 1, 
    },
    {
        latitude: 29.748109,  
        longitude: -95.366707, 
        weight: 1, 
    },
    {
        latitude: 29.70491,  
        longitude: -95.546556, 
        weight: 1, 
    },
    {
        latitude: 29.791607,  
        longitude: -95.438131, 
        weight: 1, 
    },
    {
        latitude: 29.741736,  
        longitude: -95.441943, 
        weight: 1, 
    },
    {
        latitude: 29.719991,  
        longitude: -95.489308, 
        weight: 1, 
    },
    {
        latitude: 29.631747,  
        longitude: -95.357425, 
        weight: 1, 
    },
    {
        latitude: 29.823533,  
        longitude: -95.444704, 
        weight: 1, 
    },
    {
        latitude: 29.765254,  
        longitude: -95.414977, 
        weight: 1, 
    },
    {
        latitude: 29.727995,  
        longitude: -95.371258, 
        weight: 1, 
    },
    {
        latitude: 29.689334,  
        longitude: -95.235169, 
        weight: 1, 
    },
    {
        latitude: 29.836527,  
        longitude: -95.473043, 
        weight: 1, 
    },
    {
        latitude: 29.74736,  
        longitude: -95.391975, 
        weight: 1, 
    },
    {
        latitude: 29.82502,  
        longitude: -95.392016, 
        weight: 1, 
    },
    {
        latitude: 29.658328,  
        longitude: -95.514248, 
        weight: 1, 
    },
    {
        latitude: 29.632204,  
        longitude: -95.244692, 
        weight: 1, 
    },
    {
        latitude: 29.652641,  
        longitude: -95.56018, 
        weight: 1, 
    },
    {
        latitude: 29.849658,  
        longitude: -95.271761, 
        weight: 1, 
    },
    {
        latitude: 29.849658,  
        longitude: -95.271761, 
        weight: 1, 
    },
    {
        latitude: 29.857654,  
        longitude: -95.299014, 
        weight: 1, 
    },
    {
        latitude: 29.719963,  
        longitude: -95.493148, 
        weight: 1, 
    },
    {
        latitude: 29.731794,  
        longitude: -95.490483, 
        weight: 1, 
    },
    {
        latitude: 29.630747,  
        longitude: -95.209431, 
        weight: 1, 
    },
    {
        latitude: 29.704788,  
        longitude: -95.587899, 
        weight: 1, 
    },
    {
        latitude: 29.737724,  
        longitude: -95.47657, 
        weight: 1, 
    },
    {
        latitude: 29.773687,  
        longitude: -95.321998, 
        weight: 1, 
    },
    {
        latitude: 29.696904,  
        longitude: -95.606155, 
        weight: 1, 
    },
    {
        latitude: 29.779569,  
        longitude: -95.340988, 
        weight: 1, 
    },
    {
        latitude: 29.778,  
        longitude: -95.411177, 
        weight: 1, 
    },
    {
        latitude: 29.739587,  
        longitude: -95.254948, 
        weight: 1, 
    },
    {
        latitude: 29.728571,  
        longitude: -95.286987, 
        weight: 1, 
    },
    {
        latitude: 29.815441,  
        longitude: -95.28448, 
        weight: 1, 
    },
    {
        latitude: 29.850872,  
        longitude: -95.252211, 
        weight: 1, 
    },
    {
        latitude: 29.74603,  
        longitude: -95.359626, 
        weight: 1, 
    },
    {
        latitude: 29.951463,  
        longitude: -95.33187, 
        weight: 1, 
    },
    {
        latitude: 29.853333,  
        longitude: -95.5122, 
        weight: 1, 
    },
    {
        latitude: 29.785331,  
        longitude: -95.393001, 
        weight: 1, 
    },
    {
        latitude: 29.696915,  
        longitude: -95.417782, 
        weight: 1, 
    },
    {
        latitude: 29.78506,  
        longitude: -95.552165, 
        weight: 1, 
    },
    {
        latitude: 29.779701,  
        longitude: -95.218579, 
        weight: 1, 
    },
    {
        latitude: 29.72617,  
        longitude: -95.360818, 
        weight: 1, 
    },
    {
        latitude: 29.72617,  
        longitude: -95.360818, 
        weight: 1, 
    },
    {
        latitude: 29.741506,  
        longitude: -95.450672, 
        weight: 1, 
    },
    {
        latitude: 29.791166,  
        longitude: -95.372108, 
        weight: 1, 
    },
    {
        latitude: 29.77025,  
        longitude: -95.213592, 
        weight: 1, 
    },
    {
        latitude: 29.746069,  
        longitude: -95.572036, 
        weight: 1, 
    },
    {
        latitude: 29.652122,  
        longitude: -95.256045, 
        weight: 1, 
    },
    {
        latitude: 29.783503,  
        longitude: -95.470121, 
        weight: 1, 
    },
    {
        latitude: 29.802658,  
        longitude: -95.381904, 
        weight: 1, 
    },
    {
        latitude: 29.802658,  
        longitude: -95.381904, 
        weight: 1, 
    },
    {
        latitude: 29.802658,  
        longitude: -95.381904, 
        weight: 1, 
    },
    {
        latitude: 29.652987,  
        longitude: -95.480381, 
        weight: 1, 
    },
    {
        latitude: 29.638579,  
        longitude: -95.4954, 
        weight: 1, 
    },
    {
        latitude: 29.732851,  
        longitude: -95.480377, 
        weight: 1, 
    },
    {
        latitude: 29.689674,  
        longitude: -95.380921, 
        weight: 1, 
    },
    {
        latitude: 29.936431,  
        longitude: -95.413128, 
        weight: 1, 
    },
    {
        latitude: 29.826865,  
        longitude: -95.443058, 
        weight: 1, 
    },
    {
        latitude: 29.703112,  
        longitude: -95.303913, 
        weight: 1, 
    },
    {
        latitude: 29.676293,  
        longitude: -95.428514, 
        weight: 1, 
    },
    {
        latitude: 29.751337,  
        longitude: -95.455185, 
        weight: 1, 
    },
    {
        latitude: 29.736081,  
        longitude: -95.400586, 
        weight: 1, 
    },
    {
        latitude: 29.693439,  
        longitude: -95.245944, 
        weight: 1, 
    },
    {
        latitude: 29.676524,  
        longitude: -95.594003, 
        weight: 1, 
    },
    {
        latitude: 29.676524,  
        longitude: -95.594003, 
        weight: 1, 
    },
    {
        latitude: 29.833306,  
        longitude: -95.369262, 
        weight: 1, 
    },
    {
        latitude: 29.823035,  
        longitude: -95.359774, 
        weight: 1, 
    },
    {
        latitude: 29.78939,  
        longitude: -95.406148, 
        weight: 1, 
    },
    {
        latitude: 29.674289,  
        longitude: -95.555075, 
        weight: 1, 
    },
    {
        latitude: 29.674289,  
        longitude: -95.555075, 
        weight: 1, 
    },
    {
        latitude: 29.674289,  
        longitude: -95.555075, 
        weight: 1, 
    },
    {
        latitude: 29.793902,  
        longitude: -95.339076, 
        weight: 1, 
    },
    {
        latitude: 29.61667,  
        longitude: -95.367547, 
        weight: 1, 
    },
    {
        latitude: 30.060022,  
        longitude: -95.249474, 
        weight: 1, 
    },
    {
        latitude: 29.744822,  
        longitude: -95.380867, 
        weight: 1, 
    },
    {
        latitude: 29.848507,  
        longitude: -95.298723, 
        weight: 1, 
    },
    {
        latitude: 29.922298,  
        longitude: -95.407042, 
        weight: 1, 
    },
    {
        latitude: 29.85747,  
        longitude: -95.524418, 
        weight: 1, 
    },
    {
        latitude: 29.699017,  
        longitude: -95.242208, 
        weight: 1, 
    },
    {
        latitude: 29.699017,  
        longitude: -95.242208, 
        weight: 1, 
    },
    {
        latitude: 29.645286,  
        longitude: -95.508296, 
        weight: 1, 
    },
    {
        latitude: 29.889821,  
        longitude: -95.425686, 
        weight: 1, 
    },
    {
        latitude: 29.749879,  
        longitude: -95.375637, 
        weight: 1, 
    },
    {
        latitude: 29.764572,  
        longitude: -95.357153, 
        weight: 1, 
    },
    {
        latitude: 29.764572,  
        longitude: -95.357153, 
        weight: 1, 
    },
    {
        latitude: 29.757395,  
        longitude: -95.361999, 
        weight: 1, 
    },
    {
        latitude: 29.809083,  
        longitude: -95.431758, 
        weight: 1, 
    },
    {
        latitude: 29.772041,  
        longitude: -95.226395, 
        weight: 1, 
    },
    {
        latitude: 29.888112,  
        longitude: -95.422111, 
        weight: 1, 
    },
    {
        latitude: 29.701679,  
        longitude: -95.370094, 
        weight: 1, 
    },
    {
        latitude: 29.674649,  
        longitude: -95.577882, 
        weight: 1, 
    },
    {
        latitude: 29.801593,  
        longitude: -95.458661, 
        weight: 1, 
    },
    {
        latitude: 29.628847,  
        longitude: -95.464908, 
        weight: 1, 
    },
    {
        latitude: 29.712332,  
        longitude: -95.490966, 
        weight: 1, 
    },
    {
        latitude: 29.845389,  
        longitude: -95.44471, 
        weight: 1, 
    },
    {
        latitude: 29.845389,  
        longitude: -95.44471, 
        weight: 1, 
    },
    {
        latitude: 29.706754,  
        longitude: -95.253863, 
        weight: 1, 
    },
    {
        latitude: 29.747914,  
        longitude: -95.576712, 
        weight: 1, 
    },
    {
        latitude: 29.704445,  
        longitude: -95.360252, 
        weight: 1, 
    },
    {
        latitude: 29.739285,  
        longitude: -95.558452, 
        weight: 1, 
    },
    {
        latitude: 29.739285,  
        longitude: -95.558452, 
        weight: 1, 
    },
    {
        latitude: 29.739285,  
        longitude: -95.558452, 
        weight: 1, 
    },
    {
        latitude: 29.827707,  
        longitude: -95.360086, 
        weight: 1, 
    },
    {
        latitude: 29.694687,  
        longitude: -95.245557, 
        weight: 1, 
    },
    {
        latitude: 29.786646,  
        longitude: -95.658012, 
        weight: 1, 
    },
    {
        latitude: 29.688611,  
        longitude: -95.419107, 
        weight: 1, 
    },
    {
        latitude: 29.953944,  
        longitude: -95.422674, 
        weight: 1, 
    },
    {
        latitude: 29.818764,  
        longitude: -95.47374, 
        weight: 1, 
    },
    {
        latitude: 29.68525,  
        longitude: -95.291642, 
        weight: 1, 
    },
    {
        latitude: 29.787593,  
        longitude: -95.332742, 
        weight: 1, 
    },
    {
        latitude: 29.813311,  
        longitude: -95.337039, 
        weight: 1, 
    },
    {
        latitude: 29.813311,  
        longitude: -95.337039, 
        weight: 1, 
    },
    {
        latitude: 29.655314,  
        longitude: -95.253809, 
        weight: 1, 
    },
    {
        latitude: 29.667121,  
        longitude: -95.562824, 
        weight: 1, 
    },
    {
        latitude: 29.643254,  
        longitude: -95.263145, 
        weight: 1, 
    },
    {
        latitude: 29.643254,  
        longitude: -95.263145, 
        weight: 1, 
    },
    {
        latitude: 29.701295,  
        longitude: -95.399218, 
        weight: 1, 
    },
    {
        latitude: 29.553041,  
        longitude: -95.122852, 
        weight: 1, 
    },
    {
        latitude: 29.831501,  
        longitude: -95.284346, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.79323,  
        longitude: -95.35191, 
        weight: 1, 
    },
    {
        latitude: 29.79323,  
        longitude: -95.35191, 
        weight: 1, 
    },
    {
        latitude: 29.679447,  
        longitude: -95.249542, 
        weight: 1, 
    },
    {
        latitude: 29.678304,  
        longitude: -95.549388, 
        weight: 1, 
    },
    {
        latitude: 29.678304,  
        longitude: -95.549388, 
        weight: 1, 
    },
    {
        latitude: 29.733573,  
        longitude: -95.558325, 
        weight: 1, 
    },
    {
        latitude: 29.647848,  
        longitude: -95.211034, 
        weight: 1, 
    },
    {
        latitude: 29.863147,  
        longitude: -95.502937, 
        weight: 1, 
    },
    {
        latitude: 29.673704,  
        longitude: -95.445233, 
        weight: 1, 
    },
    {
        latitude: 29.784249,  
        longitude: -95.645721, 
        weight: 1, 
    },
    {
        latitude: 29.673297,  
        longitude: -95.440469, 
        weight: 1, 
    },
    {
        latitude: 29.746023,  
        longitude: -95.485143, 
        weight: 1, 
    },
    {
        latitude: 29.692285,  
        longitude: -95.280493, 
        weight: 1, 
    },
    {
        latitude: 29.740036,  
        longitude: -95.408261, 
        weight: 1, 
    },
    {
        latitude: 29.744081,  
        longitude: -95.394529, 
        weight: 1, 
    },
    {
        latitude: 29.623133,  
        longitude: -95.392447, 
        weight: 1, 
    },
    {
        latitude: 29.759638,  
        longitude: -95.360084, 
        weight: 1, 
    },
    {
        latitude: 29.847016,  
        longitude: -95.430667, 
        weight: 1, 
    },
    {
        latitude: 29.847016,  
        longitude: -95.430667, 
        weight: 1, 
    },
    {
        latitude: 29.691028,  
        longitude: -95.535587, 
        weight: 1, 
    },
    {
        latitude: 29.69311,  
        longitude: -95.400935, 
        weight: 1, 
    },
    {
        latitude: 29.673995,  
        longitude: -95.330773, 
        weight: 1, 
    },
    {
        latitude: 29.72345,  
        longitude: -95.520504, 
        weight: 1, 
    },
    {
        latitude: 29.72345,  
        longitude: -95.520504, 
        weight: 1, 
    },
    {
        latitude: 29.819551,  
        longitude: -95.463364, 
        weight: 1, 
    },
    {
        latitude: 29.849516,  
        longitude: -95.331772, 
        weight: 1, 
    },
    {
        latitude: 29.742696,  
        longitude: -95.644377, 
        weight: 1, 
    },
    {
        latitude: 29.739444,  
        longitude: -95.38117, 
        weight: 1, 
    },
    {
        latitude: 29.750054,  
        longitude: -95.372975, 
        weight: 1, 
    },
    {
        latitude: 29.685131,  
        longitude: -95.377102, 
        weight: 1, 
    },
    {
        latitude: 29.767673,  
        longitude: -95.375976, 
        weight: 1, 
    },
    {
        latitude: 29.644253,  
        longitude: -95.507347, 
        weight: 1, 
    },
    {
        latitude: 29.788057,  
        longitude: -95.645976, 
        weight: 1, 
    },
    {
        latitude: 29.707842,  
        longitude: -95.495186, 
        weight: 1, 
    },
    {
        latitude: 29.609017,  
        longitude: -95.443198, 
        weight: 1, 
    },
    {
        latitude: 29.767032,  
        longitude: -95.624349, 
        weight: 1, 
    },
    {
        latitude: 29.770063,  
        longitude: -95.382766, 
        weight: 1, 
    },
    {
        latitude: 29.825752,  
        longitude: -95.569938, 
        weight: 1, 
    },
    {
        latitude: 29.764101,  
        longitude: -95.430159, 
        weight: 1, 
    },
    {
        latitude: 29.800398,  
        longitude: -95.31641, 
        weight: 1, 
    },
    {
        latitude: 29.854923,  
        longitude: -95.392858, 
        weight: 1, 
    },
    {
        latitude: 29.719525,  
        longitude: -95.323608, 
        weight: 1, 
    },
    {
        latitude: 29.753703,  
        longitude: -95.366214, 
        weight: 1, 
    },
    {
        latitude: 29.753703,  
        longitude: -95.366214, 
        weight: 1, 
    },
    {
        latitude: 29.800803,  
        longitude: -95.480731, 
        weight: 1, 
    },
    {
        latitude: 29.772735,  
        longitude: -95.198527, 
        weight: 1, 
    },
    {
        latitude: 29.772735,  
        longitude: -95.198527, 
        weight: 1, 
    },
    {
        latitude: 29.7329,  
        longitude: -95.49675, 
        weight: 1, 
    },
    {
        latitude: 29.84553,  
        longitude: -95.390735, 
        weight: 1, 
    },
    {
        latitude: 29.704842,  
        longitude: -95.512844, 
        weight: 1, 
    },
    {
        latitude: 29.776537,  
        longitude: -95.299908, 
        weight: 1, 
    },
    {
        latitude: 29.987347,  
        longitude: -95.35243, 
        weight: 1, 
    },
    {
        latitude: 30.056723,  
        longitude: -95.189369, 
        weight: 1, 
    },
    {
        latitude: 29.636737,  
        longitude: -95.239228, 
        weight: 1, 
    },
    {
        latitude: 29.838075,  
        longitude: -95.258234, 
        weight: 1, 
    },
    {
        latitude: 29.737096,  
        longitude: -95.352098, 
        weight: 1, 
    },
    {
        latitude: 29.6128,  
        longitude: -95.355414, 
        weight: 1, 
    },
    {
        latitude: 29.6128,  
        longitude: -95.355414, 
        weight: 1, 
    },
    {
        latitude: 29.780882,  
        longitude: -95.486632, 
        weight: 1, 
    },
    {
        latitude: 29.812382,  
        longitude: -95.21016, 
        weight: 1, 
    },
    {
        latitude: 30.069902,  
        longitude: -95.180096, 
        weight: 1, 
    },
    {
        latitude: 29.803984,  
        longitude: -95.398161, 
        weight: 1, 
    },
    {
        latitude: 29.733762,  
        longitude: -95.504633, 
        weight: 1, 
    },
    {
        latitude: 29.785743,  
        longitude: -95.640501, 
        weight: 1, 
    },
    {
        latitude: 29.745847,  
        longitude: -95.467041, 
        weight: 1, 
    },
    {
        latitude: 29.771006,  
        longitude: -95.185079, 
        weight: 1, 
    },
    {
        latitude: 29.678989,  
        longitude: -95.482379, 
        weight: 1, 
    },
    {
        latitude: 29.682639,  
        longitude: -95.38691, 
        weight: 1, 
    },
    {
        latitude: 29.673435,  
        longitude: -95.598825, 
        weight: 1, 
    },
    {
        latitude: 29.714377,  
        longitude: -95.536251, 
        weight: 1, 
    },
    {
        latitude: 29.714377,  
        longitude: -95.536251, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.953512,  
        longitude: -95.331417, 
        weight: 1, 
    },
    {
        latitude: 29.85872,  
        longitude: -95.29949, 
        weight: 1, 
    },
    {
        latitude: 29.660787,  
        longitude: -95.528047, 
        weight: 1, 
    },
    {
        latitude: 29.75126,  
        longitude: -95.366859, 
        weight: 1, 
    },
    {
        latitude: 29.689136,  
        longitude: -95.457206, 
        weight: 1, 
    },
    {
        latitude: 29.771058,  
        longitude: -95.225254, 
        weight: 1, 
    },
    {
        latitude: 29.772471,  
        longitude: -95.218391, 
        weight: 1, 
    },
    {
        latitude: 29.858391,  
        longitude: -95.473333, 
        weight: 1, 
    },
    {
        latitude: 29.616494,  
        longitude: -95.21249, 
        weight: 1, 
    },
    {
        latitude: 29.737547,  
        longitude: -95.504421, 
        weight: 1, 
    },
    {
        latitude: 29.82764,  
        longitude: -95.458115, 
        weight: 1, 
    },
    {
        latitude: 29.888826,  
        longitude: -95.408592, 
        weight: 1, 
    },
    {
        latitude: 29.771177,  
        longitude: -95.410591, 
        weight: 1, 
    },
    {
        latitude: 29.776268,  
        longitude: -95.586617, 
        weight: 1, 
    },
    {
        latitude: 29.714312,  
        longitude: -95.571406, 
        weight: 1, 
    },
    {
        latitude: 29.691539,  
        longitude: -95.296371, 
        weight: 1, 
    },
    {
        latitude: 29.691539,  
        longitude: -95.296371, 
        weight: 1, 
    },
    {
        latitude: 29.686711,  
        longitude: -95.508743, 
        weight: 1, 
    },
    {
        latitude: 29.726293,  
        longitude: -95.476379, 
        weight: 1, 
    },
    {
        latitude: 29.726293,  
        longitude: -95.476379, 
        weight: 1, 
    },
    {
        latitude: 29.739581,  
        longitude: -95.25646, 
        weight: 1, 
    },
    {
        latitude: 29.75541,  
        longitude: -95.492856, 
        weight: 1, 
    },
    {
        latitude: 29.764006,  
        longitude: -95.429277, 
        weight: 1, 
    },
    {
        latitude: 29.659095,  
        longitude: -95.361493, 
        weight: 1, 
    },
    {
        latitude: 29.759643,  
        longitude: -95.360112, 
        weight: 1, 
    },
    {
        latitude: 29.929829,  
        longitude: -95.411359, 
        weight: 1, 
    },
    {
        latitude: 29.711224,  
        longitude: -95.482607, 
        weight: 1, 
    },
    {
        latitude: 29.736536,  
        longitude: -95.587511, 
        weight: 1, 
    },
    {
        latitude: 29.803826,  
        longitude: -95.371148, 
        weight: 1, 
    },
    {
        latitude: 29.64297,  
        longitude: -95.304677, 
        weight: 1, 
    },
    {
        latitude: 29.678987,  
        longitude: -95.481541, 
        weight: 1, 
    },
    {
        latitude: 29.6158,  
        longitude: -95.210978, 
        weight: 1, 
    },
    {
        latitude: 29.764461,  
        longitude: -95.36253, 
        weight: 1, 
    },
    {
        latitude: 29.78221,  
        longitude: -95.544032, 
        weight: 1, 
    },
    {
        latitude: 29.762935,  
        longitude: -95.557924, 
        weight: 1, 
    },
    {
        latitude: 29.646972,  
        longitude: -95.498567, 
        weight: 1, 
    },
    {
        latitude: 29.776128,  
        longitude: -95.399983, 
        weight: 1, 
    },
    {
        latitude: 29.802358,  
        longitude: -95.367874, 
        weight: 1, 
    },
    {
        latitude: 29.690538,  
        longitude: -95.431458, 
        weight: 1, 
    },
    {
        latitude: 29.690538,  
        longitude: -95.431458, 
        weight: 1, 
    },
    {
        latitude: 29.707341,  
        longitude: -95.476296, 
        weight: 1, 
    },
    {
        latitude: 29.802817,  
        longitude: -95.482138, 
        weight: 1, 
    },
    {
        latitude: 29.642249,  
        longitude: -95.240963, 
        weight: 1, 
    },
    {
        latitude: 29.968536,  
        longitude: -95.423466, 
        weight: 1, 
    },
    {
        latitude: 29.822698,  
        longitude: -95.541393, 
        weight: 1, 
    },
    {
        latitude: 29.654801,  
        longitude: -95.355379, 
        weight: 1, 
    },
    {
        latitude: 29.848391,  
        longitude: -95.478536, 
        weight: 1, 
    },
    {
        latitude: 29.987356,  
        longitude: -95.352327, 
        weight: 1, 
    },
    {
        latitude: 29.758451,  
        longitude: -95.367575, 
        weight: 1, 
    },
    {
        latitude: 29.747518,  
        longitude: -95.569026, 
        weight: 1, 
    },
    {
        latitude: 29.654477,  
        longitude: -95.252188, 
        weight: 1, 
    },
    {
        latitude: 29.654477,  
        longitude: -95.252188, 
        weight: 1, 
    },
    {
        latitude: 29.767324,  
        longitude: -95.478646, 
        weight: 1, 
    },
    {
        latitude: 29.710773,  
        longitude: -95.516007, 
        weight: 1, 
    },
    {
        latitude: 29.737611,  
        longitude: -95.499532, 
        weight: 1, 
    },
    {
        latitude: 29.724959,  
        longitude: -95.441343, 
        weight: 1, 
    },
    {
        latitude: 29.716066,  
        longitude: -95.545246, 
        weight: 1, 
    },
    {
        latitude: 29.862787,  
        longitude: -95.388762, 
        weight: 1, 
    },
    {
        latitude: 29.746962,  
        longitude: -95.586865, 
        weight: 1, 
    },
    {
        latitude: 29.78221,  
        longitude: -95.544032, 
        weight: 1, 
    },
    {
        latitude: 29.636927,  
        longitude: -95.319784, 
        weight: 1, 
    },
    {
        latitude: 29.821405,  
        longitude: -95.334294, 
        weight: 1, 
    },
    {
        latitude: 29.681881,  
        longitude: -95.25062, 
        weight: 1, 
    },
    {
        latitude: 29.845911,  
        longitude: -95.38443, 
        weight: 1, 
    },
    {
        latitude: 29.759799,  
        longitude: -95.369647, 
        weight: 1, 
    },
    {
        latitude: 29.737513,  
        longitude: -95.511186, 
        weight: 1, 
    },
    {
        latitude: 29.689514,  
        longitude: -95.557907, 
        weight: 1, 
    },
    {
        latitude: 29.824904,  
        longitude: -95.394561, 
        weight: 1, 
    },
    {
        latitude: 29.703513,  
        longitude: -95.603076, 
        weight: 1, 
    },
    {
        latitude: 29.636122,  
        longitude: -95.492361, 
        weight: 1, 
    },
    {
        latitude: 29.867498,  
        longitude: -95.397795, 
        weight: 1, 
    },
    {
        latitude: 29.949401,  
        longitude: -95.413033, 
        weight: 1, 
    },
    {
        latitude: 29.605016,  
        longitude: -95.124215, 
        weight: 1, 
    },
    {
        latitude: 29.782933,  
        longitude: -95.642759, 
        weight: 1, 
    },
    {
        latitude: 29.9633,  
        longitude: -95.544285, 
        weight: 1, 
    },
    {
        latitude: 29.813961,  
        longitude: -95.461164, 
        weight: 1, 
    },
    {
        latitude: 29.756374,  
        longitude: -95.625274, 
        weight: 1, 
    },
    {
        latitude: 30.079491,  
        longitude: -95.186495, 
        weight: 1, 
    },
    {
        latitude: 29.872937,  
        longitude: -95.457826, 
        weight: 1, 
    },
    {
        latitude: 29.938977,  
        longitude: -95.391872, 
        weight: 1, 
    },
    {
        latitude: 29.938977,  
        longitude: -95.391872, 
        weight: 1, 
    },
    {
        latitude: 29.739528,  
        longitude: -95.558456, 
        weight: 1, 
    },
    {
        latitude: 29.642406,  
        longitude: -95.510049, 
        weight: 1, 
    },
    {
        latitude: 29.642406,  
        longitude: -95.510049, 
        weight: 1, 
    },
    {
        latitude: 29.751198,  
        longitude: -95.485901, 
        weight: 1, 
    },
    {
        latitude: 29.751198,  
        longitude: -95.485901, 
        weight: 1, 
    },
    {
        latitude: 29.777443,  
        longitude: -95.59878, 
        weight: 1, 
    },
    {
        latitude: 29.676636,  
        longitude: -95.574515, 
        weight: 1, 
    },
    {
        latitude: 29.730536,  
        longitude: -95.496095, 
        weight: 1, 
    },
    {
        latitude: 29.779882,  
        longitude: -95.218582, 
        weight: 1, 
    },
    {
        latitude: 29.693357,  
        longitude: -95.423367, 
        weight: 1, 
    },
    {
        latitude: 29.641307,  
        longitude: -95.444347, 
        weight: 1, 
    },
    {
        latitude: 29.578479,  
        longitude: -95.514324, 
        weight: 1, 
    },
    {
        latitude: 29.741956,  
        longitude: -95.479429, 
        weight: 1, 
    },
    {
        latitude: 29.795872,  
        longitude: -95.48715, 
        weight: 1, 
    },
    {
        latitude: 29.834897,  
        longitude: -95.295583, 
        weight: 1, 
    },
    {
        latitude: 29.819582,  
        longitude: -95.461361, 
        weight: 1, 
    },
    {
        latitude: 29.830736,  
        longitude: -95.486104, 
        weight: 1, 
    },
    {
        latitude: 29.770828,  
        longitude: -95.32544, 
        weight: 1, 
    },
    {
        latitude: 29.770828,  
        longitude: -95.32544, 
        weight: 1, 
    },
    {
        latitude: 29.770828,  
        longitude: -95.32544, 
        weight: 1, 
    },
    {
        latitude: 29.729218,  
        longitude: -95.517733, 
        weight: 1, 
    },
    {
        latitude: 29.725284,  
        longitude: -95.606574, 
        weight: 1, 
    },
    {
        latitude: 29.779685,  
        longitude: -95.432454, 
        weight: 1, 
    },
    {
        latitude: 29.67225,  
        longitude: -95.432375, 
        weight: 1, 
    },
    {
        latitude: 29.67225,  
        longitude: -95.432375, 
        weight: 1, 
    },
    {
        latitude: 29.762735,  
        longitude: -95.589851, 
        weight: 1, 
    },
    {
        latitude: 29.661367,  
        longitude: -95.272408, 
        weight: 1, 
    },
    {
        latitude: 29.713116,  
        longitude: -95.358425, 
        weight: 1, 
    },
    {
        latitude: 29.633761,  
        longitude: -95.496074, 
        weight: 1, 
    },
    {
        latitude: 29.845749,  
        longitude: -95.501926, 
        weight: 1, 
    },
    {
        latitude: 29.785171,  
        longitude: -95.570653, 
        weight: 1, 
    },
    {
        latitude: 29.68133,  
        longitude: -95.387428, 
        weight: 1, 
    },
    {
        latitude: 29.766242,  
        longitude: -95.409398, 
        weight: 1, 
    },
    {
        latitude: 29.870157,  
        longitude: -95.376436, 
        weight: 1, 
    },
    {
        latitude: 29.718166,  
        longitude: -95.50621, 
        weight: 1, 
    },
    {
        latitude: 29.77029,  
        longitude: -95.186538, 
        weight: 1, 
    },
    {
        latitude: 29.740844,  
        longitude: -95.461003, 
        weight: 1, 
    },
    {
        latitude: 29.743736,  
        longitude: -95.457027, 
        weight: 1, 
    },
    {
        latitude: 29.724787,  
        longitude: -95.504698, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.784246,  
        longitude: -95.606483, 
        weight: 1, 
    },
    {
        latitude: 29.616641,  
        longitude: -95.433552, 
        weight: 1, 
    },
    {
        latitude: 29.695106,  
        longitude: -95.3607, 
        weight: 1, 
    },
    {
        latitude: 29.835299,  
        longitude: -95.475407, 
        weight: 1, 
    },
    {
        latitude: 29.727627,  
        longitude: -95.55819, 
        weight: 1, 
    },
    {
        latitude: 29.589817,  
        longitude: -95.198634, 
        weight: 1, 
    },
    {
        latitude: 29.818013,  
        longitude: -95.339368, 
        weight: 1, 
    },
    {
        latitude: 29.704858,  
        longitude: -95.513103, 
        weight: 1, 
    },
    {
        latitude: 29.818348,  
        longitude: -95.465812, 
        weight: 1, 
    },
    {
        latitude: 29.848284,  
        longitude: -95.506802, 
        weight: 1, 
    },
    {
        latitude: 29.938662,  
        longitude: -95.359033, 
        weight: 1, 
    },
    {
        latitude: 29.613559,  
        longitude: -95.464937, 
        weight: 1, 
    },
    {
        latitude: 29.937396,  
        longitude: -95.313483, 
        weight: 1, 
    },
    {
        latitude: 29.937396,  
        longitude: -95.313483, 
        weight: 1, 
    },
    {
        latitude: 29.837475,  
        longitude: -95.384336, 
        weight: 1, 
    },
    {
        latitude: 29.738755,  
        longitude: -95.507832, 
        weight: 1, 
    },
    {
        latitude: 29.738755,  
        longitude: -95.507832, 
        weight: 1, 
    },
    {
        latitude: 29.673454,  
        longitude: -95.533724, 
        weight: 1, 
    },
    {
        latitude: 29.623398,  
        longitude: -95.226453, 
        weight: 1, 
    },
    {
        latitude: 29.676275,  
        longitude: -95.459108, 
        weight: 1, 
    },
    {
        latitude: 29.731794,  
        longitude: -95.490483, 
        weight: 1, 
    },
    {
        latitude: 29.842944,  
        longitude: -95.41094, 
        weight: 1, 
    },
    {
        latitude: 30.05915,  
        longitude: -95.249714, 
        weight: 1, 
    },
    {
        latitude: 29.674585,  
        longitude: -95.561129, 
        weight: 1, 
    },
    {
        latitude: 29.778486,  
        longitude: -95.3627, 
        weight: 1, 
    },
    {
        latitude: 29.644377,  
        longitude: -95.356983, 
        weight: 1, 
    },
    {
        latitude: 29.665069,  
        longitude: -95.346216, 
        weight: 1, 
    },
    {
        latitude: 29.665069,  
        longitude: -95.346216, 
        weight: 1, 
    },
    {
        latitude: 29.619134,  
        longitude: -95.207634, 
        weight: 1, 
    },
    {
        latitude: 29.737396,  
        longitude: -95.519863, 
        weight: 1, 
    },
    {
        latitude: 29.859614,  
        longitude: -95.401648, 
        weight: 1, 
    },
    {
        latitude: 29.78507,  
        longitude: -95.557779, 
        weight: 1, 
    },
    {
        latitude: 29.652359,  
        longitude: -95.569479, 
        weight: 1, 
    },
    {
        latitude: 29.680566,  
        longitude: -95.508714, 
        weight: 1, 
    },
    {
        latitude: 29.957828,  
        longitude: -95.541804, 
        weight: 1, 
    },
    {
        latitude: 29.74576,  
        longitude: -95.644549, 
        weight: 1, 
    },
    {
        latitude: 29.795225,  
        longitude: -95.455345, 
        weight: 1, 
    },
    {
        latitude: 29.755849,  
        longitude: -95.363109, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.639686,  
        longitude: -95.3633, 
        weight: 1, 
    },
    {
        latitude: 29.847182,  
        longitude: -95.484524, 
        weight: 1, 
    },
    {
        latitude: 29.735637,  
        longitude: -95.371673, 
        weight: 1, 
    },
    {
        latitude: 29.700493,  
        longitude: -95.516938, 
        weight: 1, 
    },
    {
        latitude: 29.812019,  
        longitude: -95.4103, 
        weight: 1, 
    },
    {
        latitude: 29.812019,  
        longitude: -95.4103, 
        weight: 1, 
    },
    {
        latitude: 29.859023,  
        longitude: -95.366366, 
        weight: 1, 
    },
    {
        latitude: 29.742765,  
        longitude: -95.403636, 
        weight: 1, 
    },
    {
        latitude: 29.725585,  
        longitude: -95.356002, 
        weight: 1, 
    },
    {
        latitude: 29.725585,  
        longitude: -95.356002, 
        weight: 1, 
    },
    {
        latitude: 29.636715,  
        longitude: -95.41397, 
        weight: 1, 
    },
    {
        latitude: 29.636715,  
        longitude: -95.41397, 
        weight: 1, 
    },
    {
        latitude: 29.736199,  
        longitude: -95.604615, 
        weight: 1, 
    },
    {
        latitude: 29.777049,  
        longitude: -95.409721, 
        weight: 1, 
    },
    {
        latitude: 29.817352,  
        longitude: -95.372656, 
        weight: 1, 
    },
    {
        latitude: 29.87586,  
        longitude: -95.412186, 
        weight: 1, 
    },
    {
        latitude: 29.740339,  
        longitude: -95.35758, 
        weight: 1, 
    },
    {
        latitude: 29.757241,  
        longitude: -95.398105, 
        weight: 1, 
    },
    {
        latitude: 29.663436,  
        longitude: -95.456724, 
        weight: 1, 
    },
    {
        latitude: 29.867901,  
        longitude: -95.416251, 
        weight: 1, 
    },
    {
        latitude: 29.74592,  
        longitude: -95.485462, 
        weight: 1, 
    },
    {
        latitude: 29.747296,  
        longitude: -95.391964, 
        weight: 1, 
    },
    {
        latitude: 29.674245,  
        longitude: -95.570664, 
        weight: 1, 
    },
    {
        latitude: 29.557511,  
        longitude: -95.158487, 
        weight: 1, 
    },
    {
        latitude: 29.77946,  
        longitude: -95.535932, 
        weight: 1, 
    },
    {
        latitude: 29.730668,  
        longitude: -95.385738, 
        weight: 1, 
    },
    {
        latitude: 29.748039,  
        longitude: -95.372071, 
        weight: 1, 
    },
    {
        latitude: 29.828953,  
        longitude: -95.355581, 
        weight: 1, 
    },
    {
        latitude: 29.731428,  
        longitude: -95.651984, 
        weight: 1, 
    },
    {
        latitude: 29.785052,  
        longitude: -95.475581, 
        weight: 1, 
    },
    {
        latitude: 29.74771,  
        longitude: -95.456921, 
        weight: 1, 
    },
    {
        latitude: 29.73459,  
        longitude: -95.346832, 
        weight: 1, 
    },
    {
        latitude: 29.559479,  
        longitude: -95.144371, 
        weight: 1, 
    },
    {
        latitude: 29.559479,  
        longitude: -95.144371, 
        weight: 1, 
    },
    {
        latitude: 29.67183,  
        longitude: -95.531904, 
        weight: 1, 
    },
    {
        latitude: 29.738643,  
        longitude: -95.402088, 
        weight: 1, 
    },
    {
        latitude: 29.688719,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.643628,  
        longitude: -95.384798, 
        weight: 1, 
    },
    {
        latitude: 29.751424,  
        longitude: -95.381457, 
        weight: 1, 
    },
    {
        latitude: 29.614467,  
        longitude: -95.365118, 
        weight: 1, 
    },
    {
        latitude: 29.841734,  
        longitude: -95.506294, 
        weight: 1, 
    },
    {
        latitude: 29.812847,  
        longitude: -95.485114, 
        weight: 1, 
    },
    {
        latitude: 29.730536,  
        longitude: -95.496095, 
        weight: 1, 
    },
    {
        latitude: 29.766044,  
        longitude: -95.280159, 
        weight: 1, 
    },
    {
        latitude: 29.828619,  
        longitude: -95.436322, 
        weight: 1, 
    },
    {
        latitude: 29.939479,  
        longitude: -95.389085, 
        weight: 1, 
    },
    {
        latitude: 29.744634,  
        longitude: -95.393213, 
        weight: 1, 
    },
    {
        latitude: 29.744634,  
        longitude: -95.393213, 
        weight: 1, 
    },
    {
        latitude: 29.857343,  
        longitude: -95.345436, 
        weight: 1, 
    },
    {
        latitude: 29.69915,  
        longitude: -95.42307, 
        weight: 1, 
    },
    {
        latitude: 29.606149,  
        longitude: -95.464737, 
        weight: 1, 
    },
    {
        latitude: 29.646977,  
        longitude: -95.498432, 
        weight: 1, 
    },
    {
        latitude: 29.705466,  
        longitude: -95.515001, 
        weight: 1, 
    },
    {
        latitude: 29.644125,  
        longitude: -95.441667, 
        weight: 1, 
    },
    {
        latitude: 29.73799,  
        longitude: -95.465077, 
        weight: 1, 
    },
    {
        latitude: 29.646197,  
        longitude: -95.241502, 
        weight: 1, 
    },
    {
        latitude: 29.580761,  
        longitude: -95.104957, 
        weight: 1, 
    },
    {
        latitude: 29.805208,  
        longitude: -95.284465, 
        weight: 1, 
    },
    {
        latitude: 29.626435,  
        longitude: -95.266627, 
        weight: 1, 
    },
    {
        latitude: 29.784861,  
        longitude: -95.334251, 
        weight: 1, 
    },
    {
        latitude: 29.785095,  
        longitude: -95.533406, 
        weight: 1, 
    },
    {
        latitude: 29.745635,  
        longitude: -95.456553, 
        weight: 1, 
    },
    {
        latitude: 29.779882,  
        longitude: -95.218582, 
        weight: 1, 
    },
    {
        latitude: 29.688719,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.688719,  
        longitude: -95.461633, 
        weight: 1, 
    },
    {
        latitude: 29.812675,  
        longitude: -95.539797, 
        weight: 1, 
    },
    {
        latitude: 29.735377,  
        longitude: -95.487838, 
        weight: 1, 
    },
    {
        latitude: 29.821,  
        longitude: -95.399551, 
        weight: 1, 
    },
    {
        latitude: 29.555217,  
        longitude: -95.156283, 
        weight: 1, 
    },
    {
        latitude: 29.714327,  
        longitude: -95.502416, 
        weight: 1, 
    },
    {
        latitude: 29.695539,  
        longitude: -95.604674, 
        weight: 1, 
    },
    {
        latitude: 29.650302,  
        longitude: -95.496474, 
        weight: 1, 
    },
    {
        latitude: 29.621446,  
        longitude: -95.300899, 
        weight: 1, 
    },
    {
        latitude: 29.756961,  
        longitude: -95.368762, 
        weight: 1, 
    },
    {
        latitude: 29.838185,  
        longitude: -95.381298, 
        weight: 1, 
    },
    {
        latitude: 29.607324,  
        longitude: -95.495653, 
        weight: 1, 
    },
    {
        latitude: 29.787063,  
        longitude: -95.325643, 
        weight: 1, 
    },
    {
        latitude: 29.73591,  
        longitude: -95.347118, 
        weight: 1, 
    },
    {
        latitude: 29.704635,  
        longitude: -95.554966, 
        weight: 1, 
    },
    {
        latitude: 29.686897,  
        longitude: -95.542123, 
        weight: 1, 
    },
    {
        latitude: 29.847307,  
        longitude: -95.401492, 
        weight: 1, 
    },
    {
        latitude: 29.950384,  
        longitude: -95.536096, 
        weight: 1, 
    },
    {
        latitude: 29.709287,  
        longitude: -95.401043, 
        weight: 1, 
    },
    {
        latitude: 29.709287,  
        longitude: -95.401043, 
        weight: 1, 
    },
    {
        latitude: 29.699362,  
        longitude: -95.490794, 
        weight: 1, 
    },
    {
        latitude: 29.850102,  
        longitude: -95.420024, 
        weight: 1, 
    },
    {
        latitude: 29.667015,  
        longitude: -95.562042, 
        weight: 1, 
    },
    {
        latitude: 29.667015,  
        longitude: -95.562042, 
        weight: 1, 
    },
    {
        latitude: 29.690262,  
        longitude: -95.412552, 
        weight: 1, 
    },
    {
        latitude: 29.65591,  
        longitude: -95.253144, 
        weight: 1, 
    },
    {
        latitude: 29.699656,  
        longitude: -95.422969, 
        weight: 1, 
    },
    {
        latitude: 29.699656,  
        longitude: -95.422969, 
        weight: 1, 
    },
    {
        latitude: 29.738806,  
        longitude: -95.285118, 
        weight: 1, 
    },
    {
        latitude: 29.543345,  
        longitude: -95.145725, 
        weight: 1, 
    },
    {
        latitude: 29.75923,  
        longitude: -95.348686, 
        weight: 1, 
    },
    {
        latitude: 29.734657,  
        longitude: -95.5393, 
        weight: 1, 
    },
    {
        latitude: 29.705147,  
        longitude: -95.521309, 
        weight: 1, 
    },
    {
        latitude: 29.736199,  
        longitude: -95.604566, 
        weight: 1, 
    },
    {
        latitude: 29.68634,  
        longitude: -95.595282, 
        weight: 1, 
    },
    {
        latitude: 29.68634,  
        longitude: -95.595282, 
        weight: 1, 
    },
    {
        latitude: 29.86883,  
        longitude: -95.425758, 
        weight: 1, 
    },
    {
        latitude: 29.770665,  
        longitude: -95.381677, 
        weight: 1, 
    },
    {
        latitude: 29.799524,  
        longitude: -95.524179, 
        weight: 1, 
    },
    {
        latitude: 29.675013,  
        longitude: -95.587266, 
        weight: 1, 
    },
    {
        latitude: 29.785827,  
        longitude: -95.464988, 
        weight: 1, 
    },
    {
        latitude: 29.637321,  
        longitude: -95.349456, 
        weight: 1, 
    },
    {
        latitude: 29.974208,  
        longitude: -95.186454, 
        weight: 1, 
    },
    {
        latitude: 29.852174,  
        longitude: -95.520405, 
        weight: 1, 
    },
    {
        latitude: 29.739029,  
        longitude: -95.307657, 
        weight: 1, 
    },
    {
        latitude: 29.77048,  
        longitude: -95.40863, 
        weight: 1, 
    },
    {
        latitude: 29.664957,  
        longitude: -95.257938, 
        weight: 1, 
    },
    {
        latitude: 29.656005,  
        longitude: -95.258413, 
        weight: 1, 
    },
    {
        latitude: 29.682497,  
        longitude: -95.574565, 
        weight: 1, 
    },
    {
        latitude: 29.733347,  
        longitude: -95.431981, 
        weight: 1, 
    },
    {
        latitude: 29.743801,  
        longitude: -95.395025, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.733872,  
        longitude: -95.575898, 
        weight: 1, 
    },
    {
        latitude: 29.833169,  
        longitude: -95.410735, 
        weight: 1, 
    },
    {
        latitude: 29.650072,  
        longitude: -95.528239, 
        weight: 1, 
    },
    {
        latitude: 29.747668,  
        longitude: -95.299074, 
        weight: 1, 
    },
    {
        latitude: 29.655907,  
        longitude: -95.355415, 
        weight: 1, 
    },
    {
        latitude: 29.670689,  
        longitude: -95.343282, 
        weight: 1, 
    },
    {
        latitude: 29.590283,  
        longitude: -95.146101, 
        weight: 1, 
    },
    {
        latitude: 29.630209,  
        longitude: -95.488889, 
        weight: 1, 
    },
    {
        latitude: 29.732229,  
        longitude: -95.566646, 
        weight: 1, 
    },
    {
        latitude: 29.695574,  
        longitude: -95.594977, 
        weight: 1, 
    },
    {
        latitude: 29.843484,  
        longitude: -95.394152, 
        weight: 1, 
    },
    {
        latitude: 29.751711,  
        longitude: -95.399118, 
        weight: 1, 
    },
    {
        latitude: 29.623398,  
        longitude: -95.226453, 
        weight: 1, 
    },
    {
        latitude: 29.759626,  
        longitude: -95.352653, 
        weight: 1, 
    },
    {
        latitude: 29.674027,  
        longitude: -95.277135, 
        weight: 1, 
    },
    {
        latitude: 29.674027,  
        longitude: -95.277135, 
        weight: 1, 
    },
    {
        latitude: 29.727339,  
        longitude: -95.515298, 
        weight: 1, 
    },
    {
        latitude: 29.555217,  
        longitude: -95.156283, 
        weight: 1, 
    },
    {
        latitude: 29.705195,  
        longitude: -95.516967, 
        weight: 1, 
    },
    {
        latitude: 29.691022,  
        longitude: -95.360028, 
        weight: 1, 
    },
    {
        latitude: 29.715817,  
        longitude: -95.510056, 
        weight: 1, 
    },
    {
        latitude: 29.957766,  
        longitude: -95.541661, 
        weight: 1, 
    },
    {
        latitude: 29.705195,  
        longitude: -95.516967, 
        weight: 1, 
    },
    {
        latitude: 29.766179,  
        longitude: -95.556076, 
        weight: 1, 
    },
    {
        latitude: 29.780067,  
        longitude: -95.581594, 
        weight: 1, 
    },
    {
        latitude: 29.839627,  
        longitude: -95.342794, 
        weight: 1, 
    },
    {
        latitude: 29.80498,  
        longitude: -95.484884, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.742555,  
        longitude: -95.482545, 
        weight: 1, 
    },
    {
        latitude: 29.668077,  
        longitude: -95.468893, 
        weight: 1, 
    },
    {
        latitude: 29.538379,  
        longitude: -95.148744, 
        weight: 1, 
    },
    {
        latitude: 29.689809,  
        longitude: -95.380846, 
        weight: 1, 
    },
    {
        latitude: 29.693044,  
        longitude: -95.270208, 
        weight: 1, 
    },
    {
        latitude: 29.65388,  
        longitude: -95.35536, 
        weight: 1, 
    },
    {
        latitude: 29.794263,  
        longitude: -95.697043, 
        weight: 1, 
    },
    {
        latitude: 29.713604,  
        longitude: -95.493097, 
        weight: 1, 
    },
    {
        latitude: 29.967063,  
        longitude: -95.284339, 
        weight: 1, 
    },
    {
        latitude: 29.791059,  
        longitude: -95.553339, 
        weight: 1, 
    },
    {
        latitude: 29.84838,  
        longitude: -95.394421, 
        weight: 1, 
    },
    {
        latitude: 29.819696,  
        longitude: -95.328745, 
        weight: 1, 
    },
    {
        latitude: 29.66406,  
        longitude: -95.550992, 
        weight: 1, 
    },
    {
        latitude: 29.886766,  
        longitude: -95.29797, 
        weight: 1, 
    },
    {
        latitude: 29.987347,  
        longitude: -95.35243, 
        weight: 1, 
    },
    {
        latitude: 29.682597,  
        longitude: -95.574566, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.748509,  
        longitude: -95.371529, 
        weight: 1, 
    },
    {
        latitude: 29.831944,  
        longitude: -95.342682, 
        weight: 1, 
    },
    {
        latitude: 29.859619,  
        longitude: -95.401432, 
        weight: 1, 
    },
    {
        latitude: 29.859619,  
        longitude: -95.401432, 
        weight: 1, 
    },
    {
        latitude: 29.672316,  
        longitude: -95.277098, 
        weight: 1, 
    },
    {
        latitude: 29.855799,  
        longitude: -95.540222, 
        weight: 1, 
    },
    {
        latitude: 29.784257,  
        longitude: -95.303047, 
        weight: 1, 
    },
    {
        latitude: 29.784257,  
        longitude: -95.303047, 
        weight: 1, 
    },
    {
        latitude: 29.784257,  
        longitude: -95.303047, 
        weight: 1, 
    },
    {
        latitude: 29.711554,  
        longitude: -95.49304, 
        weight: 1, 
    },
    {
        latitude: 29.54336,  
        longitude: -95.145689, 
        weight: 1, 
    },
    {
        latitude: 29.732016,  
        longitude: -95.365585, 
        weight: 1, 
    },
    {
        latitude: 29.732016,  
        longitude: -95.365585, 
        weight: 1, 
    },
    {
        latitude: 29.786396,  
        longitude: -95.351997, 
        weight: 1, 
    },
    {
        latitude: 29.613248,  
        longitude: -95.452525, 
        weight: 1, 
    },
    {
        latitude: 29.751752,  
        longitude: -95.376672, 
        weight: 1, 
    },
    {
        latitude: 29.735893,  
        longitude: -95.620605, 
        weight: 1, 
    },
    {
        latitude: 29.68634,  
        longitude: -95.595282, 
        weight: 1, 
    },
    {
        latitude: 29.667892,  
        longitude: -95.481033, 
        weight: 1, 
    },
    {
        latitude: 29.761926,  
        longitude: -95.213035, 
        weight: 1, 
    },
    {
        latitude: 29.610189,  
        longitude: -95.438733, 
        weight: 1, 
    },
    {
        latitude: 29.610189,  
        longitude: -95.438733, 
        weight: 1, 
    },
    {
        latitude: 29.706161,  
        longitude: -95.416871, 
        weight: 1, 
    },
    {
        latitude: 29.618564,  
        longitude: -95.28528, 
        weight: 1, 
    },
    {
        latitude: 29.74994,  
        longitude: -95.355117, 
        weight: 1, 
    },
    {
        latitude: 29.736741,  
        longitude: -95.57284, 
        weight: 1, 
    },
    {
        latitude: 29.75229,  
        longitude: -95.377333, 
        weight: 1, 
    },
    {
        latitude: 29.653816,  
        longitude: -95.258371, 
        weight: 1, 
    },
    {
        latitude: 29.653816,  
        longitude: -95.258371, 
        weight: 1, 
    },
    {
        latitude: 29.723103,  
        longitude: -95.378666, 
        weight: 1, 
    },
    {
        latitude: 29.688837,  
        longitude: -95.412525, 
        weight: 1, 
    },
    {
        latitude: 29.624598,  
        longitude: -95.390041, 
        weight: 1, 
    },
    {
        latitude: 29.784765,  
        longitude: -95.464678, 
        weight: 1, 
    },
    {
        latitude: 29.666501,  
        longitude: -95.03466, 
        weight: 1, 
    },
    {
        latitude: 29.933136,  
        longitude: -95.414853, 
        weight: 1, 
    },
    {
        latitude: 29.613235,  
        longitude: -95.220016, 
        weight: 1, 
    },
    {
        latitude: 29.737987,  
        longitude: -95.469979, 
        weight: 1, 
    },
    {
        latitude: 29.543405,  
        longitude: -95.145625, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.808555,  
        longitude: -95.469761, 
        weight: 1, 
    },
    {
        latitude: 29.957612,  
        longitude: -95.541962, 
        weight: 1, 
    },
    {
        latitude: 29.774524,  
        longitude: -95.35254, 
        weight: 1, 
    },
    {
        latitude: 29.732241,  
        longitude: -95.361729, 
        weight: 1, 
    },
    {
        latitude: 29.879591,  
        longitude: -95.415692, 
        weight: 1, 
    },
    {
        latitude: 29.774654,  
        longitude: -95.315605, 
        weight: 1, 
    },
    {
        latitude: 29.64309,  
        longitude: -95.425302, 
        weight: 1, 
    },
    {
        latitude: 29.832744,  
        longitude: -95.44534, 
        weight: 1, 
    },
    {
        latitude: 29.685697,  
        longitude: -95.366782, 
        weight: 1, 
    },
    {
        latitude: 29.69387,  
        longitude: -95.31196, 
        weight: 1, 
    },
    {
        latitude: 29.680439,  
        longitude: -95.420837, 
        weight: 1, 
    },
    {
        latitude: 29.819611,  
        longitude: -95.210481, 
        weight: 1, 
    },
    {
        latitude: 29.68672,  
        longitude: -95.55751, 
        weight: 1, 
    },
    {
        latitude: 29.619981,  
        longitude: -95.508571, 
        weight: 1, 
    },
    {
        latitude: 29.776515,  
        longitude: -95.402595, 
        weight: 1, 
    },
    {
        latitude: 29.621692,  
        longitude: -95.216995, 
        weight: 1, 
    },
    {
        latitude: 29.865412,  
        longitude: -95.282982, 
        weight: 1, 
    },
    {
        latitude: 29.676237,  
        longitude: -95.459081, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.854889,  
        longitude: -95.26565, 
        weight: 1, 
    },
    {
        latitude: 29.786658,  
        longitude: -95.186899, 
        weight: 1, 
    },
    {
        latitude: 29.61628,  
        longitude: -95.464978, 
        weight: 1, 
    },
    {
        latitude: 29.61628,  
        longitude: -95.464978, 
        weight: 1, 
    },
    {
        latitude: 29.644558,  
        longitude: -95.242436, 
        weight: 1, 
    },
    {
        latitude: 29.84111,  
        longitude: -95.439912, 
        weight: 1, 
    },
    {
        latitude: 29.647507,  
        longitude: -95.479408, 
        weight: 1, 
    },
    {
        latitude: 29.718501,  
        longitude: -95.48484, 
        weight: 1, 
    },
    {
        latitude: 29.722987,  
        longitude: -95.476597, 
        weight: 1, 
    },
    {
        latitude: 29.848731,  
        longitude: -95.513677, 
        weight: 1, 
    },
    {
        latitude: 29.616088,  
        longitude: -95.464958, 
        weight: 1, 
    },
    {
        latitude: 29.784765,  
        longitude: -95.464678, 
        weight: 1, 
    },
    {
        latitude: 29.689463,  
        longitude: -95.561334, 
        weight: 1, 
    },
    {
        latitude: 29.722805,  
        longitude: -95.539078, 
        weight: 1, 
    },
    {
        latitude: 29.843177,  
        longitude: -95.497526, 
        weight: 1, 
    },
    {
        latitude: 29.725052,  
        longitude: -95.356804, 
        weight: 1, 
    },
    {
        latitude: 29.734498,  
        longitude: -95.386258, 
        weight: 1, 
    },
    {
        latitude: 29.821968,  
        longitude: -95.514635, 
        weight: 1, 
    },
    {
        latitude: 29.615219,  
        longitude: -95.496351, 
        weight: 1, 
    },
    {
        latitude: 29.615219,  
        longitude: -95.496351, 
        weight: 1, 
    },
    {
        latitude: 29.689375,  
        longitude: -95.55394, 
        weight: 1, 
    },
    {
        latitude: 29.7502,  
        longitude: -95.453853, 
        weight: 1, 
    },
    {
        latitude: 30.054773,  
        longitude: -95.224385, 
        weight: 1, 
    },
    {
        latitude: 29.747924,  
        longitude: -95.355472, 
        weight: 1, 
    },
    {
        latitude: 29.644604,  
        longitude: -95.240872, 
        weight: 1, 
    },
    {
        latitude: 29.624983,  
        longitude: -95.343012, 
        weight: 1, 
    },
    {
        latitude: 29.716671,  
        longitude: -95.317164, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.67181,  
        longitude: -95.377904, 
        weight: 1, 
    },
    {
        latitude: 29.726564,  
        longitude: -95.358498, 
        weight: 1, 
    },
    {
        latitude: 29.80479,  
        longitude: -95.545133, 
        weight: 1, 
    },
    {
        latitude: 29.797793,  
        longitude: -95.270849, 
        weight: 1, 
    },
    {
        latitude: 29.592073,  
        longitude: -95.222267, 
        weight: 1, 
    },
    {
        latitude: 29.592073,  
        longitude: -95.222267, 
        weight: 1, 
    },
    {
        latitude: 29.726475,  
        longitude: -95.364052, 
        weight: 1, 
    },
    {
        latitude: 29.726475,  
        longitude: -95.364052, 
        weight: 1, 
    },
    {
        latitude: 29.677412,  
        longitude: -95.352654, 
        weight: 1, 
    },
    {
        latitude: 29.677412,  
        longitude: -95.352654, 
        weight: 1, 
    },
    {
        latitude: 29.737555,  
        longitude: -95.504392, 
        weight: 1, 
    },
    {
        latitude: 29.722997,  
        longitude: -95.369033, 
        weight: 1, 
    },
    {
        latitude: 29.722997,  
        longitude: -95.369033, 
        weight: 1, 
    },
    {
        latitude: 29.861442,  
        longitude: -95.524418, 
        weight: 1, 
    },
    {
        latitude: 29.631971,  
        longitude: -95.367289, 
        weight: 1, 
    },
    {
        latitude: 29.677926,  
        longitude: -95.423315, 
        weight: 1, 
    },
    {
        latitude: 29.677412,  
        longitude: -95.352654, 
        weight: 1, 
    },
    {
        latitude: 29.677412,  
        longitude: -95.352654, 
        weight: 1, 
    },
    {
        latitude: 29.614464,  
        longitude: -95.213694, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.741779,  
        longitude: -95.361717, 
        weight: 1, 
    },
    {
        latitude: 29.784233,  
        longitude: -95.602145, 
        weight: 1, 
    },
    {
        latitude: 29.64081,  
        longitude: -95.242622, 
        weight: 1, 
    },
    {
        latitude: 29.717613,  
        longitude: -95.3829, 
        weight: 1, 
    },
    {
        latitude: 29.949116,  
        longitude: -95.417709, 
        weight: 1, 
    },
    {
        latitude: 29.686453,  
        longitude: -95.541987, 
        weight: 1, 
    },
    {
        latitude: 29.688737,  
        longitude: -95.278999, 
        weight: 1, 
    },
    {
        latitude: 29.677434,  
        longitude: -95.267834, 
        weight: 1, 
    },
    {
        latitude: 29.838492,  
        longitude: -95.293531, 
        weight: 1, 
    },
    {
        latitude: 29.615187,  
        longitude: -95.493749, 
        weight: 1, 
    },
    {
        latitude: 29.615187,  
        longitude: -95.493749, 
        weight: 1, 
    },
    {
        latitude: 29.966921,  
        longitude: -95.560732, 
        weight: 1, 
    },
    {
        latitude: 29.734193,  
        longitude: -95.413801, 
        weight: 1, 
    },
    {
        latitude: 29.770635,  
        longitude: -95.416933, 
        weight: 1, 
    },
    {
        latitude: 29.747204,  
        longitude: -95.37901, 
        weight: 1, 
    },
    {
        latitude: 30.067488,  
        longitude: -95.221215, 
        weight: 1, 
    },
    {
        latitude: 29.732446,  
        longitude: -95.425173, 
        weight: 1, 
    },
    {
        latitude: 29.685184,  
        longitude: -95.507991, 
        weight: 1, 
    },
    {
        latitude: 29.754466,  
        longitude: -95.616775, 
        weight: 1, 
    },
    {
        latitude: 29.724095,  
        longitude: -95.46815, 
        weight: 1, 
    },
    {
        latitude: 29.643991,  
        longitude: -95.336249, 
        weight: 1, 
    },
    {
        latitude: 29.67744,  
        longitude: -95.59953, 
        weight: 1, 
    },
    {
        latitude: 29.68648,  
        longitude: -95.565049, 
        weight: 1, 
    },
    {
        latitude: 29.59719,  
        longitude: -95.480783, 
        weight: 1, 
    },
    {
        latitude: 29.711732,  
        longitude: -95.309577, 
        weight: 1, 
    },
    {
        latitude: 29.566234,  
        longitude: -95.144771, 
        weight: 1, 
    },
    {
        latitude: 29.68208,  
        longitude: -95.413756, 
        weight: 1, 
    },
    {
        latitude: 29.68208,  
        longitude: -95.413756, 
        weight: 1, 
    },
    {
        latitude: 29.856423,  
        longitude: -95.50538, 
        weight: 1, 
    },
    {
        latitude: 29.987418,  
        longitude: -95.339406, 
        weight: 1, 
    },
    {
        latitude: 29.62544,  
        longitude: -95.465154, 
        weight: 1, 
    },
    {
        latitude: 29.846941,  
        longitude: -95.342939, 
        weight: 1, 
    },
    {
        latitude: 29.730226,  
        longitude: -95.617075, 
        weight: 1, 
    },
    {
        latitude: 29.712371,  
        longitude: -95.284776, 
        weight: 1, 
    },
    {
        latitude: 29.815886,  
        longitude: -95.34609, 
        weight: 1, 
    },
    {
        latitude: 29.682639,  
        longitude: -95.38691, 
        weight: 1, 
    },
    {
        latitude: 29.942694,  
        longitude: -95.330708, 
        weight: 1, 
    },
    {
        latitude: 29.756181,  
        longitude: -95.389719, 
        weight: 1, 
    },
    {
        latitude: 29.746154,  
        longitude: -95.614502, 
        weight: 1, 
    },
    {
        latitude: 29.950629,  
        longitude: -95.395134, 
        weight: 1, 
    },
    {
        latitude: 29.775767,  
        longitude: -95.221017, 
        weight: 1, 
    },
    {
        latitude: 29.670181,  
        longitude: -95.433345, 
        weight: 1, 
    },
    {
        latitude: 29.843609,  
        longitude: -95.526104, 
        weight: 1, 
    },
    {
        latitude: 29.772824,  
        longitude: -95.391079, 
        weight: 1, 
    },
    {
        latitude: 29.746463,  
        longitude: -95.454943, 
        weight: 1, 
    },
    {
        latitude: 29.746706,  
        longitude: -95.350242, 
        weight: 1, 
    },
    {
        latitude: 29.955522,  
        longitude: -95.553627, 
        weight: 1, 
    },
    {
        latitude: 29.775728,  
        longitude: -95.222537, 
        weight: 1, 
    },
    {
        latitude: 29.763457,  
        longitude: -95.416453, 
        weight: 1, 
    },
    {
        latitude: 29.745345,  
        longitude: -95.373967, 
        weight: 1, 
    },
    {
        latitude: 29.634465,  
        longitude: -95.496344, 
        weight: 1, 
    },
    {
        latitude: 29.71818,  
        longitude: -95.506115, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.850963,  
        longitude: -95.5117, 
        weight: 1, 
    },
    {
        latitude: 29.600533,  
        longitude: -95.503049, 
        weight: 1, 
    },
    {
        latitude: 29.600533,  
        longitude: -95.503049, 
        weight: 1, 
    },
    {
        latitude: 29.736222,  
        longitude: -95.514181, 
        weight: 1, 
    },
    {
        latitude: 29.748644,  
        longitude: -95.376602, 
        weight: 1, 
    },
    {
        latitude: 29.748644,  
        longitude: -95.376602, 
        weight: 1, 
    },
    {
        latitude: 29.667839,  
        longitude: -95.27701, 
        weight: 1, 
    },
    {
        latitude: 29.796752,  
        longitude: -95.51391, 
        weight: 1, 
    },
    {
        latitude: 29.637776,  
        longitude: -95.334278, 
        weight: 1, 
    },
    {
        latitude: 29.694657,  
        longitude: -95.277183, 
        weight: 1, 
    },
    {
        latitude: 29.694657,  
        longitude: -95.277183, 
        weight: 1, 
    },
    {
        latitude: 29.744595,  
        longitude: -95.385042, 
        weight: 1, 
    },
    {
        latitude: 29.778979,  
        longitude: -95.218558, 
        weight: 1, 
    },
    {
        latitude: 29.830569,  
        longitude: -95.380736, 
        weight: 1, 
    },
    {
        latitude: 29.736807,  
        longitude: -95.567853, 
        weight: 1, 
    },
    {
        latitude: 29.753051,  
        longitude: -95.328842, 
        weight: 1, 
    },
    {
        latitude: 29.662507,  
        longitude: -95.332316, 
        weight: 1, 
    },
    {
        latitude: 29.778791,  
        longitude: -95.361777, 
        weight: 1, 
    },
    {
        latitude: 29.827195,  
        longitude: -95.39453, 
        weight: 1, 
    },
    {
        latitude: 29.839996,  
        longitude: -95.381805, 
        weight: 1, 
    },
    {
        latitude: 29.777003,  
        longitude: -95.457235, 
        weight: 1, 
    },
    {
        latitude: 29.738338,  
        longitude: -95.598085, 
        weight: 1, 
    },
    {
        latitude: 29.600586,  
        longitude: -95.490925, 
        weight: 1, 
    },
    {
        latitude: 29.754341,  
        longitude: -95.364421, 
        weight: 1, 
    },
    {
        latitude: 29.766958,  
        longitude: -95.378273, 
        weight: 1, 
    },
    {
        latitude: 29.766958,  
        longitude: -95.378273, 
        weight: 1, 
    },
    {
        latitude: 29.712219,  
        longitude: -95.310289, 
        weight: 1, 
    },
    {
        latitude: 29.674237,  
        longitude: -95.551183, 
        weight: 1, 
    },
    {
        latitude: 29.673217,  
        longitude: -95.401457, 
        weight: 1, 
    },
    {
        latitude: 29.662365,  
        longitude: -95.355531, 
        weight: 1, 
    },
    {
        latitude: 29.737736,  
        longitude: -95.489853, 
        weight: 1, 
    },
    {
        latitude: 29.769335,  
        longitude: -95.386633, 
        weight: 1, 
    },
    {
        latitude: 29.752726,  
        longitude: -95.370724, 
        weight: 1, 
    },
    {
        latitude: 29.783604,  
        longitude: -95.446848, 
        weight: 1, 
    },
    {
        latitude: 29.733412,  
        longitude: -95.460558, 
        weight: 1, 
    },
    {
        latitude: 29.717633,  
        longitude: -95.382877, 
        weight: 1, 
    },
    {
        latitude: 29.707204,  
        longitude: -95.499143, 
        weight: 1, 
    },
    {
        latitude: 29.721963,  
        longitude: -95.367309, 
        weight: 1, 
    },
    {
        latitude: 29.65797,  
        longitude: -95.381875, 
        weight: 1, 
    },
    {
        latitude: 29.697249,  
        longitude: -95.31432, 
        weight: 1, 
    },
    {
        latitude: 29.657972,  
        longitude: -95.382233, 
        weight: 1, 
    },
    {
        latitude: 29.747423,  
        longitude: -95.358498, 
        weight: 1, 
    },
    {
        latitude: 29.664563,  
        longitude: -95.508516, 
        weight: 1, 
    },
    {
        latitude: 29.851387,  
        longitude: -95.262384, 
        weight: 1, 
    },
    {
        latitude: 29.688969,  
        longitude: -95.567421, 
        weight: 1, 
    },
    {
        latitude: 29.703602,  
        longitude: -95.597424, 
        weight: 1, 
    },
    {
        latitude: 29.737649,  
        longitude: -95.497081, 
        weight: 1, 
    },
    {
        latitude: 29.594453,  
        longitude: -95.107954, 
        weight: 1, 
    },
    {
        latitude: 29.772663,  
        longitude: -95.413448, 
        weight: 1, 
    },
    {
        latitude: 29.732002,  
        longitude: -95.327782, 
        weight: 1, 
    },
    {
        latitude: 29.802444,  
        longitude: -95.563189, 
        weight: 1, 
    },
    {
        latitude: 29.946293,  
        longitude: -95.422369, 
        weight: 1, 
    },
    {
        latitude: 29.734021,  
        longitude: -95.42252, 
        weight: 1, 
    },
    {
        latitude: 29.703865,  
        longitude: -95.575378, 
        weight: 1, 
    },
    {
        latitude: 29.707371,  
        longitude: -95.483341, 
        weight: 1, 
    },
    {
        latitude: 29.869965,  
        longitude: -95.391108, 
        weight: 1, 
    },
    {
        latitude: 29.713871,  
        longitude: -95.266357, 
        weight: 1, 
    },
    {
        latitude: 29.689158,  
        longitude: -95.562757, 
        weight: 1, 
    },
    {
        latitude: 29.801706,  
        longitude: -95.569874, 
        weight: 1, 
    },
    {
        latitude: 29.773491,  
        longitude: -95.409517, 
        weight: 1, 
    },
    {
        latitude: 29.743354,  
        longitude: -95.485431, 
        weight: 1, 
    },
    {
        latitude: 29.690859,  
        longitude: -95.297238, 
        weight: 1, 
    },
    {
        latitude: 29.754563,  
        longitude: -95.610125, 
        weight: 1, 
    },
    {
        latitude: 29.823246,  
        longitude: -95.379249, 
        weight: 1, 
    },
    {
        latitude: 29.745385,  
        longitude: -95.384804, 
        weight: 1, 
    },
    {
        latitude: 29.762306,  
        longitude: -95.360793, 
        weight: 1, 
    },
    {
        latitude: 29.802704,  
        longitude: -95.418421, 
        weight: 1, 
    },
    {
        latitude: 29.844096,  
        longitude: -95.402967, 
        weight: 1, 
    },
    {
        latitude: 29.652624,  
        longitude: -95.355342, 
        weight: 1, 
    },
    {
        latitude: 29.727445,  
        longitude: -95.37181, 
        weight: 1, 
    },
    {
        latitude: 29.734773,  
        longitude: -95.543603, 
        weight: 1, 
    },
    {
        latitude: 29.745669,  
        longitude: -95.376447, 
        weight: 1, 
    },
    {
        latitude: 29.885079,  
        longitude: -95.412384, 
        weight: 1, 
    },
    {
        latitude: 29.690217,  
        longitude: -95.412552, 
        weight: 1, 
    },
    {
        latitude: 29.7651,  
        longitude: -95.307381, 
        weight: 1, 
    },
    {
        latitude: 29.721887,  
        longitude: -95.367388, 
        weight: 1, 
    },
    {
        latitude: 29.770435,  
        longitude: -95.412667, 
        weight: 1, 
    },
    {
        latitude: 29.687876,  
        longitude: -95.51044, 
        weight: 1, 
    },
    {
        latitude: 29.79313,  
        longitude: -95.692552, 
        weight: 1, 
    },
    {
        latitude: 29.711856,  
        longitude: -95.487179, 
        weight: 1, 
    },
    {
        latitude: 29.634336,  
        longitude: -95.353489, 
        weight: 1, 
    },
    {
        latitude: 29.809283,  
        longitude: -95.317105, 
        weight: 1, 
    },
    {
        latitude: 29.785048,  
        longitude: -95.553575, 
        weight: 1, 
    },
    {
        latitude: 29.783384,  
        longitude: -95.464759, 
        weight: 1, 
    },
    {
        latitude: 29.675584,  
        longitude: -95.592352, 
        weight: 1, 
    },
    {
        latitude: 29.771164,  
        longitude: -95.414352, 
        weight: 1, 
    },
    {
        latitude: 29.801706,  
        longitude: -95.569874, 
        weight: 1, 
    },
    {
        latitude: 29.687021,  
        longitude: -95.327926, 
        weight: 1, 
    },
    {
        latitude: 29.812195,  
        longitude: -95.480699, 
        weight: 1, 
    },
    {
        latitude: 29.740765,  
        longitude: -95.462308, 
        weight: 1, 
    },
    {
        latitude: 29.789381,  
        longitude: -95.676655, 
        weight: 1, 
    },
    {
        latitude: 29.698086,  
        longitude: -95.486626, 
        weight: 1, 
    },
    {
        latitude: 29.727492,  
        longitude: -95.370551, 
        weight: 1, 
    },
    {
        latitude: 29.696282,  
        longitude: -95.552199, 
        weight: 1, 
    },
    {
        latitude: 29.696282,  
        longitude: -95.552199, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.70188,  
        longitude: -95.373504, 
        weight: 1, 
    },
    {
        latitude: 29.803177,  
        longitude: -95.317002, 
        weight: 1, 
    },
    {
        latitude: 29.661305,  
        longitude: -95.56906, 
        weight: 1, 
    },
    {
        latitude: 29.737445,  
        longitude: -95.308204, 
        weight: 1, 
    },
    {
        latitude: 29.848064,  
        longitude: -95.349792, 
        weight: 1, 
    },
    {
        latitude: 29.848064,  
        longitude: -95.349792, 
        weight: 1, 
    },
    {
        latitude: 29.747395,  
        longitude: -95.391087, 
        weight: 1, 
    },
    {
        latitude: 29.82333,  
        longitude: -95.473404, 
        weight: 1, 
    },
    {
        latitude: 29.75292,  
        longitude: -95.282028, 
        weight: 1, 
    },
    {
        latitude: 29.735377,  
        longitude: -95.487838, 
        weight: 1, 
    },
    {
        latitude: 29.745675,  
        longitude: -95.485477, 
        weight: 1, 
    },
    {
        latitude: 29.754556,  
        longitude: -95.377024, 
        weight: 1, 
    },
    {
        latitude: 29.615863,  
        longitude: -95.432323, 
        weight: 1, 
    },
    {
        latitude: 29.746397,  
        longitude: -95.614605, 
        weight: 1, 
    },
    {
        latitude: 29.737746,  
        longitude: -95.489749, 
        weight: 1, 
    },
    {
        latitude: 29.829428,  
        longitude: -95.509262, 
        weight: 1, 
    },
    {
        latitude: 29.850878,  
        longitude: -95.519166, 
        weight: 1, 
    },
    {
        latitude: 29.755562,  
        longitude: -95.357117, 
        weight: 1, 
    },
    {
        latitude: 29.869837,  
        longitude: -95.404494, 
        weight: 1, 
    },
    {
        latitude: 29.869837,  
        longitude: -95.404494, 
        weight: 1, 
    },
    {
        latitude: 29.664563,  
        longitude: -95.508516, 
        weight: 1, 
    },
    {
        latitude: 29.729708,  
        longitude: -95.461662, 
        weight: 1, 
    },
    {
        latitude: 29.755949,  
        longitude: -95.358087, 
        weight: 1, 
    },
    {
        latitude: 29.746895,  
        longitude: -95.485705, 
        weight: 1, 
    },
    {
        latitude: 29.746895,  
        longitude: -95.485705, 
        weight: 1, 
    },
    {
        latitude: 29.952961,  
        longitude: -95.389025, 
        weight: 1, 
    },
    {
        latitude: 29.664563,  
        longitude: -95.508516, 
        weight: 1, 
    },
    {
        latitude: 29.802704,  
        longitude: -95.418421, 
        weight: 1, 
    },
    {
        latitude: 29.847213,  
        longitude: -95.408127, 
        weight: 1, 
    },
    {
        latitude: 29.690262,  
        longitude: -95.412552, 
        weight: 1, 
    },
    {
        latitude: 29.785021,  
        longitude: -95.364892, 
        weight: 1, 
    },
    {
        latitude: 29.688323,  
        longitude: -95.570547, 
        weight: 1, 
    },
    {
        latitude: 29.688323,  
        longitude: -95.570547, 
        weight: 1, 
    },
    {
        latitude: 29.645134,  
        longitude: -95.508293, 
        weight: 1, 
    },
    {
        latitude: 29.6854,  
        longitude: -95.395516, 
        weight: 1, 
    },
    {
        latitude: 29.737479,  
        longitude: -95.512806, 
        weight: 1, 
    },
    {
        latitude: 29.743815,  
        longitude: -95.450062, 
        weight: 1, 
    },
    {
        latitude: 29.694758,  
        longitude: -95.264318, 
        weight: 1, 
    },
    {
        latitude: 29.828418,  
        longitude: -95.397232, 
        weight: 1, 
    },
    {
        latitude: 29.828418,  
        longitude: -95.397232, 
        weight: 1, 
    },
    {
        latitude: 29.960639,  
        longitude: -95.424227, 
        weight: 1, 
    },
    {
        latitude: 29.748716,  
        longitude: -95.389664, 
        weight: 1, 
    },
    {
        latitude: 29.739421,  
        longitude: -95.469725, 
        weight: 1, 
    },
    {
        latitude: 29.61661,  
        longitude: -95.355316, 
        weight: 1, 
    },
    {
        latitude: 29.813596,  
        longitude: -95.379509, 
        weight: 1, 
    },
    {
        latitude: 29.77706,  
        longitude: -95.409599, 
        weight: 1, 
    },
    {
        latitude: 29.681581,  
        longitude: -95.518384, 
        weight: 1, 
    },
    {
        latitude: 29.777794,  
        longitude: -95.539545, 
        weight: 1, 
    },
    {
        latitude: 29.602783,  
        longitude: -95.246671, 
        weight: 1, 
    },
    {
        latitude: 29.786507,  
        longitude: -95.370132, 
        weight: 1, 
    },
    {
        latitude: 29.742594,  
        longitude: -95.616045, 
        weight: 1, 
    },
    {
        latitude: 29.689957,  
        longitude: -95.556752, 
        weight: 1, 
    },
    {
        latitude: 29.717597,  
        longitude: -95.538971, 
        weight: 1, 
    },
    {
        latitude: 29.654131,  
        longitude: -95.446724, 
        weight: 1, 
    },
    {
        latitude: 29.938054,  
        longitude: -95.408618, 
        weight: 1, 
    },
    {
        latitude: 29.938054,  
        longitude: -95.408618, 
        weight: 1, 
    },
    {
        latitude: 29.714893,  
        longitude: -95.611667, 
        weight: 1, 
    },
    {
        latitude: 30.050773,  
        longitude: -95.182042, 
        weight: 1, 
    },
    {
        latitude: 30.050773,  
        longitude: -95.182042, 
        weight: 1, 
    },
    {
        latitude: 29.624598,  
        longitude: -95.390041, 
        weight: 1, 
    },
    {
        latitude: 29.704489,  
        longitude: -95.490881, 
        weight: 1, 
    },
    {
        latitude: 29.80498,  
        longitude: -95.484884, 
        weight: 1, 
    },
    {
        latitude: 29.822946,  
        longitude: -95.392431, 
        weight: 1, 
    },
    {
        latitude: 29.843393,  
        longitude: -95.342397, 
        weight: 1, 
    },
    {
        latitude: 29.812402,  
        longitude: -95.415105, 
        weight: 1, 
    },
    {
        latitude: 29.729865,  
        longitude: -95.358206, 
        weight: 1, 
    },
    {
        latitude: 29.643488,  
        longitude: -95.463643, 
        weight: 1, 
    },
    {
        latitude: 29.675584,  
        longitude: -95.546095, 
        weight: 1, 
    },
    {
        latitude: 29.731796,  
        longitude: -95.489075, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.81256,  
        longitude: -95.498903, 
        weight: 1, 
    },
    {
        latitude: 29.81256,  
        longitude: -95.498903, 
        weight: 1, 
    },
    {
        latitude: 29.640991,  
        longitude: -95.446362, 
        weight: 1, 
    },
    {
        latitude: 29.750553,  
        longitude: -95.418744, 
        weight: 1, 
    },
    {
        latitude: 29.793318,  
        longitude: -95.579585, 
        weight: 1, 
    },
    {
        latitude: 29.856725,  
        longitude: -95.395485, 
        weight: 1, 
    },
    {
        latitude: 29.727722,  
        longitude: -95.545255, 
        weight: 1, 
    },
    {
        latitude: 29.679349,  
        longitude: -95.352067, 
        weight: 1, 
    },
    {
        latitude: 29.841056,  
        longitude: -95.450595, 
        weight: 1, 
    },
    {
        latitude: 29.841056,  
        longitude: -95.450595, 
        weight: 1, 
    },
    {
        latitude: 29.73655,  
        longitude: -95.585326, 
        weight: 1, 
    },
    {
        latitude: 29.73655,  
        longitude: -95.585326, 
        weight: 1, 
    },
    {
        latitude: 29.740808,  
        longitude: -95.461452, 
        weight: 1, 
    },
    {
        latitude: 29.740808,  
        longitude: -95.461452, 
        weight: 1, 
    },
    {
        latitude: 29.740808,  
        longitude: -95.461452, 
        weight: 1, 
    },
    {
        latitude: 29.702376,  
        longitude: -95.286284, 
        weight: 1, 
    },
    {
        latitude: 29.703437,  
        longitude: -95.610589, 
        weight: 1, 
    },
    {
        latitude: 29.803973,  
        longitude: -95.528978, 
        weight: 1, 
    },
    {
        latitude: 29.756178,  
        longitude: -95.388129, 
        weight: 1, 
    },
    {
        latitude: 29.675191,  
        longitude: -95.586565, 
        weight: 1, 
    },
    {
        latitude: 29.942694,  
        longitude: -95.330708, 
        weight: 1, 
    },
    {
        latitude: 29.688837,  
        longitude: -95.412525, 
        weight: 1, 
    },
    {
        latitude: 29.771029,  
        longitude: -95.225105, 
        weight: 1, 
    },
    {
        latitude: 29.771029,  
        longitude: -95.225105, 
        weight: 1, 
    },
    {
        latitude: 29.850313,  
        longitude: -95.478531, 
        weight: 1, 
    },
    {
        latitude: 29.760562,  
        longitude: -95.398175, 
        weight: 1, 
    },
    {
        latitude: 29.85247,  
        longitude: -95.504661, 
        weight: 1, 
    },
    {
        latitude: 29.683721,  
        longitude: -95.574585, 
        weight: 1, 
    },
    {
        latitude: 29.62084,  
        longitude: -95.392804, 
        weight: 1, 
    },
    {
        latitude: 29.942404,  
        longitude: -95.437406, 
        weight: 1, 
    },
    {
        latitude: 29.737411,  
        longitude: -95.379112, 
        weight: 1, 
    },
    {
        latitude: 29.767804,  
        longitude: -95.397105, 
        weight: 1, 
    },
    {
        latitude: 29.68382,  
        longitude: -95.256946, 
        weight: 1, 
    },
    {
        latitude: 29.751633,  
        longitude: -95.311992, 
        weight: 1, 
    },
    {
        latitude: 29.735586,  
        longitude: -95.644073, 
        weight: 1, 
    },
    {
        latitude: 29.668875,  
        longitude: -95.468644, 
        weight: 1, 
    },
    {
        latitude: 29.856405,  
        longitude: -95.336487, 
        weight: 1, 
    },
    {
        latitude: 29.856405,  
        longitude: -95.336487, 
        weight: 1, 
    },
    {
        latitude: 29.648341,  
        longitude: -95.21337, 
        weight: 1, 
    },
    {
        latitude: 29.645809,  
        longitude: -95.363202, 
        weight: 1, 
    },
    {
        latitude: 29.667121,  
        longitude: -95.562824, 
        weight: 1, 
    },
    {
        latitude: 29.561994,  
        longitude: -95.110189, 
        weight: 1, 
    },
    {
        latitude: 29.816841,  
        longitude: -95.350165, 
        weight: 1, 
    },
    {
        latitude: 29.857226,  
        longitude: -95.468712, 
        weight: 1, 
    },
    {
        latitude: 29.65619,  
        longitude: -95.508429, 
        weight: 1, 
    },
    {
        latitude: 29.858013,  
        longitude: -95.401229, 
        weight: 1, 
    },
    {
        latitude: 29.775483,  
        longitude: -95.416739, 
        weight: 1, 
    },
    {
        latitude: 29.838789,  
        longitude: -95.488813, 
        weight: 1, 
    },
    {
        latitude: 29.670548,  
        longitude: -95.554923, 
        weight: 1, 
    },
    {
        latitude: 29.599927,  
        longitude: -95.461366, 
        weight: 1, 
    },
    {
        latitude: 29.732673,  
        longitude: -95.603356, 
        weight: 1, 
    },
    {
        latitude: 29.780737,  
        longitude: -95.2186, 
        weight: 1, 
    },
    {
        latitude: 29.675068,  
        longitude: -95.570418, 
        weight: 1, 
    },
    {
        latitude: 29.801725,  
        longitude: -95.352189, 
        weight: 1, 
    },
    {
        latitude: 29.774068,  
        longitude: -95.249928, 
        weight: 1, 
    },
    {
        latitude: 29.774068,  
        longitude: -95.249928, 
        weight: 1, 
    },
    {
        latitude: 29.774068,  
        longitude: -95.249928, 
        weight: 1, 
    },
    {
        latitude: 29.753123,  
        longitude: -95.403745, 
        weight: 1, 
    },
    {
        latitude: 29.830396,  
        longitude: -95.301998, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.720593,  
        longitude: -95.501009, 
        weight: 1, 
    },
    {
        latitude: 29.705452,  
        longitude: -95.493049, 
        weight: 1, 
    },
    {
        latitude: 29.774524,  
        longitude: -95.35254, 
        weight: 1, 
    },
    {
        latitude: 29.66916,  
        longitude: -95.616525, 
        weight: 1, 
    },
    {
        latitude: 29.694248,  
        longitude: -95.360496, 
        weight: 1, 
    },
    {
        latitude: 29.613486,  
        longitude: -95.434239, 
        weight: 1, 
    },
    {
        latitude: 29.676536,  
        longitude: -95.352076, 
        weight: 1, 
    },
    {
        latitude: 29.7813,  
        longitude: -95.35958, 
        weight: 1, 
    },
    {
        latitude: 29.835613,  
        longitude: -95.413634, 
        weight: 1, 
    },
    {
        latitude: 29.834755,  
        longitude: -95.471771, 
        weight: 1, 
    },
    {
        latitude: 29.987283,  
        longitude: -95.332964, 
        weight: 1, 
    },
    {
        latitude: 29.725292,  
        longitude: -95.501084, 
        weight: 1, 
    },
    {
        latitude: 29.761172,  
        longitude: -95.383089, 
        weight: 1, 
    },
    {
        latitude: 30.063247,  
        longitude: -95.187691, 
        weight: 1, 
    },
    {
        latitude: 29.853495,  
        longitude: -95.509446, 
        weight: 1, 
    },
    {
        latitude: 29.853495,  
        longitude: -95.509446, 
        weight: 1, 
    },
    {
        latitude: 29.703458,  
        longitude: -95.606025, 
        weight: 1, 
    },
    {
        latitude: 29.779885,  
        longitude: -95.544502, 
        weight: 1, 
    },
    {
        latitude: 29.67046,  
        longitude: -95.554914, 
        weight: 1, 
    },
    {
        latitude: 29.889047,  
        longitude: -95.49901, 
        weight: 1, 
    },
    {
        latitude: 29.889047,  
        longitude: -95.49901, 
        weight: 1, 
    },
    {
        latitude: 29.723535,  
        longitude: -95.459795, 
        weight: 1, 
    },
    {
        latitude: 29.620613,  
        longitude: -95.136928, 
        weight: 1, 
    },
    {
        latitude: 29.72289,  
        longitude: -95.476483, 
        weight: 1, 
    },
    {
        latitude: 29.682147,  
        longitude: -95.423875, 
        weight: 1, 
    },
    {
        latitude: 29.682639,  
        longitude: -95.38691, 
        weight: 1, 
    },
    {
        latitude: 29.690669,  
        longitude: -95.537673, 
        weight: 1, 
    },
    {
        latitude: 29.690669,  
        longitude: -95.537673, 
        weight: 1, 
    },
    {
        latitude: 29.664217,  
        longitude: -95.464012, 
        weight: 1, 
    },
    {
        latitude: 29.864757,  
        longitude: -95.299352, 
        weight: 1, 
    },
    {
        latitude: 29.681044,  
        longitude: -95.33266, 
        weight: 1, 
    },
    {
        latitude: 29.714393,  
        longitude: -95.496501, 
        weight: 1, 
    },
    {
        latitude: 29.647686,  
        longitude: -95.356201, 
        weight: 1, 
    },
    {
        latitude: 29.647686,  
        longitude: -95.356201, 
        weight: 1, 
    },
    {
        latitude: 29.657838,  
        longitude: -95.278491, 
        weight: 1, 
    },
    {
        latitude: 29.705546,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.783737,  
        longitude: -95.417676, 
        weight: 1, 
    },
    {
        latitude: 29.788967,  
        longitude: -95.648459, 
        weight: 1, 
    },
    {
        latitude: 29.863445,  
        longitude: -95.409555, 
        weight: 1, 
    },
    {
        latitude: 29.808287,  
        longitude: -95.454358, 
        weight: 1, 
    },
    {
        latitude: 29.652605,  
        longitude: -95.501663, 
        weight: 1, 
    },
    {
        latitude: 29.737394,  
        longitude: -95.520073, 
        weight: 1, 
    },
    {
        latitude: 30.050796,  
        longitude: -95.181907, 
        weight: 1, 
    },
    {
        latitude: 29.73545,  
        longitude: -95.480983, 
        weight: 1, 
    },
    {
        latitude: 29.669593,  
        longitude: -95.528171, 
        weight: 1, 
    },
    {
        latitude: 29.731335,  
        longitude: -95.562171, 
        weight: 1, 
    },
    {
        latitude: 29.866074,  
        longitude: -95.403483, 
        weight: 1, 
    },
    {
        latitude: 29.68133,  
        longitude: -95.387428, 
        weight: 1, 
    },
    {
        latitude: 29.690797,  
        longitude: -95.595931, 
        weight: 1, 
    },
    {
        latitude: 29.842191,  
        longitude: -95.473213, 
        weight: 1, 
    },
    {
        latitude: 29.770971,  
        longitude: -95.563901, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.838096,  
        longitude: -95.384355, 
        weight: 1, 
    },
    {
        latitude: 29.662594,  
        longitude: -95.518993, 
        weight: 1, 
    },
    {
        latitude: 29.817937,  
        longitude: -95.410442, 
        weight: 1, 
    },
    {
        latitude: 29.738561,  
        longitude: -95.579114, 
        weight: 1, 
    },
    {
        latitude: 29.653838,  
        longitude: -95.337626, 
        weight: 1, 
    },
    {
        latitude: 29.785569,  
        longitude: -95.392987, 
        weight: 1, 
    },
    {
        latitude: 29.720401,  
        longitude: -95.495538, 
        weight: 1, 
    },
    {
        latitude: 29.673795,  
        longitude: -95.577354, 
        weight: 1, 
    },
    {
        latitude: 29.673795,  
        longitude: -95.577354, 
        weight: 1, 
    },
    {
        latitude: 30.04392,  
        longitude: -95.193301, 
        weight: 1, 
    },
    {
        latitude: 29.812684,  
        longitude: -95.556561, 
        weight: 1, 
    },
    {
        latitude: 29.66814,  
        longitude: -95.253098, 
        weight: 1, 
    },
    {
        latitude: 29.739542,  
        longitude: -95.400033, 
        weight: 1, 
    },
    {
        latitude: 29.77585,  
        longitude: -95.403331, 
        weight: 1, 
    },
    {
        latitude: 29.839359,  
        longitude: -95.402906, 
        weight: 1, 
    },
    {
        latitude: 29.660407,  
        longitude: -95.52806, 
        weight: 1, 
    },
    {
        latitude: 29.641896,  
        longitude: -95.519633, 
        weight: 1, 
    },
    {
        latitude: 29.722222,  
        longitude: -95.539444, 
        weight: 1, 
    },
    {
        latitude: 29.812393,  
        longitude: -95.416392, 
        weight: 1, 
    },
    {
        latitude: 29.748768,  
        longitude: -95.375103, 
        weight: 1, 
    },
    {
        latitude: 29.797027,  
        longitude: -95.31691, 
        weight: 1, 
    },
    {
        latitude: 29.793124,  
        longitude: -95.214576, 
        weight: 1, 
    },
    {
        latitude: 29.737377,  
        longitude: -95.520073, 
        weight: 1, 
    },
    {
        latitude: 29.737377,  
        longitude: -95.520073, 
        weight: 1, 
    },
    {
        latitude: 29.655035,  
        longitude: -95.355403, 
        weight: 1, 
    },
    {
        latitude: 29.64822,  
        longitude: -95.461121, 
        weight: 1, 
    },
    {
        latitude: 29.717156,  
        longitude: -95.294906, 
        weight: 1, 
    },
    {
        latitude: 29.601002,  
        longitude: -95.479359, 
        weight: 1, 
    },
    {
        latitude: 29.687999,  
        longitude: -95.570144, 
        weight: 1, 
    },
    {
        latitude: 29.687999,  
        longitude: -95.570144, 
        weight: 1, 
    },
    {
        latitude: 29.803139,  
        longitude: -95.310472, 
        weight: 1, 
    },
    {
        latitude: 29.781949,  
        longitude: -95.556747, 
        weight: 1, 
    },
    {
        latitude: 29.781949,  
        longitude: -95.556747, 
        weight: 1, 
    },
    {
        latitude: 29.939371,  
        longitude: -95.395969, 
        weight: 1, 
    },
    {
        latitude: 29.655646,  
        longitude: -95.508409, 
        weight: 1, 
    },
    {
        latitude: 29.828963,  
        longitude: -95.380804, 
        weight: 1, 
    },
    {
        latitude: 29.613282,  
        longitude: -95.219927, 
        weight: 1, 
    },
    {
        latitude: 29.821405,  
        longitude: -95.334294, 
        weight: 1, 
    },
    {
        latitude: 29.681154,  
        longitude: -95.303193, 
        weight: 1, 
    },
    {
        latitude: 29.806409,  
        longitude: -95.410196, 
        weight: 1, 
    },
    {
        latitude: 29.810407,  
        longitude: -95.301896, 
        weight: 1, 
    },
    {
        latitude: 29.738366,  
        longitude: -95.517118, 
        weight: 1, 
    },
    {
        latitude: 29.644604,  
        longitude: -95.240872, 
        weight: 1, 
    },
    {
        latitude: 29.77009,  
        longitude: -95.18675, 
        weight: 1, 
    },
    {
        latitude: 29.828922,  
        longitude: -95.410628, 
        weight: 1, 
    },
    {
        latitude: 29.737672,  
        longitude: -95.494265, 
        weight: 1, 
    },
    {
        latitude: 29.842191,  
        longitude: -95.473213, 
        weight: 1, 
    },
    {
        latitude: 29.73348,  
        longitude: -95.353568, 
        weight: 1, 
    },
    {
        latitude: 29.826471,  
        longitude: -95.281446, 
        weight: 1, 
    },
    {
        latitude: 29.859614,  
        longitude: -95.401648, 
        weight: 1, 
    },
    {
        latitude: 29.8739,  
        longitude: -95.300615, 
        weight: 1, 
    },
    {
        latitude: 29.8739,  
        longitude: -95.300615, 
        weight: 1, 
    },
    {
        latitude: 29.73758,  
        longitude: -95.264352, 
        weight: 1, 
    },
    {
        latitude: 29.711378,  
        longitude: -95.504694, 
        weight: 1, 
    },
    {
        latitude: 29.711378,  
        longitude: -95.504694, 
        weight: 1, 
    },
    {
        latitude: 29.711378,  
        longitude: -95.504694, 
        weight: 1, 
    },
    {
        latitude: 29.77695,  
        longitude: -95.332206, 
        weight: 1, 
    },
    {
        latitude: 29.638724,  
        longitude: -95.508263, 
        weight: 1, 
    },
    {
        latitude: 29.849135,  
        longitude: -95.262374, 
        weight: 1, 
    },
    {
        latitude: 29.725432,  
        longitude: -95.543315, 
        weight: 1, 
    },
    {
        latitude: 29.64914,  
        longitude: -95.370208, 
        weight: 1, 
    },
    {
        latitude: 30.077223,  
        longitude: -95.201605, 
        weight: 1, 
    },
    {
        latitude: 29.664217,  
        longitude: -95.464012, 
        weight: 1, 
    },
    {
        latitude: 29.67101,  
        longitude: -95.584757, 
        weight: 1, 
    },
    {
        latitude: 29.749049,  
        longitude: -95.371102, 
        weight: 1, 
    },
    {
        latitude: 29.856423,  
        longitude: -95.50538, 
        weight: 1, 
    },
    {
        latitude: 29.837228,  
        longitude: -95.430534, 
        weight: 1, 
    },
    {
        latitude: 29.683463,  
        longitude: -95.335295, 
        weight: 1, 
    },
    {
        latitude: 29.874225,  
        longitude: -95.385701, 
        weight: 1, 
    },
    {
        latitude: 29.733348,  
        longitude: -95.410627, 
        weight: 1, 
    },
    {
        latitude: 29.707178,  
        longitude: -95.310974, 
        weight: 1, 
    },
    {
        latitude: 29.727606,  
        longitude: -95.353406, 
        weight: 1, 
    },
    {
        latitude: 29.77043,  
        longitude: -95.189111, 
        weight: 1, 
    },
    {
        latitude: 29.732945,  
        longitude: -95.466697, 
        weight: 1, 
    },
    {
        latitude: 29.810126,  
        longitude: -95.439194, 
        weight: 1, 
    },
    {
        latitude: 29.703727,  
        longitude: -95.438936, 
        weight: 1, 
    },
    {
        latitude: 29.837379,  
        longitude: -95.384336, 
        weight: 1, 
    },
    {
        latitude: 29.748177,  
        longitude: -95.461221, 
        weight: 1, 
    },
    {
        latitude: 29.830837,  
        longitude: -95.308473, 
        weight: 1, 
    },
    {
        latitude: 29.953944,  
        longitude: -95.422674, 
        weight: 1, 
    },
    {
        latitude: 29.714306,  
        longitude: -95.314736, 
        weight: 1, 
    },
    {
        latitude: 29.731732,  
        longitude: -95.46664, 
        weight: 1, 
    },
    {
        latitude: 29.746803,  
        longitude: -95.47082, 
        weight: 1, 
    },
    {
        latitude: 29.680025,  
        longitude: -95.552376, 
        weight: 1, 
    },
    {
        latitude: 29.663055,  
        longitude: -95.502892, 
        weight: 1, 
    },
    {
        latitude: 29.675787,  
        longitude: -95.265926, 
        weight: 1, 
    },
    {
        latitude: 29.798147,  
        longitude: -95.369691, 
        weight: 1, 
    },
    {
        latitude: 29.7151,  
        longitude: -95.381402, 
        weight: 1, 
    },
    {
        latitude: 29.721519,  
        longitude: -95.441283, 
        weight: 1, 
    },
    {
        latitude: 29.818407,  
        longitude: -95.473717, 
        weight: 1, 
    },
    {
        latitude: 29.747636,  
        longitude: -95.353157, 
        weight: 1, 
    },
    {
        latitude: 29.735422,  
        longitude: -95.466442, 
        weight: 1, 
    },
    {
        latitude: 29.731498,  
        longitude: -95.470831, 
        weight: 1, 
    },
    {
        latitude: 29.72163,  
        longitude: -95.382691, 
        weight: 1, 
    },
    {
        latitude: 29.73922,  
        longitude: -95.500886, 
        weight: 1, 
    },
    {
        latitude: 29.70295,  
        longitude: -95.511529, 
        weight: 1, 
    },
    {
        latitude: 29.673795,  
        longitude: -95.577354, 
        weight: 1, 
    },
    {
        latitude: 29.942261,  
        longitude: -95.438137, 
        weight: 1, 
    },
    {
        latitude: 29.736688,  
        longitude: -95.576899, 
        weight: 1, 
    },
    {
        latitude: 29.6367,  
        longitude: -95.420269, 
        weight: 1, 
    },
    {
        latitude: 29.785048,  
        longitude: -95.521278, 
        weight: 1, 
    },
    {
        latitude: 29.803177,  
        longitude: -95.317002, 
        weight: 1, 
    },
    {
        latitude: 29.784025,  
        longitude: -95.571647, 
        weight: 1, 
    },
    {
        latitude: 29.785063,  
        longitude: -95.529881, 
        weight: 1, 
    },
    {
        latitude: 29.757501,  
        longitude: -95.390889, 
        weight: 1, 
    },
    {
        latitude: 29.879986,  
        longitude: -95.446107, 
        weight: 1, 
    },
    {
        latitude: 29.772867,  
        longitude: -95.186548, 
        weight: 1, 
    },
    {
        latitude: 29.65096,  
        longitude: -95.454328, 
        weight: 1, 
    },
    {
        latitude: 29.798928,  
        longitude: -95.520306, 
        weight: 1, 
    },
    {
        latitude: 29.725655,  
        longitude: -95.610011, 
        weight: 1, 
    },
    {
        latitude: 29.834019,  
        longitude: -95.284277, 
        weight: 1, 
    },
    {
        latitude: 29.868309,  
        longitude: -95.415083, 
        weight: 1, 
    },
    {
        latitude: 29.94609,  
        longitude: -95.43923, 
        weight: 1, 
    },
    {
        latitude: 29.6714,  
        longitude: -95.342943, 
        weight: 1, 
    },
    {
        latitude: 29.69932,  
        longitude: -95.302076, 
        weight: 1, 
    },
    {
        latitude: 29.69932,  
        longitude: -95.302076, 
        weight: 1, 
    },
    {
        latitude: 29.639931,  
        longitude: -95.493118, 
        weight: 1, 
    },
    {
        latitude: 29.942404,  
        longitude: -95.437406, 
        weight: 1, 
    },
    {
        latitude: 29.672765,  
        longitude: -95.583023, 
        weight: 1, 
    },
    {
        latitude: 29.775515,  
        longitude: -95.592827, 
        weight: 1, 
    },
    {
        latitude: 29.673652,  
        longitude: -95.514063, 
        weight: 1, 
    },
    {
        latitude: 29.942132,  
        longitude: -95.438651, 
        weight: 1, 
    },
    {
        latitude: 29.942132,  
        longitude: -95.438651, 
        weight: 1, 
    },
    {
        latitude: 29.834062,  
        longitude: -95.324938, 
        weight: 1, 
    },
    {
        latitude: 29.741206,  
        longitude: -95.576226, 
        weight: 1, 
    },
    {
        latitude: 29.768989,  
        longitude: -95.371504, 
        weight: 1, 
    },
    {
        latitude: 29.761373,  
        longitude: -95.361544, 
        weight: 1, 
    },
    {
        latitude: 29.677324,  
        longitude: -95.352678, 
        weight: 1, 
    },
    {
        latitude: 29.677324,  
        longitude: -95.352678, 
        weight: 1, 
    },
    {
        latitude: 29.661917,  
        longitude: -95.508478, 
        weight: 1, 
    },
    {
        latitude: 29.686688,  
        longitude: -95.532151, 
        weight: 1, 
    },
    {
        latitude: 29.747,  
        longitude: -95.357582, 
        weight: 1, 
    },
    {
        latitude: 29.747789,  
        longitude: -95.402141, 
        weight: 1, 
    },
    {
        latitude: 29.848132,  
        longitude: -95.321566, 
        weight: 1, 
    },
    {
        latitude: 29.723535,  
        longitude: -95.459795, 
        weight: 1, 
    },
    {
        latitude: 29.856769,  
        longitude: -95.47332, 
        weight: 1, 
    },
    {
        latitude: 29.793154,  
        longitude: -95.692624, 
        weight: 1, 
    },
    {
        latitude: 29.688971,  
        longitude: -95.567325, 
        weight: 1, 
    },
    {
        latitude: 29.947656,  
        longitude: -95.331818, 
        weight: 1, 
    },
    {
        latitude: 29.609994,  
        longitude: -95.472249, 
        weight: 1, 
    },
    {
        latitude: 29.867901,  
        longitude: -95.416251, 
        weight: 1, 
    },
    {
        latitude: 29.802075,  
        longitude: -95.390943, 
        weight: 1, 
    },
    {
        latitude: 29.614861,  
        longitude: -95.4307, 
        weight: 1, 
    },
    {
        latitude: 29.756579,  
        longitude: -95.396357, 
        weight: 1, 
    },
    {
        latitude: 29.75543,  
        longitude: -95.389706, 
        weight: 1, 
    },
    {
        latitude: 29.859348,  
        longitude: -95.381973, 
        weight: 1, 
    },
    {
        latitude: 29.813233,  
        longitude: -95.282068, 
        weight: 1, 
    },
    {
        latitude: 29.869894,  
        longitude: -95.407424, 
        weight: 1, 
    },
    {
        latitude: 29.75749,  
        longitude: -95.39095, 
        weight: 1, 
    },
    {
        latitude: 29.75749,  
        longitude: -95.39095, 
        weight: 1, 
    },
    {
        latitude: 29.814118,  
        longitude: -95.450188, 
        weight: 1, 
    },
    {
        latitude: 29.630345,  
        longitude: -95.339355, 
        weight: 1, 
    },
    {
        latitude: 29.820079,  
        longitude: -95.239512, 
        weight: 1, 
    },
    {
        latitude: 29.944688,  
        longitude: -95.171696, 
        weight: 1, 
    },
    {
        latitude: 29.960611,  
        longitude: -95.429597, 
        weight: 1, 
    },
    {
        latitude: 29.674613,  
        longitude: -95.560727, 
        weight: 1, 
    },
    {
        latitude: 29.864312,  
        longitude: -95.399365, 
        weight: 1, 
    },
    {
        latitude: 29.703726,  
        longitude: -95.587289, 
        weight: 1, 
    },
    {
        latitude: 29.703726,  
        longitude: -95.587289, 
        weight: 1, 
    },
    {
        latitude: 29.796589,  
        longitude: -95.354035, 
        weight: 1, 
    },
    {
        latitude: 29.601317,  
        longitude: -95.507502, 
        weight: 1, 
    },
    {
        latitude: 29.736528,  
        longitude: -95.587642, 
        weight: 1, 
    },
    {
        latitude: 29.677472,  
        longitude: -95.267988, 
        weight: 1, 
    },
    {
        latitude: 29.691083,  
        longitude: -95.518345, 
        weight: 1, 
    },
    {
        latitude: 29.704927,  
        longitude: -95.514982, 
        weight: 1, 
    },
    {
        latitude: 29.735891,  
        longitude: -95.62205, 
        weight: 1, 
    },
    {
        latitude: 29.704625,  
        longitude: -95.554999, 
        weight: 1, 
    },
    {
        latitude: 29.627608,  
        longitude: -95.23752, 
        weight: 1, 
    },
    {
        latitude: 29.78221,  
        longitude: -95.544032, 
        weight: 1, 
    },
    {
        latitude: 29.7407,  
        longitude: -95.463623, 
        weight: 1, 
    },
    {
        latitude: 29.632983,  
        longitude: -95.246439, 
        weight: 1, 
    },
    {
        latitude: 29.737649,  
        longitude: -95.497081, 
        weight: 1, 
    },
    {
        latitude: 29.854439,  
        longitude: -95.25395, 
        weight: 1, 
    },
    {
        latitude: 29.717812,  
        longitude: -95.533418, 
        weight: 1, 
    },
    {
        latitude: 29.717812,  
        longitude: -95.533418, 
        weight: 1, 
    },
    {
        latitude: 29.946384,  
        longitude: -95.404789, 
        weight: 1, 
    },
    {
        latitude: 29.728678,  
        longitude: -95.58013, 
        weight: 1, 
    },
    {
        latitude: 29.849384,  
        longitude: -95.502111, 
        weight: 1, 
    },
    {
        latitude: 29.821967,  
        longitude: -95.523049, 
        weight: 1, 
    },
    {
        latitude: 29.800397,  
        longitude: -95.316486, 
        weight: 1, 
    },
    {
        latitude: 29.820646,  
        longitude: -95.436466, 
        weight: 1, 
    },
    {
        latitude: 29.691561,  
        longitude: -95.521022, 
        weight: 1, 
    },
    {
        latitude: 30.079267,  
        longitude: -95.172739, 
        weight: 1, 
    },
    {
        latitude: 30.079267,  
        longitude: -95.172739, 
        weight: 1, 
    },
    {
        latitude: 29.81966,  
        longitude: -95.545225, 
        weight: 1, 
    },
    {
        latitude: 29.761238,  