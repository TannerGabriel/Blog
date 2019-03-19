package com.example.androidlauncher


import android.content.Context
import com.xwray.groupie.kotlinandroidextensions.Item
import com.xwray.groupie.kotlinandroidextensions.ViewHolder
import kotlinx.android.synthetic.main.app_layout.view.*

class AppItem(val info: AppInformations, val context: Context) : Item() {
    override fun bind(viewHolder: ViewHolder, position: Int) {
        viewHolder.itemView.label_textview.text = info.label
        viewHolder.itemView.icon_imageview.setImageDrawable(info.icon)


        viewHolder.itemView.app_layout.setOnClickListener {
            val launchIntent = context.packageManager.getLaunchIntentForPackage(info.packageName)
            context.startActivity(launchIntent)
        }
    }

    override fun getLayout(): Int = R.layout.app_layout

}