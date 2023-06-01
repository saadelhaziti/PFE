import React from 'react'
import { FaClipboardList } from 'react-icons/fa';
import '../component css/aprops.css'

function Apropos() {
  return (
    <div id="apropos" className='Apropos'>
      <h3>aprops</h3>
      <div className='propos'>
        <div className='propos-card'>
          <div className='propos-card-icon'>
            <FaClipboardList />
          </div>
          <div className='propos-card-info'>
            <div className='propos-card-title'>objectifs DE formation</div>
            <div className='propos-card-descp'>
              La licence <span> Ingénierie du Big Data et Intelligence Artificielle (BDAI)</span>
              forme des spécialistes dans les domaines du Big Data et de l'Intelligence Artificielle.
              Les étudiants acquièrent une formation complète en analyse de données massives,
              en IA et en outils associés. Ils apprennent à manipuler et analyser de grandes
              quantités de données, à utiliser des algorithmes d'apprentissage automatique et
              à concevoir des systèmes d'IA. Cette licence favorise l'insertion professionnelle
              dans des secteurs tels que la finance, le marketing, l'industrie et la santé.
              Les diplômés ont de nombreuses opportunités de carrière et peuvent également
              poursuivre leurs études en master professionnel dans cette spécialité.
              <br/>
              <span>Cette formation permet aux étudiants d’</span>
              <ul>
                <li>Acquérir de solides connaissances en apprentissage statistique et en informatique</li>
                <li>Développer des applications décisionnelles en utilisant des techniques telles que le Machine Learning, l'Intelligence Artificielle, le Datamining, la ‎Business Intelligence.‎</li>
                <li>Appliquer les outils de Big Data et de l'intelligence artificielle pour L'analyse et le traitement des données aux grands domaines tels que banques, industrie, ‎réseaux sociaux, Marketing, ... etc. </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='propos-card'>
          <div className='propos-card-icon'>
            <FaClipboardList />
          </div>
          <div className='propos-card-info'>
            <div className='propos-card-title'>DEBOUCHES DE formation</div>
            <div className='propos-card-descp'>
              A l’issue de la formation  , les étudiants seront capables de bâtir des solutions informatiques en tenant compte de spécificités fonctionnels, techniques, ainsi que d’ :
              <ul>
                <li>Les Sociétés de Services d'Offshoring</li>
                <li>Les entreprises et administrations gérant elles-mêmes leurs ressources des données</li>
                <li>Les départements de développement informatique et de Big Data</li>
                <li>Les Sociétés de Service en Ingénierie de Big Data et de l'Intelligence Artificielle.</li>
              </ul>
              <span>Les métiers qui peuvent être exercés:</span>
              <ul>
                <li>Responsable marketing opérationnel.</li>
                <li>Consultant décisionnel. </li>
                <li>Analyste de données (Data Analyst)</li>
                <li>Chargé(e) d'étude marketing</li>
                <li>Concepteur/Développeur en Big Data</li>
                <li>Administrateur/architecte de bases de données</li>
                <li>Gestionnaire de Données massives / Chef de projet Big Data</li>
                <li>Statisticien(ne) /Consultant(e) en Big Data et en Intelligence Artificielle.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apropos